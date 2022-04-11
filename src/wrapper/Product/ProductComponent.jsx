import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithDots } from "../../actions";
import { addToCart, addToFavourite } from "../../redux/features/UserSlice";

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let star = [];
  const calculateStar = (sao) => {
    for (let index = 0; index < Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star text-yellow-500"></i>);
    }
    for (let index = 0; index < 5 - Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star"></i>);
    }
  };

  const handleAddToFavourite = () => {
    dispatch(
      addToFavourite({ product, userId: localStorage.getItem("userId") })
    );
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ product, userId: localStorage.getItem("userId") }));
  };
  calculateStar(product.sao);
  return (
    <div className="flex flex-col gap-4 group">
      <div className="w-full relative overflow-hidden">
        <img
          src={`../../${product.hinhAnh}`}
          alt="Product"
          className="w-full h-[350px]"
        />
        <div className="flex flex-row gap-[1px] items-center absolute bottom-0 w-full text-white cursor-pointer">
          <i
            className="fal fa-heart basis-1/6 py-4 grid place-items-center bg-fuchsia-500 translate-y-4 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-0 duration-500 ease-in-out hover:bg-fuchsia-700"
            onClick={handleAddToFavourite}
          ></i>
          <button
            className="basis-2/3 py-3 bg-fuchsia-500 translate-y-4 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-0 duration-500 ease-in-out delay-100 hover:bg-fuchsia-700"
            onClick={handleAddToCart}
          >
            <i class="fal fa-shopping-cart mr-2 text-sm "></i>
            Add to cart
          </button>
          <Link to={`/product/${product.maSp}`} className="basis-1/6">
            <i className="fal fa-eye py-4 bg-fuchsia-500 grid place-items-center translate-y-4 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-0 duration-500 ease-in-out delay-200 hover:bg-fuchsia-700"></i>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <Link to={`/product/${product.maSp}`}>
          <h3 className="font-semibold text-xl cursor-pointer hover:text-fuchsia-500 transition duration-100">
            {product.tenSp}
          </h3>
        </Link>
        <div className="flex gap-2 justify-center text-xl">{star}</div>
        <span className="font-semibold text-lg">
          {numberWithDots(product.gia)} đ
        </span>
      </div>
    </div>
  );
};

export default ProductComponent;
