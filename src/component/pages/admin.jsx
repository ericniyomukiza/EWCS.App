import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaUserShield } from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo admin account
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (
      username === adminUsername &&
      password === adminPassword
    ) {
      localStorage.setItem("adminLoggedIn", "true");

      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto bg-green-900 rounded-full flex items-center justify-center">
            <FaUserShield className="text-white text-4xl" />
          </div>

          <h1 className="text-3xl font-bold mt-5">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Wild Connector Safaris
          </p>

        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-5 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          <div className="mb-5">

            <label className="block font-semibold mb-2">
              Username
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaUserShield className="text-gray-400" />

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full p-4 outline-none"
                required
              />

            </div>

          </div>

          <div className="mb-6">

            <label className="block font-semibold mb-2">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <FaLock className="text-gray-400" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full p-4 outline-none"
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-800 text-white py-4 rounded-xl font-bold duration-300"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/Home"
            className="text-green-900 hover:text-yellow-600"
          >
            ← Back to Website
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;