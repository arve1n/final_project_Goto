import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('https://final-project-goto-api.vercel.app/api/videos').then((response) => {
      setVideos(response.data);
    });
  }, []);

  return (

    <div className="home-wrapper">
        <div className="header">
          <Link to="/" className="header-title">
            Tokopedia Play
          </Link>
          <div className="header-icons">
            <FaSearch className="header-icon" />
            <FaUserCircle className="header-icon" />
            <FaBell className="header-icon" />
          </div>
      </div>
      <div className="home-container">
      <h1 className="text-white">Video List</h1>
      <div className="video-list">
        {videos.slice(0, 5).map((video) => (
          <Link to={`/api/video/${video.videoId}`} className="video-card" key={video._id}>
            <img
              src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
              alt={video.title}
              className="video-thumbnail"
            />
            <p className="video-title">{video.title}</p>
          </Link>
        ))}
      </div>
    </div>
    <div className="footer">
        © 2023 Tokopedia-Play. All rights reserved.
      </div>
    </div>
  );
};

export default Home;
