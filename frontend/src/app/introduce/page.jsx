"use client"

import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

function ProductDetail() {
  const tracks = [
    {
      id: 1,
      name: "Asme - Lila",
      date: "10 November, 2019",
      imgUrl: "/img/album1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=WZlL6-0trIs"
    },
    {
      id: 2,
      name: "Asme - Vem e du",
      date: "10 November, 2019",
      imgUrl: "/img/dvds-1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=NcslIhA4hlk"
    }
  ];

  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold mb-8">Latest Tracks</h2>
      <div className="w-full max-w-4xl space-y-8">
        {tracks.map((track) => (
          <TrackPlayer key={track.id} track={track} />
        ))}
      </div>
    </div>
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
    <div className="flex items-center p-4 border-b border-gray-200">
      <img
        src={track.imgUrl}
        alt={track.name}
        className="w-24 h-24 rounded object-cover mr-6"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{track.name}</h3>
        <p className="text-gray-500">{track.date}</p>
        <div className="flex items-center mt-2 space-x-2">
          {/* Play/Pause Button */}
          <button onClick={togglePlay} className="text-xl">
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          {/* Progress Bar */}
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={played}
            onChange={handleSeekChange}
            className="w-full"
          />
          {/* Volume Control */}
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20"
          />
        </div>
      </div>
      <button className="ml-4 px-4 py-2 border border-red-500 text-red-500 font-semibold rounded hover:bg-red-500 hover:text-white">
        Buy Album
      </button>

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
