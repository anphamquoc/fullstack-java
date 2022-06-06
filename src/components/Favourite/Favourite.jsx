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
      <Breadcrumb header={"DANH MỤC YÊU THÍCH"} breadcrumbName={"Yêu thích"} />
      {user.loading ? (
        <div class="flex flex-col w-4/5">
          <Skeleton height={"100px"} />
        </div>
      ) : (
        <>
          <div className="text-left w-4/5 text-2xl font-semibold">
            <h3>Sản phẩm yêu thích</h3>
          </div>
          <div class="flex flex-col w-4/5">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="w-full">
                  <table class="min-w-full text-center">
                    <CartHeaderComponent isCart={false} isFavourite={true} />
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
              <Button name={"TIẾP TỤC MUA SẮM"} />
            </Link>
            <Button name={"XÓA YÊU THÍCH"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Favourite;
