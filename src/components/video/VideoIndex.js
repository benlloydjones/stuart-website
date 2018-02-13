import React from 'react';
import Axios from 'axios';

import VideoCard from './VideoCard.js';

class VideoIndex extends React.Component {

  state = {
    videos: null
  }

  componentDidMount() {
    this.youTubeSearch();
  }


  youTubeSearch = () => {
    Axios
      .get('/api/youTube/search')
      .then(res => {
        this.setState({ videos: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-multiline">
          {this.state.videos && this.state.videos.items.map(video =>
            <VideoCard
              key={video.id.videoId}
              {...video}
            />)}
        </div>
      </div>
    );
  }

}

export default VideoIndex;
