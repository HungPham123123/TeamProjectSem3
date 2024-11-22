"use client";

import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaSmile } from 'react-icons/fa';
import axios from "@/utils/axios";
import LoginPages from './login';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Search from './search';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
  const [cart, setCart] = useState(null);
  const [productDetails, setProductDetails] = useState({}); // Store product details keyed by productId

  useEffect(() => {
    const tokenFromCookie = Cookies.get('token');
    setToken(tokenFromCookie);
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      fetchCartData();
    }
  }, [isCartOpen]);

  const fetchCartData = async () => {
    try {
      const response = await axios.get('/api/Cart');
      setCart(response.data);

      // Fetch product details for each cart item
      const productIds = response.data.cartItems.map(item => item.productId);
      const productRequests = productIds.map(id => axios.get(`/api/Products/${id}`));

      // Wait for all product requests to complete
      const productResponses = await Promise.all(productRequests);

      // Store the product details in state
      const products = productResponses.reduce((acc, response) => {
        acc[response.data.productId] = response.data;
        return acc;
      }, {});
      setProductDetails(products);
    } catch (error) {
      console.log("Error fetching cart data:", error);
    }
  };

  const handleDelete = async (item) => {
    try {
      await axios.delete(`/api/Cart/delete/${item.productId}`);
      fetchCartData();
    } catch (error) {
      console.log("Error deleting cart item:", error);
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      await axios.put('/api/Cart/update', { productId, quantity });
      fetchCartData();
    } catch (error) {
      console.log("Error updating cart item:", error);
    }
  };

  const handleQuantityChange = (item, delta) => {
    const newQuantity = item.quantity + delta;
    const product = productDetails[item.productId];

    if (newQuantity < 1) return;

    if (newQuantity > product?.stockQuantity) {
      alert(`Cannot add more than ${product?.stockQuantity} items. Only ${product?.stockQuantity} items are in stock.`);
      return;
    }

    setCart(prevCart => ({
      ...prevCart,
      cartItems: prevCart.cartItems.map(cartItem =>
        cartItem.cartItemId === item.cartItemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    }));
    updateCartItem(item.productId, newQuantity);
  };

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const toggleLanguagePopup = () => {
    setIsLanguagePopupOpen(!isLanguagePopupOpen);
  };

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const calculateCartTotal = () => {
    return cart?.cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <>
      {isSearchOpen && <Search onClose={toggleSearch} />}
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
              <div className="menuItem group cursor-pointer py-7 ">
                <Link
                  className="relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black"
                  href="/news"
                >
                  News
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
                  onClick={toggleLanguagePopup}
                >
                  <span className="">
                    <span className="ltr:mr-1.5 rtl:ml-1.5"></span>English - EN
                  </span>
                </button>
                {isLanguagePopupOpen && (
                  <ul
                    className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm z-50"
                    aria-labelledby="headlessui-listbox-button-:r1:"
                    aria-orientation="vertical"
                    id="headlessui-listbox-options-:r3:"
                    role="listbox"
                    tabIndex={0}
                    data-headlessui-state="open"
                  >
                    <li
                      className="text-gray-900 cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 focus:bg-gray-100"
                      id="headlessui-listbox-option-:r4:"
                      role="option"
                      tabIndex={-1}
                      aria-selected="false"
                      data-headlessui-state=""
                    >
                      <span className="flex items-center">
                        <span className="font-normal block truncate ltr:ml-1.5 rtl:mr-1.5">
                          عربى - AR
                        </span>
                      </span>
                    </li>
                    <li
                      className="text-gray-900 cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 focus:bg-gray-100"
                      id="headlessui-listbox-option-:r5:"
                      role="option"
                      tabIndex={-1}
                      aria-selected="false"
                      data-headlessui-state=""
                    >
                      <span className="flex items-center">
                        <span className="font-normal block truncate ltr:ml-1.5 rtl:mr-1.5">
                          中国人 - ZH
                        </span>
                      </span>
                    </li>
                    <li
                      className="text-gray-900 cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 focus:bg-gray-100"
                      id="headlessui-listbox-option-:r6:"
                      role="option"
                      tabIndex={-1}
                      aria-selected="true"
                      data-headlessui-state="selected"
                    >
                      <span className="flex items-center">
                        <span className="font-medium block truncate ltr:ml-1.5 rtl:mr-1.5">
                          English - EN
                        </span>
                        <span
                          className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3"
                        >
                        </span>
                      </span>
                    </li>
                    <li
                      className="text-gray-900 cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 focus:bg-gray-100"
                      id="headlessui-listbox-option-:r7:"
                      role="option"
                      tabIndex={-1}
                      aria-selected="false"
                      data-headlessui-state=""
                    >
                      <span className="flex items-center">
                        <span className="font-normal block truncate ltr:ml-1.5 rtl:mr-1.5">
                          Deutsch - DE
                        </span>
                      </span>
                    </li>
                    <li
                      className="text-gray-900 cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 focus:bg-gray-100"
                      id="headlessui-listbox-option-:r8:"
                      role="option"
                      tabIndex={-1}
                      aria-selected="false"
                      data-headlessui-state=""
                    >
                      <span className="flex items-center">
                        <span className="font-normal block truncate ltr:ml-1.5 rtl:mr-1.5">
                          עברית - HE
                        </span>
                      </span>
                    </li>
                    <li
                      className="text-gray-900 cursor-pointer select-none relative py-2 px-3 hover:bg-gray-100 focus:bg-gray-100"
                      id="headlessui-listbox-option-:r9:"
                      role="option"
                      tabIndex={-1}
                      aria-selected="false"
                      data-headlessui-state=""
                    >
                      <span className="flex items-center">
                        <span className="font-normal block truncate ltr:ml-1.5 rtl:mr-1.5">
                          Español - ES
                        </span>
                      </span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto">
              <button
                onClick={toggleSearch}
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
              <Link
                href="/favorites"
                className="relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none"
                aria-label="favorites-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div className="-mt-0.5 flex-shrink-0">
                {token ? (
                  <Link className="text-sm font-semibold" href="/my-account">
                    Account
                  </Link>
                ) : (
                  <button className="text-sm font-semibold" onClick={toggleLoginModal}>
                    Sign In
                  </button>
                )}
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
        <div>
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={toggleCart}
          />

          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
            style={{ width: 378 }}
          >
            <div className="rc-drawer-content" aria-modal="true" role="dialog">
              <div className="flex flex-col justify-between w-full h-full">
                <div className="w-full flex justify-between items-center pl-5 relative ltr:pl-5 ltr:md:pl-7 rtl:pr-5 rtl:md:pr-7 py-0.5 border-b border-gray-100">
                  <h2 className="m-0 text-xl font-bold md:text-2xl text-heading">Shopping cart</h2>
                  <button
                    onClick={toggleCart}
                    className="flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity md:px-6 lg:py-8 focus:outline-none hover:opacity-60"
                    aria-label="close"
                  >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="text-black mt-1 md:mt-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                    </svg>
                  </button>
                </div>

                <div data-overlayscrollbars-initialize="" className="os-theme-thin flex-grow w-full cart-scrollbar overflow-y-auto" data-overlayscrollbars="host">
                  <div className="w-full px-5 md:pr-7">
                    {cart && cart.cartItems.map(item => (
                      <div
                        key={item.cartItemId}
                        className="group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0"
                        title={item.productTitle}
                      >
                        <div className="relative flex flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-200 rounded-md cursor-pointer md:w-28 md:h-28 ltr:mr-4 rtl:ml-4 m-3">
                          <img
                            alt={item.productTitle}
                            src={item.productImage}
                            className="object-cover bg-gray-300 w-full h-full"
                          />
                          <button
                            onClick={() => handleDelete(item)}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ cursor: "pointer" }}
                            aria-label="Delete item"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex flex-col w-full overflow-hidden">
                          <span className="truncate text-sm text-heading mb-1.5 -mt-1">
                            {item.productTitle}
                          </span>
                          <span className="text-sm text-gray-400 mb-2.5">
                            Unit Price: &nbsp; ${item.price.toFixed(2)}
                          </span>
                          <div className="flex items-end justify-between">
                            <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 h-8 md:h-9 shadow-navigation bg-heading bg-black">
                              <button
                                onClick={() => handleQuantityChange(item, -1)}
                                className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-9 text-white bg-heading hover:bg-gray-600"
                              >
                                -
                              </button>
                              <span className="font-semibold flex items-center justify-center h-full cursor-default text-sm text-white w-8 md:w-10">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item, 1)}
                                className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-9 text-white bg-heading hover:bg-gray-600"
                              >
                                +
                              </button>
                            </div>

                            <span className="text-sm font-semibold leading-5 md:text-base text-heading">
                              ${(item.quantity * item.price).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                    ))}
                  </div>
                </div>

                <div className="px-5 pb-5 md:px-7 fixed bottom-0 w-full bg-white">
                  <div className="flex justify-between text-heading text-base font-semibold mb-3">
                    <span>Total</span>
                    <span>${calculateCartTotal()}</span>
                  </div>
                  <a
                    className={`w-full px-5 py-3 md:py-4 flex items-center justify-center rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 ${cart && cart.cartItems.length > 0 ? 'bg-black hover:bg-gray-600' : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    href={cart && cart.cartItems.length > 0 ? "/checkout" : "#"}
                    onClick={(e) => {
                      if (!cart || cart.cartItems.length === 0) e.preventDefault();
                    }}
                  >
                    Proceed To Checkout
                  </a>

                </div>
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
