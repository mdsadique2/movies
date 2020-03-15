/*
  The entire app gets rendered within the content of App.js
*/

import React, { Component } from 'react';
import {Layout, Drawer, Affix, Spin, Icon} from 'antd';
import utils from 'Utilities/utils';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import PageMenu from 'Components/PageMenu'
import PageFilter from 'Components/PageFilter'
import actionDispatches from './actionDispatches';
import {appMenuItems} from 'AppPath'
import Genres from 'Genres'

import './App.css';


// Globaly overriding spinner component
const antIcon = <Icon type="loading" style={{ fontSize: 40 }} spin />;
Spin.setDefaultIndicator(antIcon)
const { Header, Content} = Layout;

const selectionType = ['Movie', 'TV']

class App extends Component {
  constructor(props){
    super(props);

    this.selection = '';
    this.searchInitialValue='';
    this.currentMenu='0'
    this.menuItems = appMenuItems;

    this.state = {
      selection: '',
      searchInitialValue: '',
      currentMenu: '0',
      currentPage: '',
      filterVisible: false
    }
    this.menuTitle = 'Discover'
    this.initialize();
  }

  // hide filter panel
  hideFilters = () => {
    this.setState({
      filterVisible: false
    })
  }

  // show filter panel
  showFilters = () => {
    this.setState({
      filterVisible: true
    })
  }


  searchUrlLoaded () {
    let query = this.props.history.location.search;
    let params = utils.urlParamsToObject(query);
    if (params.query) {
      return params.query;
    } 
    return false;
  }


  initialize () {
    let pathArr = this.props.history.location.pathname.split("/");
    let path = pathArr[pathArr.length - 1].trim();
    var index = '0';
    var query = ''
    if (path === 'search') {
      index = '0';
      query = this.searchUrlLoaded();
    } else {
      index = utils.findIndexInArray(this.menuItems, 'url', path);
    }
    if (!query && query !== 0) {
      this.searchCleared();
    }

    this.selection = path;
    this.currentMenu = index + '';
    this.searchInitialValue = query;

  }

  initializeState () {
    this.setState({
      selection: this.selection,
      currentMenu: this.currentMenu,
      searchInitialValue: this.searchInitialValue
    }, () => {
      if (this.searchInitialValue) {
        this.props.updateSearch(this.searchInitialValue);
        this.props.updatePageSelection('search');
      } else {
        this.props.updatePageSelection(this.state.selection);
      }
    })
  }
  
  componentDidMount () {
    this.initializeState()
  }

  searchCleared () {
    this.props.updateSearch('');
    this.props.history.push('/'+this.state.currentPage);
    this.props.updatePageSelection(this.state.currentPage);

  }
 
  updatePage (pageSelected) {
    this.props.updateSearch('');
    this.props.history.push('/'+pageSelected);
    this.props.updatePageSelection(pageSelected);
    this.setState({
      currentPage: pageSelected
    })
  }

  updateSearch = utils.debounce((value, event) => {
    if (!value && value !== 0) {
      this.searchCleared();
      return;
    }
    this.props.history.push('/search?query='+value);
    this.props.updateSearch(value);
    this.props.updatePageSelection('search');
  }, 250)
 
  // filter applied callback
  filterValues = (obj) => {
    alert(JSON.stringify(obj));
    this.hideFilters()
  }

  render() {
      return (
        <div className="app">         
          <Layout className="appLayout"> 
          <Header>
            {/* app menu with configurations */}
            <Affix offsetTop={0}>
              {/* 
                - takes list of menuItems
                - search required or not configuration
                - method to call onSearch and filterClicked
                -method to call when menu item is clicked
              */}
              <PageMenu 
                menuTitle={this.menuTitle} 
                menuItems={this.menuItems} 
                currentMenu={this.state.currentMenu}
                menuClickHandler={this.updatePage.bind(this)} 
                searchRequired={true}
                searchHandler={this.updateSearch.bind(this)}
                searchInitialValue={this.state.searchInitialValue}
                key={this.state.searchInitialValue || this.state.currentMenu}
                filterClickEvent={this.showFilters}
              />
            </Affix>
          </Header>
            {/* container to render different pages */}
            <Content style={{ padding: '0 0' }}>
                
                {/* container to render pages */}
                <div id="container" className="bodyContainer pageContainer p3">
                   {this.props.children}
                </div>
                
                {/* Filter panel side drawer */}
                <Drawer
                  className="app"
                  title="Discover Options"
                  placement={this.state.placement}
                  closable={true}
                  onClose={this.hideFilters}
                  visible={this.state.filterVisible}
                >
                  {/* 
                    page filter
                    - take list of types, Genres, default selections
                    - method to call when filter is applied
                  */}
                  <PageFilter 
                    genres={Genres} 
                    selectionTypes={selectionType}
                    defaultSelectionType={selectionType[0]}
                    filterValuesMethod = {this.filterValues}
                  />
                </Drawer>
            </Content>
          </Layout>
        </div>
      );
  }
}

const mapDispatchToProps = actionDispatches;

const mapStateToProps = (state) => {
  return {
    appState: state.appState,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
