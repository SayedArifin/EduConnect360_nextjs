import Link from "next/link";
import React from "react";

const SecondaryButton = ({ href, icon, text }) => {
  return (
    <div>
      <Link
        href={href}
        className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-primary-white bg-primary-red border border-primary-red rounded-lg sm:w-auto focus:outline-none hover:bg-primary-white hover:text-primary-red focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </Link>
    </div>
  );
};

export default SecondaryButton;
