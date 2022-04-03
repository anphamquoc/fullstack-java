import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-100 py-3 px-7 rounded-full font-semibold text-gray-500 hover:bg-purple-500 hover:text-white">
      {name}
    </button>
  );
};

export default Button;
