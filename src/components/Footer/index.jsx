import React from "react";
import Logo from "../../assets/images/Logo.png";
import MenuData from "../../data/Footer/Menu.json";
import Menu from "../../wrapper/Footer/Menu";
const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-around py-10 bg-gray-100 mt-10">
      <div className="flex flex-col gap-1 text-gray-700">
        <img src={Logo} alt="logo" className="w-28" />
        <span>© 2022 DABB</span>
        <span>All Right Reserved</span>
      </div>
      {MenuData.map((item, index) => (
        <Menu key={index} item={item} />
      ))}
    </div>
  );
};

export default Footer;
