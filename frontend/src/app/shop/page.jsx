import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Shop.css';
import cuaHangBangDia from '../../img/cua_hang_bang_dia_goc_available_now_332f289aeaf346c3a5c9e3f7361a414b_master.png';

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
      <div className="text-center mb-4">
        <img
          src={cuaHangBangDia}
          alt="Cửa hàng băng đĩa"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="row">
        <div className="col-md-3" style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
          <h4 style={{ fontSize: '16px', marginBottom: '15px', color: '#b30000', fontWeight: 'bold', borderLeft: '4px solid #b30000', paddingLeft: '10px' }}>
            Thể Loại
          </h4>
          <ul className="list-unstyled">
            {categories.map((item, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center mb-2" style={{ borderBottom: '1px solid #b30000', paddingBottom: '5px' }}>
                <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>{item}</a>
                <span style={{ color: '#999', fontWeight: 'bold' }}>15</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 text-center">
            <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>NOW PLAYING</h4>
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

        <div className="col-md-9">
          <div className="row mt-3">
            {products.map((product, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card">
                  <img src={product.img} className="card-img-top" alt={product.title} />
                  <div className="card-body text-center">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text" style={{ fontWeight: 'bold' }}>{product.price} đ</p>
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
