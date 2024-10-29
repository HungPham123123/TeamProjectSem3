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
    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Vùng chứa ảnh sản phẩm và thông báo "Sale" hoặc "Out of Stock" */}
      <div style={productCardStyle}>
        {product.outOfStock && <div style={outOfStockStyle}>OUT OF STOCK</div>}
        {product.onSale && <div style={saleStyle}>Sale</div>}
        <img src={product.image} alt={product.name} style={productImageStyle} />
      </div>

      <div style={{ textAlign: 'left', marginTop: '10px', marginLeft: '-150px' }}>
  <h4 style={{ marginBottom: 0, fontSize: '20px', fontWeight: '800' }}>{product.name}</h4> {/* Tên sản phẩm in đậm */}
  <p style={priceStyle}> {/* Giá sản phẩm nằm dưới tên */}
    {product.onSale ? (
      <>
        <span style={originalPriceStyle}>{product.originalPrice}</span> {product.price}
      </>
    ) : (
      product.price
    )}
  </p>
</div>

    </div>
  ))}
</section>



<aside style={sidebarStyle}>
  <h3 style={sidebarHeadingStyle}>CATEGORIES</h3>
  <ul style={categoryListStyle}>
  {[
    { name: 'Scary', count: 1 },
    { name: 'Action', count: 12 },
    { name: 'Scary', count: 1 },
    { name: 'Scary', count: 1 },
    { name: 'Scary', count: 1 },
    { name: 'Scary', count: 1 }
  ].map((category, index) => (
    <li key={index} style={{ ...categoryItemStyle, padding: '5px 0' }}> 
      <input type="checkbox" />
      <span style={{ marginLeft: '8px', opacity: 0.6 }}>
        {category.name}
        <sup>{category.count}</sup>
      </span>
    </li>
  ))}
</ul>
          <h3 style={sidebarHeadingStyle}>PRICE FILTER</h3>
          <input type="range" min="10" max="60" style={priceFilterStyle} />
          <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <div style={{ margin: '20px' }}>
              <p >Price: 10 - 60</p>
              <button
  style={{
    padding: '3px 18px',          
    border: '1px solid #ddd',      
    backgroundColor: 'fff',
    cursor: 'pointer',
    color: '#333',                 
    fontSize: '14px',              
    fontWeight: 'bold',            
    boxShadow: 'none'              
  }}
>
  Filter
</button>

            </div>

            <div style={{ margin: '20px' }}>
              <h2 style={sidebarHeadingStyle}>Sale & Offers</h2>
              <input type="checkbox" id="sales" />
              <label htmlFor="sales">Sales<sup>1</sup></label>
            </div>

            <div style={{ margin: '20px' }}>
              <h2 style={sidebarHeadingStyle}>INSTAGRAM</h2>
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
              <h2 style={sidebarHeadingStyle}>FOLLOW US</h2>
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
  backgroundColor: '#262146',
  padding: '16px 0',
  maxWidth: '1000px',
  margin: '40px 180px 100px',
  borderRadius: '12px'
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
  backgroundColor: 'white'
};

const sidebarStyle = {
  width: '250px',
};

const sidebarHeadingStyle = {
  fontSize: '24px', // Tăng kích thước chữ
  fontWeight: '800', // In đậm
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
  width: '100%',         // Độ rộng thanh kéo
  appearance: 'none',    // Loại bỏ kiểu mặc định để có thể tùy chỉnh
  outline: 'none',
  // Định dạng cho thanh kéo (track)
  backgroundColor: '#ddd',
  height: '4px',         // Độ dày của thanh kéo mỏng lại
  borderRadius: '5px',
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
  display: 'flex', // Sử dụng flexbox
  flexDirection: 'column', // Xếp các phần tử theo cột
  justifyContent: 'space-between', // Căn đều các phần
  border: '1px solid #ccc',
  padding: '16px',
  height: '220px', // Đặt chiều cao cố định nếu cần
  width: '250px',
  position: 'relative', // Cho các thẻ "Sale" và "Out of Stock"
};

const productInfoStyle = {
  position: 'absolute', // Đặt vị trí của tên và giá
  bottom: '16px', // Khoảng cách từ dưới lên
  left: '16px', // Khoảng cách từ trái vào
  right: '16px', // Khoảng cách từ phải vào
  textAlign: 'center',
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
  padding: '1px',
};

const saleStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'purple',
  color: 'white',
  padding: '1px',
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