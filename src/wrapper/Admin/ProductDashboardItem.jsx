import React from "react";
import Product from "../../assets/images/Product1.jpg";

const ProductDashboardItem = ({ product }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={`../../${product.hinhAnh}`}
          alt="product"
          className="w-14 h-14 rounded-xl"
        />
        <div>
          <h3 className="font-semibold">Product Name</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <span className="text-sm text-gray-400">about 18 hours ago</span>
    </div>
  );
};

export default ProductDashboardItem;
