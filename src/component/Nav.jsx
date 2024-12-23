import { useDispatch } from "react-redux";
import { setToggle } from "../utils/toggleSlice";
import { setInput } from "../utils/searchSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
    const username = localStorage.getItem('username') // Get username from localStorage
    const dispatch = useDispatch(); 
    const [inputText, setInputText] = useState(""); 
    const navigate = useNavigate(); // Hook to navigate between routes
    const isRegistered = localStorage.getItem("registration") === "true"; // Check if user is registered
    const accessToken = localStorage.getItem("accessToken"); // Check if the user has a valid access token

    function handleToggle() {
        dispatch(setToggle()); // Dispatch action to toggle side menu or settings
    }
    
    function handleOnClick() {
        const trimmedInput = inputText.trim(); // Remove leading/trailing spaces from input
        if (trimmedInput === "") return; // Prevent search if input is empty
        dispatch(setInput(trimmedInput));
        navigate(`/search`);
    }

    function handleInputChange(e) {
        setInputText(e.target.value); // Update input state on change
    }

    function handleSignIn() {
        navigate("/signup"); // Navigate to the sign-up page
    }

    function handleLogin() {
        navigate("/login"); // Navigate to the login page
    }
    function handleYou() {
        navigate("/channelpage"); // Navigate to the user’s channel page
    }

    return (
        <nav className="flex justify-between space-x-5 px-5 z-10 h-14 bg-dark-gray text-white w-full sticky top-0 items-center">
            {/* Navbar containing logo, search, and user actions */}
            <div className="flex md:space-x-5 items-center">
                <i className="fa-solid fa-bars md:block hidden cursor-pointer" onClick={handleToggle}></i>
                <div className="flex space-x-1">
                    <img src="/youtube_logo.webp" alt="YouTube Logo" width="25px" />
                    <span>YouTube</span>
                </div>
            </div>
            <div className="lg:w-[500px] md:w-[400px]">
                <div className="flex relative">
                    <input type="text" value={inputText} onChange={handleInputChange} className="w-full pl-3 pr-12 py-[6px] bg-neutral-600/20 border-0 focus:outline-0 rounded-full" placeholder="Search" />
                    <i className="fa-solid fa-magnifying-glass absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer hover:text-neutral-300" onClick={handleOnClick}></i>
                </div>
            </div>
            {/* Conditionally render Sign In, Login, or User Profile based on authentication status */}
            {!isRegistered && !accessToken && <button className="hidden space-x-2 items-center py-1 px-2 border rounded-3xl hover:bg-neutral-900 md:flex" onClick={handleSignIn}><i className="fa-regular fa-circle-user"></i><span>Sign In</span></button>}
            {isRegistered && !accessToken && <button className="hidden space-x-2 items-center py-1 px-2 border rounded-3xl hover:bg-neutral-900 md:flex" onClick={handleLogin}><i className="fa-regular fa-circle-user"></i><span>Login</span></button>}
            {accessToken && <div className="md:block hidden">
                <div className="flex items-center space-x-1 cursor-pointer" onClick={handleYou}>
                    <div className="w-8 h-8 bg-neutral-600/20 text-white flex items-center justify-center rounded-full text-sm font-semibold">
                        {username ? (
                            <span>{username.slice(0, 2).toUpperCase()}</span>
                        ) : (
                            <i className="fa-regular fa-circle-user"></i>
                        )}
                    </div>
                    <span className="text-white text-sm font-semibold">
                        {username ? username : 'You'}
                    </span>
                </div>

            </div>}
        </nav>
    );
}

export default Nav;
