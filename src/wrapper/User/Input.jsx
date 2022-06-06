import React from "react";

const Input = ({ name, setUser, user, pattern, placeholder, label }) => {
  const handleChange = (e) => {
    if (e.target.name === "Username" || e.target.name === "Password")
      setUser({ ...user, [e.target.name.toLowerCase()]: e.target.value });
    else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <div class="form-group mb-6">
      <label for={name} class="form-label inline-block mb-2 text-gray-400">
        {label}
      </label>
      <input
        type={
          name === "Password" || name === "Confirm Password"
            ? "password"
            : "text"
        }
        title={
          name === "Password" || name === "Confirm Password"
            ? "Bao gồm một chữ số, ký tự viết thường và viết hoa"
            : ""
        }
        pattern={pattern}
        class="form-control
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-describedby="emailHelp"
        placeholder={`Nhập ${placeholder}`}
        name={name}
        onChange={handleChange}
        required={true}
      />
      {/* <small id="emailHelp" class="block mt-1 text-xs text-gray-600">
              We'll never share your email with anyone else.
            </small> */}
    </div>
  );
};

export default Input;
