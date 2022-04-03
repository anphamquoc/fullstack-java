import React from "react";
import Shipping from "../../assets/images/shipping.webp";

const Motto = () => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <div className="grid place-items-center">
        <img src={Shipping} alt="shipping" />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-xl font-normal">Free shipping</h5>
        <p>Free shipping on all order</p>
      </div>
    </div>
  );
};

export default Motto;
