import React from "react";

function History() {
    return (
        <div className="bg-dark-gray text-white p-6 mt-10 flex flex-col items-center justify-center">
            <i className="fa-solid fa-history text-6xl mb-4"></i> {/* Font Awesome History Icon */}
            <h1 className="text-3xl font-semibold mb-4">Your History</h1>
            <p className="text-xl text-gray-400">No history yet</p>
            <div className="mt-4 p-4 bg-neutral-700 rounded-lg text-center">
                <p className="text-lg">You haven’t watched any videos yet.</p>
                <p className="text-sm text-gray-500">Once you start watching, your history will appear here.</p>
            </div>
        </div>
    );
};

export default History;
