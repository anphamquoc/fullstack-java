import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithDots } from "../../actions";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Button from "../../wrapper/Cart/Button";
import CartHeaderComponent from "../../wrapper/Cart/CartHeaderComponent";
import CartItem from "../../wrapper/Cart/CartItem";
import Input from "../../wrapper/Cart/Input";
import SelectOption from "../../wrapper/Cart/SelectOption";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = user.gioHang;
  const total = cart.chiTietGioHang?.reduce((total, item) => {
    return total + item.soLuong * item.sanPham.gia;
  }, 0);
  return (
    <Fragment>
      <div className="w-full pt-32 flex flex-col items-center">
        <Breadcrumb header={"Giỏ hàng"} breadcrumbName={"Giỏ hàng"} />
        <div className="text-left w-4/5 text-2xl font-semibold">
          <h3>Sản phẩm</h3>
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
                <Button name={"TIẾP TỤC MUA SẮM"} />
              </Link>
              <div className="flex flex-row gap-5">
                {/* <Button name={"CẬP NHẬT GIỎ HÀNG"} /> */}
                <Button name={"XÓA GIỎ HÀNG"} />
              </div>
            </div>
            {/* <PaymentLoading /> */}
            <div className="grid grid-cols-3 w-4/5 mt-10 gap-5">
              <form className="p-7 bg-gray-100 rounded-md border-2">
                <h4 className="text-2xl font-semibold">Phí vận chuyển</h4>
                <p className="text-lg mb-4">
                  Nhập vào vị trí hiện tại của bạn để ước tính
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
                <h4 className="text-2xl font-semibold">Áp dụng mã giảm giá</h4>
                <p className="text-lg mb-4">Nhập vào mã giảm giá</p>
                {/*Create select input} */}
                <div className="flex flex-col gap-7">
                  <Input />
                  <button className="px-7 py-3 w-fit bg-purple-500 text-lg font-semibold text-white rounded-full">
                    ÁP DỤNG MÃ
                  </button>
                </div>
                {/*Input zip code*/}
              </form>
              {/*Create checkout board*/}
              <form className="p-7 bg-gray-100 rounded-md border-2 h-fit">
                <h4 className="text-2xl font-semibold">Tổng tiền</h4>
                <div className="flex flex-col divide-y-2">
                  <div className="flex justify-between items-center py-4">
                    <p>Tổng tiền</p>
                    <span className="font-semibold text-xl">
                      {numberWithDots(total)} đ
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <p>Phí vận chuyển</p>
                    <span>Free ship</span>
                  </div>
                  <div className="flex flex-col gap-3 items-center py-4">
                    <div className="flex justify-between w-full">
                      <h4 className="font-semibold text-2xl text-purple-500">
                        Tổng tiền trả
                      </h4>
                      <span className="font-semibold text-2xl text-purple-500">
                        {numberWithDots(total)} đ
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
                        THANH TOÁN
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
