import React from "react";
import Profile from "../../assets/images/Profile.webp";

const Member = ({ image, role, name }) => {
  return (
    <div className="text-center">
      <img src={Profile} alt="profile" />
      <h4 className="text-lg font-semibold mt-4">Phạm Quốc Ấn</h4>
      <span className="italic text-md">Manager</span>
    </div>
  );
};

export default Member;
