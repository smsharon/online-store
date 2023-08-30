import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar({ cartItemCount }) {

  return (
    <header className="navbar">
      <div className="logo">Online Store</div>
      <nav>
        <ul className="nav-links">
          <li className="search">
          <div className="search-container">
            <input type="text" placeholder="Search products..." />
            <button className="search-button">Search</button>
            </div>
          </li>
          <li className='nav-item'>
          <Link to="/cart">Cart </Link>
            <li className='nav-item'>
            <Link to="/login">My Account</Link>
          </li>
            
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
