import React from 'react';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import  FaTwitter from 'react-icons/lib/fa/twitter';

export class Social extends React.Component {
  render() {
    return (
      <div className="social-buttons">
        <FaFacebookOfficial size={20} color="#a9a9a9"/>
        <FaTwitter size={20} color="#a9a9a9" />
      </div>
      )
  };
}
