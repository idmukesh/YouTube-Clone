import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

  const [username, setLocalUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState(null);
  const nevigateTo = useNavigate(); 

  // Handle form submission and validation
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (!email || !password || !confirmPassword || !username) {
      setError("Please fill in all fields"); // Error if any field is empty
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match"); // Error if passwords don't match
      return;
    }
    if (password.length < 6) {
      setError("Password should be 6 character long"); // Error if password is too short
      return
    }
    try {
      // Send POST request to the backend for registration
      const response = await fetch("https://youtube-clone-g7o0.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username
        }),
      });

      const data = await response.json();

      // Handle response from backend
      if (!response.ok) {
        return setError(data.message || "An error occurred.");
      }

      // Save registration status and username to localStorage
      localStorage.setItem('registration', data.success);
      localStorage.setItem('username', data.username);

      setTimeout(() => {
        nevigateTo("/"); // Navigate to homepage after successful registration
      }, 1000);

      alert(data.message); // Show success message
      setEmail(""); // Reset form fields
      setPassword("");
      setConfirmPassword("");
      setError(null);
    } catch (error) {
      setError("Failed to connect to the server. Please try again later."); // Error if server is not reachable
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-gray">
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>} {/* Display error message if any */}
        <form onSubmit={handleSubmit}>
          {/* Input fields for username, email, password, and confirm password */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-300 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setLocalUsername(e.target.value)}
              className="w-full p-3 border border-gray-500 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-500 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-500 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-300 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-500 rounded-md bg-neutral-800 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
