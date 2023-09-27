import React from "react";

const Loading = () => {
  return (
    <div>
      <div
        id="loading"
        className="fixed top-0 left-0 w-full h-full bg-red-500 flex items-center justify-center"
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-opacity-40"></div>
      </div>
    </div>
  );
};

export default Loading;