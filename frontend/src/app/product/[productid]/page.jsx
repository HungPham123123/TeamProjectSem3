"use client"

import ReactPlayer from 'react-player';
import React, { useState, useRef, useEffect, use } from 'react';
import axios from "@/utils/axios";
import Link from 'next/link';


function ProductDetail({ params }) {
    const { productid } = use(params);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productid) {
            axios.get(`/api/Products/${productid}`)
                .then((response) => {
                    setProduct(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching product details:", error);
                });
        }
    }, [productid]);

    if (!product) {
        return <div>Loading...</div>;
    }


    const tracks = [
        {
            id: 1,
            name: "The Weeknd - Starboy ft. Daft Punk",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=Rif-RTvmmss"
        }
    ];


    return (
        <>
            <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start px-4 md:px-8 2xl:px-16">
                <div className="col-span-5 grid grid-cols-2 gap-2.5">
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        {product.image1 && <img src={product.image1} alt={product.title} className="object-cover w-full" />}
                    </div>
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        {product.image2 && <img src={product.image2} alt={product.title} className="object-cover w-full" />}
                    </div>
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        {product.image3 && <img src={product.image3} alt={product.title} className="object-cover w-full" />}
                    </div>
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        {product.image4 && <img src={product.image4} alt={product.title} className="object-cover w-full" />}
                    </div>

                </div>
                <div className="col-span-4 pt-8 lg:pt-0">
                    <div className="pb-7 mb-7 border-b border-gray-300">
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
                    </div>

                    <div className="flex items-center gap-x-4 ltr:md:pr-32 rtl:md:pl-32 ltr:lg:pr-12 rtl:lg:pl-12 ltr:2xl:pr-32 rtl:2xl:pl-32 ltr:3xl:pr-48 rtl:3xl:pl-48 border-b border-gray-300 py-8">
                        <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button
                                className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
                                disabled=""
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 1.5"
                                >
                                    <rect data-name="Rectangle 970" width="12px" height="2px" fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
                                1
                            </span>
                            <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading">
                                <svg data-name="plus (2)" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"
                                > <g data-name="Group 5367">
                                        <path data-name="Path 17138" d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z" fill="currentColor"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <button
                            data-variant="slim"
                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  h-11 md:h-12 px-5 bg-black text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart w-1/2 md:w-6/12 xl:w-1-2  hover:bg-gray-400"
                            disabled=""
                        >
                            <span className="py-2 3xl:px-8">Add to cart</span>
                        </button>
                    </div>
                    <div className="py-6">
                        <ul className="text-sm space-y-5 pb-1">
                            <li>
                                <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                    SKU:
                                </span>
                                {product.productId}
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