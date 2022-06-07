import React from "react";
import ReviewItem from "./ReviewItem";

const AdditionalContent = ({ name, value, review }) => {
  //convert date to hh:mm:ss dd/mm/yyy
  return (
    <div
      class={`tab-pane fade show ${name === "Thông tin thêm" ? "active" : ""}`}
      id={name.split(" ")[0]}
      role="tabpanel"
      aria-labelledby={name.split(" ")[0]}
    >
      <div className="flex flex-row gap-8 font-semibold text-lg text-gray-500">
        {name === "Mô tả" ? (
          value
        ) : name === "Đánh giá" ? (
          <div className="font-normal flex flex-col gap-5">
            {review?.map((item, index) => (
              <ReviewItem item={item} />
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 w-fit">
              <span>Weights</span>
              <span>Dimensions</span>
            </div>
            <div className="flex flex-col gap-3 w-fit text-gray-500">
              <span>100g</span>
              <span>32mm</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdditionalContent;
