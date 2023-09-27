import React from "react";

const RadioButton = ({ name, options, label, onChange }) => {
  return (
    <div className="mb-4 flex items-center">
      <label className="w-1/3 pr-3">{label}:</label>
      <div className="flex  w-2/3">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              className="form-radio mr-2"
              name={name}
              value={option.value}
              onChange={onChange}
              id={option.value}
            />
            <label htmlFor={option.value} className="text-primary-white mr-5">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
