import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Header} from './header/header.js';
import {Logo} from './nav/logo.js';
import {NavBar} from './nav/navBar.js';



class HomePage extends React.Component {
  render () {
    return (
      <div>
        <div className="nav">
          <div className="logo">
            <Logo />
          </div>
          <div className="nav-bar">
            <NavBar />
          </div>
        </div>
        <div className="header">
          <Header />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('nav')
);

registerServiceWorker();
