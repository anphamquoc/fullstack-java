import React from "react";

const SelectOption = () => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label className="text-gray-900 text-lg">Country</label>
      <select className=" p-3 bg-white text-black">
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>
    </div>
  );
};

export default SelectOption;
