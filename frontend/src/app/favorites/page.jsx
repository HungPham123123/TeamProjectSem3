"use client";

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import axios from "@/utils/axios";
import { FaHeart } from 'react-icons/fa'

function Favorites() {
  const [favorites, setFavorites] = useState([]); // State to store favorite products
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const token = Cookies.get('token');  // Get the token from cookies

    if (token) {
      // Fetch the favorite items from the API
      axios.get('/api/Collection/collection', {
        headers: {
          Authorization: `Bearer ${token}` // Send the token in the Authorization header
        }
      })
      .then((response) => {
        setFavorites(response.data.collectionItems);  // Access collectionItems directly
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching favorite items:", error);
        setLoading(false); // Stop loading in case of error
      });
    } else {
      setLoading(false); // Stop loading if no token is found
      console.log("No token found, user not authenticated.");
    }
  }, []);

  const removeFromCollection = (productId) => {
    const token = Cookies.get('token');  // Get the token from cookies

    if (token) {
      // Make API request to remove product from collection
      axios.delete(`/api/Collection/remove/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}` // Send the token in the Authorization header
        }
      })
      .then(() => {
        // Update favorites state to remove the product from the list
        setFavorites(favorites.filter(item => item.productId !== productId));
      })
      .catch((error) => {
        console.error("Error removing item from collection:", error);
      });
    } else {
      console.log("No token found, user not authenticated.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;  // Show loading state while fetching data
  }

  return (
    <div className="tab-contents w-full min-h-[400px] px-4 md:px-8 2xl:px-16">
      <div className="container-x mx-auto">
        <h1 className="text-[30px] font-semibold">My Favorites</h1>
        <div className="flex flex-wrap gap-4 justify-start">
          {favorites.length > 0 ? (
            favorites.map((collectionItem) => (
                <div className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product bg-white w-[calc(33.3333%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)]">
                                                    <button
                  onClick={() => removeFromCollection(collectionItem.productId)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-2xl transition duration-300"
                  title="Remove from collection"
                >
                  <FaHeart />
                </button>
              <Link
                key={collectionItem.collectionItemId} // Use collectionItemId as the key
                href={`/product/${collectionItem.productId}`} // Link to product detail page
                role="button"
                title={collectionItem.title}
              >
                <div className="flex mb-3 md:mb-3.5">
                  <img
                    alt={collectionItem.title}
                    src={collectionItem.image1}  // Access image1 from collectionItem
                    className="bg-gray-300 object-cover rounded-s-md w-full transition duration-200 ease-in rounded-md group-hover:rounded-b-none"
                  />
                </div>
                <div className="w-full overflow-hidden p-2 md:px-2.5 xl:px-4">
                  <h2 className="truncate mb-1 text-sm md:text-base font-semibold text-heading">
                    {collectionItem.title}  {/* Use collectionItem's title */}
                  </h2>
                  <div className="font-semibold text-sm sm:text-base mt-1.5 flex flex-wrap gap-x-2 lg:text-lg lg:mt-2.5 text-heading">
                    <span className="inline-block">${collectionItem.price}</span> {/* Access price */}
                  </div>
                </div>
              </Link>
              </div>
            ))
          ) : (
            <p>No favorites found.</p>  // Show message if no favorite products
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
