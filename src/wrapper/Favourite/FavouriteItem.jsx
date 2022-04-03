import React from "react";
import Product from "../../assets/images/Product1.webp";

const FavouriteItem = () => {
  return (
    <tr class="bg-white border-b">
      <td class=" p-3 w-[82px] h-[82px]">
        <img src={Product} alt="product" />
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        Mark
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        500
      </td>
      <td>
        <div class="flex flex-row h-14 w-32  rounded-lg relative bg-transparent mx-auto">
          <button
            data-action="decrement"
            class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
            name="custom-input-number"
            value="0"
          ></input>
          <button
            data-action="increment"
            class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        300
      </td>
      <td class="text-gray-900 font-semibold text-lg px-6 py-4 whitespace-nowrap">
        <i class="fas fa-times"></i>
      </td>
      {/*Create a button to add to cart*/}
      <td class="text-gray-900 font-semibold text-lg py-4 whitespace-nowrap">
        <button
          className="bg-purple-500 rounded-full text-white font-semibold py-2 px-4"
          disabled
        >
          Add to cart
        </button>
      </td>
    </tr>
  );
};

export default FavouriteItem;
