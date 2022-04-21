import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import Product from "../../assets/images/Product1.jpg";
import ProductItem from "../../wrapper/Admin/ProductItem";

const Products = () => {
  const products = useSelector((state) => state.products);
  const [query, setQuery] = useState("");
  const [productFilter, setProductFilter] = useState(products.products);
  const handleFilterValue = (e) => {
    setQuery(e.target.value);
    const filter = products.products.filter((product) => {
      return product.tenSp.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setProductFilter(filter);
  };
  useEffect(() => {
    setProductFilter(products.products);
  }, [products.products]);

  return (
    <div className="basis-3/4">
      <h1 className="mb-5 text-2xl font-semibold">Product</h1>
      <div className="flex items-center justify-between mb-5">
        <input
          className="px-5 py-3 border rounded-lg"
          type="text"
          name="search"
          placeholder="Search Product By Name"
          value={query}
          onChange={handleFilterValue}
        />
        {/* <i class="fas fa-trash-alt text-xl"></i> */}
      </div>

      <div className="grid grid-cols-4 gap-5">
        {products.loading ? (
          <Skeleton height={"300px"} />
        ) : (
          productFilter.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Products;
