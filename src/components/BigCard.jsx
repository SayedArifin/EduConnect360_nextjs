import React from "react";

const BigCard = ({ slot }) => {
  return (
    <div class="bg-slate-500 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 bg-opacity-50 backdrop-blur-lg glass-card p-4 rounded-lg shadow-md m-10">
      {slot}
    </div>
  );
};

export default BigCard;
