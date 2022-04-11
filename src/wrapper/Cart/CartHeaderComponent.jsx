import React from "react";

const CartHeaderComponent = ({ isCart, isFavourite }) => {
  return (
    <thead class="border-b bg-gray-50">
      <tr className="uppercase">
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Image
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Product Name
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Until Price
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Qty
        </th>
        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
          Subtotal
        </th>
        {(isCart || isFavourite) && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Action
          </th>
        )}
        {!isCart && isFavourite && (
          <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
            Add to cart
          </th>
        )}
      </tr>
    </thead>
  );
};

export default CartHeaderComponent;
