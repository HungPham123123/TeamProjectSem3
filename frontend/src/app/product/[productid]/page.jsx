"use client"

import ReactPlayer from 'react-player';
import React, { useState, useRef } from 'react';
import Link from 'next/link';


function ProductDetail() {

    

    const tracks = [
        {
            id: 1,
            name: "The Weeknd - Starboy ft. Daft Punk",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=Rif-RTvmmss"
        },
        {
            id: 2,
            name: "The Weeknd - Party Monster",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=j9Hije4z6O4"
        },
        {
            id: 3,
            name: "The Weeknd - False Alarm",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=7uf8xkknCxQ"
        },
        {
            id: 4,
            name: "The Weeknd - Reminder",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=h_VCgsWLmY4"
        },
        {
            id: 5,
            name: "The Weeknd - Rockin’",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=Nox2RGWOOdE"
        },
        {
            id: 6,
            name: "The Weeknd - Secrets",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=nh3Nc2XsdM0"
        },
        {
            id: 7,
            name: "The Weeknd - True Colors",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=VQ5XQYpx2mg"
        },
        {
            id: 8,
            name: "The Weeknd - Stargirl Interlude ft. Lana Del Rey",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=TkxVOa6u59M"
        },
        {
            id: 9,
            name: "The Weeknd - Sidewalks ft. Kendrick Lamar",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=sK-T-cmznY8"
        },
        {
            id: 10,
            name: "The Weeknd - Six Feet Under",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=Yu7kHJqKRW8"
        },
        {
            id: 11,
            name: "The Weeknd - Love To Lay",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=dB4YSEHG3ac"
        },
        {
            id: 12,
            name: "The Weeknd - A Lonely Night",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=iBnLoAE9kUE"
        },
        {
            id: 13,
            name: "The Weeknd - Attention",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=3tHuJAZpYNw"
        },
        {
            id: 14,
            name: "The Weeknd - Ordinary Life",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=PlJV9IesfIk"
        },
        {
            id: 15,
            name: "The Weeknd - Nothing Without You",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=WFO7r3g-JBc"
        },
        {
            id: 16,
            name: "The Weeknd - All I Know ft. Future",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=4iSEJB1KJ0w"
        },
        {
            id: 17,
            name: "The Weeknd - Die For You",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=2AH5l-vrY9Q"
        },
        {
            id: 18,
            name: "The Weeknd - I Feel It Coming ft. Daft Punk",
            date: "25 November, 2016",
            imgUrl: "/img/album1.jpg",
            videoUrl: "https://www.youtube.com/watch?v=5v1TOFULOWA"
        }
    ];


    return (
        <>
            <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start px-4 md:px-8 2xl:px-16">
                <div className="col-span-5 grid grid-cols-2 gap-2.5">
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        <img
                            src="/img/album1.jpg"
                            alt="Maniac Red Boys--0"
                            className="object-cover w-full"
                        />
                    </div>
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        <img
                            src="/img/album1.jpg"
                            alt="Maniac Red Boys--1"
                            className="object-cover w-full"
                        />
                    </div>
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        <img
                            src="/img/album1.jpg"
                            alt="Maniac Red Boys--2"
                            className="object-cover w-full"
                        />
                    </div>
                    <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                        <img
                            src="/img/album1.jpg"
                            alt="Maniac Red Boys--3"
                            className="object-cover w-full"
                        />
                    </div>
                </div>
                <div className="col-span-4 pt-8 lg:pt-0">
                    <div className="pb-7 mb-7 border-b border-gray-300">
                        <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
                            The Weeknd - Starboy Exclusive
                        </h2>
                        <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
                        Starboy, the critically acclaimed album by Canadian artist The Weeknd, is a must-have for any music lover. Featuring the signature smooth blend of R&B, pop, and electronic influences, this album takes you on a sonic journey through themes of fame, love, and self-reflection.
                        </p>
                        <div className="flex items-center mt-5">
                            <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0 mr-2">
                                $40.00
                            </div>
                            <span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ltr:pl-2 rtl:pr-2">
                                $50.00
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4 ltr:md:pr-32 rtl:md:pl-32 ltr:lg:pr-12 rtl:lg:pl-12 ltr:2xl:pr-32 rtl:2xl:pl-32 ltr:3xl:pr-48 rtl:3xl:pl-48 border-b border-gray-300 py-8">
                        <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                            <button
                                className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
                                disabled=""
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12px"
                                    height="2px"
                                    viewBox="0 0 12 1.5"
                                >
                                    <rect
                                        data-name="Rectangle 970"
                                        width="12px"
                                        height="2px"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
                                1
                            </span>
                            <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading">
                                <svg
                                    data-name="plus (2)"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12px"
                                    height="12px"
                                    viewBox="0 0 12 12"
                                >
                                    <g data-name="Group 5367">
                                        <path
                                            data-name="Path 17138"
                                            d="M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z"
                                            fill="currentColor"
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
                                N/A
                            </li>
                            <li>
                                <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                    Category:
                                </span>
                                <a className="transition hover:underline hover:text-heading" href="/">
                                    kids
                                </a>
                            </li>
                            <li className="productTags">
                                <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                                    Tags:
                                </span>
                                <a
                                    className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                                    href="/products/casual"
                                >
                                    Casual<span className="text-heading">,</span>
                                </a>
                                <a
                                    className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                                    href="/products/cotton"
                                >
                                    Cotton<span className="text-heading">,</span>
                                </a>
                                <a
                                    className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                                    href="/products/red"
                                >
                                    Red<span className="text-heading">,</span>
                                </a>
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
                                <span className="font-semibold text-black">The Weeknd - Starboy (Demo)</span>

                                <p>
                                    Starboy, the critically acclaimed album by Canadian artist The Weeknd, is a must-have for any music lover. Featuring the signature smooth blend of R&B, pop, and electronic influences, this album takes you on a sonic journey through themes of fame, love, and self-reflection.
                                </p>

                                <p>
                                    Released in 2016, Starboy showcases The Weeknd’s versatility with tracks that effortlessly combine catchy hooks with introspective lyrics. The album’s title track, featuring Daft Punk, became an instant classic, delivering an electrifying fusion of upbeat rhythms and mesmerizing melodies. Alongside Starboy, you'll find hits like I Feel It Coming, Party Monster, and Reminder, each track contributing to the album’s immersive experience.
                                </p>

                                <p>
                                    This demo version of Starboy offers a glimpse into The Weeknd's creative process, allowing fans to experience the raw essence of the album before its final production. Whether you're a long-time fan or a newcomer to The Weeknd's music, this demo offers a unique insight into one of the most influential albums of the decade.
                                </p>

                                <div>
                                    <span className="font-semibold text-black">Key Features:</span>
                                    <ul className="list-disc list-inside pl-5">
                                        <li>Exclusive demo version of Starboy.</li>
                                        <li>A fusion of R&B, electronic, and pop sounds.</li>
                                        <li>Features the chart-topping singles Starboy and I Feel It Coming.</li>
                                        <li>A perfect addition to any music collection.</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="font-semibold text-black">Perfect for:</span>
                                    <ul className="list-disc list-inside pl-5">
                                        <li>The Weeknd fans who want to experience the demo version of his iconic album.</li>
                                        <li>Collectors seeking rare and exclusive music releases.</li>
                                        <li>Anyone looking to enjoy a timeless fusion of catchy hooks and deep lyrics.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col py-12">
                                <h2 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300 ">
                                    Album Songs
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                                    {tracks.map((track) => (
                                        <TrackPlayer key={track.id} track={track} />
                                    ))}
                                </div>
                            </div>


                            <h6 className="text-[25px] font-medium text-black mb-2 pb-7 mb-7 border-b border-gray-300">Artist in Album</h6>

                            <div className="flex flex-wrap items-center ">
                                <Link href="" className="text-[15px] text-qgray text-normal flex flex-col items-center space-y-2 m-4">
                                    <img
                                        src="/img/main-image-1.jpg"
                                        alt="Artist"
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <p className="text-black">The Weeknd</p>
                                </Link>
                                <Link href="" className="text-[15px] text-qgray text-normal flex flex-col items-center space-y-2 m-4">
                                    <img
                                        src="/img/main-image-2.jpg"
                                        alt="Artist"
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <p className="text-black">Daft Punk</p>
                                </Link>
                                <Link href="" className="text-[15px] text-qgray text-normal flex flex-col items-center space-y-2 m-4">
                                    <img
                                        src="/img/main-image-3.jpg"
                                        alt="Artist"
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <p className="text-black">Lana Del Rey</p>
                                </Link>
                                <Link href="" className="text-[15px] text-qgray text-normal flex flex-col items-center space-y-2 m-4">
                                    <img
                                        src="/img/main-image-4.jpg"
                                        alt="Artist"
                                        className="w-20 h-20 rounded-full object-cover"
                                    />
                                    <p className="text-black">Kendrick Lamar</p>
                                </Link>
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
        <div className="flex items-center p-4 border-b border-gray-200 w-3/4">
            <img
                src={track.imgUrl}
                alt={track.name}
                className="w-24 h-24 rounded object-cover mr-6"
            />
            <div className="flex-1">
                <h3 className="text-xl font-semibold">{track.name}</h3>
                <p className="text-gray-500">{track.date}</p>
                <div className="flex items-center mt-2 space-x-4">
                    <button
                        onClick={togglePlay}
                        className="px-1 py-1 bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition"
                    >
                        {isPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-pause"
                            >
                                <rect x="6" y="4" width="4" height="16"></rect>
                                <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-play"
                            >
                                <polygon points="5,3 19,12 5,21"></polygon>
                            </svg>
                        )}
                    </button>

                    {/* Seek bar */}
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step="any"
                        value={played}
                        onChange={handleSeekChange}
                        className="w-full h-2 bg-black rounded-lg cursor-pointer"
                    />

                    {/* Volume control */}
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