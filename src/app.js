import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import VideoIndex from './components/video/VideoIndex';
import VideoShow from './components/video/VideoShow';

import 'bulma';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/videos" component={VideoIndex} />
              <Route exact path="/videos/:videoId" component={VideoShow} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
