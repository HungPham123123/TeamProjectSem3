import React from 'react';

function Shop() {
  return (
    <>
      <nav style={navContainerStyle}>
        <ul style={navMenuStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MUSIC</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MOVIE</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>GAME</a></li>
        </ul>
      </nav>

      <div style={shopContainerStyle}>
        <aside  style={sidebarStyle}>
          <h3 style={sidebarHeadingStyle}>CATEGORIES</h3>
          <ul style={categoryListStyle}>
            {['Scary', 'Action', 'Scary', 'Scary', 'Scary', 'Scary'].map((category, index) => (
              <li key={index} style={categoryItemStyle}>
                <input type="checkbox" />
                <span style={{ marginLeft: '8px' }}>{category}</span>
              </li>
            ))}
          </ul>
          <h3 style={sidebarHeadingStyle}>PRICE FILTER</h3>
          <input type="range" min="10" max="60" style={priceFilterStyle} />
        </aside>

        <section style={productGridStyle}>
          {products.map((product, index) => (
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
      </div>
    </>
  );
}

const products = [
  { name: 'STARBOY', price: '19.99$', image: 'path/to/image.jpg', outOfStock: false, onSale: false },
  { name: 'OUT OF STOCK', price: '19.99$', image: 'path/to/image.jpg', outOfStock: true, onSale: false },
  { name: 'STARBOY', price: '11.99$', originalPrice: '19.99$', image: 'path/to/image.jpg', outOfStock: false, onSale: true },
];

const navContainerStyle = {
  backgroundColor: '#1C1C27',
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
};

const sidebarStyle = {
  width: '250px',
  marginRight: '20px',
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
};

const productCardStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  position: 'relative',
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

export default Shop;
