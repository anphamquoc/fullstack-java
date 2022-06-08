import React from "react";

const BlogComponent = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="group overflow-hidden">
        <img
          src={product.hinhAnh}
          alt="Product"
          className="group-hover:scale-125 transition ease-in-out duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-semibold text-2xl truncate" title={product.tenSp}>
          {product.tenSp}
        </h3>
        <span className="font-normal text-xl italic text-gray-400">
          Đã bán {product.soLuongBan}
        </span>
      </div>
    </div>
  );
};

export default BlogComponent;
