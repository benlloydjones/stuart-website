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
        <iframe
          id='ytplayer'
          type='text/html'
          width='640'
          height='360'
          src={`https://www.youtube.com/embed/${this.state.videoId}`}
          frameBorder='0'>
        </iframe>
        <VideoPlayer videoId={this.state.videoId} />
      </div>
    );
  }

}

export default VideoShow;
