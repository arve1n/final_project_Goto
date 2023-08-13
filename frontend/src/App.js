import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VideoDetail from './components/VideoDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="api/video/:videoId" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
};

export default App;