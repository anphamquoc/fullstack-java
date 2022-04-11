import React from "react";
import { numberWithDots } from "../../actions";
import CartHeaderComponent from "../Cart/CartHeaderComponent";
import OrderProduct from "./OrderProduct";

const OrderItem = ({ order, key }) => {
  return (
    <div className="w-full items-center flex flex-col">
      <div className="text-left w-4/5 text-2xl font-semibold">
        <h3>Hóa đơn {key}</h3>
        <ul className="text-sm font-normal">
          <li>Nơi nhận: {order.noiNhan}</li>
          <li>Người nhận hàng: {order.hoTen}</li>
          <li>Số điện thoại: {order.soDt}</li>
          <li>Tổng tiền: {numberWithDots(order.tongTien)} đ</li>
          <li>Trạng thái giao hàng: {order.trangThai}</li>
          <li>Phương thức thanh toán: {order.phuongThucThanhToan}</li>
          <li>
            Số tiền cần thanh toán cho shipper:{" "}
            {order.phuongThucThanhToan === "paypal" ? 0 : order.tongTien} đ
          </li>
        </ul>
      </div>
      <div class="flex flex-col w-4/5 mt-4">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <CartHeaderComponent isCart={false} isFavourite={false} />
                <tbody>
                  {order.chiTietDonHang.map((product, i) => (
                    <OrderProduct product={product} key={i} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
