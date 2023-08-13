import React, { useState } from 'react';
import axios from 'axios';

const AddVideo = () => {
  const [title, setTitle] = useState('');
  const [videoId, setVideoId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && videoId) {
      axios.post('http://localhost:5000/api/videos', { title, videoId }).then((response) => {
        console.log('Video added:', response.data);
      });
    }
  };

  return (
    <div>
      <h2>Add Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="YouTube Video ID"
          value={videoId}
          onChange={(e) => setVideoId(e.target.value)}
        />
        <br />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default AddVideo;
