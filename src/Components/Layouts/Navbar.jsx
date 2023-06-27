import React from 'react';
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className='navbarWrapper'>
      <div className='container'>
        <nav className='navbarContainer'>
          <div className='logo'>
            <h1>CONTEXT</h1>
          </div>
          <div className='navItems'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar