// ChannelShimmer.js
const ChannelShimmer = () => {
    return (
        <div className="bg-dark-gray text-white p-6 mt-10 flex flex-col justify-center max-w-5xl animate-pulse mx-auto">
            {/* Shimmer Effect for Profile */}
            <div className="flex items-center gap-6 mb-6">
                <div className="w-36 h-36 bg-gray-700 rounded-full"></div> {/* Profile image shimmer */}
                <div className="space-y-4">
                    <div className="w-48 h-6 bg-gray-700 rounded-md"></div> {/* Channel name shimmer */}
                    <div className="w-32 h-4 bg-gray-700 rounded-md"></div> {/* Channel headline shimmer */}
                </div>
            </div>

            {/* Shimmer Effect for Videos */}
            <div className="pb-20 w-full">
                <h2 className="text-xl font-semibold mb-4 w-36 h-6 bg-gray-700 rounded-md"></h2> {/* Video section title shimmer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Shimmer effect for each video placeholder */}
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                            <div className="w-full h-40 bg-gray-700"></div> {/* Video thumbnail shimmer */}
                            <div className="p-4 space-y-4">
                                <div className="w-32 h-4 bg-gray-700 rounded-md"></div> {/* Video title shimmer */}
                                <div className="w-24 h-4 bg-gray-700 rounded-md"></div> {/* Video views and date shimmer */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChannelShimmer;
