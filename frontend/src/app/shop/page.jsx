"use client";

import React, { useState } from 'react';

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPage = (page) => setCurrentPage(page);
  return (
    <>
      <nav style={navContainerStyle}>
        <ul style={navMenuStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MUSIC</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MOVIE</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>GAME</a></li>
        </ul>
      </nav>

      <div className="results-header" style={resultsHeaderStyle}>
  <div>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} of {products.length} results</div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div className="sort-dropdown" style={sortDropdownStyle}>Sort by Default ▼</div>
  </div>
</div>

      <div style={shopContainerStyle}>
        <section style={productGridStyle}>
          {currentProducts.map((product, index) => (
            
            <div key={index} style={productCardStyle}>
              {product.outOfStock && <div style={outOfStockStyle}>OUT OF STOCK</div>}
              {product.onSale && <div style={saleStyle}>Sale</div>}
              <h4>{product.name}</h4>
              <p style={priceStyle}>
                {product.onSale ? (
                  <>
                    <span style={originalPriceStyle}>{product.originalPrice}</span> {product.price}
                  </>
                ) : (
                  product.price
                )}
              </p>
            </div>
          ))}
        </section>

        <aside style={sidebarStyle}>
          <h3 style={sidebarHeadingStyle}>CATEGORIES</h3>
          <ul style={categoryListStyle}>
            {['Scary', 'Action', 'Adventure', 'Romantic'].map((category, index) => (
              <li key={index} style={categoryItemStyle}>
                <input type="checkbox" />
                <span style={{ marginLeft: '8px' }}>{category}</span>
              </li>
            ))}
          </ul>

          <h3 style={sidebarHeadingStyle}>PRICE FILTER</h3>
          <input type="range" min="10" max="60" style={priceFilterStyle} />
          <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <div style={{ margin: '20px' }}>
              <p>Price: 10 - 60</p>
              <button style={{ padding: '5px 10px', border: '1px solid #000', backgroundColor: '#fff', cursor: 'pointer' }}>
                Filter
              </button>
            </div>

            <div style={{ margin: '20px' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Sale & Offers</h2>
              <input type="checkbox" id="sales" />
              <label htmlFor="sales">Sales<sup>1</sup></label>
            </div>

            <div style={{ margin: '20px' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>INSTAGRAM</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
                <img src="https://via.placeholder.com/100" alt="Image 1" style={productImageStyle} />
                <img src="https://via.placeholder.com/100" alt="Image 2" style={productImageStyle} />
                <img src="https://via.placeholder.com/100" alt="Image 3" style={productImageStyle} />
                <img src="https://via.placeholder.com/100" alt="Image 4" style={productImageStyle} />
                <img src="https://via.placeholder.com/100" alt="Image 5" style={productImageStyle} />
                <img src="https://via.placeholder.com/100" alt="Image 6" style={productImageStyle} />
              </div>
            </div>

            <div style={{ margin: '20px' }}>
              <h2 style={{ fontWeight: 'bold', fontSize: '1.5em' }}>FOLLOW US</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={iconStyle}>Icon</div>
                <div style={iconStyle}>Icon</div>
                <div style={iconStyle}>Icon</div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </>
  );
}

const products = Array.from({ length: 36 }, (_, i) => ({
  name: `Product ${i + 1}`,
  price: `${(i + 1) * 10}$`,
  originalPrice: `${(i + 1) * 12}$`,
  outOfStock: i % 5 === 0,
  onSale: i % 3 === 0,
}));

function Pagination({ currentPage, totalPages, goToPage }) {
  const paginationStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
  };

  const pageStyle = (page) => ({
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: page === currentPage ? 'purple' : 'transparent',
    color: page === currentPage ? 'white' : 'black',
    borderRadius: '4px',
    cursor: 'pointer',
    border: '1px solid #ddd',
  });

  return (
    <div style={paginationStyle}>
      {[...Array(totalPages)].map((_, index) => (
        <div
          key={index}
          style={pageStyle(index + 1)}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <span
        style={{ cursor: 'pointer', fontSize: '24px' }}
        onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
      >
        →
      </span>
    </div>
  );
}

const navContainerStyle = {
  backgroundColor: '#3A3A49',
  padding: '10px 0',
  maxWidth: '1000px',
  margin: '40px auto 0',
};

const navMenuStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  margin: '0 20px',
};

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
};

const shopContainerStyle = {
  display: 'flex',
  maxWidth: '1200px',
  margin: '20px auto',
  gap: '20px',
};

const sidebarStyle = {
  width: '250px',
};

const sidebarHeadingStyle = {
  fontSize: '18px',
  marginBottom: '10px',
};

const categoryListStyle = {
  listStyleType: 'none',
  padding: 0,
};

const categoryItemStyle = {
  marginBottom: '5px',
};

const priceFilterStyle = {
  width: '100%',
  marginTop: '10px',
};

const productGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  flex: 1,
  borderTop: '2px solid #ccc', // Đường kẻ trên đầu
  paddingTop: '20px', // Khoảng cách với phần nội dung bên trong
};


const productCardStyle = {
  border: '1px solid #ddd',
  padding: '5px',
  position: 'relative',
  textAlign: 'center',
  fontSize: '14px',
  width: '200px',
  height: '200px',
  overflow: 'hidden',
  margin: '10px auto',
};

const productImageStyle = {
  width: '100%',
  height: 'auto',
};

const outOfStockStyle = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  backgroundColor: 'black',
  color: 'white',
  padding: '5px',
};

const saleStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'purple',
  color: 'white',
  padding: '5px',
};

const priceStyle = {
  fontSize: '16px',
  marginTop: '10px',
};

const originalPriceStyle = {
  textDecoration: 'line-through',
  marginRight: '5px',
};

// In the resultsHeaderStyle, change justifyContent
const resultsHeaderStyle = {
  display: 'flex',
  justifyContent: 'flex-start', // Change this to flex-start
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '20px auto',
};

// Add margin to sortDropdownStyle
const sortDropdownStyle = {
  cursor: 'pointer',
  marginLeft: '600px', // Adjust this value as needed for spacing
};

const iconStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: '#ddd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Shop;