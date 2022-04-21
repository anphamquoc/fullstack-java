import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404-pages.jpg";

const NotFound = () => {
  return (
    <div className="grid place-items-center">
      <img src={NotFoundImage} alt="not found" />
      <h1 className="text-xl mb-5">Không tìm thấy trang</h1>
      <Link to={"/"}>
        <button className="text-white bg-purple-500 px-5 py-3 rounded-full">
          Trở về trang chủ
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
