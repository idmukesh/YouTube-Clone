import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../utils/useFetch';
import SideBar from "../component/SideBar";
import MobileBottomNavBar from "../component/MobileBottomNavBar";
import ChannelShimmer from "../component/ChannelShimmer";

const ChannelPage = () => {
    const [channel, setChannel] = useState(null);
    const navigateTo = useNavigate();
    const loggedInUser = localStorage.getItem("logedInUser");
    // Fetch channel data
    const { data, loading, err } = useFetch("https://youtube-clone-g7o0.onrender.com/channels");

    useEffect(() => {
        if (data) {
            const filteredChannel = data.Channels.find((channel) => channel.email === loggedInUser);
            setChannel(filteredChannel);
        }
    }, [data, loggedInUser]);

    // Handle logout (for example, redirect to a login page)
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('logedInUser');
        localStorage.removeItem('resitration');
        localStorage.removeItem('username')
        navigateTo('/');
    };

    // If channel details are not available and loading is done, redirect to create channel
    if (loading) {
        return <ChannelShimmer/>
    }

    if (!channel) {
        return (
            <>
                <SideBar />
                <div className="bg-dark-gray text-white p-6 mt-10 flex flex-col justify-center items-center">
                    <div className="mt-6 text-center">
                        <h2 className="text-2xl font-semibold mb-4">Channel Not Found</h2>
                        <p className="text-lg text-gray-400 mb-4">It looks like you don't have a channel yet.</p>
                        <button
                            onClick={() => navigateTo('/createchannel')} // Redirect to the "create channel" page
                            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
                        >
                            Create a Channel
                        </button>
                    </div>
                </div>
                <MobileBottomNavBar />
            </>
        );
    }

    // Render channel information if channel is found
    return (
        <>
            <SideBar />
            <div className="bg-dark-gray text-white p-6 h-screen max-w-5xl mx-auto relative md:pl-20">
                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="absolute top-6 right-6 bg-neutral-600/20 text-white px-4 py-2 rounded-full"
                >
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                </button>
    
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                    <img
                        src={channel.profilePhoto}
                        alt="profile"
                        className="w-36 h-36 rounded-full border-4 border-gray-700" // Bigger profile photo
                    />
                    <div className="mt-4 sm:mt-0"> {/* Adjust margin on small screens */}
                        <h1 className="text-4xl font-semibold">{channel.name}</h1> {/* Larger name */}
                        <p className="text-xl text-gray-400">{channel.headline}</p> {/* Display the headline */}
                    </div>
                </div>
    
                {/* Horizontal Line Separator */}
                <hr className="border-gray-600 mb-6" />
    
                {/* Videos Section */}
                <div className="pb-20">
                    <h2 className="text-xl font-semibold mb-4">Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {channel.videos.map((video, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                                <img
                                    src={video.videoUrl}
                                    alt={video.title}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{video.title}</h3>
                                    <p className="text-sm text-gray-400">{video.views} views • {video.uploaded}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <MobileBottomNavBar />
        </>
    );
    
};

export default ChannelPage;
