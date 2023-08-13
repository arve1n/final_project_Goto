import React, { useState } from 'react';
import axios from 'axios';

const AddComment = ({ videoId }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      axios
        .post(`http://localhost:5000/api/video/${videoId}/comments`, { name, comment })
        .then((response) => {
          console.log('Comment added:', response.data);
        });
    }
  };

  return (
    <div>
      <h2>Add Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default AddComment;
