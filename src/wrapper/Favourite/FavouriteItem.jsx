import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithDots } from "../../actions";
import Product from "../../assets/images/Product1.webp";
import { addToCart, removeFromFavourite } from "../../redux/features/UserSlice";

const FavouriteItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleRemove = () => {
    dispatch(
      removeFromFavourite({
        userId: user.user.maKh,
        pid: product.maSp,
      })
    );
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ userId: user.user.maKh, product, soLuong: quantity }));
  };
  return (
    <tr class="bg-white border-b">
      <td class=" p-3 w-[82px] h-[82px]">
        <img src={`../../${product?.hinhAnh}`} alt="product" />
      </td>
      <td
        class="text-gray-900 max-w-[400px] truncate font-semibold text-lg px-6 py-4 whitespace-nowrap"
        title={product.tenSp}
      >
        {product.tenSp}
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {numberWithDots(product.gia)}
      </td>
      <td>
        <div class="flex flex-row h-14 w-32  rounded-lg relative bg-transparent mx-auto">
          <button
            data-action="decrement"
            class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={removeQuantity}
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
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        <i class="fas fa-times" onClick={handleRemove}></i>
      </td>
      {/*Create a button to add to cart*/}
      <td class="text-gray-900 font-semibold text-lg py-4 whitespace-nowrap">
        <button
          className="bg-purple-500 rounded-full text-white font-semibold py-2 px-4 cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </td>
    </tr>
  );
};

export default FavouriteItem;
