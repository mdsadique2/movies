import React, { Component } from 'react';
import VideoCard from 'Components/VideoCard'
import Loader from 'Components/Loader'
import { Divider, Empty } from 'antd';

import './style.css';

class VideoGroup extends Component {
    state = {
        groupData: this.props.groupData,
        groupDataLoading: this.props.groupDataLoading

    }

    static getDerivedStateFromProps(props, state) {
        if (props.groupDataLoading !== state.groupDataLoading) {
          return {
            groupDataLoading: props.groupDataLoading,
            groupData: props.groupData
          };
        }
        return null;
    }

    getMovieCardsUI () {
        return (
            <div className="group flex">
                {
                    this.state.groupData.length === 0 ?
                    <div className="empty">
                        <Empty  image={Empty.PRESENTED_IMAGE_SIMPLE}/> 
                    </div>:
                    this.state.groupData.map((elm, index) => {
                        return <VideoCard key={index} movieData={elm}/>
                    })
                }
            </div>
        )  
    }

    render() {
        return (
            <div className="videoGroup">
                <Divider orientation="left">{this.props.groupTitle}</Divider>
                {
                    this.state.groupDataLoading ? <Loader classList="groupLoader"/> : this.getMovieCardsUI()
                }
            </div>
        );
    }
}
  
export default VideoGroup;