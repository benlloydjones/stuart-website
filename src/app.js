import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import '../node_modules/bulma/bulma.sass';

class App extends React.Component {

  state = {
    videos: null
  }

  componentDidMount() {
    Axios
      .get('/api/youTube/search')
      .then(res => {
        this.setState({ videos: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title is-1">Hello, world!</h1>
        <ul>
          {this.state.videos && this.state.videos.items.map(video => {
            return (<li key={video.id.videoId}>
              <p>{video.id.videoId}</p>
            </li>);
          })}
        </ul>
      </div>

    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
