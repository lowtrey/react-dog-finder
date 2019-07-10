import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Dog App
        </a>
      </nav>
    );
  }
}

export default Navbar;