import FeedCard from "./FeedCard";
import Shimmer from "./Shimmer";
import ErrorPage from "../Pages/ErrorPage";
import { Link } from "react-router-dom";

function Feed({ toggle, filterVideo, loading, err }) {
  
  // rendering a shimmer when loading is true
  if (loading) {
    return (
      <div className="grid gap-6 mt-4" style={{ gridTemplateColumns: toggle ? "repeat(auto-fill, minmax(300px, 1fr))" : "repeat(auto-fill, minmax(250px, 1fr))", width: "100%" }}>
        {Array(12).fill(0).map((_, idx) => (
          <Shimmer key={idx} />
        ))}
      </div>
    );
  }
  if (err) {
    return <ErrorPage />
  }

  return (

    //showing the feed cards means videos cards
    <div className="grid gap-6 mt-4" style={{ gridTemplateColumns: toggle ? "repeat(auto-fill, minmax(300px, 1fr))" : "repeat(auto-fill, minmax(250px, 1fr))", width: "100%", }}>
      {filterVideo.map((video) => (
        <Link to={`/watch/${video._id}`}>
          <FeedCard
            Thumbnails={video.Thumbnails}
            ChannelLogo={video.ChannelLogo}
            Title={video.Title}
            ChannelName={video.ChannelName}
            Views={video.Views}
            TimeStamp={video.TimeStamp}
            key={video._id}
          />
        </Link>
      ))}

    </div>
  );
}

export default Feed;
