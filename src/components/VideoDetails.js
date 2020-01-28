import React from 'react';

const VideoDetail = ({ item }) => {
  if (!item) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${item.id.videoId}`;
  return (
    <div>
      <div>
        <iframe src={videoSrc} allowFullScreen title="YoutubeVideo player" />
      </div>
      <div>
        <h4>{item.snippet.title}</h4>
        <p>{item.snippet.description}</p>
      </div>
    </div>

  );
};

export default VideoDetail;
