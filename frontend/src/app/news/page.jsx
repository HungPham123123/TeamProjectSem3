"use client";

import React from 'react';
import Link from 'next/link'; // Đảm bảo bạn đã thêm dòng này

const NewsPage = () => {
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f4f4f9',
    },
    title: {
      fontSize: '36px',
      color: '#333',
      fontWeight: 'bold',
      marginBottom: '30px',
      textAlign: 'center',
    },
    newsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
    },
    newsCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.2s',
    },
    newsImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    newsContent: {
      padding: '15px',
    },
    newsTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '8px',
      cursor: 'pointer',
      textDecoration: 'none', // Thêm thuộc tính này để không có gạch chân
    },
    newsDate: {
      fontSize: '14px',
      color: '#777',
      marginBottom: '10px',
    },
    newsSummary: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.5',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '30px',
      textAlign: 'center',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  const newsArticles = [
    {
      title: 'Tin tức 1: Sự kiện nổi bật',
      date: '02/11/2024',
      summary: 'Một sự kiện quan trọng vừa diễn ra, thu hút nhiều sự quan tâm của công chúng...',
      image: 'https://i1-vnexpress.vnecdn.net/2017/06/12/IsuzumuX201621106c-1497249425-5691-1497249460.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=uqC3jmymZuWM5CPPxB6Dig',
      url: 'https://vnexpress.net/tag/dvd-10507', 
    },
    {
      title: 'Tin tức 2: Cập nhật thị trường',
      date: '01/11/2024',
      summary: 'Thị trường đang có nhiều biến động, với nhiều xu hướng mới xuất hiện...',
      image: 'https://i1-giaitri.vnecdn.net/2014/04/15/3-8959-1397526486.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=-5Jk-XbVDpaZ18dLvlpVuw',
      url: 'https://vnexpress.net/tag/dvd-10507',
    },
    {
      title: 'Tin tức 3: Khám phá công nghệ',
      date: '30/10/2024',
      summary: 'Công nghệ mới đã ra đời, hứa hẹn mang lại nhiều thay đổi cho cuộc sống...',
      image: 'https://cdn.tgdd.vn/Files/2023/04/19/1526461/netflixseguinhungchiecdvdcuoicungvaongay2992023-190423-090800-800-resize.jpg',
      url: 'https://www.thegioididong.com/tin-tuc/cuoi-cung-thi-netflix-cung-da-khai-tu-dich-vu-thue-phim-dvd-1526461', 
    },
  ];

  return (
    <main style={styles.wrapper}>
      <div style={styles.title}>TIN TỨC</div>

      <div style={styles.newsGrid}>
        {newsArticles.map((article, index) => (
          <div
            key={index}
            style={styles.newsCard}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={article.image} alt={article.title} style={styles.newsImage} />
            <div style={styles.newsContent}>
              <Link href={article.url} style={styles.newsTitle}>
                {article.title}
              </Link>
              <div style={styles.newsDate}>{article.date}</div>
              <div style={styles.newsSummary}>{article.summary}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Xem thêm tin tức
      </button>
    </main>
  );
};

export default NewsPage;
