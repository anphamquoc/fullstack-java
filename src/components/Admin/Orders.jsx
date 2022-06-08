import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { numberWithDots } from "../../actions";
import OrderItem from "../../wrapper/Order/OrderItem";
import {
  fetchOneProduct,
  fetchProducts,
} from "../../redux/features/ProductSlice";
import { fetchOrder } from "../../redux/features/OrderSlice";

const Orders = () => {
  const admin = useSelector((state) => state.admin);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [location, setLocation] = useState(null);
  const [query, setQuery] = useState("");
  //get data from order with id, name, email, phone, address, username, status, method, total, createdAt
  const rows = admin.orders.map((order) => {
    return {
      id: order.maDDH,
      name: order.hoTen,
      email: order.email,
      phone: order.soDt,
      address: order.noiNhan,
      status: order.trangThai,
      method: order.phuongThucThanhToan,
      total: numberWithDots(order.tongTien),
      createdAt: new Date(order.ngayDatHang).toLocaleString(),
      action: order.maDDH,
    };
  });
  const [orderFilter, setOrderFilter] = useState([...rows]);
  useEffect(() => {
    if (location) dispatch(fetchOrder(location));
  }, [location, dispatch]);
  useEffect(() => {
    setOrderFilter(rows);
  }, [order.loading, admin.loadingOrder]);
  console.log(order.loading, admin.loadingOrder);
  const handleFilterValue = (e) => {
    setQuery(e.target.value);
    const filter = rows.filter((row) =>
      row.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setOrderFilter(filter);
  };
  const columns = [
    { field: "id", headerName: "Mã ID", width: 70 },
    { field: "name", headerName: "Họ tên", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Số điện thoại", width: 200 },
    { field: "address", headerName: "Địa chỉ giao hàng", width: 200 },
    { field: "status", headerName: "Trạng thái", width: 200 },
    { field: "method", headerName: "Phương thức thanh toán", width: 200 },
    { field: "total", headerName: "Tổng cộng", width: 200 },
    { field: "createdAt", headerName: "Ngày tạo hoá đơn", width: 200 },
    {
      field: "action",
      headerName: "Xem hoá đơn",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalXl"
              onClick={() => {
                setLocation(params.value);
              }}
            >
              Xem đơn hàng
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="basis-3/4">
      <h1 className="mb-5 text-2xl font-semibold">Đơn đặt hàng</h1>
      <div className="flex items-center justify-between mb-5">
        <input
          className="px-5 py-3 border rounded-lg"
          type="text"
          name="search"
          placeholder="Tìm kiếm theo tên"
          value={query}
          onChange={handleFilterValue}
        />
        <i class="fas fa-trash-alt text-xl"></i>
      </div>
      <div className="h-[400px] w-full bg-white">
        {admin.loadingOrder ? (
          <Skeleton height={"300px"} />
        ) : (
          <DataGrid
            rows={orderFilter}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        )}
      </div>
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalXl"
        tabindex="-1"
        aria-labelledby="exampleModalXlLabel"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                class="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalXlLabel"
              >
                Thông tin đơn hàng
              </h5>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative m-4 overflow-hidden">
              {order.loading ? (
                <Skeleton height={"300px"} />
              ) : (
                <div className="w-full items-center flex flex-col">
                  <OrderItem order={order.order} isAdmin={true} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalXl"
        tabindex="-1"
        aria-labelledby="exampleModalXlLabel"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Thông tin đơn hàng
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4 flex flex-col gap-5">
              {order.loading ? (
                <Skeleton height={"300px"} />
              ) : (
                <OrderItem order={order.order} />
              )}
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Orders;
