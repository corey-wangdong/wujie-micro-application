import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <div className='nav-box'>
      <nav>
        <NavLink to="/home">
          介绍
        </NavLink>
        <NavLink to="/react18">
          react18
        </NavLink>
        <NavLink to="/vue3">
          Vue3
        </NavLink>
        <NavLink to="/vue2">
          Vue2
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
