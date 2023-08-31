import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import { FaShoppingCart, FaUser } from 'react-icons/fa';


function NavBar({ setSearchTerm, setCategoryFilter  }) {
  
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="navbar">
      <div ><Link className="logo"to="/">AES STORES</Link></div>
      <nav>
        
        <div className="nav-links">
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
          <div className='nav-item'>
            <Link to="/cart"><FaShoppingCart size={30} /></Link>
              <select id="select">
                <option>My Account</option>
                <option>Orders</option>
                <option>FAQs</option>
                </select>    
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
