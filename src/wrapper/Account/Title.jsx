import React from "react";

const Title = ({ name }) => {
  return (
    <h2 className="accordion-header mb-0" id={`heading${name.split(" ")[0]}`}>
      <button
        className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
        font-semibold
      "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${name.split(" ")[0][0]}`}
        aria-expanded="false"
        aria-controls={`collapse${name.split(" ")[0][0]}`}
      >
        {name}
      </button>
    </h2>
  );
};

export default Title;
