import React from "react";
import Product from "../../assets/images/large-2.webp";

const ProductComponent = () => {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="w-full relative overflow-hidden">
        <img src={Product} alt="Product" />
        <div className="flex flex-row gap-[1px] items-center absolute bottom-0 w-full text-white cursor-pointer">
          <i className="fal fa-heart basis-1/6 py-4 grid place-items-center bg-fuchsia-500 translate-y-4 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-0 duration-500 ease-in-out hover:bg-fuchsia-700"></i>
          <button className="basis-2/3 py-3 bg-fuchsia-500 translate-y-4 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-0 duration-500 ease-in-out delay-100 hover:bg-fuchsia-700">
            <i class="fal fa-shopping-cart mr-2 text-sm "></i>
            Add to cart
          </button>
          <i className="fal fa-eye basis-1/6 py-4 bg-fuchsia-500 grid place-items-center translate-y-4 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-0 duration-500 ease-in-out delay-200 hover:bg-fuchsia-700"></i>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h3 className="font-semibold text-xl cursor-pointer hover:text-fuchsia-500 transition duration-100">
          Crew Ventile Coat
        </h3>
        <div className="flex gap-2 justify-center text-xl">
          <i class="fal fa-star text-yellow-500"></i>
          <i class="fal fa-star"></i>
          <i class="fal fa-star"></i>
          <i class="fal fa-star"></i>
          <i class="fal fa-star"></i>
          <i class="fal fa-star"></i>
        </div>
        <span className="font-semibold text-lg">$ 60.00</span>
      </div>
    </div>
  );
};

export default ProductComponent;
