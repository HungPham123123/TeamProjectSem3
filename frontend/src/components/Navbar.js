import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1C1C27',
      padding: '20px 20px',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    centerContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px', // Spacing between elements
      justifyContent: 'center',
      flex: 1, // Takes available space to center the elements
    },
    menuBtn: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    categorySelect: {
      backgroundColor: 'white',
      color: 'black',
      border: '1px solid #ccc',
      padding: '5px 25px 5px 10px',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M7 10l5 5 5-5z\' fill=\'%23000000\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 10px center',
      backgroundSize: '16px 16px',
    },
    searchContainer: {
      position: 'relative',
      width: '300px',
    },
    searchInput: {
      padding: '8px 40px 8px 12px',
      width: '100%',
      height: '30px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white',
      color: 'black',
      outline: 'none',
    },
    searchBtn: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      color: 'gray',
      cursor: 'pointer',
      fontSize: '16px',
    },
    navbarRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    navbarLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    cart: {
      display: 'flex',
      alignItems: 'center',
    },
    cartCount: {
      marginLeft: '5px',
      fontSize: '14px',
    },
    languageSelect: {
      backgroundColor: '#2C2C3D',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Center Section: Menu, Category Select, and Search */}
      <div style={styles.centerContainer}>
        <button style={styles.menuBtn}>
          <span>&#9776;</span> Menu
        </button>
        <select style={styles.categorySelect}>
          <option value="all">All</option>
        </select>
        <div style={styles.searchContainer}>
          <input type="text" style={styles.searchInput} placeholder="Search" />
          <button style={styles.searchBtn}>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Right Side: Links + Cart + Language */}
      <div style={styles.navbarRight}>
        <a href="#" style={styles.navbarLink}>Shop</a>
        <a href="#" style={styles.navbarLink}>Watchlist</a>
        <a href="#" style={styles.navbarLink}>Sign in</a>
        <div style={styles.cart}>
          <FaShoppingCart /> <span style={styles.cartCount}>(0)</span>
        </div>
        <select style={styles.languageSelect}>
          <option value="en">English (United States)</option>
          <option value="vi">Vietnamese (Vietnam)</option>
          <option value="fr">French (France)</option>
          <option value="es">Spanish (Spain)</option>
          <option value="de">German (Germany)</option>
          <option value="jp">Japanese (Japan)</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
