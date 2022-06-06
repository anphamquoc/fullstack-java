import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../redux/features/PasswordSlice";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Input from "../../wrapper/User/Input";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  //get root url and remove all slash
  const handleRecover = (e) => {
    e.preventDefault();
    dispatch(getUserByUsername(username.username));
  };
  useEffect(() => {
    if (!password.error) {
      navigate("/send-mail");
    }
  }, [navigate, password.error]);
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[calc(100vh)] pt-20 mb-20">
      <Breadcrumb
        breadcrumbName={"Đổi lại mật khẩu"}
        header={"Đổi lại mật khẩu"}
      />
      <div className="relative w-full h-[400px] flex justify-center">
        <div class="block p-10 w-2/5 rounded-lg shadow-lg bg-white absolute">
          <form onSubmit={handleRecover}>
            <Input
              name={"Username"}
              setUser={setUsername}
              user={username}
              label="Tên đăng nhập"
              placeholder={"tên đăng nhập"}
            />
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
              {password.loading ? (
                <i class="fad fa-spinner-third fa-spin"></i>
              ) : (
                "Tìm kiếm"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
