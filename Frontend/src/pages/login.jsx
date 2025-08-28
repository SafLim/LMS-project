import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault(); // Don't refresh page


    if (!userEmail || !userPassword) {
      alert("Please enter both email and password");
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    try {

      const loginResponse = await axios.post("http://localhost:8000/auth", {
        email: userEmail, 
        password: userPassword
      });
      
      console.log(loginResponse);


      if (loginResponse.status === 200) {
        const authToken = loginResponse.data.token;
        const currentUser = loginResponse.data.user;
        

        localStorage.setItem("authToken", authToken);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        alert("Login successful! Welcome to the Library");
        navigate("/library");
      }
      
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message || "Login failed. Please try again.");
    }
  };

 
  const checkIfLoggedIn = async () => {
    const savedToken = localStorage.getItem("authToken");
    
    try {
      const verifyResponse = await axios.get("http://localhost:8000/", {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        }
      });


      if (verifyResponse.status === 200) {
        navigate("/library");
      }
      console.log(verifyResponse);
      
    } catch (error) {
      console.log(error);

      if (error.status === 400) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("currentUser");
      }
    }
  };


  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
        onSubmit={handleLogin}
      >
        {/* Library icon */}
        <div className="flex justify-center mb-4 text-blue-600 text-4xl">
          <span>📚</span>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Library Management System
        </h2>

        {/* Email input */}
        <label className="block text-gray-600 text-sm mb-1">Email Address</label>
        <input
          type="email"
          placeholder="librarian@library.com"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* Password input */}
        <label className="block text-gray-600 text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer text-xl"
        >
          Sign In to Library
        </button>
      </form>
    </div>
  );
}