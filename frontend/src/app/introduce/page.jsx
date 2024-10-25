// src/pages/introduce/page.jsx

import React from 'react';

const Introduce = () => {
  return (
    <div style={introduceContainerStyle}>
      <h1 style={titleStyle}>Introduce</h1>
      <p style={textStyle}>
        Welcome to our company! We are dedicated to providing the highest quality products and exceptional services to our customers.
      </p>
      <p style={textStyle}>
        Our mission is to create value through innovation, sustainability, and customer satisfaction. We believe in building long-term relationships based on trust and integrity.
      </p>
      <p style={textStyle}>
        Join us on this journey as we continue to grow and make a positive impact in our industry.
      </p>
    </div>
  );
};

const introduceContainerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9', // Background color for better visibility
};

const titleStyle = {
  textAlign: 'center',
  color: '#3A3A49',
  marginBottom: '20px',
};

const textStyle = {
  lineHeight: '1.6',
  fontSize: '16px',
  color: '#555',
};

export default Introduce;
