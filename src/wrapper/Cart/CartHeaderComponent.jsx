import React from "react";

const CartHeaderComponent = ({ isCart, isFavourite, isInvoice }) => {
  return (
    <thead class="border-b bg-gray-50">
      <tr className="uppercase">
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Hình ảnh
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Tên sản phẩm
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Giá sản phẩm
        </th>
        {!isFavourite && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Số lượng
          </th>
        )}
        {!isFavourite && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Tổng cộng
          </th>
        )}
        {(isCart || isFavourite) && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Xóa
          </th>
        )}
        {!isCart && isFavourite && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Thêm vào giỏ hàng
          </th>
        )}
        {isInvoice && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Đánh giá
          </th>
        )}
      </tr>
    </thead>
  );
};

export default CartHeaderComponent;
