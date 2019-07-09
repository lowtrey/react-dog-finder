import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return(
      <div className='Nav'>
        <NavLink 
          exact to='/dogs' 
          className='Nav' 
          activeClassName='Nav-active'
        >
          <h3>Home</h3>
        </NavLink>
        {/* <NavLink exact to='/soda' activeClassName='Nav-active'><h1>Soda</h1></NavLink>
        <NavLink exact to='/chips' activeClassName='Nav-active'><h1>Chips</h1></NavLink>
        <NavLink exact to='/sardines' activeClassName='Nav-active'><h1>Sardines</h1></NavLink> */}
      </div>
    );
  }
}

export default Nav;