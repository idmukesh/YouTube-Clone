import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gray text-white p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-semibold mb-4">Oops!</h1>
        <p className="text-xl mb-6">Something went wrong. We couldn't find the page you're looking for.</p>
        {/* Button to navigate back to Home */}
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-500 transition">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
