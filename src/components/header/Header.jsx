import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import SwiperSlideComponent from "../../wrapper/Swiper/SwiperSlideComponent";
import Motto from "../../wrapper/Header/Motto";
import ProductComponent from "../../wrapper/Product/ProductComponent";
import BlogComponent from "../../wrapper/Header/BlogComponent";
import { useSelector } from "react-redux";
import ProductLoading from "../../wrapper/Loading/ProductLoading";
import MottoData from "../../data/Header/Motto.json";
import { CircularProgress } from "@mui/material";

const Header = () => {
  const products = useSelector((state) => state.products);
  const [index] = useState(1);
  return (
    <Fragment>
      {/* Swiper  */}
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
      >
        {products.loading ? (
          <SwiperSlide>
            <CircularProgress />
          </SwiperSlide>
        ) : (
          products.products
            .slice(0)
            .sort((a, b) => b.soLuongBan - a.soLuongBan)
            .slice(0, 4)
            .map((product, i) => (
              <SwiperSlide key={i}>
                <SwiperSlideComponent slide={product} />
              </SwiperSlide>
            ))
        )}
      </Swiper>
      {/* Shipping */}
      <div className="grid place-items-center">
        <div className="grid grid-cols-4 w-4/5">
          {MottoData.map((item, index) => (
            <Motto key={index} data={item} />
          ))}
        </div>
      </div>
      {/* Show Product */}
      <div className="grid place-items-center">
        <div className="flex flex-row gap-5 items-center my-10">
          <span className="w-[80px] h-[2px] bg-black"></span>
          <h2 className="font-semibold text-3xl uppercase">Sản phẩm</h2>
          <span className="w-[80px] h-[2px] bg-black"></span>
        </div>
        <div className="grid grid-cols-4 w-4/5 gap-7">
          {/* One product */}
          {products.loading ? (
            <>
              <ProductLoading />
              <ProductLoading />
            </>
          ) : (
            products.products
              .slice((index - 1) * 8, index * 8)
              .map((product) => <ProductComponent product={product} />)
          )}
        </div>
        {/* <PaginationItem
          products={products.products}
          setIndex={setIndex}
          quantity={8}
        /> */}
      </div>
      {/* Blog */}
      <div className="grid place-items-center">
        <div className="flex flex-row gap-5 items-center my-10">
          <span className="w-[80px] h-[2px] bg-black"></span>
          <h2 className="font-semibold text-3xl uppercase">
            Sản phẩm bán chạy
          </h2>
          <span className="w-[80px] h-[2px] bg-black"></span>
        </div>
        <div className="grid grid-cols-3 w-4/5 gap-7">
          {products.products
            .slice(0)
            .sort((a, b) => b.soLuongBan - a.soLuongBan)
            .slice(0, 3)
            .map((product) => (
              <BlogComponent product={product} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
