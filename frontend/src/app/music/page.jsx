"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Ensure you import Image

function Music() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  // Make sure you have an array named products defined somewhere
  const products = []; // Replace this with your actual products data
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPage = (page) => setCurrentPage(page);
  
  return (
    <div style={styles.container}> 
      <nav style={navContainerStyle}>
        <ul style={navMenuStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Pop</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Rock</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Jazz</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>Hip-Hop</a></li>
        </ul>
      </nav>

      {/* Pop Section */}
      <section id="pop" style={styles.section}>
        <h2 style={styles.sectionTitle}>Pop</h2>
        <div style={styles.cardContainer}>
          {[...Array(4)].map((_, i) => (
            <div key={i} style={styles.card}>
              <Image src="/placeholder-image.jpg" alt="Pop Music Item" width={200} height={150} />
              <p style={styles.cardLabel}>POP</p>
              <p style={styles.cardRating}>★ 8.5</p>
              <p style={styles.cardDescription}>Top Pop Albums</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rock Section */}
      <section id="rock" style={styles.section}>
        <h2 style={styles.sectionTitle}>Rock</h2>
        <div style={styles.cardContainer}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={styles.card}>
              <Image src="/placeholder-image.jpg" alt="Rock Music Item" width={200} height={150} />
              <p style={styles.cardLabel}>ROCK</p>
              <p style={styles.cardRating}>★ 9.0</p>
              <p style={styles.cardDescription}>Classic Rock Anthems</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jazz Section */}
      <section id="jazz" style={styles.section}>
        <h2 style={styles.sectionTitle}>Jazz</h2>
        <div style={styles.cardContainer}>
          {[...Array(3)].map((_, i) => (
            <div key={i} style={styles.card}>
              <Image src="/placeholder-image.jpg" alt="Jazz Music Item" width={200} height={150} />
              <p style={styles.cardLabel}>JAZZ</p>
              <p style={styles.cardRating}>★ 8.8</p>
              <p style={styles.cardDescription}>Smooth Jazz Hits</p>
            </div>
          ))}
        </div>
      </section>

      {/* Most Popular Artist Section */}
      <section id="popular-artist" style={styles.section}>
        <h2 style={styles.sectionTitle}>Most Popular Artist</h2>
        <div style={styles.artistContainer}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={styles.artistCard}>
              <div style={styles.artistImage}></div>
              <p style={styles.artistName}>Luis Damilton</p>
            </div>
          ))}
        </div>
      </section>

      {/* Most Popular Album Section */}
      <section id="popular-album" style={styles.section}>
        <h2 style={styles.sectionTitle}>Most Popular Album</h2>
        <div style={styles.albumContainer}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={styles.albumCard}>
              <div style={styles.albumImage}></div>
              <p style={styles.albumName}>Luis Damilton</p>
            </div>
          ))}
        </div>
      </section>
    </div> 
  );
}

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
};

const navItemStyle = {
  margin: '0 20px',
};

const navMenuStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const navContainerStyle = {
  backgroundColor: '#262146',
  padding: '16px 0',
  maxWidth: '1000px',
  margin: '40px 180px 100px',
  borderRadius: '12px'
};


const styles = {
  container: {
    backgroundColor: '#ffff',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    padding: '20px 0',
    textAlign: 'center',
  },
  
  sectionTitle: {
    fontSize: '20px',
    color: '#ff0055',
    marginBottom: '20px',
    textTransform: 'uppercase',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffff',
    padding: '15px',
    textAlign: 'center',
    borderRadius: '8px',
    width: '200px',
    minHeight: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  cardLabel: {
    fontSize: '12px',
    color: '#ff0055',
    fontWeight: 'bold',
  },
  cardRating: {
    color: '#ffcc00',
    fontSize: '14px',
    margin: '5px 0',
  },
  cardDescription: {
    fontSize: '13px',
    color: '#fff',
  },
  artistContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  artistCard: {
    textAlign: 'center',
    width: '150px',
  },
  artistImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    marginBottom: '10px',
  },
  artistName: {
    fontSize: '14px',
    color: '#fff',
    fontWeight: 'bold',
  },
  albumContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  albumCard: {
    textAlign: 'center',
    width: '150px',
  },
  albumImage: {
    width: '150px',
    height: '150px',
    backgroundColor: '#ccc',
    marginBottom: '10px',
  },
  albumName: {
    fontSize: '14px',
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default Music;
