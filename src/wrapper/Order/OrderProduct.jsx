import React from "react";
import { numberWithDots } from "../../actions";

const OrderProduct = ({ product }) => {
  return (
    <tr class="bg-white border-b">
      <td class=" p-3 w-[82px] h-[82px]">
        <img src={`../../${product.sanPham.hinhAnh}`} alt="product" />
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {"Hello"}
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
    </tr>
  );
};

export default OrderProduct;
