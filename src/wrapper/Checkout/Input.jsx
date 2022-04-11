import React from "react";

const Input = ({ inputName, labelName, userState, setUserState }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-gray-900 text-md">{labelName}</label>
      <input
        type="text"
        className="p-3 bg-white text-black border border-gray-200"
        name={inputName}
        value={userState[inputName]}
        onChange={(e) =>
          setUserState({ ...userState, [inputName]: e.target.value })
        }
      />
    </div>
  );
};

export default Input;
