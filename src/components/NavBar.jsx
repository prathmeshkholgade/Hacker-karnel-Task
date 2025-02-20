import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function NavBar({ searchQuery, setSearchQuery }) {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="w-full flex justify-evenly items-center p-2  shadow-2xl">
      <div className="logo">Products</div>
      <div className="search mx-2  sm:w-[33%] ">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div>
        <button
          className="border border-gray-400 font-medium p-2 rounded-md hover:bg-blue-200"
          onClick={logoutHandler}
        >
          {" "}
          <i className="ri-logout-circle-r-line"></i> Logout
        </button>
      </div>
    </div>
  );
}
