"use client"

import ReactPlayer from 'react-player';
import React, { useState, useRef, useEffect, use } from 'react';
import axios from "@/utils/axios";
import Link from 'next/link';


function ProductDetail({ params }) {
    const { productid } = use(params);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (productid) {
            axios.get(`/api/Products/${productid}`)
                .then((response) => {
                    setProduct(response.data);
                    console.log(response.data);
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
            console.log("Added to cart:", response.data);
            alert("Product added to cart!");
        })
        .catch((error) => {
            console.log(error)
            alert(error.response?.data || "Failed to add product to cart.");
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
                <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                    {product.albums[0]?.biography}
                </p>
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
                <div className="flex items-center gap-x-4 py-8">
                    <div className="group flex items-center border rounded-md overflow-hidden h-11 md:h-12">
                        <button
                            onClick={() => handleQuantityChange('decrement')}
                            className="w-10 md:w-12 flex justify-center items-center border-r"
                        >
                            -
                        </button>
                        <span className="w-12 md:w-20 flex justify-center items-center text-heading font-semibold">
                            {quantity}
                        </span>
                        <button
                            onClick={() => handleQuantityChange('increment')}
                            className="w-10 md:w-12 flex justify-center items-center border-l"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={addToCart}
                        className="h-11 md:h-12 px-5 bg-black text-white font-semibold rounded-md"
                    >
                        Add to Cart
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
                    <div
                        data-aos="fade-up"
                        className="w-full tab-content-item aos-init aos-animate"
                    >
                        <div className="w-full p-4">
                            <h6 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300 ">Description</h6>
                            <div className="text-base text-gray-700 leading-relaxed mb-6 break-words">
                                <span className="font-semibold text-black">{product.title} :</span>

                                <p>
                                    {product.albums[0]?.biography}
                                </p>

                            </div>
                        </div>

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
            </div>

        </>

    );
}
function TrackPlayer({ track }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0);
    const playerRef = useRef(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const handleProgress = (progress) => {
        setPlayed(progress.played);
    };

    const handleSeekChange = (e) => {
        const newPlayed = parseFloat(e.target.value);
        setPlayed(newPlayed);
        playerRef.current.seekTo(newPlayed);
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
                        max={1}
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
            />
        </div>
    );
}
export default ProductDetail;