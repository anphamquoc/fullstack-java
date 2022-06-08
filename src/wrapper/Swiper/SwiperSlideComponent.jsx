import React from "react";
import { Link } from "react-router-dom";
import { handleImageUrl, numberWithDots } from "../../actions";

const SwiperSlideComponent = ({ slide, key }) => {
  return (
    <div className="flex flex-row gap-10 w-3/4">
      <div className="flex flex-col text-left gap-10 basis-3/5 justify-center text-lg">
        <h1 className="text-6xl font-semibold">{slide.tenSp}</h1>
        <p className="text-justify " title={slide.moTa}>
          <span className="overflow-hidden h-20 block">{slide.moTa}</span> ...
        </p>
        <p>
          Giá sản phẩm: <span>{numberWithDots(slide.gia)} đ</span>
        </p>
        <Link to={`/shop`}>
          <button className="w-fit py-3 px-5 border border-black">
            Mua liền
          </button>
        </Link>
      </div>
      <div className="basis-2/5 w-full">
        <img
          src={handleImageUrl(slide.hinhAnh)}
          alt="banner"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
