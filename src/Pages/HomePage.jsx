import Feed from "../component/Feed";
import SideBar from "../component/SideBar"; 
import { useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 
import { useFetch } from "../utils/useFetch"; // Import custom hook for fetching data
import { useState, useEffect } from "react"; 
import MobileBottomNavBar from "../component/MobileBottomNavBar"; // Import mobile navbar component

function HomePage() {
  const toggle = useSelector((state) => state.toggleSlice.toggle); // Get toggle state from Redux store
  const [videos, setVideos] = useState([]); // State to hold all videos
  const [filterVideo, setFilteredVideo] = useState([]); // State to hold filtered videos
  const { data, loading, err } = useFetch("https://youtube-clone-g7o0.onrender.com/videos"); // Fetch video data
  const navigateTo = useNavigate(); // Hook to navigate after checking login status

  const accessToken = localStorage.getItem("accessToken"); // Get access token from localStorage

  useEffect(() => {
    if (data) { // Once data is available, set videos and filtered videos
      setVideos(data.Videos);
      setFilteredVideo(data.Videos);
    }
  }, [data]); // Dependency array to trigger effect when data is updated

  // Filter functions for different video categories
  function allFilter() {
    setFilteredVideo(videos); // Show all videos
  }
  function musicFilter() {
    setFilteredVideo(videos.filter((video) => video.Category.toLowerCase() === "music")); // Filter music videos
  }
  function gamingFilter() {
    setFilteredVideo(videos.filter((video) => video.Category.toLowerCase() === "gaming")); // Filter gaming videos
  }
  function sportsFilter() {
    setFilteredVideo(videos.filter((video) => video.Category.toLowerCase() === "sports")); // Filter sports videos
  }
  function newsFilter() {
    setFilteredVideo(videos.filter((video) => video.Category.toLowerCase() === "news")); // Filter news videos
  }
  function learningFilter() {
    setFilteredVideo(videos.filter((video) => video.Category.toLowerCase() === "learning")); // Filter learning videos
  }

  if (!accessToken) { // If not logged in, show login prompt
    return (
      <>
        <SideBar />
        <div className="flex flex-col items-center mt-10  bg-dark-gray text-white px-6">
          <i className="fas fa-user-lock text-6xl mb-4 text-red-500"></i>
          <h1 className="text-2xl font-bold mb-4">You are not logged in</h1>
          <p className="mb-6 text-center">
            Please log in to access your personalized feed and enjoy the content.
          </p>
          <button
            onClick={() => navigateTo("/login")} // Navigate to login page
            className="flex space-x-2 items-center py-1 px-2 border rounded-3xl hover:bg-neutral-900"
          >
            <i className="fas fa-sign-in-alt mr-2"></i> Sign In
          </button>
        </div>
        <MobileBottomNavBar/> {/* Mobile navigation bar */}
      </>
    );
  }

  return (
    <>
      <SideBar /> {/* Sidebar navigation */}
      <div
        className={`${toggle ? "md:pl-[14rem] md:pr-7" : "md:pl-[5rem] md:pr-7"
          } px-4 mb-20 bg-dark-gray pb-5`} // Apply dark gray background
      >
        <div className="flex overflow-x-auto no-scrollbar space-x-3 py-4">
          {/* Category filter buttons */}
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition" onClick={allFilter}>
            All
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition" onClick={musicFilter}>
            Music
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition" onClick={gamingFilter}>
            Gaming
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition" onClick={sportsFilter}>
            Sports
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition" onClick={newsFilter}>
            News
          </button>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition" onClick={learningFilter}>
            Learning
          </button>
        </div>
        <Feed toggle={toggle} filterVideo={filterVideo} loading={loading} err={err} /> {/* Pass filtered video list to Feed component */}
      </div>
      <MobileBottomNavBar/> {/* Mobile bottom navigation bar */}
    </>
  );
}

export default HomePage;
