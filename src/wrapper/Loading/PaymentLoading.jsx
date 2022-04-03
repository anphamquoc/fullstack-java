import React from "react";
import Skeleton from "react-loading-skeleton";

const PaymentLoading = () => {
  return (
    <div className="grid grid-cols-3 w-4/5 mt-10 gap-5">
      <Skeleton height={"300px"} />
      <Skeleton height={"300px"} />
      <Skeleton height={"300px"} />
    </div>
  );
};

export default PaymentLoading;
