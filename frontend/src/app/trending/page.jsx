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
            <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
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

      <div style={dividerContainerStyle}>
  <div style={lineStyle}></div>
  <button style={viewMoreButtonStyle}>View More</button>
  <div style={lineStyle}></div>
</div>

<div style={sectionContainerStyle}>
  <div style={musicSectionStyle}>
    <h2 style={musicTitleStyle}>MUSIC</h2>
    <div style={underlineStyle}></div>
  </div>

  <div style={cardsContainerStyle}>
  {currentProducts.slice(0, 3).map((product, index) => (
      <div key={index} style={cardStyle}>
        <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
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
</div>

<div style={sectionContainerStyle}>
  <div style={musicSectionStyle}>
    <h2 style={musicTitleStyle}>MOVIE</h2>
    <div style={underlineStyle}></div>
  </div>

  <div style={cardsContainerStyle}>
  {currentProducts.slice(0, 3).map((product, index) => (
      <div key={index} style={cardStyle}>
        <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
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
</div>

<div style={sectionContainerStyle}>
  <div style={musicSectionStyle}>
    <h2 style={musicTitleStyle}>GAME</h2>
    <div style={underlineStyle}></div>
  </div>

  <div style={cardsContainerStyle}>
  {currentProducts.slice(0, 3).map((product, index) => (
      <div key={index} style={cardStyle}>
        <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
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
</div>

      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
  );
}

const sectionContainerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '20px 0',
  padding: '0 20px',
};

const musicSectionStyle = {
  flex: 1,
  maxWidth: '200px',
  display: 'flex',            // Sử dụng Flexbox
  flexDirection: 'column',    // Đặt hướng theo cột
  alignItems: 'center',       // Căn giữa theo chiều ngang
  marginTop: '100px', // Thêm khoảng cách trên để dịch xuống dưới
  paddingLeft: '55px', // Điều chỉnh giá trị này để dịch sang bên phải
};  

const musicTitleStyle = {
  fontSize: '24px',
  fontWeight: '1000',
  color: '#FFF',
  textTransform: 'uppercase',
  margin: '0',
  paddingLeft: '0', // Đặt lại paddingLeft thành 0
  marginBottom: '5px', // Thêm khoảng cách giữa tiêu đề và đường gạch chân
};

const underlineStyle = {
  width: '30px', // Giữ nguyên chiều rộng này
  height: '4px',
  backgroundColor: 'purple',
  marginTop: '0', // Đặt marginTop thành 0 để gạch chân nằm sát ngay dưới tiêu đề
  marginLeft: '-45px', // Điều chỉnh giá trị này để di chuyển sang trái   
};




const dividerContainerStyle = {
  display: 'flex',
  alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
  justifyContent: 'space-between', // Căn đều khoảng cách giữa các phần tử
};

const lineStyle = {
  flex: 1, // Chiếm không gian còn lại
  height: '1px', // Độ dày của đường kẻ
  backgroundColor: '#555', // Màu của đường kẻ
};

// Khung nút View More
const viewMoreButtonStyle = {
  backgroundColor: 'black', // Đổi màu nền thành màu đen
  color: 'rgba(255, 255, 255, 0.5)', // Màu chữ vẫn là trắng mờ
  border: '1px solid #555',
  borderRadius: '20px',
  padding: '7px 35px', // Tăng padding bên trái và bên phải để làm cho khung chữ dài hơn
  margin: '0', // Đảm bảo không có margin
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontSize: '10px', // Giảm kích cỡ chữ xuống 10px
};





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
  backgroundColor: '#000000',
  marginBottom: '60px', // Thêm khoảng cách giữa tiêu đề và phần hero
};

const imageStyle = {
  width: '90%',
  height: '90%',
  objectFit: 'cover',
  marginLeft: 'auto', // Đẩy ảnh sang bên phải
  display: 'block' // Đảm bảo ảnh không bị giãn ra toàn bộ chiều ngang
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
  padding: '200px',     // Giảm padding để dịch vào trong ảnh
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
  backgroundColor: '#1c1c1c',
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
  justifyContent: 'center', // Đổi từ 'space-around' thành 'center' để căn giữa
  flexWrap: 'wrap',
  margin: '20px 0',
  gap: '20px', // Khoảng cách giữa các thẻ
};

const cardStyle = {
  width: '250px',
  height: '270px',
  backgroundColor: '#1c1c1e',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '10px', // Có thể giữ lại nếu bạn muốn khoảng cách giữa các card
  color: '#FFF',
};


const cardImageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '8px',           // Giảm padding để nội dung sát hơn
  borderRadius: '5px',       // Đặt bo góc cho viền
  marginTop: '0px',          // Đặt marginTop thành 0 để gần sát hình ảnh
  backgroundColor: '#1c1c1c', // Đặt màu nền tối hơn để dễ đọc chữ
  marginLeft: '-7px', // Dịch sang bên trái 10px
};



const cardTitleStyle = {
  fontSize: '11px',
  fontWeight: 'bold',
  margin: '5px 0',
  color: '#ff4c4c',
  marginTop: '-5px',
};

const cardRatingStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px',
  fontSize: '12px', // Giảm kích cỡ chung cho cả biểu tượng sao và số đánh giá
  marginTop: '-5px',
};

const starStyle = {
  marginRight: '5px',
  color: '#ffcc00',
  fontSize: '12px', // Giảm riêng kích cỡ biểu tượng sao
  marginTop: '-5px',
};


const cardDescriptionStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '5px 0',
};

const styles = {
  title: {
    fontSize: '32px', // Tăng kích thước chữ lên 36px
    fontWeight: 'bold', // Vẫn in đậm
    marginBottom: '60px', // Khoảng cách giữa tiêu đề và phần hero
    textTransform: 'uppercase',
    position: 'relative',
    textAlign: 'center', // Căn giữa văn bản
    color: '#ffffff', // Màu chữ trắng
  },
  titleAfter: {
    content: '""',
    display: 'block',
    width: '30px', // Kích thước đường gạch chân
    height: '4px',
    backgroundColor: 'purple', // Màu của đường gạch chân
    margin: '10px auto',
  },
};




export default Trending;
