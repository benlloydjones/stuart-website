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
        console.log('this is state', this.state);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="title is-1">Hello, world!</h1>
        <div className="columns is-multiline">
          {this.state.videos && this.state.videos.items.map(video => {
            return (<div key={video.id.videoId} className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={video.snippet.thumbnails.high.url} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p>{video.snippet.description}</p>
                  </div>
                </div>
              </div>
            </div>);
          })}
        </div>
      </div>


    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
