import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import './style.css';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

render(<Welcome />, document.getElementById('root'));
