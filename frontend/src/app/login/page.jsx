"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import axios from "@/utils/axios";
import Cookies from 'js-cookie';

const LoginPage = () => {
  const [showRecoverForm, setShowRecoverForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/Auth/login', { email, password });
        const { token } = response.data;

        // Log the token to check if it is received correctly
        console.log('Token received:', token);

        // Set the token in a cookie
        Cookies.set('token', token, { expires: 1 });

        window.location.href = '/';
    } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Đăng nhập thất bại. Vui lòng thử lại.');
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
    },
    title: {
      fontSize: '24px',
      color: '#50222b',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      maxWidth: '400px',
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
      maxWidth: '400px',
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
        <div style={styles.title}>ĐĂNG NHẬP</div>

        {!showRecoverForm ? (
          <div id="CustomerLoginForm" className="form-vertical">
            <form onSubmit={handleLogin} id="customer_login">
              <input
                type="email"
                name="customer[email]"
                id="CustomerEmail"
                placeholder="Email"
                autoCorrect="off"
                autoCapitalize="off"
                autoFocus
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                name="customer[password]"
                id="CustomerPassword"
                placeholder="Mật khẩu"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

              <p>
                <input
                  type="submit"
                  value="Đăng nhập"
                  style={styles.button}
                  onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                />
              </p>
              <p style={styles.paragraph}>
                <a href="#recover" onClick={() => setShowRecoverForm(true)} style={styles.link}>
                  Quên mật khẩu?
                </a>
              </p>
              <p style={styles.paragraph}>
                <span style={{ color: '#5c2a1d', fontSize: '14px' }}>Bạn chưa có tài khoản? </span>
                <Link href="/signup" style={{ ...styles.link, color: 'blue' }}>
                  Đăng ký
                </Link>
              </p>
            </form>
          </div>
        ) : (
          <div id="RecoverPasswordForm">
          </div>
        )}
      </div>
    </main>
  );
};

export default LoginPage;
