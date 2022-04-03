import React from "react";
import Banner1 from "../../assets/images/banner1.jpg";

const SwiperSlideComponent = () => {
  return (
    <div className="flex flex-row gap-10 w-3/4">
      <div className="flex flex-col text-left gap-10 basis-3/5 justify-center text-lg">
        <h1 className="text-6xl font-semibold">H - Vault Classico</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          nulla quas laudantium porro expedita provident itaque, corrupti
          suscipit odit voluptas, repudiandae, ducimus velit tempora asperiores
          exercitationem. Distinctio facere animi mollitia.
        </p>
        <p>
          Starting At <span>$1.499</span>
        </p>
        <button className="w-fit py-3 px-5 border border-black">
          Shop now
        </button>
      </div>
      <div className="basis-2/5 h-full">
        <img src={Banner1} alt="banner" />
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
