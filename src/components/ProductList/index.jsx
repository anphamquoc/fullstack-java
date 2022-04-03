import React, { Fragment } from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import ProductComponent from "../../wrapper/Product/ProductComponent";
import FilterCheckbox from "../../wrapper/Shop/FilterCheckbox";
import { useSelector, useDispatch } from "react-redux";

const Index = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <Fragment>
      <div className="w-full pt-32 flex flex-col items-center">
        <Breadcrumb header={"LIST PRODUCT"} breadcrumbName="SHOP" />
        <div className="grid place-items-center">
          <div className="flex flex-row gap-20 w-3/4">
            <div className="basis-1/4 flex gap-14 flex-col">
              <div className="flex flex-col gap-5">
                <h4 className="font-medium text-xl">Filter by price</h4>
                <div class="relative pt-1 flex flex-col">
                  <label
                    for="customRange3"
                    class="form-label font-medium text-xl"
                  >
                    0 - 20000
                  </label>
                  <input
                    type="range"
                    class="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
                    min="0"
                    max="5"
                    step="0.5"
                    id="customRange3"
                  />
                </div>
              </div>
              <FilterCheckbox />
              <FilterCheckbox />
            </div>
            <div className="basis-3/4">
              <div>
                <div class="flex">
                  <div class="mb-3 xl:w-96">
                    <select
                      class="form-select appearance-none
      block
      px-4
      py-1.5
      w-[200px]
      text-base
      font-semibold
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    >
                      <option selected>Sort by newess</option>
                      <option value="1">A to Z</option>
                      <option value="2">Z to A</option>
                      <option value="3">In stock</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-7">
                {/* One Product */}
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
