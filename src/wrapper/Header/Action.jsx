import React, { useState } from "react";
import Product from "../../assets/images/Product1.webp";

const Action = () => {
  const [active, setActive] = useState("hidden");
  const handleClickUser = async () => {
    setActive(active === "hidden" ? "flex" : "hidden");
  };
  const [activeCart, setActiveCart] = useState("hidden");
  const handleClickCart = async () => {
    setActiveCart(activeCart === "hidden" ? "flex" : "hidden");
  };
  return (
    <div className="flex flex-row align-middle gap-6 text-xl">
      {/* {true ? (
        <i class="fad fa-spinner-third fa-spin"></i>
      ) : ( */}
      <>
        <div className="group inline-block relative cursor-pointer">
          <i class="fal fa-search"></i>
          <div className="group-hover:flex hidden absolute shadow-lg p-8 gap-20 right-0">
            <div className="section">
              <h1 className="font-bold uppercase text-lg">Demo</h1>
              <div className="details min-w-max text-gray-500 pt-5 cursor-pointer flex flex-col gap-2">
                <p className="hover:text-violet-600 font-semibold">
                  Home 1 - Fashion 1
                </p>
                <p>Home 1 - Fashion 2</p>
                <p>Home 1 - Fashion 3</p>
                <p>Home 1 - Fashion 4</p>
                <p>Home 1 - Fashion 5</p>
                <p>Home 1 - Fashion 6</p>
              </div>
            </div>
            <div className="section">
              <h1 className="font-bold uppercase text-lg">Demo</h1>
              <div className="details min-w-max text-gray-500 pt-5">
                <p>Home 1 - Fashion 1</p>
                <p>Home 1 - Fashion 2</p>
                <p>Home 1 - Fashion 3</p>
                <p>Home 1 - Fashion 4</p>
                <p>Home 1 - Fashion 5</p>
                <p>Home 1 - Fashion 6</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group inline-block relative cursor-pointer">
          <i class="fal fa-user" onClick={handleClickUser}></i>
          <div
            className={`${active} absolute shadow-lg gap-3 flex-col p-5 w-max text-base font-medium mt-6 bg-white`}
          >
            <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
              Login
            </span>
            <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
              Register
            </span>
            <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
              Wishlist
            </span>
            <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
              My Account
            </span>
          </div>
        </div>
        <div>
          <i class="fal fa-heart"></i>
        </div>
        <div className="inline-block relative cursor-pointer">
          <i class="fal fa-shopping-cart" onClick={handleClickCart}></i>
          <div
            className={`${activeCart}  absolute shadow-lg gap-3 flex-col w-max h-max  mt-6 right-0 bg-white p-7`}
          >
            {/* All product */}
            <div className="flex flex-col divide-y bg-white">
              {/* One product */}
              <div className="flex flex-row gap-8 py-3">
                <img
                  src={Product}
                  alt="đồng hồ"
                  className="w-[82px] h-[82px]"
                />
                <div className="text-[15px]">
                  <div>
                    <span className="text-lg">Đồng hồ xịn</span>
                    <p className="text-[13px]">Qty: 02</p>
                  </div>
                  <span className="text-[14px]">650d</span>
                </div>
                <i class="fas fa-times-circle pt-2"></i>
              </div>
              <div className="flex flex-row gap-8 py-3">
                <img
                  src={Product}
                  alt="đồng hồ"
                  className="w-[82px] h-[82px]"
                />
                <div className="text-[15px]">
                  <div>
                    <span className="text-lg">Đồng hồ xịn</span>
                    <p className="text-[13px]">Qty: 02</p>
                  </div>
                  <span className="text-[14px]">650d</span>
                </div>
                <i class="fas fa-times-circle pt-2"></i>
              </div>
            </div>
            {/* Total and Shipping fee */}
            <div className="flex flex-col gap-5 text-lg pb-4">
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>50000</span>
              </div>
              <div className="flex justify-between">
                <span>Total:</span>
                <span>5000</span>
              </div>
            </div>
            {/* Action button */}
            <div className="flex flex-col gap-4 justify-center">
              <div className="relative group">
                <button className="w-full p-3 border-[1px] border-black bg-transparent group-hover:text-white transition duration-300 ease-in-out hover:bg-fuchsia-500">
                  View Cart
                </button>
              </div>
              <div>
                <button className="w-full p-3 border-[1px] border-black">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Action;
