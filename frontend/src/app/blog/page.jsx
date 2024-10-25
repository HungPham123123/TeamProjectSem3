import React from 'react';

const Blog = () => {
  return (
    <div style={blogContainerStyle}>
      <h1>Blog</h1>
      <p>Welcome to our blog! Here you will find the latest news and updates.</p>
      {/* Thêm danh sách bài viết hoặc nội dung blog ở đây */}
    </div>
  );
};

const blogContainerStyle = {
  maxWidth: '800px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

export default Blog;
