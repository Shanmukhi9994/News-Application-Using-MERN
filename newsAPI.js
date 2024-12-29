import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news';

export const getAllNews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getNewsById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addNews = async (news) => {
  const response = await axios.post(API_URL, news);
  return response.data;
};

export const updateNews = async (id, updatedNews) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedNews);
  return response.data;
};

export const deleteNews = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
