import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../redux/features/PasswordSlice";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Input from "../../wrapper/User/Input";

const ResetPassword = () => {
  const [passwordState, setPasswordState] = useState({
    password: "",
    newPassword: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwordState.password !== passwordState.newPassword) {
      toast.error("Mật khẩu không khớp");
    } else {
      dispatch(resetPassword({ passwordState, id: params.id }));
    }
  };
  useEffect(() => {
    if (password.loading === false && !password.error) {
      navigate("/login-register");
    }
  }, [navigate, password]);
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[calc(100vh)] pt-20 mb-20">
      <Breadcrumb
        breadcrumbName={"Lấy lại mật khẩu"}
        header={"Lấy lại mật khẩu"}
      />
      <div className="relative w-full h-[400px] flex justify-center">
        <div class="block p-10 w-2/5 rounded-lg shadow-lg bg-white absolute">
          <form onSubmit={handleChangePassword}>
            <Input
              name={"Password"}
              user={passwordState}
              setUser={setPasswordState}
              pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
              label="Mật khẩu"
              placeholder="mật khẩu"
            />
            <div class="form-group mb-6">
              <label
                for={"rePassword"}
                class="form-label inline-block mb-2 text-gray-400"
              >
                Nhập lại mật khẩu
              </label>
              <input
                type="password"
                class="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={`Nhập lại mật khẩu`}
                name={"rePassword"}
                onChange={(e) =>
                  setPasswordState({
                    ...passwordState,
                    newPassword: e.target.value,
                  })
                }
                pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
              />
              {/* <small id="emailHelp" class="block mt-1 text-xs text-gray-600">
              We'll never share your email with anyone else.
            </small> */}
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
              {password.loading ? (
                <i class="fad fa-spinner-third fa-spin"></i>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
