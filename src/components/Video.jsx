import React from 'react';

const VideoSection = ({scrollToCategory}) => {
  const handleVideoError = (event) => {
    console.error('Error loading video:', event);
  };

  return (
    <div className="relative">
      <video className="w-full rounded" autoPlay loop muted onError={handleVideoError}>
        <source src="https://res.cloudinary.com/dfhj4i9hd/video/upload/v1721648731/styx/1006-142621176_arrok3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col  justify-center text-center text-white p-4 lg:items-start lg:pl-44">
        <div className="mb-4">
          <h2 className="text-2xl font-bold lg:text-5xl ">Summer in Style</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-xl lg:text-2xl">Shop Trending Styles</h3>
        </div>
        <div className="flex justify-center space-x-4">
          <div onClick={() => scrollToCategory('women')} className="border rounded-xl border-white p-4 cursor-pointer">
            <h4 className="text-lg lg:text-xl">Shop Women</h4>
          </div>
          <div onClick={() => scrollToCategory('men')} className="border rounded-xl border-white p-4 cursor-pointer">
            <h4 className="text-lg lg:text-xl">Shop Men</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;