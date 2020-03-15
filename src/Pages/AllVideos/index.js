import React from 'react'
import './style.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actionDispatches from './actionDispatches';
import VideoGroup from 'Components/VideoGroup'


class AllVideos extends React.Component {
  state = {
    currentSelection: this.props.parentState.currentTypeSelected,
    currentSearch: ''
  }

  updateState (initialLoad) {
    let typeSelected = this.props.parentState.currentTypeSelected;
    let search = this.props.parentState.currentSearch || ''
    if (!search === false) {
      if (this.state.currentSearch !== search) {
        this.setState({currentSearch: search}, this.loadSearch);
      }
      return
    } else if (this.state.currentSelection !== typeSelected || initialLoad === true) {
      this.setState({currentSelection: typeSelected}, this.loadVideos);
    }
  }

  loadVideos () {
    if (!this.state.currentSelection) {
      return
    }
    if (this.state.currentSelection !== 'newest') {
      this.props.getVideos(this.state.currentSelection);
    } else {
      this.props.newest();
    }
  }

  loadSearch () {
    var params = {
      query: this.state.currentSearch
    }
    this.props.search('search', params);
  }


  componentDidMount(){
    this.updateState(true);
  }

  componentDidUpdate(){
    this.updateState();
  }

  render() {
      let allTrendingVideosLoading = this.props.stateObj.allVideosLoading;
      let allTrendingMovies = this.props.stateObj.trendingMovies || [];
      let allTrendingTvs = this.props.stateObj.trendingTvs || [];

      return (
        <div className="page trendingPage">
          {/* video group component renders the group ui */}
          <VideoGroup 
            groupTitle={'Movies'} 
            groupDataLoading={allTrendingVideosLoading}
            groupData={allTrendingMovies}>
          </VideoGroup>

          <VideoGroup 
            groupTitle={'TV Shows'} 
            groupDataLoading={allTrendingVideosLoading}
            groupData={allTrendingTvs}>
          </VideoGroup>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    stateObj: state.trendingVideosState,
    parentState: state.appState
  }
}

const mapDispatchToProps = actionDispatches;

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AllVideos);