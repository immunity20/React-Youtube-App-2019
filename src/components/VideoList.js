import React from 'react';
import VideoClip from './VideoClip';

const VideoList = ({ items, handleVideoSelect }) => (
  <div>
    {items.map(item => <VideoClip key={item.id.videoId} item={item} handleVideoSelect={handleVideoSelect} />)}
  </div>
);

export default VideoList;
