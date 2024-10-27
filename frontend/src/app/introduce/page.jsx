// src/pages/introduce/page.jsx

import React from 'react';

const Introduce = () => {
  return (
    <div style={introduceContainerStyle}>
      <h1 style={titleStyle}>About Waves</h1>
      <p style={textStyle}>
        Welcome to *Waves*! We are an online store specializing in high-quality DVDs, offering a wide selection of titles from movies and documentaries to popular television series from around the world.
      </p>
      <p style={textStyle}>
        At *Waves*, we are committed to providing you with an easy, fast, and secure online shopping experience. Not only do we offer quality DVDs, but we also ensure the best customer support services. Our team is always ready to answer any questions to bring you maximum satisfaction.
      </p>
      <p style={textStyle}>
        With a mission to build trust and satisfaction among our customers, *Waves* upholds the highest standards for product quality and service. Discover our extensive DVD collection today to find the ideal entertainment experience for you and your family!
      </p>
      <p style={highlightTextStyle}>
        Trust *Waves* for your memorable entertainment moments!
      </p>
    </div>
  );
};

const introduceContainerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '30px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f3f7f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds shadow for a polished look
};

const titleStyle = {
  textAlign: 'center',
  color: '#2c3e50',
  marginBottom: '25px',
  fontSize: '30px',
  fontWeight: 'bold',
};

const textStyle = {
  lineHeight: '1.8',
  fontSize: '17px',
  color: '#555',
  marginBottom: '15px',
  textAlign: 'justify', // Justify text for neat alignment
};

const highlightTextStyle = {
  ...textStyle,
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#2c3e50',
  textAlign: 'center',
  marginTop: '20px',
};

export default Introduce;
