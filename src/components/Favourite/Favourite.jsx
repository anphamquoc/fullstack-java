import React from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Button from "../../wrapper/Cart/Button";
import CartHeaderComponent from "../../wrapper/Cart/CartHeaderComponent";
import FavouriteItem from "../../wrapper/Favourite/FavouriteItem";

const Favourite = () => {
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"Wishlist"} breadcrumbName={"Wishlist"} />
      <div className="text-left w-4/5 text-2xl font-semibold">
        <h3>Your favourite items</h3>
      </div>
      {/* <div class="flex flex-col w-4/5">
        <Skeleton height={"100px"} />
      </div> */}
      <div class="flex flex-col w-4/5">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <CartHeaderComponent isCart={false} />
                <tbody>
                  <FavouriteItem />
                  <FavouriteItem />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-4/5">
        <Button name={"CONTINUE SHOPPING"} />
        <Button name={"CLEAR WISHLIST"} />
      </div>
    </div>
  );
};

export default Favourite;
