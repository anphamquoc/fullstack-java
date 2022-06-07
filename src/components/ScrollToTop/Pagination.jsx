import { Pagination } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const PaginationItem = ({ products, setIndex, quantity }) => {
  const handleChangeIndex = (event, value) => {
    setIndex(value);
  };
  return (
    <div className="mt-4 grid place-items-center">
      <Pagination
        count={products ? Math.ceil(products.length / quantity) : 0}
        showFirstButton
        showLastButton
        size="large"
        components={{
          previous: ChevronLeftIcon,
          next: ChevronRightIcon,
        }}
        shape="rounded"
        variant="outlined"
        onChange={handleChangeIndex}
      />
    </div>
  );
};

export default PaginationItem;
