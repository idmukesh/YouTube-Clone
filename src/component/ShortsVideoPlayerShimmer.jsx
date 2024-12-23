import React from "react";

function ShortsVideoPlayerShimmer() {
  return (
    <div className="relative h-4/5 w-64 bg-slate-600 rounded-lg shadow-lg overflow-hidden">
      {/* Video Shimmer Placeholder */}
      <div className="w-full h-full bg-gray-300 animate-pulse"></div>

      {/* Channel Info Shimmer Placeholder */}
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-10 h-10 bg-gray-300 animate-pulse"></div>
          <div className="text-white">
            <div className="w-24 h-4 bg-gray-300 animate-pulse mb-2"></div>
            <div className="w-36 h-3 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Action Icons Shimmer */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-white">
        {/* Like */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Save */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 animate-pulse"></div>
        </div>

        {/* Send */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 animate-pulse"></div>
          <div className="w-12 h-3 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default ShortsVideoPlayerShimmer;
