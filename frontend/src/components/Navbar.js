"use client"; // This directive tells Next.js that this component is a client component

import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported
import { FaSmile } from 'react-icons/fa';


function Navbar() {
  // State for managing dropdown visibility
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

  // Styles object
  const styles = {
    navbar: {
      backgroundColor: '#fff',
      padding: '10px 40px',
      color: '#333',
    },
    topSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '0 35px', // Adjust padding to move content inward
    },
    account: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      gap: '5px',
      position: 'relative', 
    },
    logo: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#d60000',
      textDecoration: 'none',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    cart: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '14px',
      color: '#333',
    },
    cartIcon: {
      fontSize: '24px',
    },
    cartText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    cartTitle: {
      borderBottom: '1px solid #333',
      marginBottom: '5px',
      fontSize: '14px',
      fontStyle: 'italic',
    },
    separator: {
      borderBottom: '2px solid #000',
      margin: '25px auto',
      width: '95%',
    },
    bottomSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      fontSize: '18px',
      fontWeight: 'bold',
      padding: '0 35px',
    },
    menuItem: {
      display: 'block',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      color: '#50222b',
      textTransform: 'uppercase',
      position: 'relative',
      fontWeight: 'normal',
      letterSpacing: '1px', // Giảm letterSpacing nếu cần
      fontSize: '15px',
      fontFamily: 'Oswald',
      padding: '0', // Đảm bảo không có padding
      margin: '0', // Đảm bảo không có margin
    },
    
    dropdown: {
      position: 'absolute',
      backgroundColor: '#333333',
      color: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      padding: '10px',
      display: 'none',
      width: '1100px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    dropdownVisible: {
      display: 'block',
    },
    gearIconContainer: {
      backgroundImage: `url('https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/307533544_167121575906876_2523275442803878991_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qe8wKJFSqt8Q7kNvgHPXpVo&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=ACNd8K6iBDDyXhiTmnWkQhe&oh=00_AYAiGNO3DeFwVbp3LfI7yZPOn862U0y2jF7cXcoJB1Orog&oe=672E16ED')`,
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10px',
      width: '50px',
      height: '40px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    gearIcon: {
      color: '#fff',
      fontSize: '23px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      padding: '5px 10px',
    },
    searchInput: {
      border: 'none',
      outline: 'none',
      fontSize: '14px',
      color: '#333',
      marginLeft: '5px',
    },
    accountDropdown: {
      position: 'absolute',
      backgroundColor: '#333333',
      color: '#fff',
      border: '1px solid #ccc',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      padding: '10px',
      display: 'none',
      width: '210px',
      left: '0',
      top: '40px', // Adjust to position below account
      borderRadius: '4px',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.topSection}>
      <div 
  style={styles.account}
  onClick={() => setAccountDropdownOpen(!isAccountDropdownOpen)}
>
  <i className="bi bi-gear" style={{ color: '#333', fontSize: '18px' }}></i>
  <span>Tài Khoản</span>
  <div 
    style={{
      ...styles.accountDropdown,
      ...(isAccountDropdownOpen ? styles.dropdownVisible : {}),
    }}
  >
    <ul style={{ listStyleType: 'none', padding: '0', marginLeft: '15px' }}>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <FaSmile style={{ marginRight: '5px' }} />
        <a href="/account/login" className="customer_login_link" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Đăng nhập</a>
      </li>

      <li style={{ display: 'flex', alignItems: 'center' }}>
        <i className="fa fa-key" style={{ marginRight: '5px' }}></i>
        <a href="/account/register" className="customer_register_link" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Tạo tài khoản</a>
      </li>

      <li style={{ display: 'flex', alignItems: 'center' }}>
        <i className="far fa-star" style={{ marginRight: '5px' }}></i>
        <a href="/pages/favourite" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Được yêu thích nhất</a>
      </li>

      <li style={{ display: 'flex', alignItems: 'center' }}>
        <i className="fa fa-heart" style={{ marginRight: '5px' }}></i>
        <a href="/pages/wishlist" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Sản phẩm yêu thích</a>
      </li>
    </ul>
  </div>
</div>

        <a href="/" style={styles.logo}>ᴡᴀᴠᴇs</a>
        <div style={styles.cart}>
          <FaShoppingCart style={styles.cartIcon} />
          <div style={styles.cartText}>
            <span style={styles.cartTitle}>Giỏ hàng</span>
            <span>1 Sản phẩm 900,000₫</span>
          </div>
        </div>
      </div>
      <div style={styles.separator}></div>
      <div style={styles.bottomSection}>
        <div style={styles.menu}>
        <a href="/" style={{ textDecoration: 'none' }}>
  <div style={styles.gearIconContainer}>
    <i className="#" style={styles.gearIcon}></i>
  </div>
</a>

          <a href="#" style={styles.menuItem}>Home</a>
          <div
            onMouseEnter={() => setNewsDropdownOpen(true)}
            onMouseLeave={() => setNewsDropdownOpen(false)}
            style={{ position: 'relative' }}
          >
            <a href="#" style={styles.menuItem}>BẢN TIN THỜI ĐẠI
            <span className="fa fa-angle-down" aria-hidden="true"></span>
            </a>
            <div
              style={{
                ...styles.dropdown,
                ...(isNewsDropdownOpen ? styles.dropdownVisible : {}),
                width: '210px', // Thay đổi kích thước tại đây
                padding: '10px', // Điều chỉnh padding nếu cần
              
              }}
            >
              <a href="#" className="site-nav__link" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>US-UK</a>
            </div>
          </div>
          <div
  onMouseEnter={() => setServiceDropdownOpen(true)}
  onMouseLeave={() => setServiceDropdownOpen(false)}
  style={{ position: 'relative' }}
>
  <a href="#" style={styles.menuItem}>DỊCH VỤ
  <span className="fa fa-angle-down" aria-hidden="true"></span>
  </a>
  <div
    style={{
      ...styles.dropdown,
      ...(isServiceDropdownOpen ? { ...styles.dropdownVisible, width: '150px', padding: '10px' } : {}),
      width: '210px', // Thay đổi kích thước tại đây
      padding: '10px', // Điều chỉnh padding nếu cần
    }}
  >
    <ul className="site-nav__dropdown">
      <li>
        <a href="https://www.hangdiathoidai.com" className="site-nav__link" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Phát Hành Vật Lý</a>
      </li>
      <li>
        <a href="https://84vnw.com" className="site-nav__link" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Phát Hành Nhạc Số</a>
      </li>
    </ul>
  </div>
</div>

          <div
  onMouseEnter={() => setShopDropdownOpen(true)}
  onMouseLeave={() => setShopDropdownOpen(false)}
  style={{ position: 'relative' }}
>
  <a href="#" style={styles.menuItem}>SHOP
  <span className="fa fa-angle-down" aria-hidden="true"></span>

  </a>
  <div
    style={{
      ...styles.dropdown,
      ...(isShopDropdownOpen ? styles.dropdownVisible : {}),
    }}
  >
    <ul className="site-nav__dropdown">
      <li className="awemenu-megamenu-item">
        <div className="grid" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="grid__item" style={{ flex: '1', marginRight: '20px' }}>
            <h3 style={{
              fontSize: '15px',
              lineHeight: '30px',
              fontWeight: 'normal',
              color: '#e2e2e2',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>ẤN BẢN THỜI ĐẠI</h3>
            <ul className="super" style={{ margin: '4px 0 5px 20px' }}>
            <li><a href="/collections/an-ban-thoi-dai-times-exclusives/Signed" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Ấn Bản Có Chữ Ký</a></li>
<li><a href="/collections/an-ban-thoi-dai-times-exclusives/CD" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>CD + DVD</a></li>
<li><a href="/collections/an-ban-thoi-dai-times-exclusives/Cassette" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Băng Cassette</a></li>
<li><a href="/collections/an-ban-thoi-dai-times-exclusives/Single" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Đĩa đơn</a></li>
<li><a href="/collections/times-life-style/times-merch" style={{ color: '#999999', textDecoration: 'none' , fontSize: '16px'}}>Times' Merchandise</a></li>

            </ul>
          </div>

          <div className="grid__item" style={{ flex: '1', marginRight: '20px' }}>
            <h3 style={{
              fontSize: '15px',
              lineHeight: '30px',
              fontWeight: 'normal',
              color: '#e2e2e2',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>ĐĨA HÁT VIỆT NAM</h3>
            <ul className="super" style={{ margin: '4px 0 5px 20px' }}>
              <li><a href="/collections/an-ban-co-chu-ky/nhac-viet-nam" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Ấn Bản Có Chữ Ký</a></li>
              <li><a href="/collections/bang-dia-nhac-cd-dvd/nhac-viet-nam" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}> CD + DVD</a></li>
              <li><a href="/collections/dia-than-vinyl/nhac-viet-nam" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Đĩa Than</a></li>
              <li><a href="/collections/dia-don-single/nhac-viet-nam" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Đĩa Đơn</a></li>
              <li><a href="/collections/bang-cassette/nhac-viet-nam" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Băng Cassette</a></li>
              <li><a href="/collections/bang-coi" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Băng Cối</a></li>
            </ul>
          </div>

          <div className="grid__item" style={{ flex: '1', marginRight: '20px' }}>
          <h3 style={{
    fontSize: '15px',
    lineHeight: '30px',
    fontWeight: 'normal',
    color: '#e2e2e2', // Đã thay đổi màu sắc
    textTransform: 'uppercase',
    letterSpacing: '2px',
}}>BĂNG ĐĨA QUỐC TẾ</h3>

            <ul className="super" style={{ margin: '4px 0 5px 20px' }}>
              <li><a href="/collections/an-ban-co-chu-ky/nhac-quoc-te" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Autographed</a></li>
              <li><a href="/collections/bang-dia-nhac-cd-dvd/nhac-quoc-te" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>CD + DVD</a></li>
              <li><a href="/collections/dia-than-vinyl/nhac-quoc-te" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Vinyl</a></li>
              <li><a href="/collections/dia-don-single/nhac-quoc-te" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Single</a></li>
              <li><a href="/collections/bang-cassette/nhac-quoc-te" style={{ color: '#999999', textDecoration: 'none' , fontSize: '16px'}}>Cassette Tape</a></li>
              <li><a href="/collections/bang-coi/nhac-quoc-te" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Reel To Reel</a></li>
              <li><a href="#" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>8-Track Tape</a></li>
            </ul>
          </div>

          <div className="grid__item" style={{ flex: '1', marginRight: '20px' }}>
            <h3 style={{
              fontSize: '15px',
              lineHeight: '30px',
              fontWeight: 'normal',
              color: '#e2e2e2',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>TIMES LIFESTYLE</h3>
            <ul className="super" style={{ margin: '4px 0 5px 20px' }}>
              <li><a href="/collections/audio" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Audio</a></li>
              <li><a href="#" style={{ color: '#999999', textDecoration: 'none' , fontSize: '16px'}}>Home</a></li>
              <li><a href="/collections/times-life-style/book" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Book</a></li>
              <li><a href="/collections/times-life-style/magazine" style={{ color: '#999999', textDecoration: 'none', fontSize: '16px' }}>Magazine</a></li>
              <li><a href="#" style={{ color: '#999999', textDecoration: 'none' , fontSize: '16px'}}>Tech</a></li>
              <li><a href="#" style={{ color: '#999999', textDecoration: 'none' , fontSize: '16px'}}>Beauty</a></li>
              <li><a href="/collections/merch" style={{ color: '#999999', textDecoration: 'none' , fontSize: '16px'}}>Merchandise</a></li>
            </ul>
          </div>

          <div className="grid__item" style={{ flex: '1' }}>
            <h3 style={{
              fontSize: '15px',
              lineHeight: '30px',
              fontWeight: 'normal',
              color: '#e2e2e2',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}>VINYL VIBES 8791</h3>
            <a href="https://shop.hangdiathoidai.com/collections/dia-than-vinyl">
              <img src="//theme.hstatic.net/1000304920/1001035765/14/megamenu_1_image_1.jpg?v=249" alt="menu" />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>


        </div>
        <div style={styles.searchContainer}>
          <FaSearch />
          <input type="text" placeholder="Tìm kiếm..." style={styles.searchInput} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
