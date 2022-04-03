import React from "react";
import Product from "../../assets/images/large-2.webp";

const BlogComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="group overflow-hidden">
        <img
          src={Product}
          alt="Product"
          className="group-hover:scale-125 transition ease-in-out duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-semibold text-2xl">Bài viết về đồng hồ hay</h3>
        <span className="font-normal text-xl italic text-gray-400">
          By Phạm Quốc Ấn
        </span>
      </div>
    </div>
  );
};

export default BlogComponent;
