import React from "react";

const BigHeading = ({ text, anotherText }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-x-4 mb-10">
        <h1 className="text-6xl font-semibold text-primary">{text}</h1>
        {anotherText && <p>{anotherText}</p>}
      </div>
    </div>
  );
};

export default BigHeading;
