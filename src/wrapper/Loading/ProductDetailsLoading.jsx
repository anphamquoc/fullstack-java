import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductDetailsLoading = () => {
  return (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="basis-1/2">
        <Skeleton height={"570px"} />
      </div>
      <div className="divide-y-2 basis-1/2">
        <div className="flex flex-col gap-7 mb-5">
          <div className="text-3xl font-normal">
            <h2 className="mb-2">
              <Skeleton />
            </h2>
            <span className="text-red-400">
              <Skeleton />
            </span>
          </div>
          <Skeleton height={"20px"} />
          <div className="font-normal text-lg text-gray-500">
            <p className="mb-5">
              <Skeleton height={"100px"} />
            </p>
            <ul className="flex flex-col dashed">
              <li>
                <Skeleton />
              </li>
              <li>
                <Skeleton />
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5 flex flex-col gap-2">
          <Skeleton height={"50px"} />
          <Skeleton height={"70px"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLoading;
