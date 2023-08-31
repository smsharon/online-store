import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import { FaShoppingCart } from 'react-icons/fa';


function NavBar({ setSearchTerm, setCategoryFilter  }) {
  
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="navbar">
      <div className="logo"><Link to="/">AES STORES</Link></div>
      <nav>
        <ul className="nav-links">
        <div className="search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearchInputChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>
          <li className='nav-item'>
          <Link to="/cart"><FaShoppingCart size={30} /></Link>
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
