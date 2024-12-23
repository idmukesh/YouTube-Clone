import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileBottomNavBar from "./MobileBottomNavBar";
import SideBar from "./SideBar";

const CreateChannel = () => {
    const [name, setName] = useState(""); // State for the channel name
    const [headline, setHeadline] = useState(""); // State for the headline
    const navigateTo = useNavigate()

    const profilePhoto = "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"; // Fixed image URL
    const token = localStorage.getItem("accessToken");
    const email = localStorage.getItem("logedInUser")

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !headline) {
            alert("Please fill in all fields.");
            return;
        }
        if (!token) {
            alert("You must be logged in to create a channel.");
            return;
        }

        try {
            const response = await fetch("https://youtube-clone-g7o0.onrender.com/channel", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`,
                },
                body: JSON.stringify({
                    name,
                    headline,
                    email,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                alert("Channel created successfully!");

            } else {
                return alert(data.message || "Failed to create channel.");
            }

        } catch (error) {
            return alert("Something went wrong. Please try again.");
        }
        setTimeout(() => {
            navigateTo('/channelpage')
        }, 1000);
    };

    return (
        <>
            <SideBar />
            <div className="bg-dark-gray text-white p-6 max-w-lg mx-auto rounded-lg my-10">
                <h1 className="text-3xl font-semibold mb-4 text-center">Create Channel</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Photo (No upload option, just display the image) */}
                    <div className="flex flex-col items-center">
                        <img
                            src={profilePhoto}
                            alt="Profile Preview"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700"
                        />
                    </div>

                    {/* Channel Name */}
                    <div>
                        <label htmlFor="name" className="block text-lg mb-2">
                            Channel Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter channel name"
                            className="w-full p-2 bg-gray-800 rounded-lg text-white"
                        />
                    </div>

                    {/* Headline */}
                    <div>
                        <label htmlFor="headline" className="block text-lg mb-2">
                            Headline
                        </label>
                        <textarea
                            id="headline"
                            value={headline}
                            onChange={(e) => setHeadline(e.target.value)}
                            placeholder="Enter a short headline"
                            className="w-full p-2 bg-gray-800 rounded-lg text-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full w-full"
                        >
                            Create Channel
                        </button>
                    </div>
                </form>
            </div>
            <MobileBottomNavBar />
        </>
    );
};

export default CreateChannel;
