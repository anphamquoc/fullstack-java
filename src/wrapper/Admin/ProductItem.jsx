import React from "react";
import { Link } from "react-router-dom";
import { numberWithDots } from "../../actions";

const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col gap-4 text-center rounded-lg shadow-md pb-5">
      <img
        src={`../../${product.hinhAnh}`}
        className={"h-[300px]"}
        alt="product"
      />
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
