import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import ProductComponent from "../../wrapper/Product/ProductComponent";
import FilterCheckbox from "../../wrapper/Shop/FilterCheckbox";
import { useSelector } from "react-redux";
import ProductLoading from "../../wrapper/Loading/ProductLoading";
import NotFoundProduct from "../../assets/images/not-found-product.png";
import PaginationItem from "../ScrollToTop/Pagination";
import { Slider } from "@mui/material";
import { numberWithDots } from "../../actions";

const Index = () => {
  const products = useSelector((state) => state.products);
  const [filterProducts, setFilterProducts] = useState([]);

  const [filter, setFilter] = useState({
    gia: [0, 10000000],
    colors: [],
    sort: "",
    name: "",
  });

  const [index, setIndex] = useState(1);
  useEffect(() => {
    setFilterProducts(products.products);
  }, [products.loading, products.products]);
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setFilter({
        ...filter,
        gia: [Math.min(newValue[0], filter.gia[1] - 1000000), filter.gia[1]],
      });
    } else {
      setFilter({
        ...filter,
        gia: [filter.gia[0], Math.max(newValue[1], filter.gia[0] + 1000000)],
      });
    }
  };
  const handleFilter = () => {
    const { gia, colors, sort, name } = filter;
    let newFilterProducts = [...products.products];
    if (filter.gia) {
      newFilterProducts = newFilterProducts.filter((product) => {
        return product.gia >= gia[0] && product.gia <= gia[1];
      });
    }
    if (colors.length > 0) {
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
    if (name !== "") {
      newFilterProducts = newFilterProducts.filter((product) => {
        return product.tenSp.toLowerCase().includes(name.toLowerCase());
      });
    }
    setFilterProducts(newFilterProducts);
  };
  function valuetext(value) {
    return numberWithDots(value);
  }
  const filterByName = (e) => {
    setFilter({ ...filter, name: e.target.value });
    // const newFilterProducts = products.products.filter((product) => {
    //   return product.tenSp.toLowerCase().includes(e.target.value.toLowerCase());
    // });
    // setFilterProducts(newFilterProducts);
    handleFilter();
  };
  return (
    <Fragment>
      <div className="w-full pt-32 flex flex-col items-center">
        <Breadcrumb header={"DANH SÁCH SẢN PHẨM"} breadcrumbName="SẢN PHẨM" />
        <div className="grid place-items-center w-full">
          <div className="flex flex-row gap-20 w-3/4">
            <div className="basis-1/4 flex gap-14 flex-col">
              <div className="flex flex-col gap-5">
                <h4 className="font-medium text-xl">Lọc theo giá</h4>
                <div class="relative pt-1 flex flex-col">
                  <label
                    for="customRange3"
                    class="form-label font-medium text-xl"
                  >
                    {filter.gia[0]} - {filter.gia[1]}
                  </label>
                  {/* <input
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
                  /> */}
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={filter.gia}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={0}
                    max={10000000}
                  />
                </div>
              </div>
              <FilterCheckbox filter={filter} setFilter={setFilter} />
              {/* <FilterCheckbox /> */}
              <button
                className="bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600"
                onClick={handleFilter}
              >
                Lọc
              </button>
            </div>
            <div className="basis-3/4">
              <div>
                <div class="flex flex-row justify-between items-center">
                  <div class="mb-3 xl:w-96 flex flex-row justify-between ">
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
                        Sắp xếp mới nhất
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
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="border border-gray-400 rounded-lg p-2"
                    onChange={filterByName}
                  />
                </div>
              </div>
              {products.loading === false && filterProducts.length === 0 && (
                <div className="text-center flex flex-col justify-center">
                  <img src={NotFoundProduct} alt="Not found" />
                  <h1 className="text-2xl font-semibold text-gray-400">
                    Không có sản phẩm nào
                  </h1>
                </div>
              )}
              <div className="grid grid-cols-3 gap-7">
                {/* One Product */}

                {products.loading ? (
                  <>
                    <ProductLoading />
                    <ProductLoading />
                    <ProductLoading />
                  </>
                ) : (
                  filterProducts.length !== 0 &&
                  filterProducts
                    .slice((index - 1) * 6, index * 6)
                    .map((product) => <ProductComponent product={product} />)
                )}
              </div>
              <PaginationItem
                products={filterProducts}
                setIndex={setIndex}
                quantity={6}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
