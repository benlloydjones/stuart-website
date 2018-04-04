import React from 'react';
import Axios from 'axios';

import VideoCard from './VideoCard.js';

class VideoIndex extends React.Component {
  state = {
    videos: [],
    nextPage: null,
    totalResults: null
  };

  componentDidMount() {
    this.youTubeSearch();
  }

  loadMore = () => {
    this.youTubeSearch(this.state.nextPage);
  }


  youTubeSearch = (nextPageToken=null) => {
    Axios
      .get(`/api/youTube/search/${nextPageToken}`)
      .then(res => {
        const data = res.data;
        const videos = this.state.videos.concat(data.items);
        this.setState({
          videos,
          nextPage: data.nextPageToken,
          totalResults: data.pageInfo.totalResults
        });
      })
      .catch(err => err);
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.videos.length > 0 && this.state.videos.map((video, i) => {
              if(i <= this.state.totalResults) return (
                <VideoCard
                  key={video.id.videoId}
                  {...video}
                />
              );
            })}
          </div>
          {this.state.videos.length < this.state.totalResults &&
            <button
              onClick={this.loadMore}
              className="button">
                Load more
            </button>
          }
        </div>
      </div>
    );
  }

}

export default VideoIndex;
