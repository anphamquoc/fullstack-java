import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleImageUrl, numberWithDots } from "../../actions";
import { addToCart, removeFromFavourite } from "../../redux/features/UserSlice";

const FavouriteItem = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleRemove = () => {
    dispatch(
      removeFromFavourite({
        userId: user.user.maKh,
        pid: product.maSp,
      })
    );
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ userId: user.user.maKh, product }));
  };
  return (
    <tr class="bg-white border-b">
      <td class=" p-3 w-[82px] h-[82px]">
        <a href={`/product/${product.maSp}`}>
          <img src={handleImageUrl(product?.hinhAnh)} alt="product" />
        </a>
      </td>
      <td class="text-gray-900 max-w-[400px] truncate font-semibold text-lg px-6 py-4 whitespace-nowrap">
        <a href={`/product/${product.maSp}`}>{product.tenSp}</a>
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        {numberWithDots(product.gia)}
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
          Thêm
        </button>
      </td>
    </tr>
  );
};

export default FavouriteItem;
