import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css';

function NavBar() {
  const
  return (
    <div className='nav-box'>
      <nav>
        <NavLink to="/home">
          介绍
        </NavLink>
        <NavLink to="/react16">
          react16
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
