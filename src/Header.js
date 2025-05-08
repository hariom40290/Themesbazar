import React, { useState } from 'react';

function Header({ user, onLogout }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownHover = (show) => {
    setDropdownVisible(show);
  }

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px' }} />
      </div>

      {user ? (
        <div style={styles.userMenu}>
          <span style={styles.userEmail}>{user}</span>
          <div
            style={styles.dropdown}
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <button style={styles.dropdownButton}>My Account</button>
            {dropdownVisible && (
              <div style={styles.dropdownContent}>
                <a href="#" onClick={onLogout}>Logout</a>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
  },
  userEmail: {
    marginRight: '10px',
    fontSize: '16px',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdownButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  dropdownContent: {
    display: 'block',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
    zIndex: '1',
  },
};

export default Header;
