import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Section = ({ show, name, url }) => {
  const user = useSelector((state) => state.user);
  if (name === "Admin" && (!user.user || user.user.vaiTro !== "admin"))
    return null;
  return (
    <div>
      <div className="justify-center items-center text-xl inline-block group relative">
        {/* Menu name */}
        <div className="flex flex-row items-center gap-2 justify-center p-4 cursor-pointer group-hover:text-violet-600 font-semibold">
          <Link
            to={
              url
                ? url
                : `/${name.toLowerCase() === "home" ? "" : name.toLowerCase()}`
            }
          >
            <h6>{show}</h6>
          </Link>{" "}
          {/* {haveMenu ? <i className="fal fa-angle-down" /> : ""} */}
        </div>
        {/* Description Menu */}
        {/* <div className="group-hover:flex hidden absolute shadow-lg p-8 gap-20 bg-white">
          <div className="section">
            <h1 className="font-bold uppercase text-lg">Demo</h1>
            <div className="details min-w-max text-gray-500 pt-5 cursor-pointer flex flex-col gap-2">
              <p className="hover:text-violet-600 font-semibold">
                Home 1 - Fashion 1
              </p>
              <p>Home 1 - Fashion 2</p>
              <p>Home 1 - Fashion 3</p>
              <p>Home 1 - Fashion 4</p>
              <p>Home 1 - Fashion 5</p>
              <p>Home 1 - Fashion 6</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section;
