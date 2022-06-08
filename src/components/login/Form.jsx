import React, { Fragment, useState } from "react";
import Breadcrumb from "../../wrapper/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../wrapper/User/Input";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../redux/features/UserSlice";
import { toast } from "react-toastify";
import firebase, { auth } from "../../Firebase/firebase";
const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formActive, setFormActive] = useState("login");
  const userRedux = useSelector((state) => state.user);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleLoginWithGoogle = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(
      googleProvider
    );
    if (additionalUserInfo.isNewUser) {
      const userData = {
        email: user.email,
        username: user.email,
        hoTen: user.displayName,
        soDt: user.phoneNumber,
        diaChi: "",
        password: "",
      };
      dispatch(registerUser(userData));
    } else {
      const userData = {
        username: user.email,
        method: "google",
        password: "",
      };
      dispatch(loginUser(userData));
    }
  };
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const [userRegister, setUserRegister] = useState({
    username: "",
    password: "",
    hoTen: "",
    email: "",
    soDt: "",
    diaChi: "",
  });
  if (userRedux?.isAuthenticated) {
    navigate("/");
  }
  const [rePassword, setRePassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(userLogin));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (userRegister.password !== rePassword) {
      toast.error("Mật khẩu không trùng khớp");
    } else {
      dispatch(registerUser(userRegister));
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col gap-5 justify-center items-center w-full min-h-[calc(100vh)] pt-[20vh] mb-20">
        <Breadcrumb
          breadcrumbName={"ĐĂNG NHẬP / ĐĂNG KÝ"}
          header={formActive === "login" ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}
        />
        <div className="flex flex-row gap-5 text-2xl font-bold cursor-pointer">
          <h3
            className={formActive === "login" ? `text-purple-500` : ""}
            onClick={() => setFormActive("login")}
          >
            Đăng nhập
          </h3>{" "}
          |
          <h3
            onClick={() => setFormActive("register")}
            className={formActive !== "login" ? `text-purple-500` : ""}
          >
            Đăng ký
          </h3>
        </div>
        <div className="relative w-full h-[400px] flex justify-center">
          {formActive === "login" ? (
            <div class="block p-10 w-2/5 rounded-lg shadow-lg bg-white absolute">
              <form onSubmit={handleLogin}>
                <Input
                  name={"Username"}
                  setUser={setUserLogin}
                  user={userLogin}
                  placeholder={"tên đăng nhập"}
                  label={"Tên đăng nhập"}
                  //username has at least 1 character, and at most 20 characters
                />
                <Input
                  name={"Password"}
                  setUser={setUserLogin}
                  user={userLogin}
                  pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
                  placeholder="mật khẩu"
                  label={"Mật khẩu"}
                />
                <div className="flex justify-between mb-3">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck1"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="exampleCheck1"
                    >
                      Nhớ mật khẩu
                    </label>
                  </div>
                  <Link to={"/forgot-password"}>
                    <span>Quên mật khẩu?</span>
                  </Link>
                </div>
                <div className="mb-6 flex flex-row gap-2 w-full">
                  <button
                    onClick={handleLoginWithGoogle}
                    className="border border-blue-200 p-2 rounded-lg w-full"
                    type="button"
                  >
                    <i class="fab fa-google"></i> Đăng nhập với Google
                  </button>
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
                  {/* {true ? (
                    <i class="fad fa-spinner-third fa-spin"></i>
                  ) : ( */}
                  Đăng nhập
                  {/* )} */}
                </button>
              </form>
            </div>
          ) : (
            <div class="block p-10 w-2/5 rounded-lg shadow-lg bg-white absolute">
              <form onSubmit={handleRegister}>
                <Input
                  name={"Username"}
                  user={userRegister}
                  setUser={setUserRegister}
                  placeholder={"tên đăng nhập"}
                  label={"Tên đăng nhập"}
                />
                <Input
                  name={"Password"}
                  user={userRegister}
                  setUser={setUserRegister}
                  pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
                  placeholder="mật khẩu"
                  label={"Mật khẩu"}
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
                    onChange={(e) => setRePassword(e.target.value)}
                    pattern={"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"}
                  />
                  {/* <small id="emailHelp" class="block mt-1 text-xs text-gray-600">
              We'll never share your email with anyone else.
            </small> */}
                </div>
                <Input
                  name={"soDt"}
                  user={userRegister}
                  setUser={setUserRegister}
                  //phone pattern
                  pattern={
                    "^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$"
                  }
                  placeholder="số điện thoại"
                  label={"Số điện thoại"}
                />
                <Input
                  name={`hoTen`}
                  user={userRegister}
                  setUser={setUserRegister}
                  placeholder={"họ tên"}
                  label={"Họ tên"}
                />
                <Input
                  name={"email"}
                  user={userRegister}
                  setUser={setUserRegister}
                  //email pattern
                  pattern={
                    "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
                  }
                  placeholder="email"
                  label={"Email"}
                />
                <Input
                  name={"diaChi"}
                  user={userRegister}
                  setUser={setUserRegister}
                  placeholder={"địa chỉ"}
                  label={"Địa chỉ"}
                />

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
                      Nhớ mật khẩu
                    </label>
                  </div>
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
                  Đăng ký
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
