import React from "react";

const Breadcrumb = ({ header, breadcrumbName }) => {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <h1 className="text-2xl w-full  uppercase text-center font-semibold">
        {header}
      </h1>
      <h3 className="text-lg w-full  uppercase text-center font-semibold">
        Trang chủ / {breadcrumbName}
      </h3>
    </div>
  );
};

export default Breadcrumb;
