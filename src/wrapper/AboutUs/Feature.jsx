import React from "react";

const Feature = ({ name, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
