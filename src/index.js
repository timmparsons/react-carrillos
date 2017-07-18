import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {NavBar} from './navBar.js'


class HomePage extends React.Component {
  render () {
    return (
      <div>
        <navBar />
      </div>
    )
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('nav')
);

registerServiceWorker();
