"use client";
import React, { useState } from "react";

const SubmitBtn = ({ text, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // You can perform any asynchronous operations here, such as an API call.
    // Once the operation is complete, you can set isLoading back to false.

    // For demonstration purposes, let's simulate an asynchronous operation with setTimeout.
    setTimeout(() => {
      setIsLoading(false);
      // Call the onSubmit function to trigger form submission.
      onSubmit();
    }, 2000); // Change this to the actual duration of your operation.

    // You can also trigger the actual operation here.
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-x-4">
        <button
          type="button" // Change the button type to "button"
          className={`w-full items-center justify-center px-60 py-3 mb-2 mr-2 text-sm font-medium text-primary-white bg-primary-red border border-primary-red rounded-lg sm:w-auto focus:outline-none hover:bg-primary-white hover:text-primary-red focus:z-10 focus:ring-4 focus:ring-gray-200 ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? "Please wait" : text}
        </button>
      </div>
    </div>
  );
};

export default SubmitBtn;
