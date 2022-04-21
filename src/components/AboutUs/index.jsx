import React from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Feature from "../../wrapper/AboutUs/Feature";
import Achive from "../../wrapper/AboutUs/Achive";
import Member from "../../wrapper/AboutUs/Member";
import FeatureData from "../../data/AboutUs/Feature.json";

const AboutUs = () => {
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"ABOUT US"} breadcrumbName={"ABOUT US"} />
      <div className="w-4/5">
        <div className="text-center grid place-items-center">
          <div className="text-lg">
            <p className="text-gray-500 font-semibold">Who Are We</p>
            <h1 className="text-3xl font-semibold text-gray-800">
              Welcome to Flone
            </h1>
          </div>
          <span className="w-20 h-1 bg-black block my-3"></span>
          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            tempore ducimus quo laudantium accusantium fuga illo, doloribus,
            saepe illum suscipit magni animi ex. Quod et nesciunt, sit dolor
            consequuntur officia.
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
            name={"Project Done"}
            number={2}
            classIcon={"fal fa-briefcase"}
          />
          <Achive name={"Clients"} number={100000} classIcon="fal fa-user" />
          <Achive
            name={"Branding"}
            number={20}
            classIcon="fal fa-shopping-bag"
          />
          <Achive
            name={"Happy Clients"}
            number={79000}
            classIcon="fal fa-smile"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="text-center grid place-items-center">
          <div className="text-lg">
            <h1 className="text-3xl font-semibold">Who we are</h1>
          </div>
          <span className="w-20 h-1 bg-black block my-3"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
