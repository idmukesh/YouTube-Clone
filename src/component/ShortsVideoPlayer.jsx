import React from "react";

function ShortsVideoPlayer({
  video,
  keyIndex,
  handleLike,
  toggleCommentPopup,
  handleShare,
  handleSave,
  handleSend,
}) {
  if (!video) {
    return null;
  }

  return (
    <div className="relative h-4/5 w-64 bg-slate-600 rounded-lg shadow-lg overflow-hidden">
      {/* Video Element */}
      <video
        key={keyIndex} // Ensures re-render when key changes
        className="object-cover w-full h-full"
        controls
        autoPlay
      >
        <source src={video.VideoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Channel Info */}
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
        <div className="flex items-center gap-2">
          <img
            src={video.ChannelLogo}
            alt="channel-logo"
            className="rounded-full w-10 h-10"
          />
          <div className="text-white">
            <h3 className="font-semibold text-lg">{video.ChannelName}</h3>
            <p className="text-sm">{video.Description}</p>
          </div>
        </div>
      </div>

      {/* Action Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-white">
        {/* Like */}
        <div className="flex flex-col items-center">
          <i
            className={`fas fa-thumbs-up text-lg cursor-pointer ${
              video.liked ? "text-blue-500" : ""
            }`}
            onClick={handleLike}
          ></i>
          <span>{video.Likes}</span>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center">
          <i
            className="fas fa-comment-dots text-lg cursor-pointer"
            onClick={toggleCommentPopup}
          ></i>
          <span>{video.Comments.length}</span>
        </div>

        {/* Share */}
        <div className="flex flex-col items-center">
          <i
            className="fas fa-share text-lg cursor-pointer"
            onClick={handleShare}
          ></i>
          <span>{video.Shares}</span>
        </div>

        {/* Save */}
        <div className="flex flex-col items-center">
          <i
            className="fas fa-save text-lg cursor-pointer"
            onClick={handleSave}
          ></i>
          <span>{video.saveCount || 0}</span>
        </div>

        {/* Send */}
        <div className="flex flex-col items-center">
          <i
            className="fas fa-paper-plane text-lg cursor-pointer"
            onClick={handleSend}
          ></i>
          <span>Send</span>
        </div>
      </div>
    </div>
  );
}

export default ShortsVideoPlayer;
