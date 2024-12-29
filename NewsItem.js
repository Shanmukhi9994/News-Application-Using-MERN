import React from 'react';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <small>By {article.author}</small>
    </div>
  );
};

export default NewsItem;
