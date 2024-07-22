import React from 'react';

const VideoSection = () => {
  const handleVideoError = (event) => {
    console.error('Error loading video:', event);
  };

  return (
    <div className="relative">
      <video className="w-full rounded" autoPlay loop muted onError={handleVideoError}>
        <source src="https://res.cloudinary.com/dfhj4i9hd/video/upload/v1721498067/styx/videoBg_ohz14q.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-start pl-44 justify-center text-center text-white p-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Summer in Style</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-xl">Ship Trending Styles</h3>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="border border-white p-4">
            <h4 className="text-lg">Shop Women</h4>
          </div>
          <div className="border border-white p-4">
            <h4 className="text-lg">Shop Men</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;