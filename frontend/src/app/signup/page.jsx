"use client";

import React from 'react';
import Link from 'next/link'; // Import Link

const SignUpPage = () => {
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
          <form acceptCharset="UTF-8" action="/account/login" id="customer_login" method="post">
            <input name="form_type" type="hidden" value="customer_login" />
            <input name="utf8" type="hidden" value="✓" />

            <input
              type="text"
              name="customer[first_name]"
              id="CustomerFirstName"
              placeholder="Họ"
              style={styles.input}
              required
            />

            <input
              type="text"
              name="customer[last_name]"
              id="CustomerLastName"
              placeholder="Tên"
              style={styles.input}
              required
            />

            <input
              type="email"
              name="customer[email]"
              id="CustomerEmail"
              placeholder="Email"
              autoCorrect="off"
              autoCapitalize="off"
              style={styles.input}
              required
            />

            <input
              type="password"
              name="customer[password]"
              id="CustomerPassword"
              placeholder="Mật khẩu"
              style={styles.input}
              required
            />

            <input
              type="password"
              name="customer[password_confirmation]"
              id="CustomerPasswordConfirmation"
              placeholder="Xác nhận mật khẩu"
              style={styles.input}
              required
            />

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
