import React from 'react';

import VideoPlayer from './VideoPlayer';

class VideoShow extends React.Component {

  state = {
    videoId: null
  }

  componentDidMount() {
    this.setState({ videoId: this.props.match.params.videoId});
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <VideoPlayer videoId={this.state.videoId} />
        </div>
      </div>
    );
  }

}

export default VideoShow;
