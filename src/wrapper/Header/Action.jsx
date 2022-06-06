import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleImageUrl, numberWithDots } from "../../actions";
import { logOut } from "../../redux/features/UserSlice";
import Empty from "../../assets/images/empty.gif";
import { auth } from "../../Firebase/firebase";

const Action = () => {
  const [active, setActive] = useState("hidden");
  const user = useSelector((state) => state.user);
  const gioHang = user.gioHang;
  const dispatch = useDispatch();
  const handleClickUser = async () => {
    setActive(active === "hidden" ? "flex" : "hidden");
  };
  const [activeCart, setActiveCart] = useState("hidden");
  const handleClickCart = async () => {
    setActiveCart(activeCart === "hidden" ? "flex" : "hidden");
  };
  const handleLogout = async () => {
    dispatch(logOut());
    await auth.signOut();
  };
  let total = !gioHang?.chiTietGioHang
    ? 0
    : gioHang.chiTietGioHang?.reduce((total, item) => {
        return total + item.soLuong * item.sanPham.gia;
      }, 0);
  return (
    <div className="flex flex-row align-middle gap-6 text-xl">
      {user.loading ? (
        <i class="fad fa-spinner-third fa-spin"></i>
      ) : (
        <>
          <div className="group inline-block relative cursor-pointer">
            {user.loading ? (
              <i class="fad fa-spinner-third fa-spin"></i>
            ) : (
              <i class="fal fa-user" onClick={handleClickUser}></i>
            )}
            <div
              className={`${active} absolute shadow-lg gap-3 flex-col p-5 w-max text-base font-medium mt-6 bg-white right-0`}
            >
              {!user.isAuthenticated ? (
                <>
                  <Link to={"/login-register"} onClick={handleClickUser}>
                    <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
                      Đăng nhập
                    </span>
                  </Link>
                  <Link to={`/login-register`} onClick={handleClickUser}>
                    <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
                      Đăng ký
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/favourite"}>
                    <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
                      Yêu thích
                    </span>
                  </Link>
                  <Link to={"/account-info"}>
                    <span className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200">
                      Tài khoản của tôi
                    </span>
                  </Link>
                  <span
                    className="hover:text-fuchsia-500 hover:translate-x-1 transition-all duration-200"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </span>
                </>
              )}
            </div>
          </div>
          {user.isAuthenticated && (
            <Link to={"/favourite"}>
              <div>
                <i class="fal fa-heart cursor-pointer"></i>
              </div>
            </Link>
          )}
          {user.isAuthenticated && (
            <div className="inline-block relative cursor-pointer z-10">
              <i class="fal fa-shopping-cart" onClick={handleClickCart}></i>
              <div
                className={`${activeCart}  absolute shadow-lg gap-3 flex-col w-max h-max  mt-6 right-0 bg-white p-7`}
              >
                {/* All product */}
                <div className="flex flex-col divide-y bg-white">
                  {user.gioHang?.chiTietGioHang?.length ? (
                    user.gioHang.chiTietGioHang
                      ?.slice(0, 2)
                      .map((product, i) => (
                        <div className="flex flex-row gap-8 py-3">
                          <img
                            src={handleImageUrl(product.sanPham.hinhAnh)}
                            alt="đồng hồ"
                            className="w-[82px] h-[82px]"
                          />
                          <div className="text-[15px]">
                            <div>
                              <span className="text-lg">
                                {product.sanPham.tenSp}
                              </span>
                              <p className="text-[13px]">
                                Qty: {product.soLuong}
                              </p>
                            </div>
                            <span className="text-[14px]">
                              {numberWithDots(
                                product.sanPham.gia * product.soLuong
                              )}{" "}
                              đ
                            </span>
                          </div>
                          {/* <i class="fas fa-times-circle pt-2"></i> */}
                        </div>
                      ))
                  ) : (
                    <>
                      <img src={Empty} alt="empty" />
                    </>
                  )}
                </div>
                {/* Total and Shipping fee */}
                <div className="flex flex-col gap-5 text-lg pb-4">
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>Free ship</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tổng cộng:</span>
                    <span>{numberWithDots(total ? total : 0)}</span>
                  </div>
                </div>
                {/* Action button */}
                <div className="flex flex-col gap-4 justify-center">
                  <div className="relative group">
                    <Link to={"/cart"}>
                      <button className="w-full p-3 border-[1px] border-black bg-transparent group-hover:text-white transition duration-300 ease-in-out hover:bg-fuchsia-500">
                        Xem giỏ hàng
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to={"/checkout"}>
                      <button className="w-full p-3 border-[1px] border-black transition duration-300 ease-in-out hover:bg-fuchsia-500 hover:text-white">
                        Thanh toán
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="group inline-block relative cursor-pointer">
            <a href={"/orders"}>
              <i class="fal fa-bags-shopping"></i>
            </a>
            {/* <div className="group-hover:flex hidden absolute shadow-lg p-8 gap-20 right-0">
              <div className="section">
                <h1 className="font-bold uppercase text-lg">Demo</h1>
                <div className="details min-w-max text-gray-500 pt-5 cursor-pointer flex flex-col gap-2">
                  <p className="hover:text-violet-600 font-semibold">
                    Home 1 - Fashion 1
                  </p>
                  <p>Home 1 - Fashion 2</p>
                  <p>Home 1 - Fashion 3</p>
                  <p>Home 1 - Fashion 4</p>
                  <p>Home 1 - Fashion 5</p>
                  <p>Home 1 - Fashion 6</p>
                </div>
              </div>
              <div className="section">
                <h1 className="font-bold uppercase text-lg">Demo</h1>
                <div className="details min-w-max text-gray-500 pt-5">
                  <p>Home 1 - Fashion 1</p>
                  <p>Home 1 - Fashion 2</p>
                  <p>Home 1 - Fashion 3</p>
                  <p>Home 1 - Fashion 4</p>
                  <p>Home 1 - Fashion 5</p>
                  <p>Home 1 - Fashion 6</p>
                </div>
              </div>
            </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Action;
