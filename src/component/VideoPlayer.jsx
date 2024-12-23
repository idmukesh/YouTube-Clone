import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="relative w-full pb-[56.25%] bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full"
        controls
        autoPlay
      >
        <source src={videoUrl} type="video/webm" />
    
      </video>
    </div>
  );
};

export default VideoPlayer;
