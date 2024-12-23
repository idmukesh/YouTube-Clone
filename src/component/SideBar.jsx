import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function SideBar() {
    const toggle = useSelector((state) => state.toggleSlice.toggle);
    const navigate = useNavigate();  // Initialize the useNavigate hook

    // Function to handle the "You" click
    const handleYouClick = () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            navigate("/login");  // Redirect to login page if not logged in
        } else {
            navigate("/channelpage");  // Redirect to channel page if logged in
        }
    };

    return (
        <section className={`${toggle ? "w-52" : "w-14"} text-white bg-dark-gray h-screen fixed left-0 top-14 z-50 hidden md:block`}>
            <div className={`${toggle ? "w-4/5 px-2" : "flex flex-col items-center w-14 h-full py-2"}`}>
                <Link to={'/'}>
                    <div className={`${toggle ? "flex flex-row py-2 my-2 rounded-lg items-center hover:bg-neutral-600/20" : "flex flex-col items-center py-2 rounded-lg"} cursor-pointer`}>
                        <i className="fa-solid fa-house text-sm px-3"></i>
                        <span className={`${toggle ? "text-[11px] px-2 font-bold" : "text-[8px] mt-1"}`}>Home</span>
                    </div>
                </Link>
                <Link to={'/shorts'}>
                    <div className={`${toggle ? "flex flex-row py-2 my-2 rounded-lg items-center hover:bg-neutral-600/20" : "flex flex-col items-center py-2 rounded-lg"} cursor-pointer`}>
                        <i className="fa-solid fa-clapperboard text-sm px-3"></i>
                        <span className={`${toggle ? "text-[11px] px-2 font-bold" : "text-[8px] mt-1"}`}>Shorts</span>
                    </div>
                </Link>
                <Link to={'/subscription'}>
                    <div className={`${toggle ? "flex flex-row py-2 my-2 rounded-lg items-center hover:bg-neutral-600/20" : "flex flex-col items-center py-2 rounded-lg"} cursor-pointer`}>
                        <i className="fa-solid fa-list-ul text-sm px-3"></i>
                        <span className={`${toggle ? "text-[11px] px-2 font-bold" : "text-[8px] mt-1"}`}>Subscriptions</span>
                    </div>
                </Link>
                <hr />
                <div
                    onClick={handleYouClick}  // Add onClick handler to "You"
                    className={`${toggle ? "flex flex-row py-2 my-2 rounded-lg items-center hover:bg-neutral-600/20" : "flex flex-col items-center py-2 rounded-lg"} cursor-pointer`}
                >
                    <i className="fa-solid fa-user text-sm px-3"></i>
                    <span className={`${toggle ? "text-[11px] px-2 font-bold" : "text-[8px] mt-1"}`}>You</span>
                </div>
                <Link to={'/historypage'}>
                    <div className={`${toggle ? "flex flex-row py-2 my-2 rounded-lg items-center hover:bg-neutral-600/20" : "flex flex-col items-center py-2 rounded-lg"} cursor-pointer`}>
                        <i className="fa-solid fa-clock-rotate-left text-sm px-3"></i>
                        <span className={`${toggle ? "text-[11px] px-2 font-bold" : "text-[8px] mt-1"}`}>History</span>
                    </div>
                </Link>

                <hr />
            </div>
        </section>
    );
}

export default SideBar;
