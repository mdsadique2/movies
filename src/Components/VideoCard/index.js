import React, { Component } from 'react';
import './style.css';

class VideoCard extends Component {
    constructor(props) {
        super(props)
        this.movieData = this.props.movieData;
        this.movieImageUrl = 'https://image.tmdb.org/t/p/w500'
    }

    render() {
        return (
            <div className="videoCard">
                {
                    this.movieData.poster_path ?
                    <img className="poster" alt="posterimage" src={this.movieImageUrl + this.movieData.poster_path} /> :
                    <div className="poster dummyImageCard">No Image Found</div>

                }
               <div className="details">
                    <div className="title">{this.movieData.original_title || this.movieData.original_name}</div>
                    <div className="description">{this.movieData.overview}</div>
               </div>
            </div>
        );
    }
}
  
export default VideoCard;