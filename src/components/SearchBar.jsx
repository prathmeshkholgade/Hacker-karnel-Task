import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <>
      <form action="" className=" w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Product Here "
          className="w-full p-2 bg-gray-200 rounded-lg"
        />
      </form>
    </>
  );
}
