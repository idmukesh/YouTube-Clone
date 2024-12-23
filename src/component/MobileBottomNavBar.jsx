import { Link } from "react-router-dom";

function MobileBottomNavBar() {
    // Get the channel details from localStorage
    const username = localStorage.getItem('username')
    
    // Check if the user is logged in by checking the access token
    const accessToken = localStorage.getItem("accessToken");

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-dark-gray text-white md:hidden flex justify-between items-center px-6 py-3">
            <Link to={"/"}>
                <div className="flex flex-col items-center">
                    <i className="fas fa-home text-xl"></i>
                    <span className="text-xs">Home</span>
                </div>
            </Link>
            <Link to={"/shorts"}>
                <div className="flex flex-col items-center">
                    <i className="fas fa-video text-xl"></i>
                    <span className="text-xs">Shorts</span>
                </div>
            </Link>

            <Link to={"/subscription"}>
                <div className="flex flex-col items-center">
                    <i className="fas fa-box text-xl"></i>
                    <span className="text-xs">Subscriptions</span>
                </div>
            </Link>

            <Link to={accessToken ? (username ? "/channelpage" : "/createChannel") : "/login"}>
                <div className="flex flex-col items-center">
                    <i className="fas fa-user text-xl"></i>
                    <span className="text-xs">{accessToken ? (username ? username.slice(0, 2).toUpperCase() : "You") : "Login"}</span>
                </div>
            </Link>
        </div>
    );
}

export default MobileBottomNavBar;
