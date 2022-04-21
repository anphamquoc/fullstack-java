import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperSlideComponent from "../../wrapper/Swiper/SwiperSlideComponent";
import Motto from "../../wrapper/Header/Motto";
import ProductComponent from "../../wrapper/Product/ProductComponent";
import BlogComponent from "../../wrapper/Header/BlogComponent";
import { useSelector } from "react-redux";
import ProductLoading from "../../wrapper/Loading/ProductLoading";
import Slide from "../../data/Header/SwiperSlice.json";
import MottoData from "../../data/Header/Motto.json";

const Header = () => {
  const products = useSelector((state) => state.products);
  return (
    <Fragment>
      {/* Swiper  */}
      <Swiper navigation={true} modules={[Navigation]}>
        {Slide.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSlideComponent slide={item} />
          </SwiperSlide>
        ))}
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
          <h2 className="font-semibold text-3xl uppercase">Daily Deals!</h2>
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
            products.products.map((product) => (
              <ProductComponent product={product} />
            ))
          )}
        </div>
      </div>
      {/* Blog */}
      <div className="grid place-items-center">
        <div className="flex flex-row gap-5 items-center my-10">
          <span className="w-[80px] h-[2px] bg-black"></span>
          <h2 className="font-semibold text-3xl uppercase">BEST PRODUCT</h2>
          <span className="w-[80px] h-[2px] bg-black"></span>
        </div>
        <div className="grid grid-cols-3 w-4/5 gap-7">
          <BlogComponent />
          <BlogComponent />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
