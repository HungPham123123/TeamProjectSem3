"use client";

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import axios from "@/utils/axios";

const Shop = () => {
  const [sortOption, setSortOption] = useState("default");
  const [products, setProducts] = useState([]);
  const [AlbumProduct, setAlbumProduct] = useState([]);
  const [MovieProduct, setMovieProduct] = useState([]);
  const [GameProduct, setGameProduct] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    music: false,
    movie: false,
    game: false,
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/Products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (!selectedFilters.music && !selectedFilters.movie && !selectedFilters.game) {
      fetchProducts();
    }
  }, [selectedFilters]);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        let albumResponse, movieResponse, gameResponse;

        if (selectedFilters.music) {
          albumResponse = await axios.get("/api/Filter/albums");
          setAlbumProduct(albumResponse.data);
        } else {
          setAlbumProduct([]);
        }

        if (selectedFilters.movie) {
          movieResponse = await axios.get("/api/Filter/movies");
          setMovieProduct(movieResponse.data);
        } else {
          setMovieProduct([]);
        }

        if (selectedFilters.game) {
          gameResponse = await axios.get("/api/Filter/games");
          setGameProduct(gameResponse.data);
        } else {
          setGameProduct([]);
        }
      } catch (error) {
        console.log("Error fetching filtered products:", error);
      }
    };

    if (selectedFilters.music || selectedFilters.movie || selectedFilters.game) {
      fetchFilteredProducts();
    }
  }, [selectedFilters]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Combine all filtered products
  const filteredProducts = [...AlbumProduct, ...MovieProduct, ...GameProduct];
  const productsToDisplay = selectedFilters.music || selectedFilters.movie || selectedFilters.game ? filteredProducts : products;

  // Function to sort products based on the selected option
  const sortProducts = (products) => {
    switch (sortOption) {
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      case "newest":
        return products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "popular":
        return products.sort((a, b) => b.popularity - a.popularity); // Assuming there's a `popularity` field
      default:
        return products; // No sorting, default
    }
  };

  const sortedProducts = sortProducts(productsToDisplay);

  // Clear All Filters and Sorting
  const clearAll = () => {
    setSelectedFilters({
      music: false,
      movie: false,
      game: false,
    });
    setSortOption("default");
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
                <div className="block border-b border-gray-300 pb-7 mb-7 h-48">
                  <div className="flex items-center justify-between mb-2.5">
                    <h2 className="font-semibold text-heading text-xl md:text-2xl">
                      Filters
                    </h2>
                    <button
                      onClick={() => {
                        setSelectedFilters({ music: false, movie: false, game: false });
                        setSortOption("default");
                      }}
                      className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
                      aria-label="Clear All"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="flex flex-wrap -m-1.5 pt-2">
                    {selectedFilters.music && (
                      <div className="group flex items-center m-1.5 border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                        Music
                      </div>
                    )}
                    {selectedFilters.movie && (
                      <div className="group flex items-center m-1.5 border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                        Movie
                      </div>
                    )}
                    {selectedFilters.game && (
                      <div className="group flex items-center m-1.5 border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                        Game
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap -m-1.5 pt-2">
                    {sortOption !== "default" && (
                      <div className="group flex items-center m-1.5 border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                        Sort by: {sortOption.replace("-", " ")}
                      </div>
                    )}
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
                        name="music"
                        checked={selectedFilters.music}
                        onChange={handleFilterChange}
                      />
                      <span className="ms-4 -mt-0.5">Music</span>
                    </label>

                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="movie"
                        checked={selectedFilters.movie}
                        onChange={handleFilterChange}
                      />
                      <span className="ms-4 -mt-0.5">Movie</span>
                    </label>

                    <label className="group flex items-center text-heading text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                        name="game"
                        checked={selectedFilters.game}
                        onChange={handleFilterChange}
                      />
                      <span className="ms-4 -mt-0.5">Game</span>
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
                <div className="relative ltr:ml-2 ltr:lg:ml-0 rtl:lg:mr-0 z-10 min-w-[180px]">
                  <select
                    className="border border-gray-300 text-heading text-[13px] md:text-sm font-semibold relative w-full py-2 ltr:pl-3 rtl:pr-3 ltr:pr-10 rtl:pl-10 ltr:text-left rtl:text-right bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="default">Sorting Options</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
              {productsToDisplay.map((product) => (
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

export default Shop;