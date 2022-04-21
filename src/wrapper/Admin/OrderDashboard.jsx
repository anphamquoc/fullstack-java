import React from "react";
import Product from "../../assets/images/Product1.jpg";
import moment from "moment";
const OrderDashboard = ({ order }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-3 items-center">
        <img
          src={`../../${order.chiTietDonHang[0].sanPham.hinhAnh}`}
          alt="product"
          className="w-14 h-14 rounded-xl"
        />
        <div>
          <h3 className="font-semibold">Order {order.maDDH}</h3>
          <p className="text-gray-500">{order.tongTien}</p>
        </div>
      </div>

      <span className="text-sm text-gray-400">
        {moment(order.ngayDatHang).fromNow()}
      </span>
    </div>
  );
};

export default OrderDashboard;
