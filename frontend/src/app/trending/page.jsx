"use client";


import React, { useState } from 'react';

function Trending() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <div style={pageStyle}>
      <nav style={navContainerStyle}>
        <ul style={navMenuStyle}>
          <li style={navItemStyle}><a href="#" style={linkStyle}>TRENDING</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MUSIC</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>MOVIE</a></li>
          <li style={navItemStyle}><a href="#" style={linkStyle}>GAME</a></li>
        </ul>
      </nav>

      <div style={heroImageStyle}>
        <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2023/03/Gaming_Arcade_Girl_Wallpaper2-1024x576-1.jpg" alt="Hero" style={imageStyle} />
        <div style={overlayStyle}>
          <h2 style={textStyle}>MUSIC</h2>
          <h1 style={titleStyle}>NEXT GENERATION OF </h1>
          <h1 style={titleStyle}>MUSIC INDUSTRY</h1>
          <button style={buttonStyle}>READ MORE</button>
        </div>
      </div>

      <h1 style={styles.title}>
        TRENDING
        <span style={styles.titleAfter}></span>
      </h1>

      <div style={cardsContainerStyle}>
        {currentProducts.map((product, index) => (
          <div key={index} style={cardStyle}>
            <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
            <div style={cardContentStyle}>
              <h3 style={cardTitleStyle}>TRENDING</h3>
              <div style={cardRatingStyle}>
                <span style={starStyle}>⭐️</span>
                <span>8.8</span>
              </div>
              <p style={cardDescriptionStyle}>5 New Comedies to Watch</p>
            </div>
          </div>
        ))}
      </div>

      <div style={dividerContainerStyle}>
  <div style={lineStyle}></div>
  <button style={viewMoreButtonStyle}>View More</button>
  <div style={lineStyle}></div>
</div>

<div style={sectionContainerStyle}>
  <div style={musicSectionStyle}>
    <h2 style={musicTitleStyle}>MUSIC</h2>
    <div style={underlineStyle}></div>
  </div>

  <div style={cardsContainerStyle}>
  {currentProducts.slice(0, 3).map((product, index) => (
      <div key={index} style={cardStyle}>
        <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
        <div style={cardContentStyle}>
          <h3 style={cardTitleStyle}>TRENDING</h3>
          <div style={cardRatingStyle}>
            <span style={starStyle}>⭐️</span>
            <span>8.8</span>
          </div>
          <p style={cardDescriptionStyle}>5 New Comedies to Watch</p>
        </div>
      </div>
    ))}
  </div>
</div>

<div style={sectionContainerStyle}>
  <div style={musicSectionStyle}>
    <h2 style={musicTitleStyle}>MOVIE</h2>
    <div style={underlineStyle}></div>
  </div>

  <div style={cardsContainerStyle}>
  {currentProducts.slice(0, 3).map((product, index) => (
      <div key={index} style={cardStyle}>
        <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
        <div style={cardContentStyle}>
          <h3 style={cardTitleStyle}>TRENDING</h3>
          <div style={cardRatingStyle}>
            <span style={starStyle}>⭐️</span>
            <span>8.8</span>
          </div>
          <p style={cardDescriptionStyle}>5 New Comedies to Watch</p>
        </div>
      </div>
    ))}
  </div>
</div>

<div style={sectionContainerStyle}>
  <div style={musicSectionStyle}>
    <h2 style={musicTitleStyle}>GAME</h2>
    <div style={underlineStyle}></div>
  </div>

  <div style={cardsContainerStyle}>
  {currentProducts.slice(0, 3).map((product, index) => (
      <div key={index} style={cardStyle}>
        <img src="https://via.placeholder.com/250" alt="Product" style={cardImageStyle} />
        <div style={cardContentStyle}>
          <h3 style={cardTitleStyle}>TRENDING</h3>
          <div style={cardRatingStyle}>
            <span style={starStyle}>⭐️</span>
            <span>8.8</span>
          </div>
          <p style={cardDescriptionStyle}>5 New Comedies to Watch</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
  );
}

const sectionContainerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  margin: '20px 0',
  padding: '0 20px',
};

const musicSectionStyle = {
  flex: 1,
  maxWidth: '200px',
  display: 'flex',            // Sử dụng Flexbox
  flexDirection: 'column',    // Đặt hướng theo cột
  alignItems: 'center',       // Căn giữa theo chiều ngang
  marginTop: '100px', // Thêm khoảng cách trên để dịch xuống dưới
  paddingLeft: '55px', // Điều chỉnh giá trị này để dịch sang bên phải
};  

const musicTitleStyle = {
  fontSize: '24px',
  fontWeight: '1000',
  color: '#FFF',
  textTransform: 'uppercase',
  margin: '0',
  paddingLeft: '0', // Đặt lại paddingLeft thành 0
  marginBottom: '5px', // Thêm khoảng cách giữa tiêu đề và đường gạch chân
};

const underlineStyle = {
  width: '30px', // Giữ nguyên chiều rộng này
  height: '4px',
  backgroundColor: 'purple',
  marginTop: '0', // Đặt marginTop thành 0 để gạch chân nằm sát ngay dưới tiêu đề
  marginLeft: '-45px', // Điều chỉnh giá trị này để di chuyển sang trái   
};




const dividerContainerStyle = {
  display: 'flex',
  alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
  justifyContent: 'space-between', // Căn đều khoảng cách giữa các phần tử
};

const lineStyle = {
  flex: 1, // Chiếm không gian còn lại
  height: '1px', // Độ dày của đường kẻ
  backgroundColor: '#555', // Màu của đường kẻ
};

// Khung nút View More
const viewMoreButtonStyle = {
  backgroundColor: 'black', // Đổi màu nền thành màu đen
  color: 'rgba(255, 255, 255, 0.5)', // Màu chữ vẫn là trắng mờ
  border: '1px solid #555',
  borderRadius: '20px',
  padding: '7px 35px', // Tăng padding bên trái và bên phải để làm cho khung chữ dài hơn
  margin: '0', // Đảm bảo không có margin
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontSize: '10px', // Giảm kích cỡ chữ xuống 10px
};





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
}

const heroImageStyle = {
  position: 'relative',
  width: '100%',
  height: '500px',
  overflow: 'hidden',
  backgroundColor: '#000000',
  marginBottom: '60px', // Thêm khoảng cách giữa tiêu đề và phần hero
};

const imageStyle = {
  width: '90%',
  height: '90%',
  objectFit: 'cover',
  marginLeft: 'auto', // Đẩy ảnh sang bên phải
  display: 'block' // Đảm bảo ảnh không bị giãn ra toàn bộ chiều ngang
};


const overlayStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: '#FFF',
  padding: '200px',     // Giảm padding để dịch vào trong ảnh
  textAlign: 'left',
};


const textStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const titleStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  margin: '10px 0',
};

const buttonStyle = {
  backgroundColor: '#FFF',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const pageStyle = {
  padding: '20px',
  backgroundColor: '#1c1c1c',
};

const navContainerStyle = {
  backgroundColor: '#262146',
  padding: '16px 0',
  maxWidth: '1000px',
  margin: '40px 180px 100px',
  borderRadius: '12px',
};

const navMenuStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  margin: '0 15px',
};

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Đổi từ 'space-around' thành 'center' để căn giữa
  flexWrap: 'wrap',
  margin: '20px 0',
  gap: '20px', // Khoảng cách giữa các thẻ
};

const cardStyle = {
  width: '250px',
  height: '270px',
  backgroundColor: '#1c1c1e',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '10px', // Có thể giữ lại nếu bạn muốn khoảng cách giữa các card
  color: '#FFF',
};


const cardImageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '8px',           // Giảm padding để nội dung sát hơn
  borderRadius: '5px',       // Đặt bo góc cho viền
  marginTop: '0px',          // Đặt marginTop thành 0 để gần sát hình ảnh
  backgroundColor: '#1c1c1c', // Đặt màu nền tối hơn để dễ đọc chữ
  marginLeft: '-7px', // Dịch sang bên trái 10px
};



const cardTitleStyle = {
  fontSize: '11px',
  fontWeight: 'bold',
  margin: '5px 0',
  color: '#ff4c4c',
  marginTop: '-5px',
};

const cardRatingStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px',
  fontSize: '12px', // Giảm kích cỡ chung cho cả biểu tượng sao và số đánh giá
  marginTop: '-5px',
};

const starStyle = {
  marginRight: '5px',
  color: '#ffcc00',
  fontSize: '12px', // Giảm riêng kích cỡ biểu tượng sao
  marginTop: '-5px',
};


const cardDescriptionStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '5px 0',
};

const styles = {
  title: {
    fontSize: '32px', // Tăng kích thước chữ lên 36px
    fontWeight: 'bold', // Vẫn in đậm
    marginBottom: '60px', // Khoảng cách giữa tiêu đề và phần hero
    textTransform: 'uppercase',
    position: 'relative',
    textAlign: 'center', // Căn giữa văn bản
    color: '#ffffff', // Màu chữ trắng
  },
  titleAfter: {
    content: '""',
    display: 'block',
    width: '30px', // Kích thước đường gạch chân
    height: '4px',
    backgroundColor: 'purple', // Màu của đường gạch chân
    margin: '10px auto',
  },
};




export default Trending;

"use client";

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import axios from "@/utils/axios";

const Shop = () => {
  const [sortOption, setSortOption] = useState('default');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/Products');
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <main
      className="relative flex-grow"
      style={{ minHeight: "-webkit-fill-available" }}
    >
      <div className="flex justify-center relative bg-borderBottom transition duration-200 ease-in py-4">
      </div>
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
        <div className="flex pt-8 pb-16 lg:pb-20">
          <div className="flex-shrink-0 ltr:pr-24 rtl:pl-24 hidden lg:block w-96">
            <div style={{ position: "relative", top: 0 }}>
              <div className="pb-7">
                <div className="flex items-center chawkbazarBreadcrumb">
                  <ol className="flex items-center w-full overflow-hidden">
                    <li className="text-sm text-body px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-heading">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="text-base text-body mt-0.5">/</li>
                    <li className="text-sm text-body px-2.5 transition duration-200 ease-in ltr:first:pl-0 rtl:first:pr-0 ltr:last:pr-0 rtl:last:pl-0 hover:text-heading">
                      <Link
                        className="capitalize font-semibold text-heading"
                        href="/search"
                      >
                        Search
                      </Link>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="pt-1">
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <div className="flex items-center justify-between mb-2.5">
                    <h2 className="font-semibold text-heading text-xl md:text-2xl">
                      Filters
                    </h2>
                    <button
                      className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
                      aria-label="Clear All"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap -m-1.5 pt-2">
                    <div className="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                      t-shit-shirtrt
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="text-sm text-body ltr:ml-2 rtl:mr-2 flex-shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                    Category
                  </h3>
                  <div className="mt-2 flex flex-col space-y-4">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="woman"
                        defaultValue="woman"
                      />
                      <span className="ms-4 -mt-0.5">Music</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="man"
                        defaultValue="man"
                      />
                      <span className="ms-4 -mt-0.5">Movie</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="watch"
                        defaultValue="watch"
                      />
                      <span className="ms-4 -mt-0.5">Game</span>
                    </label>

                  </div>
                </div>
                <div className="block border-b border-gray-300 pb-7 mb-7">
                  <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                    Price
                  </h3>
                  <div className="mt-2 flex flex-col space-y-4">
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="under $50"
                        defaultValue="0-50"
                      />
                      <span className="ms-4 -mt-0.5">Under $50</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$50 to $100"
                        defaultValue="50-100"
                      />
                      <span className="ms-4 -mt-0.5">$50 to $100</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$100 to $150"
                        defaultValue="100-150"
                      />
                      <span className="ms-4 -mt-0.5">$100 to $150</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$150 to $200"
                        defaultValue="150-200"
                      />
                      <span className="ms-4 -mt-0.5">$150 to $200</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$200 to $300"
                        defaultValue="200-300"
                      />
                      <span className="ms-4 -mt-0.5">$200 to $300</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$300 to $500"
                        defaultValue="300-500"
                      />
                      <span className="ms-4 -mt-0.5">$300 to $500</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="$500 to $1000"
                        defaultValue="500-1000"
                      />
                      <span className="ms-4 -mt-0.5">$500 to $1000</span>
                    </label>
                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="over $1000"
                        defaultValue="1000-"
                      />
                      <span className="ms-4 -mt-0.5">Over $1000</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ltr:lg:-ml-9 rtl:lg:-mr-9 ml-9">
            <div className="flex justify-between items-center mb-7">
              <h1 className="text-heading text-2xl font-bold hidden lg:inline-flex pb-1">
                Casual Wear
              </h1>
              <div className="flex items-center justify-end">
                <div className="flex-shrink-0 text-body text-xs md:text-sm leading-4 ltr:pr-4 rtl:pl-4 ltr:md:mr-6 rtl:md:ml-6 ltr:pl-2 rtl:pr-2 hidden lg:block">
                  9,608 items
                </div>
                <div className="relative ltr:ml-2 ltr:lg:ml-0 rtl:lg:mr-0 z-10 min-w-[180px]">
                  <select
                    className="border border-gray-300 text-heading text-[13px] md:text-sm font-semibold relative w-full py-2 ltr:pl-3 rtl:pr-3 ltr:pr-10 rtl:pl-10 ltr:text-left rtl:text-right bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="default">Sorting Options</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
              {products.map((product) => (
                <Link
                  key={product.productId}
                  href={`/product/${product.productId}`}
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white"
                  role="button"
                  title={product.title}
                >
                  <div className="flex mb-3 md:mb-3.5">
                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
                      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
                        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
                      </span>
                      <img alt={product.title} src={product.image1} className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                    </span>
                  </div>
                  <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                    <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                      {product.title}
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      {product.biography}
                    </p>
                    <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">
                      <span className="inline-block">${product.price.toFixed(2)}</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        {product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : ''}
                      </del>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center pt-8 xl:pt-14">
              <button
                data-variant="slim"
                className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  h-11 md:h-12 px-5 bg-black text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-8 md:px-16 2xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
          <div className="lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0">
            <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5">
              Get Expert Tips In Your Inbox
            </h3>
            <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
              Subscribe to our newsletter and stay updated.
            </p>
          </div>
          <form className="flex-shrink-0 w-full sm:w-96 md:w-[545px]" noValidate="">
            <div className="flex flex-col sm:flex-row items-start justify-end">
              <div className="w-full">
                <input
                  id="subscription_email"
                  name="subscription_email"
                  type="email"
                  placeholder="Write your email here"
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white rounded-md"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <button
                data-variant="flat"
                className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0"
              >
                <span className="lg:py-0.5">Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="Toastify" />
    </main>

  );
};
