function FeedCard(props) {

    // Formating the Views
    function ViewFormation(views) {
        if (views >= 100000) {
            return (views / 100000).toFixed(1) + 'M'
        }
        else if (views >= 1000) {
            return (views / 1000).toFixed + 'K'
        }
        else views
    }

    // Formating the Time Stamp
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

    return (
        // Feed card layout
        <>
            <div className="flex flex-col shadow-md rounded-md overflow-hidden cursor-pointer">
                <img src={props.Thumbnails} alt="Video Thumbnail" className="w-full h-44 object-cover" />
                <div className="flex px-3 pb-4 pt-3 space-x-3">
                    <img src={props.ChannelLogo} alt="Channel Logo" className="h-10 w-10 rounded-full object-cover" />
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-sm font-medium line-clamp-2 text-gray-300">{props.Title}</h3> {/* Lighter text color */}
                        <span className="text-xs text-gray-500">{props.ChannelName}</span> {/* Lighter text color */}
                        <div className="flex text-xs text-gray-400 space-x-1"> {/* Lighter text color */}
                            <span>{ViewFormation(props.Views)}</span>
                            <span>•</span>
                            <span>{timeAgo(props.TimeStamp)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeedCard