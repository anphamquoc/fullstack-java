import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotal, numberWithDots } from "../../actions";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Button from "../../wrapper/Cart/Button";
import CartHeaderComponent from "../../wrapper/Cart/CartHeaderComponent";
import CartItem from "../../wrapper/Cart/CartItem";
import Input from "../../wrapper/Cart/Input";
import SelectOption from "../../wrapper/Cart/SelectOption";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = user.gioHang;
  console.log(cart.chiTietGioHang);
  const total = cart.chiTietGioHang?.reduce((total, item) => {
    return total + item.soLuong * item.sanPham.gia;
  }, 0);
  return (
    <Fragment>
      <div className="w-full pt-32 flex flex-col items-center">
        <Breadcrumb header={"Cart"} breadcrumbName={"Cart"} />
        <div className="text-left w-4/5 text-2xl font-semibold">
          <h3>Your cart items</h3>
        </div>
        {user.loading ? (
          <div class="flex flex-col w-4/5">
            <Skeleton height={"200px"} />
          </div>
        ) : (
          <>
            <div class="flex flex-col w-4/5">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full text-center">
                      <CartHeaderComponent isCart={true} />
                      <tbody>
                        {cart.chiTietGioHang.map((product, i) => (
                          <CartItem
                            product={product.sanPham}
                            key={i}
                            soLuong={product.soLuong}
                            maGH={cart.maGH}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-4/5">
              <Link to={"/"}>
                <Button name={"CONTINUE SHOPPING"} />
              </Link>
              <div className="flex flex-row gap-5">
                <Button name={"UPDATE SHOPPING CART"} />
                <Button name={"CLEAR SHOPPING CART"} />
              </div>
            </div>
            {/* <PaymentLoading /> */}
            <div className="grid grid-cols-3 w-4/5 mt-10 gap-5">
              <form className="p-7 bg-gray-100 rounded-md border-2">
                <h4 className="text-2xl font-semibold">
                  Estimate shipping and Tax
                </h4>
                <p className="text-lg mb-4">
                  Enter your destination to get a shipping estimate.
                </p>
                {/*Create select input} */}
                <div className="flex flex-col gap-7">
                  <SelectOption />
                  <SelectOption />
                  <Input />
                  <button className="px-7 py-3 w-fit bg-purple-500 text-lg font-semibold text-white rounded-full hover:bg-purple-600">
                    GET A QUOTE
                  </button>
                </div>
                {/*Input zip code*/}
              </form>
              <form className="p-7 bg-gray-100 rounded-md border-2 h-fit">
                <h4 className="text-2xl font-semibold">
                  Estimate shipping and Tax
                </h4>
                <p className="text-lg mb-4">
                  Enter your destination to get a shipping estimate.
                </p>
                {/*Create select input} */}
                <div className="flex flex-col gap-7">
                  <Input />
                  <button className="px-7 py-3 w-fit bg-purple-500 text-lg font-semibold text-white rounded-full">
                    APPLY COUPON
                  </button>
                </div>
                {/*Input zip code*/}
              </form>
              {/*Create checkout board*/}
              <form className="p-7 bg-gray-100 rounded-md border-2 h-fit">
                <h4 className="text-2xl font-semibold">Cart Total</h4>
                <div className="flex flex-col divide-y-2">
                  <div className="flex justify-between items-center py-4">
                    <p>Total product</p>
                    <span className="font-semibold text-xl">
                      {numberWithDots(total)} đ
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <p>Total shipping</p>
                    <span>20.000 đ</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center py-4">
                    <div className="flex justify-between w-full">
                      <h4 className="font-semibold text-2xl text-purple-500">
                        Grand total
                      </h4>
                      <span className="font-semibold text-2xl text-purple-500">
                        {numberWithDots(total + 20000)} đ
                      </span>
                    </div>
                    <Link to={"/checkout"} className="w-full">
                      <button
                        className={`${
                          cart.chiTietGioHang.length === 0
                            ? "cursor-not-allowed"
                            : ""
                        } px-7 py-3 bg-purple-500 text-lg font-semibold text-white rounded-full  w-full mt-5`}
                        disabled={cart.chiTietGioHang.length === 0}
                      >
                        PROCEED TO CHECKOUT
                      </button>
                    </Link>
                  </div>
                </div>
                {/*Input zip code*/}
              </form>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default Cart;
