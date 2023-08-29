import React, { useState } from 'react';
import './NavBar.css'; 

function NavBar() {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="logo">Online Store</div>
      <nav>
        <ul className="nav-links">
          <li>
            <button>Home</button>
          </li>
          <li className="search">
            <input type="text" placeholder="Search products..." />
          </li>
          <li>
            <button>Cart</button>
          </li>
          <li className="account-dropdown">
            <button onClick={toggleAccountDropdown}>My Account</button>
            {isAccountDropdownOpen && (
              <div className="dropdown-options">
                <form>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" />
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" />
                  <button>Login</button>
                </form>
                <form>
                  <label htmlFor="newEmail">Email:</label>
                  <input type="email" id="newEmail" />
                  <label htmlFor="newPassword">Password:</label>
                  <input type="password" id="newPassword" />
                  <button>Sign Up</button>
                </form>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
