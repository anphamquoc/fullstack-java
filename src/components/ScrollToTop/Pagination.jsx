import { Pagination } from "@mui/material";
import React from "react";

const PaginationItem = ({ products, setIndex, quantity }) => {
  const handleChangeIndex = (event, value) => {
    setIndex(value);
  };
  console.log(products.length);
  return (
    <div className="mt-4 grid place-items-center">
      <Pagination
        count={products ? Math.ceil(products.length / quantity) : 0}
        showFirstButton
        showLastButton
        size="large"
        shape="rounded"
        onChange={handleChangeIndex}
      />
    </div>
  );
};

export default PaginationItem;
