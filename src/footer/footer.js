import React from 'react';
import {Address} from './address.js'
import {Social} from './social.js'

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        < Address />
        < Social />
      </div>
    )
  };
}
