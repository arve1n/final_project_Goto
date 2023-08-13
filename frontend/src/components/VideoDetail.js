import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';
import './VideoDetail.css';

const VideoDetail = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const [comments, setComments] = useState([]);
  const [products, setProducts] = useState([]);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    axios.get(`https://final-project-goto-api.vercel.app/api/video/${videoId}`).then((response) => {
      setVideo(response.data);
    });

    axios.get(`https://final-project-goto-api.vercel.app/api/video/${videoId}/comments`).then((response) => {
      setComments(response.data);
    });

    axios.get(`https://final-project-goto-api.vercel.app/api/video/${videoId}/products`).then((response) => {
      setProducts(response.data);
    });
  }, [videoId]);

  const handleSubmitComment = () => {
    const newComment = {
      name: commentName,
      comment: commentText,
    };

    // API endpoint to submit comments
    axios
      .post(`https://final-project-goto-api.vercel.app/api/video/${videoId}/comments`, newComment)
      .then(() => {
        // Refresh comments
        axios.get(`https://final-project-goto-api.vercel.app/api/video/${videoId}/comments`).then((response) => {
          setComments(response.data);
          setCommentName('');
          setCommentText('');
        });
      })
      .catch((error) => {
        console.error('Error submitting comment:', error);
      });
  };

  return (
    <div className="video-detail-wrapper">
    
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
      <div className="video-detail-container">
      <div className="section-container">
        <h3>Product List</h3>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${product.images}`}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <p>{product.name}</p>
                <p>Rp. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="video-container">
        <iframe
          className="video-embed"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          allowFullScreen
          width="720"
          height="1280"
        />
      </div>
      <div className="section-container">
        <h3>Comment List</h3>
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c._id}>
              <strong>{c.name}</strong> : {c.comment}
            </li>
          ))}
        </ul>
        <div className="add-comment">
          <h3>Add a Comment</h3>
          <div className="input-group">
            <div className="input-field">
              <input
                type="text"
                placeholder="Name"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <textarea
                placeholder="Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-group">
            <div className="submit-button-wrapper">
              <button className="submit-button" onClick={handleSubmitComment}>
                Submit Comment
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="footer">
        <p>&copy; 2023 Tokopedia Play. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default VideoDetail;
