import React from "react";

const Additional = ({ name, active }) => {
  return (
    <li class="nav-item flex-auto text-center" role="presentation">
      <a
        href={`#${name}`}
        class={`
      nav-link
      w-full
      block
      font-semibold
      text-xl
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      ${active ? "active" : ""}
    `}
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target={`#${name.split(" ")[0]}`}
        role="tab"
        aria-controls={`#${name.split(" ")[0]}`}
        aria-selected={name === "Thông tin thêm" ? "true" : "false"}
      >
        {name}
      </a>
    </li>
  );
};

export default Additional;
