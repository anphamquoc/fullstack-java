import React from "react";
import { numberWithDots } from "../../actions";

const Product = ({ product }) => {
  return (
    <div className="flex justify-between">
      <p className="w-[250px]">
        {product.sanPham.tenSp} * {product.soLuong}
      </p>
      <p>{numberWithDots(product.sanPham.gia * product.soLuong)} đ</p>
    </div>
  );
};

export default Product;
