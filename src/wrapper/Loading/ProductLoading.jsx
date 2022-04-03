import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full relative overflow-hidden">
        <Skeleton height={"370px"} />
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-semibold text-xl cursor-pointer hover:text-fuchsia-500 transition duration-100">
          <Skeleton />
        </h3>
        <Skeleton height={"20px"} />
        <Skeleton />
      </div>
    </div>
  );
};

export default ProductLoading;
