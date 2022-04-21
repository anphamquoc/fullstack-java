import React from "react";
import Shipping from "../../assets/images/shipping.webp";

const Motto = ({ data }) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <div className="grid place-items-center">
        <img src={data.image} alt="shipping" />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-xl font-normal">{data.name}</h5>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Motto;
