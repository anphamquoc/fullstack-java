import React from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Feature from "../../wrapper/AboutUs/Feature";
import Achive from "../../wrapper/AboutUs/Achive";
import Member from "../../wrapper/AboutUs/Member";
import FeatureData from "../../data/AboutUs/Feature.json";

const AboutUs = () => {
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"Về chúng tôi"} breadcrumbName={"About"} />
      <div className="w-4/5">
        <div className="text-center grid place-items-center">
          <div className="text-lg">
            {/* <p className="text-gray-500 font-semibold">Who Are We</p> */}
            <h1 className="text-3xl font-semibold text-gray-800">
              Chào mừng đến với website của chúng tôi
            </h1>
          </div>
          <span className="w-20 h-1 bg-black block my-3"></span>
          <p className="w-2/3">
            Chúng tôi luôn mang đến cho bạn những sản phẩm tuyệt vời và giá cả
            hợp lí, đa dạng mặt hàng cho mọi lứa tuổi.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-4">
          {FeatureData.map((item, index) => (
            <Feature
              key={index}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="mt-20 w-full grid place-items-center bg-gray-200 py-20">
        <div className="w-4/5 grid grid-cols-4">
          <Achive
            name={"Dự án hoàn thành"}
            number={2}
            classIcon={"fal fa-briefcase"}
          />
          <Achive name={"Khách hàng"} number={100000} classIcon="fal fa-user" />
          <Achive
            name={"Nhãn hiệu"}
            number={20}
            classIcon="fal fa-shopping-bag"
          />
          <Achive
            name={"Khách hàng vui vẻ"}
            number={79000}
            classIcon="fal fa-smile"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="text-center grid place-items-center">
          <div className="text-lg">
            <h1 className="text-3xl font-semibold">Chúng tôi là ai</h1>
          </div>
          <span className="w-20 h-1 bg-black block my-3"></span>
          <p>
            Chúng tôi là những con người luôn mang đến cho các bạn những sản
            phẩm tốt nhất
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          <Member name={"Phạm Quốc Ấn"} role={"Nhóm trưởng"} />
          <Member name={"Trần Đức Bảo"} role={"Thành viên"} />
          <Member name={"Nghiêm Chí Bảo"} role={"Thành viên"} />
          <Member name={"Danh Đặng Hải Đăng"} role={"Thành viên"} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
