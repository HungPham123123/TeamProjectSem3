import React from 'react';
import { FaSearch, FaShoppingCart, FaBookmark } from 'react-icons/fa';

function Navbar() {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#14141A',
      padding: '15px 20px',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    centerContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    logo: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: 'white', // Đặt màu chữ là trắng
      background: 'linear-gradient(45deg, #ff6b6b, #ff9a9e)',
      padding: '1px 25px', // Thêm khoảng cách để trông giống nút bấm
      borderRadius: '15px', // Bo góc tròn
      display: 'inline-block', // Chuyển sang inline-block để bọc vừa chữ
      textDecoration: 'none', // Bỏ gạch chân nếu là liên kết
      cursor: 'pointer',
    },
    menuBtn: {
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '20px', // Tăng kích thước chữ menu
      fontWeight: 'bold', // Làm cho chữ in đậm
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
      gap: '25px',
    },
    navbarLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    separator: {
      height: '20px',
      width: '1px',
      backgroundColor: '#555',
    },
    cart: {
      display: 'flex',
      alignItems: 'center',
    },
    cartCount: {
      marginLeft: '5px',
      fontSize: '14px',
    },
    languageSelectContainer: {
      position: 'relative',
    },
    languageSelect: {
      backgroundColor: '#1C1C27',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
      appearance: 'none',
      paddingRight: '30px',
    },
    chevronIcon: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'white', // Đặt màu biểu tượng thành trắng
      pointerEvents: 'none',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.centerContainer}>
        <a href="http://localhost:3000/" style={styles.logo}>waves</a>
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
        <div style={styles.navbarRight}>
          <div><a href="#" style={styles.navbarLink}>Shop</a></div>
          <div><span style={styles.separator}></span></div>
          <div>
            <a href="#" style={styles.navbarLink}>
              <FaBookmark /> Watchlist
            </a>
          </div>
          <div><a href="#" style={styles.navbarLink}>Sign in</a></div>
          <div style={styles.cart}>
            <FaShoppingCart /> <span style={styles.cartCount}>(0)</span>
          </div>
          <div style={styles.languageSelectContainer}>
            <select style={styles.languageSelect}>
              <option value="en">EN</option>
              <option value="vi">VN</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
              <option value="de">DE</option>
              <option value="jp">JP</option>
            </select>
            <i className="bi bi-chevron-down" style={styles.chevronIcon}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
