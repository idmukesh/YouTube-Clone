import React from "react";

// Shimmer component for loading states
function Shimmer() {
  return (
    <div className="flex flex-col shadow-md rounded-md overflow-hidden">
      <div className="w-full h-44 bg-gray-700 animate-pulse" />
      <div className="flex px-3 pb-4 pt-3 space-x-3">
        <div className="h-10 w-10 bg-gray-700 rounded-full animate-pulse" />
        <div className="flex flex-col space-y-1">
          <div className="h-4 w-48 bg-gray-700 rounded animate-pulse" />
          <div className="h-3 w-32 bg-gray-700 rounded animate-pulse" />
          <div className="flex text-xs text-gray-400 space-x-1">
            <div className="h-3 w-12 bg-gray-700 rounded animate-pulse" />
            <div className="h-3 w-12 bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
