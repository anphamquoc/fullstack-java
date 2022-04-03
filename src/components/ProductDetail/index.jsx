import React, { Fragment } from "react";
import Product from "../../assets/images/large-2.webp";
import Breadcrumb from "../../wrapper/Breadcrumb";
import ProductComponent from "../../wrapper/Product/ProductComponent";
import Additional from "../../wrapper/ProductDetails/Additional";
import AdditionalContent from "../../wrapper/ProductDetails/AdditionalContent";

const index = () => {
  return (
    <Fragment>
      <div className="w-full pt-32 flex flex-col items-center">
        <Breadcrumb
          breadcrumbName={"SHOP DETAILS"}
          header={"PRODUCT DETAILS"}
        />
        {/* <ProductDetailsLoading /> */}
        <div className="flex flex-row gap-4 w-3/4">
          <div className="basis-1/2">
            <img src={Product} alt="product" />
          </div>
          <div className="divide-y-2 basis-1/2">
            <div className="flex flex-col gap-7 mb-5">
              <div className="text-3xl font-normal">
                <h2 className="mb-2">Product Name Here</h2>
                <span className="text-red-400">18.00$</span>
              </div>
              <div className="flex flex-row gap-2 text-lg">
                <i class="fal fa-star text-yellow-500"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
                <i class="fal fa-star"></i>
              </div>
              <div className="font-normal text-lg text-gray-500">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  maiores cupiditate ea in reprehenderit, sed nisi debitis
                  molestias. Nihil est repudiandae ullam ducimus itaque
                  provident non iste rem debitis nam.
                </p>
                <ul className="flex flex-col dashed">
                  <li>0.5mm</li>
                  <li>Very modern style</li>
                  <li>Inspired vector icons</li>
                </ul>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-10">
              <div className="flex flex-row gap-10">
                <div className="font-semibold text-lg mb-3">
                  <span>Color</span>
                  <div className="mt-6 flex flex-row gap-3">
                    <span className="w-4 h-4 rounded-full bg-black block hover:outline hover:outline-fuchsia-500"></span>
                    <span className="w-4 h-4 rounded-full bg-red-600 block hover:outline hover:outline-fuchsia-500"></span>
                    <span className="w-4 h-4 rounded-full bg-black block hover:outline hover:outline-fuchsia-500"></span>
                  </div>
                </div>
                <div className="font-semibold text-lg">
                  <span>Size</span>
                  <div className="flex flex-row gap-3 mt-4">
                    <span className="w-8 h-8 bg-gray-200 grid place-items-center hover:bg-purple-500 cursor-pointer  hover:text-white">
                      S
                    </span>
                    <span className="w-8 h-8 bg-gray-200 grid place-items-center">
                      M
                    </span>
                    <span className="w-8 h-8 bg-gray-200 grid place-items-center">
                      L
                    </span>
                  </div>
                </div>
              </div>
              <div class="custom-number-input h-10 flex flex-row gap-7 items-center">
                <div class="flex flex-row h-14 w-32  rounded-lg relative bg-transparent mt-1">
                  <button
                    data-action="decrement"
                    class=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span class="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    type="number"
                    class="outline-none focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                    name="custom-input-number"
                    value="0"
                  ></input>
                  <button
                    data-action="increment"
                    class="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
                <div className="flex flex-row items-center">
                  <button className="p-4 w-full bg-gray-800 text-white font-bold">
                    Add to Cart
                  </button>
                  <i class="fal fa-heart text-2xl ml-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full grid place-items-center mt-10 mb-10">
        <div className="w-3/4">
          <Skeleton height={"100px"} />
        </div>
      </div> */}
      <div className="w-full grid place-items-center mt-10 mb-10">
        <div className="w-3/4">
          <ul
            class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tabFill"
            role="tablist"
          >
            <Additional name={"Additional Information"} active={true} />
            <Additional name={"Description"} />
            <Additional name={"Reviews"} />
          </ul>
          <div class="tab-content" id="tabs-tabContentFill">
            <AdditionalContent name={"Additional Information"} />
            <AdditionalContent name={"Description"} />
            <AdditionalContent name={"Reviews"} />
            <div
              class="tab-pane fade text-gray-700 text-lg"
              id="tabs-profileFill"
              role="tabpanel"
              aria-labelledby="tabs-profile-tabFill"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              recusandae laboriosam alias nobis ut, in unde temporibus,
              cupiditate aliquam impedit perferendis a debitis earum rem
              voluptate dolor tempora repellat id.
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
      <div className="grid place-items-center">
        <div className="flex flex-row gap-5 items-center my-10">
          <span className="w-[80px] h-[2px] bg-black"></span>
          <h2 className="font-semibold text-3xl uppercase">
            Our related Products
          </h2>
          <span className="w-[80px] h-[2px] bg-black"></span>
        </div>
        <div className="grid grid-cols-4 w-4/5 gap-7">
          {/* One product */}
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </div>
    </Fragment>
  );
};

export default index;
