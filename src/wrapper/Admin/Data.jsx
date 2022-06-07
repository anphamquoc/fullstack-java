import { CircularProgress } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import { numberWithDots } from "../../actions";

const Data = ({
  colorClass,
  description,
  iconClass,
  name,
  bgClass,
  loading,
}) => {
  return (
    <div
      className={`px-5 py-10 flex justify-center items-center flex-col gap-4 rounded-xl bg-blue-200`}
    >
      <div className="bg-gradient-to-br from-blue-200 to-blue-400 w-16 h-16 grid place-items-center rounded-full">
        <i class={`${iconClass} text-3xl text-blue-600`}></i>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className={`text-3xl font-bold text-blue-900`}>
          {loading ? (
            <CircularProgress size={"30px"} />
          ) : (
            <CountUp
              end={description}
              formattingFn={(value) => numberWithDots(value)}
            />
          )}
        </h3>
        <p className={`text-sm font-semibold mt-3 text-blue-500`}>{name}</p>
      </div>
    </div>
  );
};

export default Data;
