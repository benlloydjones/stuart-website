import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bulma/bulma.sass';

class App extends React.Component {

  render() {
    return (
      <h1 className="title is-1">Hello World</h1>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
