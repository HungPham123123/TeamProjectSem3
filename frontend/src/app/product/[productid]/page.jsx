"use client";

import React, { useState, useEffect, useRef, use } from 'react';
import axios from "@/utils/axios";
import ReactPlayer from 'react-player';
import Link from 'next/link';

function ProductDetail({ params }) {
    const { productid } = use (params);  // Getting productid from the params
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);  // State to track if the product is a favorite
    const [reviews, setReviews] = useState([]); // State to hold reviews
    const [loadingReviews, setLoadingReviews] = useState(false);
    const [reviewsLoaded, setReviewsLoaded] = useState(false);

    useEffect(() => {
        if (productid) {
            axios.get(`/api/Products/${productid}`)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.log("Error fetching product details:", error);
                });
        }
    }, [productid]);

    const handleQuantityChange = (type) => {
        setQuantity((prevQuantity) => {
            if (type === 'increment') {
                return prevQuantity + 1;
            } else if (type === 'decrement' && prevQuantity > 1) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    };

    const addToCart = () => {
        axios.post('/api/Cart/add', {
            productId: productid,
            quantity
        })
        .then((response) => {
            alert("Product added to cart!");
        })
        .catch((error) => {
            alert(error.response?.data || "Failed to add product to cart.");
        });
    };

    const addToFavorites = () => {
        axios.post(`/api/Collection/add/${productid}`)
            .then((response) => {
                setIsFavorite(true);  // Mark as favorite after successful API call
                alert("Product added to favorites!");
            })
            .catch((error) => {
                alert(error.response?.data || "Failed to add product to favorites.");
            });
    };

    const fetchReviews = () => {
        setLoadingReviews(true);
        axios.get(`/api/UserReview/product/${productid}/reviews`)
            .then((response) => {
                setReviews(response.data);
                setReviewsLoaded(true);
            })
            .catch((error) => {
                console.log("Error fetching reviews:", error);
            })
            .finally(() => {
                setLoadingReviews(false);
            });
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
          <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start px-4 md:px-8 2xl:px-16">
            <div className="col-span-5 grid grid-cols-2 gap-2.5">
                {/* Product images */}
                {[product.image1, product.image2, product.image3, product.image4].map((image, idx) => (
                    image && <div key={idx} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        <img src={image} alt={product.title} className="object-cover w-full" />
                    </div>
                ))}
            </div>
            <div className="col-span-4 pt-8 lg:pt-0">
                <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                    {product.title}
                </h2>
                <div className="flex items-center mt-5">
                    <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl mr-2">
                        ${product.price}
                    </div>
                    {product.oldPrice && (
                        <span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl">
                            ${product.oldPrice}
                        </span>
                    )}
                </div>

                {/* Quantity Selector */}
                <div className={`flex items-center gap-x-4 py-8 ${product.stockQuantity === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
  <div className="group flex items-center border rounded-md overflow-hidden h-11 md:h-12">
    <button
      onClick={() => handleQuantityChange('decrement')}
      className="w-10 md:w-12 flex justify-center items-center border-r"
      disabled={product.stockQuantity === 0}
    >
      -
    </button>
    <span className="w-12 md:w-20 flex justify-center items-center text-heading font-semibold">
      {quantity}
    </span>
    <button
      onClick={() => handleQuantityChange('increment')}
      className="w-10 md:w-12 flex justify-center items-center border-l"
      disabled={product.stockQuantity === 0}
    >
      +
    </button>
  </div>

  <button
    onClick={addToCart}
    className="h-11 md:h-12 px-5 bg-black text-white font-semibold rounded-md"
    disabled={product.stockQuantity === 0}
  >
    Add to Cart
  </button>
  <button
    onClick={addToFavorites}
    className="h-11 md:h-12 px-5 bg-white text-black border-black border font-semibold rounded-md"
    disabled={product.stockQuantity === 0}
  >
    {isFavorite ? "Added to Favorites" : "Add to Favorites"}
  </button>
</div>


                {/* Product Details */}
                <div className="py-6">
                    <ul className="text-sm space-y-5 pb-1">
                        <li>
                            <span className="font-semibold">SKU:</span> {product.productId}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="tab-contents w-full min-h-[400px] px-4 md:px-8 2xl:px-16">
  <div className="container-x mx-auto">
    <div data-aos="fade-up" className="w-full tab-content-item aos-init aos-animate">
      <div className="w-full p-4">
        <h6 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300">Description</h6>
        <div className="text-base text-gray-700 leading-relaxed mb-6 break-words">
        </div>
        
        {/* Albums */}
        {product.albums && product.albums.length > 0 && (
          <div className="container-x mx-auto">
          <div
              data-aos="fade-up"
              className="w-full tab-content-item aos-init aos-animate"
          >
 <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                    {product.albums[0]?.biography}
                </p>
              <div>
                  <div className="flex flex-col py-12">
                      <h2 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300 ">
                          Album Songs
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                          {product.albums[0]?.songs.map((song) => (
                              <TrackPlayer
                                  key={song.songId}
                                  track={{
                                      id: song.songId,
                                      name: song.title,
                                      imgUrl: product.image1,
                                      videoUrl: song.link || "https://www.youtube.com/watch?v=T9gQuZU8Guc",
                                      date: song.releaseDate
                                  }}
                              />
                          ))}
                      </div>

                  </div>

                  <h6 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300">
                      Artist in Album
                  </h6>

                  <div className="flex flex-wrap items-center">
                      {product?.albums[0]?.songs?.flatMap((song) => song.artists)?.reduce((uniqueArtists, artist) => {
                          if (!uniqueArtists.some((a) => a.name === artist.name)) {
                              uniqueArtists.push(artist);
                          }
                          return uniqueArtists;
                      }, []).map((artist, index) => (
                          <Link
                              key={index}
                              href=""
                              className="text-[15px] text-qgray text-normal flex flex-col items-center space-y-2 m-4"
                          >
                              <img
                                  src={artist.image}
                                  alt={artist.name}
                                  className="w-20 h-20 rounded-full object-cover"
                              />
                              <p className="text-black">{artist.name}</p>
                          </Link>
                      ))}
                  </div>




              </div>
          </div>

      </div>
        )}

{/* Movies */}
{product.movies && product.movies.length > 0 && (
  <>


<div className="flex flex-col items-start md:flex-row md:justify-start space-y-6 md:space-y-0 md:space-x-8">
  {/* Video Container */}
  <div className="relative aspect-w-16 aspect-h-9 w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
    <ReactPlayer
      url={product.movies[0].link}
      controls
      width="100%"  // Takes full width of the container
      height="500px" // Takes full height of the container based on the aspect ratio
      className="rounded-lg" // Optional: Add rounded corners to the video
    />
  </div>

  {/* Movie Info Section */}
  <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 mt-4">
    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1> {/* Title */}
    <p className="text-lg text-gray-600">{product.movies[0].biography}</p> {/* Biography */}
    
    <div className="flex flex-col md:flex-row md:space-x-4 text-md text-gray-700">
      {/* Producer Name */}
      <span className="font-semibold">Producer:</span>
      <span>{product.movies[0].producerName}</span>
    </div>
    
    <div className="flex flex-col md:flex-row md:space-x-4 text-md text-gray-700">
      {/* Director Name */}
      <span className="font-semibold">Director:</span>
      <span>{product.movies[0].directorName}</span>
    </div>
  </div>
</div>

  </>
)}



        {/* Games */}
        {product.games && product.games.length > 0 && (
          <>
            <h6 className="text-[20px] font-medium text-black mt-8">Game Description</h6>
            <p>{product.games[0].biography}</p>
          </>
        )}
      </div>
    </div>
  </div>
  <div className="container-x mx-auto py-8">
    <h2 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300">Product Reviews</h2>

    <div className="flex justify-center mb-6">
        {!reviewsLoaded && (
            <button
                onClick={fetchReviews}
                disabled={loadingReviews}
                className="px-4 py-2 bg-black text-white rounded-md"
            >
                {loadingReviews ? 'Loading Reviews...' : 'Load Reviews'}
            </button>
        )}
    </div>

    <div className="mt-6">
        {reviewsLoaded && reviews.length === 0 && (
            <p>No reviews yet.</p>
        )}
        {reviews.length > 0 && (
            reviews.map((review) => (
                <div key={review.userId} className="border-b py-4">
                    <p className="font-semibold">{review.username}</p>
                    <div className="flex items-center">
                        {/* Rating stars */}
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={index < review.rating ? 'orange' : 'gray'}
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                className="mr-1"
                            >
                                <path d="M12 17.3l6.18 3.7-1.64-7.03 5.46-4.73-7.19-.62-2.81-6.35-2.8 6.35-7.19.62 5.46 4.73-1.64 7.03z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                    <p className="text-sm text-gray-400">{new Date(review.createdAt).toLocaleString()}</p>
                </div>
            ))
        )}
    </div>
</div>

        </div>
        </>

    );
}
function TrackPlayer({ track }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);  // To track the song's duration
    const playerRef = useRef(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleProgress = (progress) => {
        setPlayed(progress.played);
        if (progress.played >= 0.15) {  // Stop after 15 seconds (15 seconds / song duration = 0.25)
            playerRef.current.seekTo(0);  // Restart the song when the time limit is reached
            setIsPlaying(false);
        }
    };

    const handleSeekChange = (e) => {
        const newPlayed = parseFloat(e.target.value);
        setPlayed(newPlayed);
        playerRef.current.seekTo(newPlayed);
    };

    const handleDuration = (duration) => {
        setDuration(duration);  // Set the duration of the song
    };

    return (
        <div className="flex items-center p-4 border-b border-gray-200 w-full">
            <img
                src={track.imgUrl}
                alt={track.name}
                className="w-24 h-24 rounded object-cover mr-6"
            />
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{track.name}</h3>
                <p className="text-gray-500">Released on: {new Date(track.date).toLocaleDateString()}</p>
                <div className="flex items-center mt-2 space-x-4">
                    <button
                        onClick={togglePlay}
                        className="px-1 py-1 bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition"
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pause">
                                <rect x="6" y="4" width="4" height="16"></rect>
                                <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-play">
                                <polygon points="5,3 19,12 5,21"></polygon>
                            </svg>
                        )}
                    </button>
                    <input
                        type="range"
                        min={0}
                        max={0.15}  // Set the max value to 0.25 (for 15 seconds of playback)
                        step="any"
                        value={played}
                        onChange={handleSeekChange}
                        className="w-full h-2 bg-black rounded-lg cursor-pointer"
                    />
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step="any"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-2 bg-black rounded-lg cursor-pointer"
                    />
                </div>
            </div>

            <ReactPlayer
                ref={playerRef}
                url={track.videoUrl}
                playing={isPlaying}
                volume={volume}
                height="0px"
                width="0px"
                onProgress={handleProgress}
                onDuration={handleDuration}  // Set the duration when the song is loaded
                onEnded={() => setIsPlaying(false)} // Ensure the player stops when reaching the end
                controls={false} // Hide native controls, you can implement custom ones
            />
        </div>
    );
}


export default ProductDetail;