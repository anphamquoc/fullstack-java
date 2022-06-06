import React from "react";
import { Link } from "react-router-dom";
import { handleImageUrl, numberWithDots } from "../../actions";

const ProductItem = ({ product }) => {
  return (
    <div className="flex relative flex-col gap-4 text-center rounded-lg shadow-md pb-5">
      <img
        src={handleImageUrl(product.hinhAnh)}
        className={"h-[300px]"}
        alt="product"
      />
      <span
        className={`absolute top-2 p-1 ${
          product.status === 1 ? "bg-green-500" : "bg-red-500"
        } rounded-full text-white right-2 text-xs font-semibold`}
      >
        {product.status === 1 ? "Còn hàng" : "Hết hàng"}
      </span>
      <Link to={`${product.maSp}`}>
        <h3
          className="font-semibold px-2 truncate cursor-pointer hover:text-purple-400"
          title={product.tenSp}
        >
          {product.tenSp}
        </h3>
      </Link>
      <div className="flex flex-row justify-between items-center px-5">
        <div className="flex flex-row gap-2">
          <span className="block w-5 h-5 rounded-full bg-black"></span>
        </div>
        <h6 className="font-semibold text-lg">
          {numberWithDots(product.gia)} đ
        </h6>
      </div>
    </div>
  );
};

export default ProductItem;
