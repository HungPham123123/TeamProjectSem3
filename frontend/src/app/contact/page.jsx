import React from 'react';

const Contact = () => {
  return (
    <div style={contactContainerStyle}>
      <h1>Contact Us</h1>
      <form style={formStyle}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required style={textareaStyle}></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

const contactContainerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  resize: 'vertical',
};

const buttonStyle = {
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#3A3A49',
  color: 'white',
  cursor: 'pointer',
};

export default Contact;
