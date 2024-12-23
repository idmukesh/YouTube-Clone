import { useSelector } from 'react-redux'; 
import SearchShimmer from '../component/SearchShimmer'; 
import ErrorPage from './ErrorPage';
import { useFetch } from '../utils/useFetch'; 
import { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../component/SideBar'; 
import MobileBottomNavBar from '../component/MobileBottomNavBar'; // Import mobile bottom navbar component

function SearchPage() {
    const navigate = useNavigate(); // Hook to handle navigation
    const accessToken = localStorage.getItem('accessToken'); // Retrieve accessToken from localStorage

    useEffect(() => {
        if (!accessToken) {
            navigate('/login'); // Redirect to login if no accessToken is present
        }
    }, [accessToken, navigate]); // Dependency array ensures that the effect runs when accessToken changes

    const { data, loading, err } = useFetch("https://youtube-clone-g7o0.onrender.com/videos"); // Fetch video data from API
    const [filterVideos, setFilterVideos] = useState([]); // State to hold filtered videos
    const inputValue = useSelector((state) => state.searchSlice.inputValue); // Get search input from Redux store
    const toggle = useSelector((state) => state.toggleSlice.toggle); // Get toggle state from Redux store

    // Format view count to display in a readable format (e.g., 1K, 1M)
    function ViewFormation(views) {
        if (views >= 100000) {
            return (views / 100000).toFixed(1) + 'M';
        } else if (views >= 1000) {
            return (views / 1000).toFixed() + 'K';
        } else {
            return views;
        }
    }

    // Format time difference (e.g., "5 minutes ago", "2 days ago")
    function timeAgo(timeStamp) {
        let now = new Date();
        let then = new Date(timeStamp);
        const TimeDifferenceInMs = now - then;
        const years = Math.floor(TimeDifferenceInMs / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(TimeDifferenceInMs / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(TimeDifferenceInMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor(TimeDifferenceInMs / (1000 * 60 * 60));
        const minutes = Math.floor(TimeDifferenceInMs / (1000 * 60));
        const seconds = Math.floor(TimeDifferenceInMs / 1000);

        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ago`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        }
    }

    useEffect(() => {
        if (data && inputValue.trim() !== "") {
            // Filter videos based on search input value
            const filteredVideos = data.Videos.filter((video) =>
                video.Title.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilterVideos(filteredVideos);
        } else {
            setFilterVideos([]); // Reset filtered videos if input is empty
        }
    }, [data, inputValue]); // Dependency array ensures the effect runs when data or inputValue changes

    // If the data is still loading, show the shimmer loading component
    if (loading) {
        return <SearchShimmer />;
    }

    // If there is an error while fetching the data, show the error page
    if (err) {
        return <ErrorPage />;
    }

    return (
        <>
            <SideBar /> {/* Sidebar for navigation */}
            <div className="bg-dark-gray min-h-screen py-10">
                <div className={`${toggle ? 'max-w-4xl' : 'max-w-5xl'} mx-auto px-5 `}>
                    {filterVideos.length === 0 ? (
                        // If no filtered videos found, display "No Search Results Found" message
                        <div className="bg-dark-gray text-white p-6 mt-10 flex flex-col items-center justify-center">
                            <i className="fa-solid fa-magnifying-glass-slash text-6xl mb-4"></i>
                            <h1 className="text-3xl font-semibold mb-4">No Search Results Found</h1>
                            <p className="text-xl text-gray-400">Sorry, we couldn't find any results for your search.</p>
                            <div className="mt-4 p-4 bg-neutral-700 rounded-lg text-center">
                                <p className="text-lg">Try searching with different keywords or explore popular content below.</p>
                                <Link to="/" className="text-blue-400 hover:text-blue-500 text-sm mt-2 block">
                                    Go back to Home
                                </Link>
                            </div>
                        </div>
                    ) : (
                        // If there are filtered videos, display the search results
                        <div className="flex flex-col gap-5 ">
                            <div className="text-white text-lg mb-5">
                                <h2>Search Results</h2>
                            </div>
                            {filterVideos.map((video) => (
                                <Link to={`/watch/${video._id}`} key={video._id}>
                                    <div className="bg-dark-gray rounded-lg overflow-hidden w-full flex flex-col md:flex-row">
                                        <img
                                            src={video.Thumbnails}
                                            alt={video.Title}
                                            className="w-[700px] h-[220px] object-cover rounded-lg"
                                        />
                                        <div className="p-4 flex flex-col w-full">
                                            <h3 className="text-white text-sm font-semibold truncate">{video.Title}</h3>
                                            <div className="space-x-2">
                                                <span className="text-gray-500 text-[10px]">{ViewFormation(video.Views)}</span>
                                                <span className="text-gray-500 text-[10px]">{timeAgo(video.TimeStamp)}</span>
                                            </div>
                                            <div className="flex items-center mt-2">
                                                <img
                                                    src={video.ChannelLogo}
                                                    alt={video.ChannelName}
                                                    className="w-8 h-8 rounded-full mr-2"
                                                />
                                                <span className="text-gray-400 text-xs font-medium">{video.ChannelName}</span>
                                            </div>
                                            <p className="text-gray-400 text-[10px] font-semibold truncate mt-2">{video.Title}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <MobileBottomNavBar /> {/* Mobile bottom navigation bar */}
        </>
    );
}

export default SearchPage;
