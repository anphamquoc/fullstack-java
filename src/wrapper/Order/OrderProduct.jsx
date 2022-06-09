import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleImageUrl, numberWithDots } from "../../actions";
import { addReview } from "../../redux/features/ProductSlice";

const OrderProduct = ({ product, isInvoice }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [reviewDescription, setReviewDescription] = useState({
    noiDung: "",
    diem: 5,
    maKH: localStorage.getItem("userId"),
    tenNguoiDanhGia: user.user.hoTen,
  });
  const handleChange = (e) => {
    setReviewDescription({
      ...reviewDescription,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview({ ...reviewDescription, maSP: product.sanPham.maSp }));
  };
  return (
    <tr class="bg-white border-b">
      <td class=" p-3 w-[82px] h-[82px]">
        <img src={handleImageUrl(product.sanPham.hinhAnh)} alt="product" />
      </td>
      <td class="text-gray-900 font-semibold text-lg px-3 py-4 whitespace-nowrap text-left">
        <span className="w-5/6 truncate block" title={product.sanPham.tenSp}>
          {product.sanPham.tenSp}
        </span>
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {numberWithDots(product.sanPham.gia)}
      </td>
      <td>
        <div class="flex flex-row h-14 w-32  rounded-lg relative bg-transparent mx-auto">
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
            name="custom-input-number"
            value={product.soLuong}
          ></input>
        </div>
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {numberWithDots(product.sanPham.gia * product.soLuong)}
      </td>
      {isInvoice && (
        <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
          <button
            class="bg-purple-500 px-4 py-2 rounded-full text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalScrollable"
            onClick={() => {
              setReviewDescription({
                ...reviewDescription,
                maSP: product.sanPham.maSp,
              });
            }}
          >
            Thêm đánh giá
          </button>
        </td>
      )}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalScrollable"
        tabIndex={-1}
        aria-labelledby="exampleModalScrollableLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Đánh giá sản phẩm
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body relative p-4 flex flex-col gap-5">
              <TextField
                id="standard-basic"
                label="Nội dung đánh giá"
                variant="standard"
                className="w-full"
                name="noiDung"
                value={reviewDescription.noiDung}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                label="Số sao"
                variant="standard"
                className="w-full"
                name="diem"
                type={Number}
                min={1}
                max={5}
                value={reviewDescription.diem}
                onChange={handleChange}
              />
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                onClick={handleSubmit}
              >
                Thêm đánh giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </tr>
  );
};

export default OrderProduct;
