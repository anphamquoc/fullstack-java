import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changePassword, updateUser } from "../../redux/features/UserSlice";
import Input from "../../wrapper/Account/Input";
import Title from "../../wrapper/Account/Title";
import Breadcrumb from "../../wrapper/Breadcrumb";

const UserInfo = () => {
  const { user } = useSelector((state) => state);
  const [userState, setUserState] = useState(null);
  const [passwordState, setPasswordState] = useState({
    password: "",
    newPassword: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setUserState({
      hoTen: user.user?.hoTen,
      soDt: user.user?.soDt,
      diaChi: user.user?.diaChi,
      email: user.user?.email,
    });
  }, [user.user]);
  const handleChange = (e) => {
    setUserState({ ...userState, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setPasswordState({ ...passwordState, [e.target.name]: e.target.value });
  };
  const handleUpdateUser = () => {
    dispatch(updateUser(userState));
  };
  const handleChangePassword = () => {
    dispatch(changePassword(passwordState));
    setPasswordState({
      password: "",
      newPassword: "",
    });
  };
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"Account"} breadcrumbName="ACCOUNT" />
      <div
        className="accordion w-3/5 flex flex-col gap-5"
        id="accordionExample"
      >
        {user.loading ? (
          <Skeleton height={"100px"} />
        ) : (
          <>
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
                  <form onSubmit={handleUpdateUser} className="pt-5">
                    <div className="flex flex-row justify-between gap-10">
                      <div class="flex">
                        <Input
                          name={"Full Name"}
                          value={userState?.hoTen}
                          handleChange={handleChange}
                          inputName={"hoTen"}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div class="flex w-full">
                        <Input
                          name={"Email Address"}
                          value={userState?.email}
                          handleChange={handleChange}
                          inputName={"email"}
                          pattern={
                            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-between gap-10">
                      <div class="flex basis-1/2">
                        <Input
                          name={"Address"}
                          value={userState?.diaChi}
                          handleChange={handleChange}
                          inputName={"diaChi"}
                        />
                      </div>
                      <div class="flex basis-1/2">
                        <Input
                          name={"Phone Number"}
                          value={userState?.soDt}
                          handleChange={handleChange}
                          inputName={"soDt"}
                          //pattern phone number
                          pattern={"^[0-9]{10,11}$"}
                        />
                      </div>
                    </div>
                    <button
                      className="py-3 px-7 mt-2 bg-gray-200 rounded-md font-semibold"
                      disabled={user.loading}
                      type="submit"
                    >
                      {user.loading ? (
                        <i class="fad fa-spinner-third fa-spin"></i>
                      ) : (
                        "CONTINUE"
                      )}
                    </button>
                  </form>
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
                  <form className="pt-5" onSubmit={handleChangePassword}>
                    <div className="flex flex-row justify-between">
                      <div class="flex w-full">
                        <Input
                          name={"Password"}
                          inputName={"password"}
                          value={passwordState.password}
                          handleChange={handlePasswordChange}
                          pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div class="flex w-full">
                        <Input
                          name={"New password"}
                          inputName={"newPassword"}
                          value={passwordState.newPassword}
                          handleChange={handlePasswordChange}
                          pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
                          type="password"
                        />
                      </div>
                    </div>
                    <button
                      className="py-3 px-7 mt-2 bg-gray-200 rounded-md font-semibold"
                      type="submit"
                    >
                      CONTINUE
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white border border-gray-200">
              <Link to={"/favourite"}>
                <Title name={"3. MODIFY YOUR WISHLIST"} />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserInfo;