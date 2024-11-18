"use client";

import React, { useEffect, useState } from 'react';
import axios from "@/utils/axios";  // Adjust the import if necessary
import Link from 'next/link';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  
  // Fetch news data from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/News");  // Replace with your actual API endpoint
        setNews(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
      <div className="mb-24 text-center max-w-screen-sm mx-auto">
        <h2 className="text-3xl sm:text-5xl capitalize">All Posts</h2>
        <p className="mt-4 text-lg">
          Commodo ea nisi enim aute veniam reprehenderit cillum laborum aliquip sit eiusmod occaecat laborum fugiat mollit.
        </p>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.length === 0 ? (
          <p>Loading news...</p>  // Show a loading message while news is being fetched
        ) : (
          news.map((item) => (
            <div key={item.newsId}>
              <Link className="block" href={`/news/${item.newsId}`}>
                <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5">
                  <img
                    alt="Post thumbnail"
                    src={item.imageUrl}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Link>
              <div className="flex flex-wrap gap-3 items-center mt-6">
                <div className="flex flex-wrap gap-3">
                  <a
                    className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white tracking-wide whitespace-nowrap"
                    href={`/category/${item.categoryName.toLowerCase()}`}
                  >
                    {item.tags}
                  </a>
                </div>
                <div className="text-sm data-color flex items-center">
                  <span className="whitespace-nowrap"> {new Date(item.publishedAt).toLocaleDateString()}</span>
                  <span className="px-2.5">⋅</span>
                  <span className="whitespace-nowrap">{item.views} views</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-4 leading-snug">
                <Link href={`/news/${item.newsId}`}>{item.title}</Link>
              </h2>
              <p className="mt-4">{item.summary}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsPage;
