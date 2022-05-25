import React from "react";

const FilterCheckbox = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    e.target.checked
      ? setFilter({ ...filter, colors: [...filter.colors, e.target.value] })
      : setFilter({
          ...filter,
          colors: filter.colors.filter((item) => item !== e.target.value),
        });
  };
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-medium text-xl">Màu sắc</h4>
      <div class="flex">
        <div className="flex flex-col gap-3 font-medium">
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-4 cursor-pointer"
              type="checkbox"
              value="#ffffff"
              id="flexCheckDefault"
              onClick={handleChange}
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Trắng
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-4 cursor-pointer"
              type="checkbox"
              value="#000000"
              id="flexCheckDefault"
              onClick={handleChange}
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="flexCheckDefault"
            >
              Đen
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCheckbox;
