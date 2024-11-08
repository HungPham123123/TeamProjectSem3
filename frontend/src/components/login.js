"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import axios from "@/utils/axios";
import Cookies from 'js-cookie';
import SignUpPage from './signup';

const LoginPages = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showRecoverForm, setShowRecoverForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/Auth/login', { email, password });
      const { token } = response.data;
      Cookies.set('token', token, { expires: 1 });
      window.location.href = '/';
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Login Failed, Please try again later');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openSignupModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  };

  return (
    <>
      {showLoginModal && (
        <div className="modal-root fixed bg-black bg-opacity-70 inset-0 z-50 cursor-pointer p-4 md:p-5">
          <div className="relative w-full h-full mx-auto" style={{ transform: "none" }}>
            <div className="w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg">
              <button
                onClick={closeLoginModal}
                aria-label="Close panel"
                className="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 ltr:-right-3 rtl:-left-3 ltr:md:-right-4 rtl:md:-left-4"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                </svg>
              </button>
              <div className="h-full overflow-y-auto rounded-lg" style={{ maxHeight: "calc(-120px + 100vh)" }}>
                <div className="w-full px-5 py-5 mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg sm:w-96 md:w-450px sm:px-8">
                  <div className="text-center mb-6 pt-2.5">
                    <div>
                      <a className="inline-flex focus:outline-none" href="/">
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
                            alt="ChawkBazar"
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
                      </a>
                    </div>
                    <p className="mt-2 mb-8 text-sm md:text-base text-body sm:mb-10">
                      Login with your email &amp; password
                    </p>
                  </div>
                  <form className="flex flex-col justify-center" noValidate="" onSubmit={handleLogin}>
                    <div className="flex flex-col space-y-3.5">
                      <div className="block">
                        <label
                          htmlFor="email"
                          className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                          autoComplete="off"
                          spellCheck="false"
                          aria-invalid="false"
                        />
                      </div>
                      <div className="block">
                        <label className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer">Password</label>
                        <div className="relative">
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                            autoComplete="off"
                            spellCheck="false"
                          />
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                          >
                            {showPassword ? (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7C3.732 7.943 7.523 5 12 5c.615 0 1.215.05 1.807.145M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="flex ltr:ml-auto rtl:mr-auto">
                          <button
                            type="button"
                            className="text-sm underline ltr:text-right rtl:text-left text-heading ltr:pl-3 rtl:pr-3 hover:no-underline focus:outline-none focus:no-underline"
                            onClick={() => setShowRecoverForm(true)}
                          >
                            Forgot password?
                          </button>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center mt-5 w-full md:w-auto px-4 py-2 md:px-5 md:py-3 bg-black hover:bg-opacity-90 text-white text-sm lg:text-base font-semibold leading-6 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-heading"
                      >
                        Login
                      </button>
                      {errorMessage && <p className="text-red-500 text-xs mt-2">{errorMessage}</p>}
                    </div>
                  </form>
                  <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                    <hr className="w-full border-gray-300" />
                    <span className="absolute -top-2.5 px-2 bg-white">Or</span>
                  </div>
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      version="1.1"
                      viewBox="0 0 16 16"
                      className="text-sm sm:text-base ltr:mr-1.5 rtl:ml-1.5 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z" />
                    </svg>
                    Login With Facebook
                  </button>
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      version="1.1"
                      viewBox="0 0 16 16"
                      className="text-sm sm:text-base ltr:mr-1.5 rtl:ml-1.5 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM8.119 14c-3.316 0-6-2.684-6-6s2.684-6 6-6c1.619 0 2.975 0.591 4.019 1.569l-1.628 1.569c-0.447-0.428-1.225-0.925-2.391-0.925-2.050 0-3.719 1.697-3.719 3.787s1.672 3.787 3.719 3.787c2.375 0 3.266-1.706 3.403-2.588h-3.403v-2.056h5.666c0.050 0.3 0.094 0.6 0.094 0.994 0.003 3.428-2.294 5.863-5.759 5.863z" />
                    </svg>
                    Login With Google
                  </button>
                  <div className="mt-5 mb-1 text-sm text-center sm:text-base text-body">
                    Don't have any account?{" "}
                    <button
                      onClick={openSignupModal}
                      type="button"
                      className="text-sm font-bold underline sm:text-base text-heading hover:no-underline focus:outline-none"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSignupModal && <SignUpPage />}
    </>
  );
};

export default LoginPages;
