import React from "react";
import { Link } from "react-router-dom";

const SwiperSlideComponent = ({ slide, key }) => {
  return (
    <div className="flex flex-row gap-10 w-3/4">
      <div className="flex flex-col text-left gap-10 basis-3/5 justify-center text-lg">
        <h1 className="text-6xl font-semibold">{slide.name}</h1>
        <p className="text-justify">{slide.description}</p>
        <p>
          Giá sản phẩm <span>{slide.price} đ</span>
        </p>
        <Link to={`/shop`}>
          <button className="w-fit py-3 px-5 border border-black">
            Shop now
          </button>
        </Link>
      </div>
      <div className="basis-2/5 w-full">
        <img src={slide.image} alt="banner" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
