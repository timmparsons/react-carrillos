import React from 'react';
import {Pictures} from './pictures.js'
import {History} from './history.js'

const body="Carrillos Tortilleria is a family-run business that started from nothing and grew to become a southern California tradition."
export class Body extends React.Component {
  render() {
    return (
      <div>
        <h4 className="body-text">{body}</h4>
        <Pictures />
        <History />
      </div>
    )
  };
}
