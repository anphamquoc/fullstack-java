import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleImageUrl, numberWithDots } from "../../actions";
import {
  removeFromCart,
  updateQuantityInCart,
} from "../../redux/features/UserSlice";

const CartItem = ({ product, soLuong, maGH }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(soLuong);
  const addQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(
      updateQuantityInCart({ product, soLuong: quantity + 1, cartId: maGH })
    );
  };
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(
        updateQuantityInCart({ product, soLuong: quantity - 1, cartId: maGH })
      );
    }
  };
  const handleRemoveFromCart = () => {
    dispatch(
      removeFromCart({
        userId: localStorage.getItem("userId"),
        pid: product.maSp,
      })
    );
  };
  return (
    <tr class="bg-white border-b">
      <td class=" p-3 w-[82px] h-[82px]">
        <img src={handleImageUrl(product.hinhAnh)} alt="product" />
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {product.tenSp}
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {numberWithDots(product.gia)}
      </td>
      <td>
        <div class="flex flex-row h-14 w-32  rounded-lg relative bg-transparent mx-auto">
          <button
            data-action="decrement"
            onClick={removeQuantity}
            class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
            name="custom-input-number"
            value={quantity}
          ></input>
          <button
            data-action="increment"
            onClick={addQuantity}
            class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {numberWithDots(product.gia * quantity)}
      </td>
      <td
        class="text-gray-900 font-semibold cursor-pointer text-lg px-6 py-4 whitespace-nowrap"
        onClick={handleRemoveFromCart}
      >
        <i class="fas fa-times"></i>
      </td>
    </tr>
  );
};

export default CartItem;
