"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link

const LoginPage = () => {
  const [showRecoverForm, setShowRecoverForm] = useState(false);

  // CSS nội tuyến
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
            <form acceptCharset="UTF-8" action="/account/login" id="customer_login" method="post">
              <input name="form_type" type="hidden" value="customer_login" />
              <input name="utf8" type="hidden" value="✓" />

              <input
                type="email"
                name="customer[email]"
                id="CustomerEmail"
                placeholder="Email"
                autoCorrect="off"
                autoCapitalize="off"
                autoFocus
                style={styles.input}
              />

              <input
                type="password"
                name="customer[password]"
                id="CustomerPassword"
                placeholder="Mật khẩu"
                style={styles.input}
              />

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
            <h2>Đặt lại mật khẩu của bạn</h2>
            <p>Chúng tôi sẽ gửi cho bạn một email để đặt lại mật khẩu của bạn.</p>

            <div className="form-vertical">
              <form acceptCharset="UTF-8" action="/account/recover" method="post">
                <input name="form_type" type="hidden" value="recover_customer_password" />
                <input name="utf8" type="hidden" value="✓" />

                <label htmlFor="RecoverEmail" className="hidden-label">Email</label>
                <input
                  type="email"
                  name="email"
                  id="RecoverEmail"
                  placeholder="Email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  style={styles.input}
                />

                <p>
                  <input
                    type="submit"
                    value="Gửi"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                  />
                </p>
                <button
                  type="button"
                  onClick={() => setShowRecoverForm(false)}
                  style={{ ...styles.link, border: 'none', background: 'none', cursor: 'pointer' }}
                >
                  Thoát
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default LoginPage;
