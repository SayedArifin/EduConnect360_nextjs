import React from "react";

const StylishInput = ({ label, name, onChange, value, type }) => {
  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={name} className="w-1/3 pr-3">
        {label}:
      </label>
      <input
        className="w-2/3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type ? type : "text"}
        placeholder={`Enter ${label} here...`}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        required
      />
    </div>
  );
};

export default StylishInput;
