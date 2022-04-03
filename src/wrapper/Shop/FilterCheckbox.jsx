import React from "react";

const FilterCheckbox = () => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-medium text-xl">Color</h4>
      <div class="flex">
        <div className="flex flex-col gap-3 font-medium">
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-4 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              White
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-4 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Black
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCheckbox;
