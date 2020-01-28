import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { YOUTUBE_API_KEY } from './APIKEYS';
import Search from './components/Search';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  const handleSubmit = async (search) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 6,
        key: YOUTUBE_API_KEY,
        q: search,
      },
    });
    if (response.data && response.data.items) setVideoList(response.data.items);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    console.log(videoList);
    setSelectedVideo(videoList[0]);
  }, [videoList]);

  return (
    <div className="App">
      <header className="App-header">
        <Search handleSubmit={handleSubmit} />
      </header>
      <div>
        <VideoDetails item={selectedVideo} />
      </div>
      <div>
        <VideoList handleVideoSelect={handleVideoSelect} items={videoList} />
      </div>
    </div>
  );
}

export default App;
