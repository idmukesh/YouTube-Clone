import { useState, useEffect, useLayoutEffect } from "react";
import { useFetch } from "../utils/useFetch";
import VideoPlayer from "../component/VideoPlayer";
import SideBar from "../component/SideBar";
import { useParams, Link } from "react-router-dom";
import VideoPlayerShimmer from '../component/VideoPlayerShimmer';
import Error from "./ErrorPage";
import MobileBottomNavBar from "../component/MobileBottomNavBar";

function WatchPage() {
  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { id } = useParams();
  const { data, loading, err } = useFetch("https://youtube-clone-g7o0.onrender.com/videos");
  const handleLike = () => setLiked((prev) => !prev);
  const handleSubscribe = () => setSubscribed((prev) => !prev);

  function ViewFormation(views) {
    if (views >= 100000) {
        return (views / 100000).toFixed(1) + 'M'
    }
    else if (views >= 1000) {
        return (views / 1000).toFixed + 'K'
    }
    else views
}

function timeAgo(timeStamp) {
    let now = new Date();
    let then = new Date(timeStamp)
    const TimeDifferenceInMs = now - then;
    // Convert milliseconds to years, months, days, hours, minutes, and seconds
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
};


  // Scroll to top whenever component renders
  useLayoutEffect(() => {
      window.scrollTo(0, 0);
  }, [id, currentVideo && currentVideo._id]);

  useEffect(() => {
    if (data) {
      const foundVideo = data.Videos.find((video) => video._id === id);
      if (foundVideo) {
        setCurrentVideo(foundVideo);
        setSuggestedVideos(
          data.Videos.filter((video) => video.Title.toLowerCase() !== foundVideo.Title.toLowerCase())
        );
      }
    }
  }, [data, id, currentVideo && currentVideo._id]);

  if (loading) {
    return <VideoPlayerShimmer />;
  }

  if (err) {
    return <Error/>
  }

  // Handle suggested video click
  const handleSuggestedVideoClick = (suggestedVideo) => {
    setCurrentVideo(suggestedVideo);
  };

  // Ensure that currentVideo is available before rendering the content 
  if (!currentVideo) {
    return <div>Loading video...</div>;
  }

  return (
    <>
      <SideBar />
      <div key={currentVideo && currentVideo._id} className="flex flex-wrap lg:flex-nowrap bg-dark-gray text-white p-4">
        {/* Left Section */}
        <div className="w-full lg:w-3/4 mb-4 lg:mb-0 md:pl-20">
          {/* Video Player */}
          {currentVideo?.VideoUrl ? (
            <VideoPlayer videoUrl={currentVideo.VideoUrl} />
          ) : (
            <div>Loading video...</div> // You can show a loading message or a placeholder until VideoUrl is available
          )}

          {/* Channel Info */}
          <div className="flex md:items-center gap-4 mt-4 md:justify-between md:flex-row flex-col-reverse items-start">
            <div className="flex items-center gap-4">
              {/* Channel Logo */}
              <img
                src={currentVideo.ChannelLogo}
                alt="channel-logo"
                className="rounded-full w-14 h-14 border-2 border-gray-700"
              />
              {/* Channel Name and Title */}
              <div>
                <h3 className="font-semibold text-xl">{currentVideo.Title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm text-gray-400">{currentVideo.ChannelName}</p>
                  <button
                    onClick={handleSubscribe}
                    className={`text-sm ${subscribed ? "bg-gray-600" : "bg-white text-gray-900"} text-gray-900 px-4 py-2 rounded-full`}
                  >
                    {subscribed ? "Subscribed" : "Subscribe"}
                  </button>
                </div>
              </div>
            </div>
            {/* Like and Share Buttons */}
            <div className="flex justify-end gap-6 mt-4 pr-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 ${liked ? "text-blue-600" : "text-white"}`}
              >
                <i className={`fas fa-thumbs-up ${liked ? "text-blue-600" : "text-white"}`}></i>
                {liked ? "Liked" : "Like"}
              </button>
              <button className="flex items-center gap-2 text-white">
                <i className="fas fa-share"></i> Share
              </button>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-6 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            <div className="h-full overflow-y-auto">
              {currentVideo.Comments?.map((comment) => (
                <div key={comment._id} className="flex items-start gap-4 mb-4 md:py-8">
                  <img
                    src={comment.ChannelLogo}
                    alt="channel-logo"
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <h4 className="font-semibold">{comment.ChannelName}</h4>
                    <p className="text-sm text-gray-400 md:py-1">{comment.Comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Suggested Videos) */}
        <div className="w-full lg:w-[320px] xl:w-[350px] p-4 py-0 bg-dark-gray min-w-[280px] max-w-[400px] flex-shrink-0">
          <h3 className="text-xl font-semibold mb-4">Suggested Videos</h3>
          <div className="space-y-4 overflow-y-auto">
            {suggestedVideos.length > 0 ? (
              suggestedVideos.map((suggested) => (
                <div key={suggested._id} onClick={() => handleSuggestedVideoClick(suggested)}>
                  <Link to={`/watch/${suggested._id}`}>
                    <div className="flex gap-4 p-2 hover:bg-neutral-950 rounded-md transition-all duration-200">
                      <img
                        src={suggested.Thumbnails} // Assuming this URL is for the thumbnail
                        alt={suggested.Title}
                        className="w-32 h-18 object-cover rounded-md"
                      />
                      <div className="flex flex-col justify-start">
                        <h4 className="font-semibold text-white text-[12px]">{suggested.Title}</h4>
                        <div className="flex items-center py-2 space-x-2">
                        <img
                        src={suggested.ChannelLogo} // Assuming this URL is for the thumbnail
                        alt={suggested.Title}
                        className="w-[20px] h-[20px] object-cover rounded-full"
                      />
                        <p className="text-[10px] text-gray-400">{suggested.ChannelName}</p>
                        </div>
                        <p className="text-[10px] text-gray-500">{ViewFormation(suggested.Views)} views • {timeAgo(suggested.TimeStamp)}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No suggested videos available.</p>
            )}
          </div>
        </div>
      </div>
      <MobileBottomNavBar/>
    </>
  );
}

export default WatchPage;
