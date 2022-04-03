import React from "react";
import Input from "../../wrapper/Account/Input";
import Title from "../../wrapper/Account/Title";
import Breadcrumb from "../../wrapper/Breadcrumb";

const index = () => {
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"Account"} breadcrumbName="ACCOUNT" />
      <div
        className="accordion w-3/5 flex flex-col gap-5"
        id="accordionExample"
      >
        <div className="accordion-item bg-white border border-gray-200">
          <Title name={"1. EDIT YOUR ACCOUNT INFORMATION"} />
          <div
            id="collapse1"
            className="accordion-collapse collapse show"
            aria-labelledby="heading1"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 divide-y-2">
              <div className="mb-5 text-lg font-normal">
                <h4>MY ACCOUNT INFORMATION</h4>
                <h5>Your Personal Details</h5>
              </div>
              <div className="pt-5">
                <div className="flex flex-row justify-between gap-10">
                  <div class="flex basis-1/2">
                    <Input name={"First Name"} />
                  </div>
                  <div class="flex basis-1/2">
                    <Input name={"Last Name"} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div class="flex w-full">
                    <Input name={"Email Address"} />
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-10">
                  <div class="flex basis-1/2">
                    <Input name={"Address"} />
                  </div>
                  <div class="flex basis-1/2">
                    <Input name={"Phone Number"} />
                  </div>
                </div>
                <button className="py-3 px-7 mt-2 bg-gray-200 rounded-md font-semibold">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <Title name={"2. CHANGE YOUR PASSWORD"} />
          <div
            id="collapse2"
            class="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 divide-y-2">
              <div className="mb-5 text-lg font-normal">
                <h4>CHANGE PASSWORD</h4>
                <h5>Your password</h5>
              </div>
              <div className="pt-5">
                <div className="flex flex-row justify-between">
                  <div class="flex w-full">
                    <Input name={"Password"} />
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div class="flex w-full">
                    <Input name={"Password Confirm"} />
                  </div>
                </div>
                <button className="py-3 px-7 mt-2 bg-gray-200 rounded-md font-semibold">
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <Title name={"3. MODIFY YOUR WISHLIST"} />
        </div>
      </div>
    </div>
  );
};

export default index;
