import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ item }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <ul className="flex flex-col gap-3 text-gray-700">
        {item.menu.map((item, index) => (
          <Link to={"/" + item.link}>
            <li key={index}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
