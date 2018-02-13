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
      <div>
        <VideoPlayer videoId={this.state.videoId} />
      </div>
    );
  }

}

export default VideoShow;
