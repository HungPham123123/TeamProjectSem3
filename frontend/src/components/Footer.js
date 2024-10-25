import React from 'react';

function Footer() {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',
    backgroundColor: '#000',
    color: 'white',
    padding: '20px',
  };

  const buttonStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: '800px',
    marginBottom: '20px',
  };

  const boxStyle = {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '8px',
    margin: '0 10px',
    textAlign: 'center',
  };

  const socialListStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
    marginTop: '10px',
  };

  const qrCodeContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const textContainerStyle = {
    textAlign: 'left',
  };

  const qrCodeStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'white',
    marginLeft: '10px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  };

  const navItemStyle = {
    marginRight: '15px',
    color: 'white',
    textDecoration: 'none',
  };

  const copyrightStyle = {
    marginTop: '20px',
    color: '#808080',
    textAlign: 'center',
  };

  return (
    <div style={footerStyle}>
      <button style={buttonStyle}>Sign in for more access</button>
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div>Follow IMDb on social</div>
          <ul style={socialListStyle}>
            <li style={{ marginRight: '20px' }}>
              <a
                className="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase"
                title="TikTok"
                aria-label="TikTok"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.tiktok.com/@imdb"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ipc-icon ipc-icon--tiktok"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M15.2346 3C15.5316 5.55428 16.9572 7.07713 19.4359 7.23914V10.112C17.9995 10.2524 16.7412 9.78262 15.2778 8.89699V14.2702C15.2778 21.096 7.83633 23.2291 4.84463 18.3365C2.92217 15.1882 4.09941 9.66382 10.2664 9.44241V12.4719C9.7966 12.5475 9.29438 12.6663 8.83536 12.8229C7.46372 13.2873 6.68609 14.1568 6.9021 15.6904C7.31791 18.6281 12.7073 19.4975 12.2591 13.7571V3.0054H15.2346V3Z"></path>
                </svg>
              </a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a
                className="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                rel="nofollow noopener"
                href="https://instagram.com/imdb"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ipc-icon ipc-icon--instagram"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M11.997 2.04c-2.715 0-3.056.011-4.122.06-1.064.048-1.79.217-2.426.463a4.901 4.901 0 0 0-1.771 1.151 4.89 4.89 0 0 0-1.153 1.767c-.247.635-.416 1.36-.465 2.422C2.011 8.967 2 9.307 2 12.017s.011 3.049.06 4.113c.049 1.062.218 1.787.465 2.422a4.89 4.89 0 0 0 1.153 1.767 4.901 4.901 0 0 0 1.77 1.15c.636.248 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.217 2.426-.464a4.901 4.901 0 0 0 1.77-1.15 4.89 4.89 0 0 0 1.154-1.768c.247-.635.416-1.36.465-2.422.048-1.064.06-1.404.06-4.113 0-2.71-.012-3.05-.06-4.114-.049-1.062-.218-1.787-.465-2.422a4.89 4.89 0 0 0-1.153-1.767 4.901 4.901 0 0 0-1.77-1.15c-.637-.247-1.363-.416-2.427-.464-1.067-.049-1.407-.06-4.122-.06m0 1.797c2.67 0 2.985.01 4.04.058.974.045 1.503.207 1.856.344.466.181.8.397 1.15.746.349.35.566.682.747 1.147.137.352.3.88.344 1.853.048 1.052.058 1.368.058 4.032 0 2.664-.01 2.98-.058 4.031-.044.973-.207 1.501-.344 1.853a3.09 3.09 0 0 1-.748 1.147c-.35.35-.683.565-1.15.746-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.746 3.09 3.09 0 0 1-.747-1.147c-.137-.352-.3-.88-.344-1.853-.049-1.052-.059-1.367-.059-4.031 0-2.664.01-2.98.059-4.032.044-.973.207-1.501.344-1.853a3.09 3.09 0 0 1 .748-1.147c.35-.349.682-.565 1.149-.746.352-.137.882-.3 1.856-.344 1.054-.048 1.37-.058 4.04-.058"></path>
                  <path d="M11.997 15.342a3.329 3.329 0 0 1-3.332-3.325 3.329 3.329 0 0 1 3.332-3.326 3.329 3.329 0 0 1 3.325 3.326 3.329 3.329 0 0 1-3.325 3.325m0-1.778a1.546 1.546 0 1 0 0 3.093 1.546 1.546 0 0 0 0-3.093"></path>
                  <path d="M13.499 8.017a1.013 1.013 0 1 1-1.014-1.013 1.013 1.013 0 0 1 1.014 1.013"></path>
                </svg>
              </a>
            </li>
            <li style={{ marginRight: '20px' }}>
              <a
                className="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase"
                title="Twitter"
                aria-label="Twitter"
                target="_blank"
                rel="nofollow noopener"
                href="https://twitter.com/imdb"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ipc-icon ipc-icon--twitter"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M19.633 6.503a7.719 7.719 0 0 1-2.21.605 3.863 3.863 0 0 0 1.68-2.14 7.806 7.806 0 0 1-2.415.921 3.885 3.885 0 0 0-6.632 3.54A11.035 11.035 0 0 1 3.265 5.6a3.83 3.83 0 0 0 1.209 5.161 3.846 3.846 0 0 1-1.759-.486v.05c0 2.059 1.46 3.767 3.404 4.164a3.826 3.826 0 0 1-1.008.134c-.247 0-.486-.024-.72-.069a3.895 3.895 0 0 0 3.634 2.709 7.776 7.776 0 0 1-4.783 1.649c-.309 0-.615-.017-.916-.052a11.003 11.003 0 0 0 5.949 1.748c7.136 0 11.036-5.903 11.036-10.995 0-.17-.004-.338-.011-.504a7.871 7.871 0 0 0 1.926-2.01l.003-.002z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                className="ipc-icon-link ipc-icon-link--baseAlt ipc-icon-link--onBase"
                title="Facebook"
                aria-label="Facebook"
                target="_blank"
                rel="nofollow noopener"
                href="https://facebook.com/imdb"
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ipc-icon ipc-icon--facebook"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path d="M9.197 21V12.67H6v-3.2h3.197V6.96c0-2.687 1.44-4.16 3.883-4.16 1.127 0 2.306.197 2.306.197v2.53h-1.296c-1.278 0-1.68.798-1.68 1.618v1.926h3.12l-.498 3.2h-2.622V21"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div style={boxStyle}>
          <div style={qrCodeContainerStyle}>
            <div style={textContainerStyle}>
              <div>Get the IMDb app</div>
              <div>For Android and iOS</div>
            </div>
            <div style={qrCodeStyle}>
              {/* Replace this with an actual QR code image */}
              QR Code
            </div>
          </div>
        </div>
      </div>
      <ul style={navStyle}>
        <li><a href="#" style={navItemStyle}>Help</a></li>
        <li><a href="#" style={navItemStyle}>Site Index</a></li>
        <li><a href="#" style={navItemStyle}>Privacy Policy</a></li>
        <li><a href="#" style={navItemStyle}>Contact Us</a></li>
        <li><a href="#" style={navItemStyle}>About Us</a></li>
        <li><a href="#" style={navItemStyle}>FPT Aptech</a></li>
        <li><a href="#" style={navItemStyle}>Press Room</a></li>
        <li><a href="#" style={navItemStyle}>Advertising</a></li>
        <li><a href="#" style={navItemStyle}>Jobs</a></li>
        <li><a href="#" style={navItemStyle}>Conditions of Use</a></li>
        <li><a href="#" style={navItemStyle}>Your Ads Privacy Choices</a></li>
      </ul>
      <p style={copyrightStyle}>
        © 1990-2024 by IMDb.com, Inc.
      </p>
    </div>
  );
}

export default Footer;