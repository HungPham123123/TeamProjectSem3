"use client"
import React, { useEffect, useState, use } from 'react';
import axios from '@/utils/axios'; // Adjust this path as necessary

function NewsDetail({ params }) {
    const { newsid } = use(params);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the news data from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/News/${newsid}`);
        setNews(response.data); // Set the fetched news data to the state
      } catch (err) {
        setError('Failed to fetch news');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-wrap gap-3 items-center text-[15px]">
          <div className="flex flex-wrap gap-3">
            <a
              className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white tracking-wide whitespace-nowrap"
              href={`/category/${news.categoryName.toLowerCase()}`}
            >
              {news.tags}
            </a>
          </div>
          <div className="text-sm data-color flex items-center">
            <span className="whitespace-nowrap">{new Date(news.publishedAt).toLocaleDateString()}</span>
            <span className="px-2.5">⋅</span>
            <span className="whitespace-nowrap">{news.views} views</span>
          </div>
        </div>
        <h2 className="font-bold leading-snug text-3xl sm:text-[2.5rem] mt-6">
          {news.title}
        </h2>
        <div className="flex gap-2 items-center mt-4">
          <div className="flex">
            <a className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 " href={`/author/${news.authorName.toLowerCase()}`}>
              <div
                className="rounded-full overflow-hidden border-4 border-gray-200 inline-block leading-[0] !border-2"
                style={{ width: 30, height: 30 }}
              >
                <img src={news.imageUrl} alt={news.authorName} />
              </div>
            </a>
          </div>
          <div>
            <a className="text-sm font-medium heading-color" href={`/author/${news.authorName.toLowerCase()}`}>
              {news.authorName}
            </a>
          </div>
        </div>
        <div className="block relative pt-[75%] bg-black/5 mt-12">
          <img
            alt="Post thumbnail"
            src={news.imageUrl}
            decoding="async"
            data-nimg="fill"
            loading="lazy"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: 0,
              objectFit: 'cover',
              color: 'transparent',
            }}
          />
        </div>
        <div className="prose sm:prose-lg max-w-none prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 mt-16">
          <p>{news.content}</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-16">
          {news.tags.split(',').map(tag => (
            <a key={tag} className="text-xs font-semibold data-color rounded-full capitalize bg-gray-100 py-2 px-3 whitespace-nowrap" href={`/tag/${tag}`}>
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
