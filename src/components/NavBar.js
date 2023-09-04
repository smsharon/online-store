import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';

function NavBar({ setSearchTerm, setCategoryFilter }) {
  const navigate = useNavigate();
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchInputClick = () => {
    setShowAccountDropdown(false); // Close the dropdown when the search input is clicked
  };

  const handleOptionClick = (path) => {
    navigate(path);
    setShowAccountDropdown(false);
  };

  return (
    <header className="navbar">
      <div className="logo" ><Link style={{color: 'white', textDecoration: "none", fontSize: '24px'}} to="/">AES STORES</Link></div>
      <nav>
        <ul className="nav-links">
          <div className="search">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                onClick={handleSearchInputClick}
                onChange={handleSearchInputChange}
              />
              <button className="search-button">Search</button>
            </div>
            {showAccountDropdown && (
              <div className="account-dropdown">
                <div className="dropdown-item" onClick={() => handleOptionClick('/login')}>Sign In</div>
                <div className="dropdown-item" onClick={() => handleOptionClick('/account')}>My Account</div>
                <div className="dropdown-item" onClick={() => handleOptionClick('/orders')}>Orders</div>
                <div className="dropdown-item" onClick={() => handleOptionClick('/faqs')}>FAQs</div>
              </div>
            )}
          </div>
          <li className='nav-item'>
            <Link to="/cart"><FaShoppingCart size={30} /></Link>
            <div className="account-dropdown-toggle" onClick={() => setShowAccountDropdown(!showAccountDropdown)}>
              My Account
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
