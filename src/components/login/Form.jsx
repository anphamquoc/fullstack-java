import React, { Fragment, useState } from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Input from "../../wrapper/User/Input";

const Form = () => {
  const [formActive, setFormActive] = useState("login");
  return (
    <Fragment>
      <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[calc(100vh)]">
        <Breadcrumb breadcrumbName={"LOGIN / REGISTER"} header={"Login"} />
        <div className="flex flex-row gap-5 text-2xl font-bold cursor-pointer">
          <h3
            className={formActive === "login" ? `text-purple-500` : ""}
            onClick={() => setFormActive("login")}
          >
            Login
          </h3>{" "}
          |
          <h3
            onClick={() => setFormActive("register")}
            className={formActive !== "login" ? `text-purple-500` : ""}
          >
            Register
          </h3>
        </div>
        <div className="relative w-full h-[400px] flex justify-center">
          {formActive === "login" ? (
            <div class="block p-10 w-2/5 rounded-lg shadow-lg bg-white absolute">
              <form>
                <Input name={"Username"} />
                <Input name={"Password"} />
                <div className="flex justify-between">
                  <div class="form-group form-check mb-6">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck1"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                  <span>Forgot password?</span>
                </div>
                <button
                  type="submit"
                  class="
    px-6
    py-2.5
    bg-gray-300
    text-black
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-fuchsia-500 hover:shadow-lg hover:text-white
    transition
    duration-150
    ease-in-out"
                  disabled
                >
                  {true ? (
                    <i class="fad fa-spinner-third fa-spin"></i>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div class="block p-10 w-2/5 rounded-lg shadow-lg bg-white absolute">
              <form>
                <Input name={"Username"} />
                <Input name={"Password"} />
                <Input name={"Confirm Password"} />
                <div className="flex justify-between">
                  <div class="form-group form-check mb-6">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck1"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                  <span>Forgot password?</span>
                </div>
                <button
                  type="submit"
                  class="
      px-6
      py-2.5
      bg-gray-300
      text-black
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-fuchsia-500 hover:shadow-lg hover:text-white
      transition
      duration-150
      ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
