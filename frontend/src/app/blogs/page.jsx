import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Watch Classic DVDs',
      description: 'Explore the top 10 classic movies that every collector should own.',
      imageUrl: 'https://via.placeholder.com/150',
      link: '/blog/classic-dvds',
    },
    {
      id: 2,
      title: 'New Releases This Month',
      description: 'Check out the latest DVD releases available on our store this month.',
      imageUrl: 'https://via.placeholder.com/150',
      link: '/blog/new-releases',
    },
    {
      id: 3,
      title: 'Top Sci-Fi Movies of All Time',
      description: 'A list of must-watch science fiction movies for every fan.',
      imageUrl: 'https://via.placeholder.com/150',
      link: '/blog/sci-fi-movies',
    },
  ];

  return (
    <div style={blogContainerStyle}>
      <h1 style={titleStyle}>Our Blog</h1>
      <p style={introTextStyle}>Welcome to our blog! Here, you’ll find the latest news, updates, and must-have DVDs in our collection.</p>
      
      <div style={postsContainerStyle}>
        {blogPosts.map((post) => (
          <div key={post.id} style={postStyle}>
            <img src={post.imageUrl} alt={post.title} style={imageStyle} />
            <div style={postContentStyle}>
              <h2 style={postTitleStyle}>{post.title}</h2>
              <p style={postDescriptionStyle}>{post.description}</p>
              <a href={post.link} style={readMoreStyle}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const blogContainerStyle = {
  maxWidth: '1000px',
  margin: '20px auto',
  padding: '30px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#333',
  marginBottom: '10px',
};

const introTextStyle = {
  fontSize: '1.2rem',
  color: '#666',
  marginBottom: '30px',
};

const postsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px',
};

const postStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  textAlign: 'left',
  backgroundColor: '#fff',
};

const imageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
};

const postContentStyle = {
  padding: '15px',
};

const postTitleStyle = {
  fontSize: '1.5rem',
  color: '#333',
  margin: '0 0 10px 0',
};

const postDescriptionStyle = {
  fontSize: '1rem',
  color: '#666',
  marginBottom: '15px',
};

const readMoreStyle = {
  fontSize: '1rem',
  color: '#007bff',
  textDecoration: 'none',
};

export default Blog;
