import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(import.meta.env.VITE_API_URL, userData);
      console.log(res);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setError(err?.response?.data?.error || "something went wrong");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const handleInputChanges = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-[#242424] h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={submitHandler}
        className="bg-[#F1F2EE] rounded-3xl shadow-2xl py-14 flex flex-col gap-4 justify-between items-center  w-[90%] sm:w-[40%] md:w-[50%] lg:w-[30%]"
      >
        <h1 className="text-2xl font-serif text-center tracking-wider">
          LOGIN
        </h1>
        <div className="flex flex-col w-3/5 ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChanges}
            className="p-2 rounded-md bg-gray-200 border border-[#242424] outline-none
             focus:ring-2 focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col w-3/5 relative">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword?"text":"password"}
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChanges}
            placeholder="Enter your password"
            className="p-2 rounded-md bg-gray-200 border border-[#242424 focus:ring-2 focus:ring-blue-300"
          />
          <p
            className="absolute right-0 top-6 p-2 rounded-md "
            onClick={() => setShowPassword(!showPassword)}
          >
            {" "}
            {showPassword ? (
              <i className="ri-eye-off-line"></i>
            ) : (
              <i className="ri-eye-line"></i>
            )}
          </p>
        </div>
        {error && <div className="text-left w-3/5   text-red-600">{error}</div>}
        <div className="w-3/5 bg-[#3a3f50] rounded-md hover:bg-[#007dff]">
          <button
            type="submit"
            className="text-center w-full text-white py-2 text-sm font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
