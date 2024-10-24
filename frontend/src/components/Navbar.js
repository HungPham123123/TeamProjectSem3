import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Cần cài react-icons: npm install react-icons

function Navbar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1C1C1C',
      padding: '10px 20px',
      color: 'white',
    },
    logo: {
      height: '40px',
      marginRight: '10px',
    },
    menuBtn: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    menuIcon: {
      fontSize: '24px',
      marginRight: '5px',
    },
    navbarCenter: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    categorySelect: {
      padding: '5px',
      width: '80px',
    },
    searchContainer: {
      position: 'relative', // Để nút tìm kiếm nằm chồng lên ô nhập liệu
      width: '300px',
    },
    searchInput: {
      padding: '5px 40px 5px 10px', // Chừa khoảng trống cho nút tìm kiếm
      width: '100%',
    },
    searchBtn: {
      position: 'absolute', // Nút tìm kiếm sẽ nằm chồng lên ô nhập liệu
      right: '10px',       // Căn bên phải của ô tìm kiếm
      top: '50%',          // Căn giữa theo chiều dọc
      transform: 'translateY(-50%)', // Điều chỉnh căn giữa
      background: 'none',
      border: 'none',
      color: 'gray',
      cursor: 'pointer',
      fontSize: '18px',
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
    },
    cart: {
      display: 'flex',
      alignItems: 'center',
    },
    cartCount: {
      marginLeft: '5px',
    },
    languageSelect: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Left Side */}
      <div className="navbar-left" style={{ display: 'flex', alignItems: 'center' }}>
        <button style={styles.menuBtn}>
          <span style={styles.menuIcon}>&#9776;</span> Menu
        </button>
      </div>

      {/* Center Section */}
      <div style={styles.navbarCenter}>
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

      {/* Right Side */}
      <div style={styles.navbarRight}>
        <a href="#" style={styles.navbarLink}>Shop</a>
        <a href="#" style={styles.navbarLink}>Watchlist</a>
        <a href="#" style={styles.navbarLink}>Sign in</a>
        <div style={styles.cart}>
          <FaShoppingCart /> <span style={styles.cartCount}>(0)</span>
        </div>
        <select style={styles.languageSelect}>
          <option value="en">EN</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
