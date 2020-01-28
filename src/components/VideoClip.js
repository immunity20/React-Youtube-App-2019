import React from 'react';
import { styled } from 'emotion';

const VideoClip = ({ item, handleVideoSelect }) => (
  <div onClick={() => handleVideoSelect(item)}>
    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.description} />
    <div>
      {item.snippet.tittle}
    </div>
  </div>
);

export default VideoClip;
