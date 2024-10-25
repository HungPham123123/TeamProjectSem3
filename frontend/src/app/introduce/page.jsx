// src/pages/introduce/page.jsx

import React from 'react';

const Introduce = () => {
  return (
    <div style={introduceContainerStyle}>
      <h1>About Us</h1>
      <p>We are a company that specializes in providing quality products and services.</p>
      <p>Our mission is to deliver the best experience for our customers.</p>
      {/* Thêm nội dung giới thiệu chi tiết hơn nếu cần */}
    </div>
  );
};

const introduceContainerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

export default Introduce;
