import React from "react";
import Profile from "../../assets/images/profile.png";

const Member = ({ image, role, name }) => {
  return (
    <div className="text-center">
      <img src={Profile} alt="profile" />
      <h4 className="text-lg font-semibold mt-4">{name}</h4>
      <span className="italic text-md">{role}</span>
    </div>
  );
};

export default Member;
