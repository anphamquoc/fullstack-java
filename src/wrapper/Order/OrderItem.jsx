import React from "react";
import { useDispatch } from "react-redux";
import { numberWithDots } from "../../actions";
import { changeStatusOrderAdmin } from "../../redux/features/AdminSlice";
import { changeStatusOrder } from "../../redux/features/OrderSlice";
import CartHeaderComponent from "../Cart/CartHeaderComponent";
import OrderProduct from "./OrderProduct";

const OrderItem = ({ order, key, isAdmin }) => {
  const date = new Date(order.ngayDatHang);
  const dispatch = useDispatch();

  const dateString =
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    " " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear();
  const handleChangeStatus = () => {
    if (order.trangThai === "Chưa xử lý") {
      dispatch(
        changeStatusOrder({ maDDH: order.maDDH, trangThai: "Đang giao" })
      );
      dispatch(
        changeStatusOrderAdmin({ maDDH: order.maDDH, trangThai: "Đang giao" })
      );
    } else if (order.trangThai === "Đang giao") {
      dispatch(changeStatusOrder({ maDDH: order.maDDH, trangThai: "Đã giao" }));
      dispatch(
        changeStatusOrderAdmin({ maDDH: order.maDDH, trangThai: "Đã giao" })
      );
    }
  };

  return (
    <>
      <div className="text-left w-full text-2xl font-semibold">
        <h3>Hóa đơn {key}</h3>
        <ul className="text-sm font-normal">
          <li>Nơi nhận: {order.noiNhan}</li>
          <li>Người nhận hàng: {order.hoTen}</li>
          <li>Số điện thoại: {order.soDt}</li>
          <li>Ngày đặt hàng: {dateString}</li>
          <li>Tổng tiền: {numberWithDots(order.tongTien)} đ</li>
          <li>Trạng thái giao hàng: {order.trangThai}</li>
          <li>
            Phương thức thanh toán:{" "}
            {order.phuongThucThanhToan === "cash" ? "Tiền mặt" : "Paypal"}
          </li>
          <li>
            Số tiền cần thanh toán cho shipper:{" "}
            {order.phuongThucThanhToan === "paypal"
              ? 0
              : numberWithDots(order.tongTien)}{" "}
            đ
          </li>
        </ul>
      </div>
      <div class="flex flex-col w-full mt-4">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <CartHeaderComponent
                  isCart={false}
                  isFavourite={false}
                  isInvoice={true}
                />
                <tbody>
                  {order.chiTietDonHang.map((product, i) => (
                    <OrderProduct product={product} key={i} isInvoice={true} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isAdmin && (
        <button
          className="px-5 py-2 bg-purple-500 text-white rounded-full"
          onClick={handleChangeStatus}
        >
          Thay đổi trạng thái
        </button>
      )}
    </>
  );
};

export default OrderItem;
