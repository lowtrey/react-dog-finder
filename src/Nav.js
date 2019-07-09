import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    let navLinks = this.props.links.map(link => (
      <NavLink 
        exact to={`/dogs/${link.toLowerCase()}`}
        className='Nav'
        key={link}
        activeClassName='Nav-active'
      >
        <h4>{link}</h4>
      </NavLink>
    ));
    return(
      <div className='Nav'>
        <NavLink 
          exact to='/dogs' 
          className='Nav' 
          activeClassName='Nav-active'
        >
          <h4>Home</h4>
        </NavLink>
        {navLinks}
      </div>
    );
  }
}

export default Nav;