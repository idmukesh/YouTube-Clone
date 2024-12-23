import { useState, useEffect } from "react"; // Import React hooks for state and side effects
import { useFetch } from "../utils/useFetch"; // Custom hook to fetch data from API
import { useNavigate } from "react-router-dom"; // Hook for navigation
import SideBar from "../component/SideBar"; // Sidebar component
import ShortsVideoPlayer from "../component/ShortsVideoPlayer"; // Video player for shorts
import ShortsVideoPlayerShimmer from "../component/ShortsVideoPlayerShimmer"; // Shimmer loader while the video is loading
import MobileBottomNavBar from "../component/MobileBottomNavBar"; // Mobile bottom navigation component

function ShortsPage() {
  // Use custom hook to fetch data for short videos
  const { data, loading, err } = useFetch("http://localhost:5100/shortvideos");

  // State hooks for managing video index, comments visibility, and video data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [videosData, setVideosData] = useState([]);
  
  const navigateTo = useNavigate(); // Hook to navigate to other pages

  const accessToken = localStorage.getItem("accessToken"); // Retrieve access token from localStorage

  // Effect hook to update video data once the data is fetched
  useEffect(() => {
    if (data && data.Videos) {
      setVideosData(data.Videos); // Set videos data if the fetch is successful
    }
  }, [data]);

  // Function to handle video navigation upwards
  const handleUp = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videosData.length - 1 : prevIndex - 1 // Loop back to the last video if it's at the first one
    );
  };

  // Function to handle video navigation downwards
  const handleDown = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videosData.length - 1 ? 0 : prevIndex + 1 // Loop to the first video if it's at the last one
    );
  };

  // Toggle the visibility of the comment popup
  const toggleCommentPopup = () => {
    setShowComments((prevState) => !prevState);
  };

  // Handle like action for the current video
  const handleLike = () => {
    setVideosData((prevVideosData) => {
      const updatedVideos = [...prevVideosData];
      const currentVideo = updatedVideos[currentIndex];

      // Toggle the like status and update likes count
      if (!currentVideo.liked) {
        currentVideo.Likes += 1;
        currentVideo.liked = true;
      } else {
        currentVideo.Likes -= 1;
        currentVideo.liked = false;
      }

      return updatedVideos; // Return updated video data
    });
  };

  // Handle video share action (currently just logs the video URL)
  const handleShare = () => {
    console.log("Shared video:", videosData[currentIndex]?.VideoUrl);
  };

  // Handle video save action (currently just logs the video URL)
  const handleSave = () => {
    console.log("Saved video:", videosData[currentIndex]?.VideoUrl);
  };

  // Handle send action for video (currently just logs the video URL)
  const handleSend = () => {
    console.log("Sent video:", videosData[currentIndex]?.VideoUrl);
  };

  // Show shimmer loader while data is loading
  if (loading) {
    return <ShortsVideoPlayerShimmer />;
  }

  // Show error message if there was an error fetching data
  if (err) {
    return <div>Error fetching videos. Please try again later.</div>;
  }

  const currentVideo = videosData[currentIndex]; // Get current video based on the index

  // If the user is not logged in, show login prompt
  if (!accessToken) {
    return (
      <>
        <SideBar />
        <div className="flex flex-col items-center mt-10 bg-dark-gray text-white px-6">
          <i className="fas fa-user-lock text-6xl mb-4 text-red-500"></i>
          <h1 className="text-2xl font-bold mb-4">You are not logged in</h1>
          <p className="mb-6 text-center">
            Please log in to access your personalized feed and enjoy the content.
          </p>
          <button
            onClick={() => navigateTo("/login")}
            className="flex space-x-2 items-center py-1 px-2 border rounded-3xl hover:bg-neutral-900"
          >
            <i className="fas fa-sign-in-alt mr-2"></i> Sign In
          </button>
        </div>
        <MobileBottomNavBar />
      </>
    );
  }

  return (
    <>
      <SideBar />
      <div className="max-w-5xl mx-auto h-screen relative bg-dark-gray flex items-center justify-center">
        {/* Video Player Component */}
        <ShortsVideoPlayer
          video={currentVideo}
          keyIndex={currentIndex}
          handleLike={handleLike}
          toggleCommentPopup={toggleCommentPopup}
          handleShare={handleShare}
          handleSave={handleSave}
          handleSend={handleSend}
        />

        {/* Up and Down Navigation for Video Switching */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center text-white gap-4">
          <i
            className="fa-solid fa-angle-up text-2xl cursor-pointer"
            onClick={handleUp} // Call handleUp on click
          ></i>
          <i
            className="fas fa-angle-down text-2xl cursor-pointer"
            onClick={handleDown} // Call handleDown on click
          ></i>
        </div>

        {/* Comment Popup */}
        {showComments && currentVideo && (
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="p-4">
              <div className="bg-white p-4 rounded-lg w-64 mx-auto">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                <div className="max-h-96 overflow-y-scroll">
                  {/* Map through video comments and display them */}
                  {currentVideo.Comments?.map((comment, index) => (
                    <div key={index} className="flex items-start gap-4 mb-4">
                      <img
                        src={comment.channelLogo}
                        alt="channel-logo"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{comment.channelName}</h4>
                        <p className="text-sm">{comment.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Button to close the comments popup */}
                <button
                  onClick={toggleCommentPopup}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full"
                >
                  Close Comments
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <MobileBottomNavBar /> {/* Mobile bottom navigation */}
    </>
  );
}

export default ShortsPage;
