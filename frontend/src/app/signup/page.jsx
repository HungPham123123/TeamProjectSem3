"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import axios from "@/utils/axios";

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/Auth/register', {
        username,
        email,
        password,
      });

      setSuccessMessage("Đăng ký thành công! Bạn có thể đăng nhập.");
      setErrorMessage('');
      setUsername('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.');
      setSuccessMessage('');
    }
  };

  const styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    mainContent: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      fontSize: '24px',
      color: '#50222b',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #5c2a1d',
      borderRadius: '3px',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '12px 0',
      width: '100%',
      fontSize: '16px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    buttonHover: {
      backgroundColor: '#333',
    },
    link: {
      color: '#5c2a1d',
      fontSize: '14px',
      textDecoration: 'none',
    },
    paragraph: {
      marginTop: '10px',
    },
  };

  return (
    <main style={styles.wrapper}>
      <div style={styles.mainContent}>
        <div style={styles.title}>Đăng Ký</div>
        <div id="CustomerLoginForm" className="form-vertical">
          <form onSubmit={handleRegister} id="customer_login">
            <input
              type="text"
              name="Username"
              id="CustomerUsername"
              placeholder="Username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              name="email"
              id="CustomerEmail"
              placeholder="Email"
              autoCorrect="off"
              autoCapitalize="off"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              name="password"
              id="CustomerPassword"
              placeholder="Mật khẩu"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            <p>
              <input
                type="submit"
                value="Đăng ký"
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              />
            </p>
            <p style={styles.paragraph}>
              Bạn đã có tài khoản?{' '}
              <Link href="/login" style={styles.link}> 
                Đăng Nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
