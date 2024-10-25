import React from 'react';

const Contact = () => {
  return (
    <div style={contactContainerStyle}>
      <h1 style={headerStyle}>Contact Us</h1>
      <form style={formStyle}>
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input type="text" id="name" name="name" required style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea id="message" name="message" required style={textareaStyle}></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

const contactContainerStyle = {
  maxWidth: '600px',
  margin: '20px auto',
  padding: '30px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: '#3A3A49',
  fontSize: '2em', // Kích thước chữ lớn hơn
  fontWeight: 'bold', // Chữ in đậm
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#555',
};

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
  transition: 'border 0.3s',
};

const textareaStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  resize: 'vertical',
  fontSize: '16px',
  transition: 'border 0.3s',
};

const buttonStyle = {
  padding: '12px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#3A3A49',
  color: 'white',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: '#5A5A69',
};

export default Contact;
