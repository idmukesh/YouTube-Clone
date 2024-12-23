import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const nevigateTo = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Send login request
      const loginUser = await fetch("https://youtube-clone-g7o0.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse JSON response
      const data = await loginUser.json();

      // Handle server response
      if (!loginUser.ok) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      // If successful, store token and redirect
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("logedInUser", data.email)
      localStorage.setItem("username", data.username)
      alert(data.message);

      // Clear form fields
      setEmail("");
      setPassword("");
      setError(null);

      // Redirect after a delay
      setTimeout(() => {
        nevigateTo("/");
      }, 1000);

    } catch (error) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };


  return (

    // Rendering Login ui like form
    <div className="flex items-center justify-center min-h-screen bg-dark-gray">
      <div className="bg-neutral-900 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>

          {/* email field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-300 font-semibold mb-2">Email</label>
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

          {/* password field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-300 font-semibold mb-2">Password</label>
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

          {/* sign in button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* do not have account text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-300">Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
