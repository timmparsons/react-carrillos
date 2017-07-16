import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var logo = (
  <img
    src="src/carrilloslogosmallerg.gif"
    alt="carrilloslogo"
    />
);


var nav = (
  <div className="nav-cont">
    <ul className="nav-list">
      <li className="nav home"><a href="#">Home</a></li>
      <li className="nav menu"><a href="#">Menu</a></li>
      <li className="nav about"><a href="../public/home.html">About Us</a></li>
      <li className="nav contact"><a href="#">Contact</a></li>
    </ul>
  </div>
);

ReactDOM.render(nav, document.getElementById('nav'));


var header = <h1 className="main-header">Carrillos Tortillera - Simi Valleys Finest Mexican Restaurant</h1>

ReactDOM.render(header, document.getElementById('main-head'));

var about = <h2>Carrillos Tortilleria - Family Owned since 1975</h2>

ReactDOM.render(about, document.getElementById('main-section'));

var contact = (
  <div className="address">
    <h3>Address</h3>
    <p>123 Letsbe Avenue, Simi Valley, CA</p>
  </div>
);

ReactDOM.render(contact, document.getElementById('footer'));


registerServiceWorker();
