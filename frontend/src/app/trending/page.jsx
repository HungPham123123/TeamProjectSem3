"use client";

import React, { useState } from 'react';

function Trending() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <div style={pageStyle}>
      <nav style={navContainerStyle}>
        <ul style={navMenuStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>TRENDING</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MUSIC</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MOVIE</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>GAME</a></li>
        </ul>
      </nav>

      <div style={heroImageStyle}>
        <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2023/03/Gaming_Arcade_Girl_Wallpaper2-1024x576-1.jpg" alt="Hero" style={imageStyle} />
        <div style={overlayStyle}>
          <h2 style={textStyle}>MUSIC</h2>
          <h1 style={titleStyle}>NEXT GENERATION OF </h1>
          <h1 style={titleStyle}>MUSIC INDUSTRY</h1>
          <button style={buttonStyle}>READ MORE</button>
        </div>
      </div>

      <h1 style={styles.title}>
        TRENDING
        <span style={styles.titleAfter}></span>
      </h1>

      <div style={cardsContainerStyle}>
        {currentProducts.map((product, index) => (
          <div key={index} style={cardStyle}>
            <img src="https://via.placeholder.com/150" alt="Product" style={cardImageStyle} />
            <div style={cardContentStyle}>
              <h3 style={cardTitleStyle}>TRENDING</h3>
              <div style={cardRatingStyle}>
                <span style={starStyle}>⭐️</span>
                <span>8.8</span>
              </div>
              <p style={cardDescriptionStyle}>5 New Comedies to Watch</p>
            </div>
          </div>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
  );
}

const products = Array.from({ length: 36 }, (_, i) => ({
  name: `Product ${i + 1}`,
  price: `${(i + 1) * 10}$`,
  originalPrice: `${(i + 1) * 12}$`,
  outOfStock: i % 5 === 0,
  onSale: i % 3 === 0,
}));

function Pagination({ currentPage, totalPages, goToPage }) {
  const paginationStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
  };

  const pageStyle = (page) => ({
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: page === currentPage ? 'purple' : 'transparent',
    color: page === currentPage ? 'white' : 'black',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid #ddd',
  });
}

const heroImageStyle = {
  position: 'relative',
  width: '100%',
  height: '500px',
  overflow: 'hidden',
  backgroundColor: 'transparent',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const overlayStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: '#FFF',
  padding: '60px',
  paddingLeft: '90px',
  textAlign: 'left',
};

const textStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  margin: '10px 0',
};

const buttonStyle = {
  backgroundColor: '#FFF',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const pageStyle = {
  padding: '20px',
  backgroundColor: '#000000',
};

const navContainerStyle = {
  backgroundColor: '#262146',
  padding: '16px 0',
  maxWidth: '1000px',
  margin: '40px 180px 100px',
  borderRadius: '12px',
};

const navMenuStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  margin: '20px 0',
};

const cardStyle = {
  width: '230px',
  height: '220px',
  backgroundColor: '#1c1c1e',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '10px',
  color: '#FFF',
};

const cardImageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '500px',
};

const cardTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '5px 0',
  color: '#ff4c4c',
};

const cardRatingStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px',
};

const starStyle = {
  marginRight: '5px',
  color: '#ffcc00',
};

const cardDescriptionStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '5px 0',
};

const styles = {
  title: {
    fontSize: '24px', // Giảm kích thước chữ
    fontWeight: 'bold', // Vẫn in đậm
    marginBottom: '10px',
    textTransform: 'uppercase',
    position: 'relative',
    textAlign: 'center', // Căn giữa văn bản
    color: '#FFF', // Đổi màu thành trắng
  },
  titleAfter: {
    content: '""',
    display: 'block',
    width: '30px', // Giữ kích thước này
    height: '4px',
    backgroundColor: 'purple',
    margin: '10px auto',
  },
};


export default Trending;
