import React from "react";
import moment from "moment";
import { handleImageUrl, numberWithDots } from "../../actions";
const OrderDashboard = ({ order }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={handleImageUrl(order.chiTietDonHang[0].sanPham.hinhAnh)}
          alt="product"
          className="w-14 h-14 rounded-xl"
        />
        <div>
          <h3 className="font-semibold">Order {order.maDDH}</h3>
          <p className="text-gray-500">{numberWithDots(order.tongTien)}</p>
        </div>
      </div>

      <span className="text-sm text-gray-400">
        {moment(order.ngayDatHang).fromNow()}
      </span>
    </div>
  );
};

export default OrderDashboard;
