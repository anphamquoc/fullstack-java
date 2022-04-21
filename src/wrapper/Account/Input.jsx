import React from "react";

const Input = ({ name, inputName, value, handleChange, pattern, type }) => {
  return (
    <div class="mb-3 w-full">
      <label
        for="exampleFormControlInput1"
        class="form-label inline-block mb-2 text-gray-700"
      >
        {name}
      </label>

      <input
        type={type ? type : "text"}
        pattern={pattern}
        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        onChange={handleChange}
        name={inputName}
        id="exampleFormControlInput1"
        value={value}
      />
    </div>
  );
};

export default Input;
