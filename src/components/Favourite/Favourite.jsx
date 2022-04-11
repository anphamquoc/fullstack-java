import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Button from "../../wrapper/Cart/Button";
import CartHeaderComponent from "../../wrapper/Cart/CartHeaderComponent";
import FavouriteItem from "../../wrapper/Favourite/FavouriteItem";

const Favourite = () => {
  const user = useSelector((state) => state.user);
  const favourite = user.sanPhamYeuThich;
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"Wishlist"} breadcrumbName={"Wishlist"} />
      {user.loading ? (
        <div class="flex flex-col w-4/5">
          <Skeleton height={"100px"} />
        </div>
      ) : (
        <>
          <div className="text-left w-4/5 text-2xl font-semibold">
            <h3>Your favourite items</h3>
          </div>
          <div class="flex flex-col w-4/5">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-center">
                    <CartHeaderComponent isCart={false} />
                    <tbody>
                      {favourite.map((product, i) => (
                        <FavouriteItem product={product} key={i} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-4/5">
            <Link to={"/"}>
              <Button name={"CONTINUE SHOPPING"} />
            </Link>
            <Button name={"CLEAR WISHLIST"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Favourite;
