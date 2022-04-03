import React from "react";

const AdditionalContent = ({ name }) => {
  return (
    <div
      class={`tab-pane fade show ${
        name === "Additional Information" ? "active" : ""
      }`}
      id={name.split(" ")[0]}
      role="tabpanel"
      aria-labelledby={name.split(" ")[0]}
    >
      <div className="flex flex-row gap-8 font-semibold text-lg">
        <div className="flex flex-col gap-3 w-fit">
          <span>Weights</span>
          <span>Dimensions</span>
        </div>
        <div className="flex flex-col gap-3 w-fit text-gray-500">
          <span>2s {name}</span>
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default AdditionalContent;
