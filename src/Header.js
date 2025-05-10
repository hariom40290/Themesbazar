import React, { useState } from 'react';
import '../src/styles/header.css'; 

function Header({ user, onLogout }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownHover = (show) => {
    setDropdownVisible(show);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="../image.png" alt="Logo" className="logo-img" />
      </div>
<a href="https://hariomdeveloper.wuaze.com/"  target="_blank">
   About Me
</a>      {user ? (
        <div className="user-menu">
          <span className="user-email">{user}</span>
          <div
            className="dropdown"
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <button className="dropdown-button">My Account</button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <a href="#" onClick={onLogout}>Logout</a>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
