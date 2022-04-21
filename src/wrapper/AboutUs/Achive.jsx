import React from "react";
import CountUp from "react-countup";

const Achive = ({ classIcon, number, name }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <i class={`${classIcon} text-4xl`}></i>
      <h2 className="text-4xl text-purple-500 font-bold">
        <CountUp end={number} duration={3} />
      </h2>
      <span>{name}</span>
    </div>
  );
};

export default Achive;
