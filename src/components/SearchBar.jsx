"use client";
import React, { useState } from "react";

function SearchBar() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="w-screen  bg-transparent flex justify-center items-center">
      <div className="w-2/4 h-10 bg-gray-100 rounded-r-full rounded-l-full shadow-lg text-xl flex items-center justify-center py-1 space-x-2 hover:cursor-pointer px-8">
        <input
          type="text"
          placeholder="Search"
          className={`bg-gray-100 w-3/4 h-3/4 focus:outline-none flex-1 ${
            inputText !== "" ? "text-red-500" : ""
          }`}
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="rounded-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-700 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
