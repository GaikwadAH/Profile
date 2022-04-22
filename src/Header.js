import React from 'react';
import { render } from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="header-list">
          <li>Home</li>
          <li>Profile</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
}

export default Header;
