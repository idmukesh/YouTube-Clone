import MobileBottomNavBar from "../component/MobileBottomNavBar";
import SideBar from "../component/SideBar";
import Subscription from "../component/Subscription";
import { useNavigate } from "react-router-dom";
function SubscriptionPage() {
    const navigateTo = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
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
                        onClick={() => navigateTo("/login")}
                        className="flex space-x-2 items-center py-1 px-2 border rounded-3xl hover:bg-neutral-900"
                    >
                        <i className="fas fa-sign-in-alt mr-2"></i> Sign In
                    </button>
                </div>
                <MobileBottomNavBar/>
            </>
        );
    }
    return (
        <>
            <SideBar />
            <Subscription />
            <MobileBottomNavBar/>
        </>
    );
}

export default SubscriptionPage;
