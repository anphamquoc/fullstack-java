import React from "react";
import Product from "../../assets/images/Product1.jpg";
import moment from "moment";

const ProductDashboardItem = ({ product }) => {
  console.log(product);
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={`../../${product.hinhAnh}`}
          alt="product"
          className="w-14 h-14 rounded-xl"
        />
        <div>
          <h3
            className="font-semibold w-[400px] truncate"
            title={product.tenSp}
          >
            {product.tenSp}
          </h3>
          <p className="text-gray-500 w-[500px] truncate" title={product.moTa}>
            {product.moTa}
          </p>
        </div>
      </div>
      <span className="text-sm text-gray-400">18 hours ago</span>
    </div>
  );
};

export default ProductDashboardItem;
