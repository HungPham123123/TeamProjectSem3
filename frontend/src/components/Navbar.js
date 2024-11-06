"use client"; // This directive tells Next.js that this component is a client component

import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap Icons are imported
import { FaSmile } from 'react-icons/fa';
import LoginPages from './login';
import Link from 'next/link';


function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header
        id="siteHeader"
        className="relative z-20 w-full h-16 sm:h-20 lg:h-24 is-scrolling"
      >
        <div className="fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6">
          <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
            <Link className="inline-flex focus:outline-none" href="/">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: 95,
                  height: 30,
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative"
                }}
              >
                <img
                  alt="Waves"
                  src="/img/website-name-black-theme.png"
                  decoding="async"
                  data-nimg="fixed"
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                  }}
                />
              </span>
            </Link>
            <nav className="headerMenu flex w-full relative hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10">
              <div className="menuItem group cursor-pointer py-7 ">
                <Link
                  className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
                  href="/shop"
                >
                  Shops
                </Link>
              </div>
            </nav>
            <div className="flex-shrink-0 ltr:ml-auto rtl:mr-auto ltr:lg:mr-5 rtl:lg:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10">
              <div className="relative ltr:ml-2 rtl:mr-2 ltr:lg:ml-0 rtl:lg:mr-0 z-10 w-[130px] sm:w-[130px] lg:w-[130px] xl:w-[130px] mr-3">
                <button
                  className="border border-gray-300 text-heading text-[13px] xl:text-sm font-semibold relative w-full py-2 ltr:pl-3 rtl:pr-3 ltr:pr-7 rtl:pl-7 ltr:text-left rtl:text-right bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 cursor-pointer"
                  id="headlessui-listbox-button-:r1:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <span className="">
                    <span className="ltr:mr-1.5 rtl:ml-1.5">
                    </span>{" "}
                    English - EN
                  </span>

                </button>
              </div>
            </div>
            <div className="items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto">
              <button
                className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
                aria-label="search-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17px"
                  height="18px"
                  viewBox="0 0 18.942 20"
                  className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                >
                  <path
                    d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                    transform="translate(-367.297 -371.285)"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              <div className="-mt-0.5 flex-shrink-0">
                <button className="text-sm font-semibold xl:text-base text-heading" onClick={toggleLoginModal}>
                  Sign In
                </button>
              </div>
              <button
                className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
                aria-label="cart-button"
                onClick={toggleCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 20 20"
                  className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                >
                  <path
                    d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
                    transform="translate(-2 -2)"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-2.5 xl:-top-3 rounded-full ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 font-bold">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>


      <>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={toggleCart}
        />

        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ width: 378 }}
        >
          <div className="rc-drawer-content" aria-modal="true" role="dialog">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="w-full flex justify-between items-center pl-5 relative ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 py-0.5 border-b border-gray-100">
                <h2 className="m-0 text-xl font-bold md:text-2xl text-heading">
                  Shopping cart
                </h2>
                <button
                  onClick={toggleCart}
                  className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity md:px-6 lg:py-8 focus:outline-none hover:opacity-60"
                  aria-label="close"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-black mt-1 md:mt-0.5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                  </svg>
                </button>
              </div>

              <div
                data-overlayscrollbars-initialize=""
                className="os-theme-thin flex-grow w-full cart-scrollbar overflow-y-auto"
                data-overlayscrollbars="host"
              >
                <div className="w-full px-5 md:pr-7 ">
                  <div
                    className="group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0"
                    title="Maniac Red Boys"
                    style={{
                      opacity: 1,
                      transform: "none",
                      transformOrigin: "50% 50% 0px"
                    }}
                  >
                    <div className="relative flex flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-200 rounded-md cursor-pointer md:w-28 md:h-28 ltr:mr-4 rtl:ml-4 m-3">
                      <img
                        alt="Maniac Red Boys"
                        src="/img/album1.jpg"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="object-cover bg-gray-300"
                        style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%"
                        }}
                      />

                    </div>
                    <div className="flex flex-col w-full overflow-hidden">
                      <Link
                        className="truncate text-sm text-heading mb-1.5 -mt-1"
                        href="/products/maniac-red-boys"
                      >
                        The Weekend Limited Edition Album
                      </Link>
                      <span className="text-sm text-gray-400 mb-2.5">
                        Unit Price : &nbsp; $40.00
                      </span>
                      <div className="flex items-end justify-between">
                        <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 h-8 md:h-9 shadow-navigation bg-heading bg-black">
                          <button className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-9 text-white bg-heading hover:bg-gray-600">
                            -
                          </button>
                          <span className="font-semibold flex items-center justify-center h-full cursor-default text-sm text-white w-8 md:w-10 ">
                            1
                          </span>
                          <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-9 text-white bg-heading hover:bg-gray-600">
                            +
                          </button>
                        </div>
                        <span className="text-sm font-semibold leading-5 md:text-base text-heading">
                          $40.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 md:px-7 fixed bottom-0 w-full bg-white">
                <a
                  className="w-full px-5 py-3 md:py-4 flex items-center justify-center rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 bg-black hover:bg-gray-600"
                  href="/checkout"
                >
                  Proceed To Checkout
                </a>
              </div>
            </div>
          </div>
        </div>

      </>

      <>
        {isLoginOpen && <LoginPages closeModal={toggleLoginModal} />}
      </>


    </>
  );
}

export default Navbar;
