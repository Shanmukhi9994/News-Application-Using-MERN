import React, { useEffect, useState } from 'react';
import { getAllNews } from '../api/newsAPI';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getAllNews();
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h2>News Articles</h2>
      {news.map((article) => (
        <NewsItem key={article._id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
