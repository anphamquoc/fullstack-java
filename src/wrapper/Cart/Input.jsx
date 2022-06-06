import React from "react";

const Input = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full gap-1">
        <label className="text-gray-900 text-lg">Nhập mã</label>
        <input
          type="text"
          className=" p-3 bg-white text-black border border-gray-200"
        />
      </div>
    </div>
  );
};

export default Input;
