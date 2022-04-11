import React, { Fragment, useState } from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import ProductComponent from "../../wrapper/Product/ProductComponent";
import FilterCheckbox from "../../wrapper/Shop/FilterCheckbox";
import { useSelector } from "react-redux";
import ProductLoading from "../../wrapper/Loading/ProductLoading";

const Index = () => {
  const products = useSelector((state) => state.products);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filter, setFilter] = useState({
    gia: 0,
    colors: [],
    sort: "",
  });
  const handleFilter = () => {
    const { gia, colors, sort } = filter;
    let newFilterProducts = [...products.products];
    if (gia !== 0) {
      newFilterProducts = newFilterProducts.filter((product) => {
        return product.gia <= gia;
      });
    }
    if (colors.length > 0) {
      console.log(newFilterProducts);
      newFilterProducts = newFilterProducts.filter(function (product) {
        return colors.every((color) => product.phanLoai.mauSac.includes(color));
      });
    }
    if (sort !== "") {
      newFilterProducts = newFilterProducts.sort((a, b) => {
        if (sort === "gia-cao-den-thap") {
          return b.gia - a.gia;
        } else if (sort === "gia-thap-den-cao") {
          return a.gia - b.gia;
        } else if (sort === "a->z") {
          return a.tenSp.localeCompare(b.tenSp);
        } else if (sort === "z->a") {
          return b.tenSp.localeCompare(a.tenSp);
        }
      });
    }
    setFilterProducts(newFilterProducts);
  };
  console.log(filterProducts);
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
                    0 - {filter.gia}
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
                    max="10000000"
                    step="20000"
                    id="customRange3"
                    onChange={(e) =>
                      setFilter({ ...filter, gia: e.target.value })
                    }
                  />
                </div>
              </div>
              <FilterCheckbox filter={filter} setFilter={setFilter} />
              {/* <FilterCheckbox /> */}
              <button
                className="bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600"
                onClick={handleFilter}
              >
                Filter
              </button>
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
                      onChange={(e) =>
                        setFilter({ ...filter, sort: e.target.value })
                      }
                    >
                      <option selected value={""}>
                        Sort by newess
                      </option>
                      <option value="a->z">A to Z</option>
                      <option value="z->a">Z to A</option>
                      <option value="gia-thap-den-cao">
                        Giá từ thấp đến cao
                      </option>
                      <option value="gia-cao-den-thap">
                        Giá từ cao đến thấp
                      </option>
                      {/* <option value="3">In stock</option> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-7">
                {/* One Product */}

                {products.loading ? (
                  <>
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                  </>
                ) : (
                  (filterProducts.length
                    ? filterProducts
                    : products.products
                  ).map((product) => <ProductComponent product={product} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
