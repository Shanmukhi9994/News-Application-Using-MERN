import React, { useState } from 'react';
import { addNews } from '../api/newsAPI';

const AddNewsForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNews(formData);
    alert('News added successfully!');
    setFormData({ title: '', content: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        required
      />
      <button type="submit">Add News</button>
    </form>
  );
};

export default AddNewsForm;
