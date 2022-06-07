import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Additional from "../../wrapper/ProductDetails/Additional";
import AdditionalContent from "../../wrapper/ProductDetails/AdditionalContent";
import { useParams } from "react-router-dom";
import ProductDetailsLoading from "../../wrapper/Loading/ProductDetailsLoading";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../redux/features/ProductSlice";
import Skeleton from "react-loading-skeleton";
import { addToCart, addToFavourite } from "../../redux/features/UserSlice";
import { handleImageUrl, numberWithDots } from "../../actions";
import { toast } from "react-toastify";
import Zoom from "react-medium-image-zoom";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState(1);
  const id = params.id;
  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [id, dispatch]);
  let star = [];
  const calculateStar = (sao) => {
    for (let index = 0; index < Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star text-yellow-500"></i>);
    }
    for (let index = 0; index < 5 - Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star"></i>);
    }
  };

  const { product } = products;
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    if (!user.isAuthenticated) {
      toast.warning("Bạn cần đăng nhập để thực hiện chức năng này");
      return;
    }
    dispatch(
      addToCart({
        product,
        userId: localStorage.getItem("userId"),
        soLuong: quantity,
      })
    );
  };

  const handleAddToFavourite = () => {
    if (!user.isAuthenticated) {
      toast.warning("Bạn cần đăng nhập để thực hiện chức năng này");
      return;
    }
    dispatch(
      addToFavourite({ product, userId: localStorage.getItem("userId") })
    );
  };
  // const diem = product
  //   ? 5
  //   : product.cacReview.reduce((acc, cur) => {
  //       return acc + cur.diem;
  //     }, 0);
  // calculateStar(!product ? 5 : diem / product.cacReview.length);
  calculateStar(product ? product.sao : 5);
  return (
    <Fragment>
      <div className="w-full pt-32 flex flex-col items-center">
        <Breadcrumb
          breadcrumbName={"CHI TIẾT SẢN PHẨM"}
          header={"CHI TIẾT SẢN PHẨM"}
        />
        {products.loadingProduct ? (
          <ProductDetailsLoading />
        ) : (
          <div className="flex flex-row gap-4 w-3/4">
            <div className="basis-1/2">
              <Zoom>
                <img
                  src={handleImageUrl(product?.hinhAnh)}
                  alt="product"
                  className="w-full"
                />
              </Zoom>
            </div>
            <div className="divide-y-2 basis-1/2">
              <div className="flex flex-col gap-7 mb-5">
                <div className="text-3xl font-normal">
                  <h2 className="mb-2">{product.tenSp}</h2>
                  <span className="text-red-400">
                    {numberWithDots(product.gia)} đ
                  </span>
                </div>
                <div className="flex flex-row gap-2 text-lg">{star}</div>
                <div className="font-normal text-lg text-gray-500">
                  <p className="mb-5">{product.moTa}</p>
                  <ul className="flex flex-col dashed">
                    <li>32mm</li>
                    <li>Very modern style</li>
                    <li>Inspired vector icons</li>
                  </ul>
                </div>
              </div>
              <div className="pt-5 flex flex-col gap-10">
                <div className="flex flex-row gap-10">
                  <div className="font-semibold text-lg mb-3">
                    <span>Color</span>
                    <div className="mt-7 flex flex-row gap-3">
                      {product.phanLoai.mauSac.map((item, index) => (
                        <span
                          className={`w-6 h-6 rounded-full bg-black block hover:outline hover:outline-fuchsia-500`}
                          key={index}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="font-semibold text-lg">
                    <span>Size</span>
                    <div className="flex flex-row gap-3 mt-4">
                      {product.phanLoai.kichCo.map((item, index) => (
                        <span className="w-fit h-fit bg-gray-200 grid place-items-center hover:bg-purple-500 cursor-pointer  hover:text-white p-2">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div class="custom-number-input h-10 flex flex-row gap-7 items-center">
                  <div class="flex flex-row h-14 w-32  rounded-lg relative bg-transparent mt-1">
                    <button
                      data-action="decrement"
                      class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      onClick={subQuantity}
                    >
                      <span class="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                      name="custom-input-number"
                      value={quantity}
                    ></input>
                    <button
                      data-action="increment"
                      class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      onClick={addQuantity}
                    >
                      <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                  <div className="flex flex-row items-center">
                    {product.status && (
                      <>
                        <button
                          className="p-4 w-full bg-gray-800 text-white font-bold"
                          onClick={handleAddToCart}
                        >
                          Thêm vào giỏ
                        </button>
                        <i
                          class="fal fa-heart text-2xl ml-3 cursor-pointer"
                          onClick={handleAddToFavourite}
                        ></i>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {products.loadingProduct ? (
        <div className="w-full grid place-items-center mt-10 mb-10">
          <div className="w-3/4">
            <Skeleton height={"100px"} />
          </div>
        </div>
      ) : (
        <div className="w-full grid place-items-center mt-10 mb-10">
          <div className="w-3/4">
            <ul
              class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
              id="tabs-tabFill"
              role="tablist"
            >
              <Additional name={"Thông tin thêm"} active={true} />
              <Additional name={"Mô tả"} />
              <Additional name={"Đánh giá"} />
            </ul>
            <div class="tab-content" id="tabs-tabContentFill">
              <AdditionalContent name={"Thông tin thêm"} />
              <AdditionalContent name={"Mô tả"} value={product.moTa} />
              <AdditionalContent name={"Đánh giá"} review={product.cacReview} />
              <div
                class="tab-pane fade text-gray-700 text-lg"
                id="tabs-profileFill"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabFill"
              >
                {product.moTa}
              </div>
              <div
                class="tab-pane fade text-lg font-semibold text-gray-700"
                id="tabs-messagesFill"
                role="tabpanel"
                aria-labelledby="tabs-profile-tabFill"
              >
                No reviews found
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="grid place-items-center">
        <div className="flex flex-row gap-5 items-center my-10">
          <span className="w-[80px] h-[2px] bg-black"></span>
          <h2 className="font-semibold text-3xl uppercase">
            Our related Products
          </h2>
          <span className="w-[80px] h-[2px] bg-black"></span>
        </div>
        <div className="grid grid-cols-4 w-4/5 gap-7">
          {/* One product 
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </div> */}
    </Fragment>
  );
};

export default ProductDetail;
