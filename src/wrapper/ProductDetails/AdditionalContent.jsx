import React from "react";

const AdditionalContent = ({ name, value }) => {
  return (
    <div
      class={`tab-pane fade show ${
        name === "Additional Information" ? "active" : ""
      }`}
      id={name.split(" ")[0]}
      role="tabpanel"
      aria-labelledby={name.split(" ")[0]}
    >
      <div className="flex flex-row gap-8 font-semibold text-lg text-gray-500">
        {name === "Description" ? (
          value
        ) : name === "Reviews" ? (
          "Không có đánh giá"
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
