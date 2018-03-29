import React from 'react';
import youTubeSearch from 'util/youTube';

import VideoCard from './VideoCard.js';

class VideoIndex extends React.Component {

  state = {
    videos: [],
    nextPage: null,
    totalResults: null
  }

  componentDidMount() {
    youTubeSearch();
  }




  loadMore = () => {
    youTubeSearch(this.state.nextPage);
  }

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
