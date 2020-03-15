import React, { Component } from 'react';
import {Menu, Input, Icon} from 'antd';
import { Row, Col } from 'antd';

import './style.css';


class PageMenu extends Component {
    menuItems = this.props.menuItems;
    menuTitle = this.props.menuTitle;
    searchRequired = this.props.searchRequired || false;
    searchHandler = this.props.searchHandler;
    valueInitialised = false
    
    state = {
        menuSelected: [this.props.currentMenu],
        searchValue: '',
        searchDefaultValue: ''
    }

    static getDerivedStateFromProps(props, state) {
        return {
            defaultSelected: [props.currentMenu],
            searchDefaultValue: props.searchInitialValue
        };
    }

    componentDidUpdate(props){
        if(this.state.searchValue !== props.searchInitialValue && this.valueInitialised === false) {
            this.setState({
                searchValue: props.searchInitialValue
            })
            this.valueInitialised = true;
        }
    }


    handleMenuClick (options, item, key) {
        this.setState({
            menuSelected: [item.key]
        })
        var selection = options[item.key].url;
        this.props.menuClickHandler(selection, item, key)
    };


    onSearch = (event) => {
        this.setState({
            searchValue: event.target.value
        }, ()=> {
            if (this.searchHandler) {
                this.searchHandler(this.state.searchValue, event);
            }
        });
       
    }

    filterClick = (event) => {
        if (this.props.filterClickEvent) {
            this.props.filterClickEvent(event)
        }
    }


   
    render() {
        let selection = this.state.menuSelected;
        let defaultselection = this.state.defaultSelected;
        return (
            <div className="pageMenu">
                <Row>
                    <Col span={4}>
                        <div className="menuTitle">
                            {this.menuTitle}
                        </div>
                    </Col>
                    <Col span={8} offset={4}>
                        <div className="mt1">
                            <Menu
                                onClick={(item, key) => {
                                    this.handleMenuClick(this.menuItems, item, key)
                                }}
                                defaultSelectedKeys={defaultselection}
                                selectedKeys = {selection}
                                mode="horizontal"
                                theme="dark"
                            >
                                {
                                    this.menuItems.map((elm, index) => {
                                        return  <Menu.Item key={index}>{elm.titleToDisplay}</Menu.Item>
                                    })
                                }
                            </Menu>
                        </div>
                       
                    </Col>
                    <Col span={6} offset={2}>
                        <div className="filterBox">
                            {
                                this.searchRequired ?
                                <Input
                                    placeholder="input search text"
                                    prefix={<Icon type="search" />} 
                                    onChange={this.onSearch}
                                    style={{ width: 200 }}
                                    value={this.state.searchValue}
                                />:null
                            }
                            <div className="inline-block ml4 filterButton button" onClick={this.filterClick}>
                                <Icon type="filter" />
                            </div>  
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageMenu;
