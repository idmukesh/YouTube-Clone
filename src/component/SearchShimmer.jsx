// SearchShimmer.js
import React from 'react';

function SearchShimmer() {
    return (
        <div className="flex flex-col gap-5 max-w-4xl mt-10 mx-auto ">
            {Array(5)
                .fill()
                .map((_, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg overflow-hidden flex animate-pulse"
                    >
                        {/* Thumbnail shimmer */}
                        <div className="w-[600px] h-[200px] bg-gray-600 animate-pulse"></div>

                        {/* Content shimmer */}
                        <div className="p-4 flex flex-col justify-between w-full">
                            <div className="h-5 bg-gray-600 animate-pulse mb-3"></div>
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-gray-600 rounded-full mr-2 animate-pulse"></div>
                                <div className="h-3 w-20 bg-gray-600 animate-pulse"></div>
                            </div>
                            <div className="h-3 bg-gray-600 animate-pulse w-24"></div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default SearchShimmer;
