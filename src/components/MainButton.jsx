import Link from "next/link";
import React from "react";

const MainButton = ({ href, icon, text }) => {
  return (
    <div>
      <Link
        href={href}
        className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center bg-primary-white text-primary-red border border-primary-red rounded-lg sm:w-auto hover:bg-primary-red hover:text-primary-white focus:ring-4 focus:ring-primary-white"
      >
        <span className="mr-2">{icon}</span>
        {text}
      </Link>
    </div>
  );
};

export default MainButton;
