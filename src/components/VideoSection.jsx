import React from 'react';

export default function VideoSection({scrollToCategory}) {

  return (
    <div className="relative">
      <video className="w-full rounded" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dfhj4i9hd/video/upload/v1721654468/styx/3401164459-preview_a08pfb.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col  justify-center text-center text-yellow-100 p-4 items-start lg:pl-24">
        <div className="mb-4">
          <h2 className="text-1xl font-extrabold lg:text-7xl ">Summer in Style</h2>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-bold lg:text-3xl">Shop Trending Styles</h3>
        </div>
        <div className="flex justify-center space-x-4">
          <div onClick={() => scrollToCategory('women')} className="border-2 md:border-4 rounded-lg md:rounded-xl border-[#FFF491] p-1 md:p-4 cursor-pointer">
            <h4 className="text-[0.6rem] font-bold lg:text-xl">SHOP WOMEN</h4>
          </div>
          <div onClick={() => scrollToCategory('men')} className="border-2 md:border-4 rounded-lg md:rounded-xl  border-[#FFF491] p-1 md:p-4 cursor-pointer">
            <h4 className="text-[0.6rem] font-bold lg:text-xl">SHOP MEN</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

