import React from 'react';

function VideoPlayerShimmer() {
    const emptyArr = new Array(8).fill(null)
    return (
        <div className="flex flex-wrap lg:flex-nowrap bg-dark-gray text-white p-4 animate-pulse">
            {/* Left Section */}
            <div className="w-full lg:w-3/4 mb-4 lg:mb-0 md:pl-20">
                {/* Video Player */}
                <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-700"></div> {/* Placeholder for video */}
                </div>

                {/* Channel Info */}
                <div className="flex items-center gap-4 mt-4 justify-between">
                    <div className="flex items-center gap-4">
                        {/* Channel Logo */}
                        <div className="w-14 h-14 rounded-full bg-gray-700"></div>
                        {/* Channel Name and Title */}
                        <div>
                            <div className="w-48 h-5 bg-gray-700 rounded-md mb-2"></div> {/* Title placeholder */}
                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-32 h-4 bg-gray-700 rounded-md"></div> {/* Subscribers placeholder */}
                                <div className="w-24 h-8 bg-gray-700 rounded-full"></div> {/* Subscribe button placeholder */}
                            </div>
                        </div>
                    </div>
                    {/* Like and Share Buttons */}
                    <div className="flex justify-end gap-6 mt-4 pr-4">
                        <div className="w-20 h-6 bg-gray-700 rounded-md"></div> {/* Like button placeholder */}
                        <div className="w-20 h-6 bg-gray-700 rounded-md"></div> {/* Share button placeholder */}
                    </div>
                </div>

                {/* Comments Section */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4 w-24 h-5 bg-gray-700 rounded-md"></h3> {/* Comments header placeholder */}
                    <div className="max-h-80 overflow-y-auto">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                            <div>
                                <div className="w-32 h-4 bg-gray-700 rounded-md mb-2"></div> {/* Commenter name placeholder */}
                                <div className="w-48 h-4 bg-gray-700 rounded-md"></div> {/* Comment text placeholder */}
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                            <div>
                                <div className="w-32 h-4 bg-gray-700 rounded-md mb-2"></div> {/* Commenter name placeholder */}
                                <div className="w-48 h-4 bg-gray-700 rounded-md"></div> {/* Comment text placeholder */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section (Suggested Videos) */}
            <div className="w-full lg:w-1/4 p-4 bg-dark-gray">
                <div className="space-y-4 overflow-y-auto">
                    {
                        emptyArr.map((_,index) => {
                            return <>
                                <div className="flex gap-4" key={index}>
                                    <div className="w-32 h-18 bg-gray-700 rounded-md"></div> {/* Video thumbnail placeholder */}
                                    <div>
                                        <div className="w-32 h-4 bg-gray-700 rounded-md mb-2"></div> {/* Video title placeholder */}
                                        <div className="w-24 h-4 bg-gray-700 rounded-md mb-1"></div> {/* Channel name placeholder */}
                                        <div className="w-32 h-4 bg-gray-700 rounded-md"></div> {/* Views placeholder */}
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoPlayerShimmer
