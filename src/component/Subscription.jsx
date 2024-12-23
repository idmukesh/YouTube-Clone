const Subscription = () => {
    return (
        <div className="bg-dark-gray text-white p-6 mt-10 flex flex-col items-center justify-center">
            <i className="fa-solid fa-bell-slash text-6xl mb-4"></i> {/* Font Awesome Icon */}
            <h1 className="text-3xl font-semibold mb-4">Your Subscriptions</h1>
            <p className="text-xl text-gray-400">No subscriptions</p>
            <div className="mt-4 p-4 bg-neutral-700 rounded-lg text-center">
                <p className="text-lg">You haven’t subscribed to any channels yet.</p>
                <p className="text-sm text-gray-500">Start exploring and subscribing to channels that interest you!</p>
            </div>
        </div>
    );
};

export default Subscription;
