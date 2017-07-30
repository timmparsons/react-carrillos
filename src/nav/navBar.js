import React from 'react';
import {Logo} from './logo.js'

export class NavBar extends React.Component{
  render() {
    const pages = ["Home", "About", "Menu", "Contact"];
    const navLinks = pages.map(page => {
      return (
          <a href={'/' + page}>
            {page}
          </a>
        )
    });

    return <nav>{navLinks}</nav>
  }
}
