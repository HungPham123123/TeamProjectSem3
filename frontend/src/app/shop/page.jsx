"use client";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Shop.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Shop = () => {
  const categories = [
    "+84 INDIE CITY", "HÀ TRẦN COLLECTION", "AVAILABLE NOW",
    "ẤN BẢN THỜI ĐẠI", "ẤN BẢN CÓ CHỮ KÝ", "AUDIO",
    "SẢN PHẨM MỚI", "LIFESTYLE", "STAFF PICKS", "PRE-ORDER",
    "CD / DVD", "ĐĨA THAN / VINYL", "BĂNG CASSETTE",
    "BĂNG CỐI", "ĐĨA ĐƠN / SINGLE", "MERCH",
    "SÁCH / BOOK", "TRENDING", "SALE"
  ];

  const products = [
    { title: "Lập Lòe Tour 2020", price: "350,000", img: "https://via.placeholder.com/150" },
    { title: "Special Package - Out of This World", price: "500,000", img: "https://via.placeholder.com/150" },
    { title: "Blocbob Card", price: "430,000", img: "https://via.placeholder.com/150" },
    { title: "Coldplay - Music of the Spheres", price: "390,000", img: "https://via.placeholder.com/150" },
    { title: "Phoebe Bridgers - Stranger in the Alps", price: "300,000", img: "https://via.placeholder.com/150" },
    { title: "Mac DeMarco - Salad Days", price: "350,000", img: "https://via.placeholder.com/150" },
    { title: "Aaliyah - Aaliyah", price: "390,000", img: "https://via.placeholder.com/150" },
    { title: "Solange - When I Get Home", price: "350,000", img: "https://via.placeholder.com/150" },
    { title: "The Weeknd - After Hours", price: "450,000", img: "https://via.placeholder.com/150" },
    { title: "Taylor Swift - 1989 (Taylor's Version)", price: "500,000", img: "https://via.placeholder.com/150" },
    { title: "Billie Eilish - Happier Than Ever", price: "420,000", img: "https://via.placeholder.com/150" },
    { title: "Daft Punk - Random Access Memories", price: "400,000", img: "https://via.placeholder.com/150" },
    { title: "Adele - 25", price: "450,000", img: "https://via.placeholder.com/150" },
    { title: "Bruno Mars - 24K Magic", price: "380,000", img: "https://via.placeholder.com/150" },
    { title: "Lana Del Rey - Born to Die", price: "370,000", img: "https://via.placeholder.com/150" },
    { title: "Kanye West - Donda", price: "490,000", img: "https://via.placeholder.com/150" }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const paginationStyle = {
    marginBottom: '1em',
    display: 'block',
    borderTop: '1px solid #50222b',
    padding: '8px 10px',
  };

  const pageStyle = {
    margin: '0 5px',
    display: 'inline-block',
    fontWeight: 'bold',
    color: '#50222b',
  };

  const currentPageStyle = {
    ...pageStyle,
    color: 'white',
    backgroundColor: '#50222b',
    borderRadius: '4px',
    padding: '4px 8px',
  };

  const decoStyle = {
    color: '#999',
    margin: '0 5px',
  };

  const nextStyle = {
    fontWeight: 'bold',
  };

  return (
    <div className="container-fluid">
      {/* Breadcrumb Section */}
      <nav className="breadcrumb" role="navigation" aria-label="breadcrumbs" style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0',
        marginBottom: '1rem',
        fontSize: '14px',
        listStyle: 'none',
        backgroundColor: 'transparent',
        borderRadius: '0',
      }}>
        <div className="inner" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '15px 30px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          width: '100%',
          maxWidth: '800px',
        }}>
          <a href="/" title="Quay lại trang chủ" style={{
            textDecoration: 'none',
            color: '#a2a2a2',
            fontWeight: 'bold',
            fontSize: '16px',
            fontStyle: 'italic',
          }}>Trang chủ</a>
          <span aria-hidden="true" style={{ margin: '0 10px' }}> / </span>
          <span style={{ fontStyle: 'italic', fontSize: '16px' }}>AVAILABLE NOW</span>
        </div>
      </nav>

      {/* Image Section */}
      <div className="text-center mb-4">
        <img
          src="https://file.hstatic.net/1000304920/collection/cua_hang_bang_dia_goc_available_now_332f289aeaf346c3a5c9e3f7361a414b_master.png"
          alt="Cửa hàng băng đĩa"
          style={{
            display: 'block',
            maxWidth: '1200px',
            height: 'auto',
            margin: '0 auto',
          }}
        />
      </div>

      <div className="row">
        {/* Categories Section */}
        <div className="col-md-3" style={{ padding: '45px' }}>
          <h4 style={{
            fontSize: '24px',
            marginBottom: '0',
            color: '#b30000',
            fontWeight: 'bold',
            borderLeft: '24px solid #d60000',
            paddingLeft: '10px'
          }}>
            Thể Loại
          </h4>
          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: '#b30000',
            marginTop: '28px',
          }}></div>

          <ul className="list-unstyled" style={{ padding: 0 }}>
            {categories.map((item, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center mb-1" style={{ borderBottom: '1px solid #b30000', paddingBottom: '5px', fontSize: '12px' }}>
                <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', display: 'block', padding: '7px 20px' }}>{item}</a>
                <span style={{ color: '#b30000', fontWeight: 'bold' }}>15</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 text-center">
            <h4 style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '14px' }}>NOW PLAYING</h4>
            <iframe
              src="https://open.spotify.com/embed/playlist/0lLgC9zfleQhs3l4CI1k8g"
              width="100%"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
              title="Now Playing"
            />
          </div>
        </div>

        {/* Sort and View Options Section */}
        <div className="col-md-9" style={{ padding: '40px' }}>
          <div className="collection__sort section-header">
            <div className="section-header__right">
              {/* Sorting Dropdown */}
              <div className="form-horizontal left">
              <label htmlFor="SortBy" style={{ fontWeight: 'bold', marginRight: '10px' }}>Sắp xếp bởi</label>
<select name="SortBy" id="SortBy" defaultValue="created-descending">
  <option value="manual">Đặc tính</option>
  <option value="best-selling">Bán chạy nhất</option>
  <option value="title-ascending">Theo thứ tự, A-Z</option>
  <option value="title-descending">Theo thứ tự, Z-A</option>
  <option value="price-ascending">Giá, từ thấp đến cao</option>
  <option value="price-descending">Giá, Từ cao đến thấp</option>
  <option value="created-descending">Ngày, mới đến cũ</option>
  <option value="created-ascending">Ngày, cũ đến mới</option>
</select>
              </div>
              <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: '#b30000',
            marginTop: '28px',
          }}>          
          </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="row mt-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-md-3 mb-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="card product-card"
                  style={{
                    border: 'none',
                    boxShadow: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img src={product.img} className="card-img-top" alt={product.title} />
                  <div className="card-body text-center">
                    <h6 className="card-title" style={{ fontSize: '14px' }}>{product.title}</h6>
                    <p className="card-text" style={{ fontWeight: 'bold', fontSize: '12px' }}>{product.price} đ</p>
                  </div>
                  <div
                    className="product-actions"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: hoveredIndex === index ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '10px',
                      color: '#fff',
                    }}
                  >
                    <a
                      className="btn wishlist awe-button product-quick-whistlist"
                      href="/account/login"
                      title="Add to wishlist"
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      <i className="fas fa-heart" style={{ marginTop: '90px' }}></i>
                    </a>
                    <span style={{ marginTop: '90px' }}>/</span>
                    <a
                      href="/collections/available-now/products/linkin-park-one-more-light-di-a-cd"
                      className="btn product-quick-view btn-quickview"
                      title="Quickview"
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      <i className="fas fa-eye" style={{ marginTop: '90px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div style={paginationStyle}>
            <span style={currentPageStyle}>1</span>
            <span style={pageStyle}><a href="/collections/available-now?page=2">2</a></span>
            <span style={pageStyle}><a href="/collections/available-now?page=3">3</a></span>
            <span style={decoStyle}>...</span>
            <span style={pageStyle}><a href="/collections/available-now?page=21">21</a></span>
            <span style={nextStyle}><a href="/collections/available-now?page=2">→</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;