"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // State to toggle cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to toggle cart visibility
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <main
        className="relative flex-grow"
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
          <div className="mx-auto col-span-full sm:col-span-5">
            <a
              className="h-full group flex justify-center relative overflow-hidden"
              href="/collections/mens-collection"
            >
              <span
                style={{boxSizing: "border-box",display: "inline-block",overflow: "hidden",width: "initial",height: "initial", background: "none",opacity: 1,border: 0,margin: 0,padding: 0,position: "relative",maxWidth: "100%"
                }}
              >
                <span
                  style={{boxSizing: "border-box",display: "block",width: "initial",height: "initial",background: "none",opacity: 1,border: 0,margin: 0,padding: 0,maxWidth: "100%"
                  }}
                >
<img alt="" aria-hidden="true" src="/img/main-image-1.jpg" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
                </span>
                <img alt="Men's Collection" src="/img/main-image-1.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover w-full" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
              </span>
              <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
            </a>
          </div>
          <div className="mx-auto col-span-1 sm:col-span-2">
  <a className="h-full group flex justify-center relative overflow-hidden" href="/collections/new-sports">
    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
      </span>
      <img alt="New Sports" src="/img/homepage-main-2.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover w-full" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
    </span>
    <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
  </a>
</div>

<div className="mx-auto col-span-1 sm:col-span-2">
  <a className="h-full group flex justify-center relative overflow-hidden" href="/collections/dress-women">
    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
      </span>
      <img alt="Dress Women"src="/img/main-image-3.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover w-full" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
    </span>
    <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
  </a>
</div>

<div className="mx-auto col-span-1 sm:col-span-2">
  <a className="h-full group flex justify-center relative overflow-hidden" href="/collections/exclusive-sunglasses">
    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
      </span>
      <img alt="Exclusive Sunglasses"src="/img/main-image-4.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover w-full" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
    </span>
    <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
  </a>
</div>

<div className="mx-auto col-span-1 sm:col-span-2">
  <a className="h-full group flex justify-center relative overflow-hidden" href="/collections/product-coupons">
    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27425%27%20height=%27425%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
      </span>
      <img alt="Product Coupons"src="/img/main-image-2.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover w-full" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
    </span>
    <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
  </a>
</div>

<div className="mx-auto col-span-full sm:col-span-5">
  <a className="h-full group flex justify-center relative overflow-hidden" href="/collections/new-backpack">
    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
        <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271078%27%20height=%27425%27/%3e" style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }} />
      </span>
      <img alt="New Backpack" src="/img/game-homepage.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover w-full" style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
    </span>
    <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
  </a>
</div>

        </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <div className="mb-12 md:mb-14 xl:mb-16 border border-gray-300 rounded-md pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7 px-4 md:px-5 lg:px-7">
            <div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
              <div className="flex items-center justify-between -mt-2 mb-0">
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                  Flash Sale
                </h3>
              </div>
              <span>Time Over!</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-4 lg:gap-y-5 xl:gap-y-6 2xl:gap-y-8">
            <div
  className="group box-border overflow-hidden flex rounded-md cursor-pointer bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
  role="button"
  title="Adidas Shoes Black"
>
  <div className="flex mb-3 md:mb-3.5 pb-0">
    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, position: "relative", maxWidth: "100%" }}>
      <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: "100%" }}>
        <img
          alt=""
          aria-hidden="true"
          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
          style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }}
        />
      </span>
      <img
        alt="Adidas Shoes Black"
        src="/img/dvds-1.jpg"
        decoding="async"
        data-nimg="intrinsic"
        className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
        style={{ position: "absolute", inset: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }}
      />
    </span>
    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
  </div>
  <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
    <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
      Adidas Shoes Black
    </h2>
    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
      Men Black top sleeveless gown
    </p>
    <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3 text-heading">
      <span className="inline-block false">$45.00</span>
      <del className="sm:text-base font-normal text-gray-800">$99.99</del>
    </div>
  </div>
</div>

              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Armani Wide-Leg Trousers"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img alt="Armani Wide-Leg Trousers" src="/img/dvds-1.jpg" decoding="async" data-nimg="intrinsic" className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105" style={{
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Armani Wide-Leg Trousers
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Monochrome elegance. Made with a relaxed wide-leg, these trousers
                    are made from a sustainable soft organic cotton with a mechanical
                    stretch making the garment easily recycled.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$12.00</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $16.00
                    </del>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Zara Shoes Green"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Zara Shoes Green"
                      src="/img/dvds-1.jpg"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Zara Shoes Green
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Footwear refers to garments worn on the feet, which originally
                    serves to purpose of protection against adversities of the
                    environment, usually regarding ground textures and temperature.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$50.00</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Wayfarer Sunglasses"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Wayfarer Sunglasses"
                      src="/img/dvds-1.jpg"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Wayfarer Sunglasses
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Our optical engineers developed these sunglasses for hiking. Ideal
                    for occasional use in the mountains.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$15.00</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $18.00
                    </del>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Tissot Classic"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Tissot Classic"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30-md.png&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30-md.png&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-30-md.png&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Tissot Classic
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    The new-model Submariner now features Rolex’s powerhouse calibre
                    3235 Perpetual movement. An upgrade from the calibre 3135
                    movement,
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$600.00</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Hermes Carlton London"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Hermes Carlton London"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-md.png&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-md.png&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-md.png&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Hermes Carlton London
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Off-White self-striped knitted midi A-line dress, has a scoop
                    neck, sleeveless, straight hem
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$15.00</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Polarised Wayfarer Sunglasses"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Polarised Wayfarer Sunglasses"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27-md.png&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27-md.png&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27-md.png&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Polarised Wayfarer Sunglasses
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    This item is only exchangeable for the same or a different size,
                    if available, and cannot be returned
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$20.00</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $35.00
                    </del>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Gucci Carlton UK"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Gucci Carlton UK"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-md.png&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-md.png&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-md.png&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Gucci Carlton UK
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Knitted midi A-line dress, has a scoop neck, sleeveless, straight
                    hem
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$14.99</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $19.99
                    </del>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="NIKE Shoes"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="NIKE Shoes"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24-md.png&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24-md.png&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-24-md.png&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    NIKE Shoes
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    NIKE 2020 Black White is a clean and monochromatic colourway of
                    the label’s latest high-technology silhouette. The model first
                    launched late last year and is currently Jordan Brand’s flagship
                    performance pair.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$50.00</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $80.00
                    </del>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer  bg-white ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start"
                role="button"
                title="Wayfarer Sunglasses"
              >
                <div className="flex mb-3 md:mb-3.5 pb-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27324%27%20height=%27324%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Wayfarer Sunglasses"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12-md.png&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12-md.png&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-12-md.png&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md rounded-md transition duration-150 ease-linear transform group-hover:scale-105"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 ltr:pl-0 rtl:pr-0">
                  <h2 className="truncate mb-1 font-semibold md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg text-heading">
                    Wayfarer Sunglasses
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Our optical engineers developed these sunglasses for hiking. Ideal
                    for occasional use in the mountains.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                  >
                    <span className="inline-block false">$20.00</span>
                    <del className="sm:text-base font-normal text-gray-800">
                      $25.00
                    </del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12 md:mb-14 xl:mb-16 mx-auto max-w-[1920px] overflow-hidden">
          <div className="-mx-32 sm:-mx-44 lg:-mx-60 xl:-mx-72 2xl:-mx-80">
            <div className="carouselWrapper relative   dotsCircle ">

              <div className="flex items-center w-full absolute top-2/4 z-10 hidden">
                <button
                  className="w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:shadow-navigation ltr:-translate-x-1/2 rtl:shadow-navigationReverse rtl:translate-x-1/2 rounded-full lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl ltr:left-0 rtl:right-0"
                  aria-label="prev-button"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                  </svg>
                </button>
                <button
                  className="w-7 h-7 lg:w-8 lg:h-8 text-sm md:text-base lg:text-lg text-black flex items-center justify-center rounded bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none transform ltr:shadow-navigation ltr:translate-x-1/2 rtl:shadow-navigationReverse rtl:-translate-x-1/2 rounded-full lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl ltr:right-0 rtl:left-0"
                  aria-label="next-button"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">

          <div className="mb-12 md:mb-14 xl:mb-16">
            <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
              <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                Featured Products
              </h3>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
              <div className="row-span-full lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                <div
                  className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]"
                  title="Nike Bag"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27620%27%20height=%27620%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Nike Bag"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F1.png&w=640&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F1.png&w=1920&q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F1.png&w=1920&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="transition duration-500 ease-in-out transform group-hover:scale-110"
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
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </div>
                <span className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
                  20%{" "}
                </span>
                <div
                  className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7"
                  title="Nike Bag"
                >
                  <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                    <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                      Nike Bag
                    </h2>
                    <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                      Rolex’s powerhouse calibre 3235 Perpetual movement. An upgrade
                      from the calibre 3135 movement
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
                    <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
                      $20.38
                    </del>
                    <div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                      $16.38
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                <div
                  className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]"
                  title="Adidas Woolen Cap"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Adidas Woolen Cap"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F2.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F2.png&w=640&q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F2.png&w=640&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="transition duration-500 ease-in-out transform group-hover:scale-110"
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
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </div>
                <span className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
                  20%{" "}
                </span>
                <div
                  className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7"
                  title="Adidas Woolen Cap"
                >
                  <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                    <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                      Adidas Woolen Cap
                    </h2>
                    <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                      Casual wear (casual attire or clothing) may be a Western code
                      that’s relaxed, occasional, spontaneous and fitted to everyday
                      use. Casual wear became popular within the Western world
                      following the counterculture of the 1960s.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
                    <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
                      $20.00
                    </del>
                    <div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                      $16.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                <div
                  className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]"
                  title="Nike Leader VT"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Nike Leader VT"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F3.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F3.png&w=640&q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F3.png&w=640&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="transition duration-500 ease-in-out transform group-hover:scale-110"
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
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </div>
                <div
                  className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7"
                  title="Nike Leader VT"
                >
                  <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                    <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                      Nike Leader VT
                    </h2>
                    <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                      Footwear refers to garments worn on the feet, which originally
                      serves to purpose of protection against adversities of the
                      environment, usually regarding ground textures and temperature.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
                    <div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                      $16.38
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                <div
                  className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]"
                  title="Ray ban Aviator"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Ray ban Aviator"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F4.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F4.png&w=640&q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F4.png&w=640&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="transition duration-500 ease-in-out transform group-hover:scale-110"
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
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </div>
                <span className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1">
                  15%{" "}
                </span>
                <div
                  className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7"
                  title="Ray ban Aviator"
                >
                  <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                    <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                      Ray ban Aviator
                    </h2>
                    <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                      Polarized sunglasses reduce glare reflected off of roads, bodies
                      of water, snow and other horizontal surfaces.Restore true
                      color.Vision lenses are 400UV rated, meaning it can block UVA
                      and UVB radiation.
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
                    <del className="text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg">
                      $850.00
                    </del>
                    <div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                      $720.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                <div
                  className="flex justify-center items-center p-4 h-full 3xl:min-h-[330px]"
                  title="Tissot Classic"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27260%27%20height=%27260%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Tissot Classic"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F5.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F5.png&w=640&q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ffeatured%2F5.png&w=640&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="transition duration-500 ease-in-out transform group-hover:scale-110"
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
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </span>
                </div>
                <div
                  className="flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7"
                  title="Tissot Classic"
                >
                  <div className="overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2">
                    <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                      Tissot Classic
                    </h2>
                    <p className="text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]">
                      The new-model Submariner now features Rolex’s powerhouse calibre
                      3235 Perpetual movement. An upgrade from the calibre 3135
                      movement,
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5">
                    <div className="text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
                      $600.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-12 md:mb-14 xl:mb-16">
            <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
              <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                On Selling Products
              </h3>
              <a
                className="text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1"
                href="/search"
              >
                See All Product
              </a>
            </div>
            <div className="grid grid-cols-4 gap-3 lg:gap-5 xl:gap-7">
              <div className="mx-auto hidden 3xl:block">
                <a
                  className="h-full group flex justify-center relative overflow-hidden"
                  href="/collections/sale-offer"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27430%27%20height=%27600%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Sale Offer"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-sale-offer.jpg&w=640&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-sale-offer.jpg&w=1080&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-sale-offer.jpg&w=1080&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover w-full rounded-md"
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
                  <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
                </a>
              </div>
              <div className="col-span-full 3xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 ">
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Armani Veni Vidi Vici"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Armani Veni Vidi Vici"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Armani Veni Vidi Vici
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Fendi began life in 1925 as a fur and leather speciality store
                      in Rome.
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$17.99</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $20.00
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Adidas Shoes Black"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Adidas Shoes Black"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-26-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Adidas Shoes Black
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Men Black top shoes gown
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$45.00</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $99.99
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Gucci Carlton UK"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Gucci Carlton UK"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Gucci Carlton UK
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Knitted midi A-line dress, has a scoop neck, sleeveless,
                      straight hem
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$14.99</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $19.99
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Scuba Stand Collar Topper Jacket"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Scuba Stand Collar Topper Jacket"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-15-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Scuba Stand Collar Topper Jacket
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Zara provides only the highest-quality selection of dresses,
                      womens suits, and suited separates.
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$12.00</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $16.00
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Regular Fit Crew-neck T-shirt"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Regular Fit Crew-neck T-shirt"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Regular Fit Crew-neck T-shirt
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Self-striped knitted midi A-line dress, has a scoop neck,
                      T-shirt, straight hem
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$12.30</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $16.38
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Hermes  Carlton London"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Hermes  Carlton London"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Hermes Carlton London
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Off-White self-striped knitted midi A-line dress, has a scoop
                      neck, sleeveless, straight hem
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$15.00</span>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Wayfarer Sunglasses"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Wayfarer Sunglasses"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-27-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Wayfarer Sunglasses
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Our optical engineers developed these sunglasses for hiking.
                      Ideal for occasional use in the mountains.
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$20.00</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $25.00
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="Armani Wide-Leg Trousers"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="Armani Wide-Leg Trousers"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      Armani Wide-Leg Trousers
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      Monochrome elegance. Made with a relaxed wide-leg, these
                      trousers are made from a sustainable soft organic cotton with a
                      mechanical stretch making the garment easily recycled.
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$60.00</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $80.00
                      </del>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer items-center border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct"
                  role="button"
                  title="REDQ Steel Watch"
                >
                  <div className="flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27176%27%20height=%27176%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                          }}
                        />
                      </span>
                      <img
                        alt="REDQ Steel Watch"
                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28-xs.png&w=256&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28-xs.png&w=384&q=100 2x"
                        src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-28-xs.png&w=384&q=100"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="bg-gray-300 object-cover rounded-s-md"
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
                    <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                  </div>
                  <div className="w-full overflow-hidden p-2 px-4 lg:px-5 2xl:px-4">
                    <h2 className="truncate mb-1 font-semibold text-sm sm:text-base md:mb-1.5 pb-0 text-heading">
                      REDQ Steel Watch
                    </h2>
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                      The Black Bay celebrates 60 years of diving watches with
                      extraordinary heritage. The iconic model inherits the general
                      lines.
                    </p>
                    <div
                      className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3
     text-heading"
                    >
                      <span className="inline-block false">$80.00</span>
                      <del className="sm:text-base font-normal text-gray-800">
                        $120.00
                      </del>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-9 md:mb-10 xl:mb-12">
            <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
              <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">
                New Arrivals
              </h3>
            </div>
            <div className="grid gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 bg-white grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F1.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F1.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F1.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F2.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F2.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F2.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F3.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F3.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F3.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F4.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F4.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F4.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F5.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F5.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F5.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F6.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F6.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F6.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F7.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F7.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F7.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F8.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F8.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F8.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F9.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F9.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F9.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
              <div
                className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product  bg-white"
                role="button"
                title="Roadster Women Round Neck"
              >
                <div className="flex mb-3 md:mb-3.5">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27340%27%20height=%27440%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                        }}
                      />
                    </span>
                    <img
                      alt="Roadster Women Round Neck"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F10.jpg&w=384&q=100 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F10.jpg&w=750&q=100 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fancient%2F10.jpg&w=750&q=100"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
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
                  <div className="absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 flex flex-col gap-y-1 items-start" />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    Roadster Women Round Neck
                  </h2>
                  <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                    Fendi began life in 1925 as a fur and leather speciality store in
                    Rome.
                  </p>
                  <div
                    className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5
     text-heading"
                  >
                    <span className="inline-block false">$18.59</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36">
            <div className="flex-shrink-0 w-full pb-5 sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-xl lg:flex lg:items-center md:pb-8 lg:pb-12 xl:pb-16">
              <div className="py-4 text-center md:py-6 xl:py-8 ltr:sm:text-left rtl:sm:text-right">
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading -mt-1 mb-2 md:mb-3 lg:mb-3.5 xl:mb-4">
                  The ChawkBazar App
                </h3>
                <h2 className="mb-6 font-normal leading-7 text-heading text-md sm:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl sm:leading-8 md:leading-snug xl:leading-relaxed 2xl:leading-snug md:mb-8 lg:mb-9 xl:mb-12 2xl:mb-14 ltr:lg:pr-20 ltr:2xl:pr-0 rtl:lg:pl-20 rtl:2xl:pl-0">
                  <span>
                    {" "}
                    Share Your <strong>Ideas</strong> &amp; Shop Endless{" "}
                    <strong>Inspiration</strong>{" "}
                  </span>
                </h2>
                <div className="flex justify-center px-6 sm:justify-start gap-x-2 md:gap-x-3 sm:px-0">
                  <a
                    className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                    href="/"
                  >
                    <img
                      src="/assets/images/app-store.svg"
                      alt="App Store"
                      className="w-36 lg:w-44 xl:w-auto rounded-md"
                      width={209}
                      height={60}
                    />
                  </a>
                  <a
                    className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                    href="/"
                  >
                    <img
                      src="/assets/images/play-store.svg"
                      alt="Play Store"
                      className="w-36 lg:w-44 xl:w-auto rounded-md"
                      width={209}
                      height={60}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-end ltr:pl-4 rtl:pr-4 ltr:-mr-0.5 rtl:-ml-0.5 ltr:2xl:-mr-1.5 rtl:2xl:-ml-1.5 w-60 md:w-72 lg:w-96 xl:w-auto">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27375%27%20height=%27430%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="App Thumbnail"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Fapp.png&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fapp.png&w=750&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Fapp.png&w=750&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
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
            </div>
          </div>
          <div className="my-8 md:my-12 lg:my-16 xl:my-20 3xl:my-24 pb-5 lg:pb-3.5 2xl:pb-5 pt-3 lg:pt-1.5 2xl:pt-2 3xl:pt-3 text-center">
            <div className="max-w-md mx-auto mb-4 md:mb-5 xl:mb-8 2xl:mb-10 3xl:mb-12">
              <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-2 md:mb-3 lg:mb-3.5">
                Talk To A Real Person
              </h3>
              <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
                Are you on the fence? Have a question? Need a recommendation? Member
                Services is always here to help. Send us a message.
              </p>
            </div>
            <div className="mb-2.5 md:mb-0 xl:mb-2 2xl:mb-4 3xl:mb-6 md:px-20 lg:px-40 xl:px-0">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27870%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Support Thumbnail"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Fsupport.png&w=1080&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fsupport.png&w=1920&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Fsupport.png&w=1920&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
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
            </div>
            <button
              data-variant="flat"
              className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart"
            >
              Chat With Member Services
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="ms-2 text-lg md:text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth={32}
                  d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z"
                />
                <circle cx={160} cy={256} r={32} />
                <circle cx={256} cy={256} r={32} />
                <circle cx={352} cy={256} r={32} />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0.5 sm:gap-1 overflow-hidden rounded-md">
            <a
              className="group flex justify-center text-center relative"
              href="/#"
              target="_blank"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Man"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F1.jpg&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Finstagram%2F1.jpg&w=640&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F1.jpg&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="bg-gray-300 object-cover"
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
              <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="absolute top left h-full w-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
            <a
              className="group flex justify-center text-center relative"
              href="/#"
              target="_blank"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Woman"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F2.jpg&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Finstagram%2F2.jpg&w=640&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F2.jpg&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="bg-gray-300 object-cover"
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
              <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="absolute top left h-full w-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
            <a
              className="group flex justify-center text-center relative"
              href="/#"
              target="_blank"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Watch"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F3.jpg&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Finstagram%2F3.jpg&w=640&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F3.jpg&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="bg-gray-300 object-cover"
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
              <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="absolute top left h-full w-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
            <a
              className="group flex justify-center text-center relative"
              href="/#"
              target="_blank"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Man"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F4.jpg&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Finstagram%2F4.jpg&w=640&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F4.jpg&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="bg-gray-300 object-cover"
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
              <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="absolute top left h-full w-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
            <a
              className="group flex justify-center text-center relative"
              href="/#"
              target="_blank"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Sports"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F5.jpg&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Finstagram%2F5.jpg&w=640&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F5.jpg&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="bg-gray-300 object-cover"
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
              <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="absolute top left h-full w-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
            <a
              className="group flex justify-center text-center relative"
              href="/#"
              target="_blank"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </span>
                <img
                  alt="Fashion"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F6.jpg&w=384&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Finstagram%2F6.jpg&w=640&q=75 2x"
                  src="/_next/image?url=%2Fassets%2Fimages%2Finstagram%2F6.jpg&w=640&q=75"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="bg-gray-300 object-cover"
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
              <div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
              <div className="absolute top left h-full w-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl transform opacity-0 scale-400 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="px-5 py-12 bg-opacity-0 sm:px-16 xl:px-0 md:py-14 xl:py-16 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
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
        <div className="border-t border-gray-300 mb-0" />
        <div className="Toastify" />
      </main>

    </>
  );
}
