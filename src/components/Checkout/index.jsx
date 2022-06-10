import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "../../wrapper/Breadcrumb";
import { PayPalButton } from "react-paypal-button-v2";
import Product from "../../wrapper/Checkout/Product";
import { numberWithDots } from "../../actions";
import Input from "../../wrapper/Checkout/Input";
import Empty from "../../assets/images/empty.gif";
import {
  addProductToOrder,
  createOrder,
  removeFromCart,
} from "../../redux/features/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    hoTen: "",
    noiNhan: "",
    soDt: "",
    email: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  useEffect(() => {
    setUserState({
      hoTen: user.user?.hoTen,
      noiNhan: user.user?.diaChi,
      soDt: user.user?.soDt,
      email: user.user?.email,
    });
  }, [user.user]);
  const gioHang = user.gioHang;
  const total = gioHang.chiTietGioHang?.reduce((total, item) => {
    return total + item.soLuong * item.sanPham.gia;
  }, 0);
  const handleChangeMethod = (e) => {
    setPaymentMethod(e.target.checked && e.target.value);
  };
  const handleCheckout = () => {
    const data = {
      maKH: user.user.maKh,
      hoTen: userState.hoTen,
      noiNhan: userState.noiNhan,
      soDt: userState.soDt,
      email: userState.email,
      tongTien: total,
      phuongThucThanhToan: paymentMethod,
    };
    if (
      data.maKH === "" ||
      data.hoTen === "" ||
      data.noiNhan === "" ||
      data.soDt === "" ||
      data.email === ""
    ) {
      toast.warning("Vui lòng nhập đầy đủ thông tin");
      return;
    } else {
      dispatch(createOrder(data)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          gioHang.chiTietGioHang.forEach((item) => {
            const data = {
              maDDH: res.payload.maDDH,
              soLuong: item.soLuong,
              maSp: item.sanPham.maSp,
              product: item,
            };
            dispatch(
              removeFromCart({
                userId: user.user.maKh,
                pid: item.sanPham.maSp,
              })
            );
            dispatch(addProductToOrder(data));
          });
          navigate("/checkout/success");
        }
      });
    }
  };
  if (gioHang.chiTietGioHang?.length === 0) {
    return (
      <div className="w-full flex flex-col items-center">
        <Breadcrumb header={"Thanh toán"} breadcrumbName="Thanh toán" />
        <div className="w-full flex flex-col items-center">
          <img src={Empty} alt="empty" />
          <h1 className="text-3xl font-semibold text-center">
            Giỏ hàng bạn hiện đang trống
          </h1>
          <button className="bg-purple-500 mt-5 px-5 py-3 text-white rounded-full">
            <a href="/">Quay về trang chủ</a>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"Thanh toán"} breadcrumbName={"Thanh toán"} />
      {user.loading ? (
        <div class="flex flex-col w-4/5">
          <Skeleton height={"100px"} />
        </div>
      ) : (
        <>
          <div className="flex flex-row w-4/5 gap-10">
            <div className="basis-2/3">
              <h2 className="font-semibold text-xl">Chi tiết đơn hàng</h2>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row">
                  {/* create input form */}
                  <div className="flex flex-row w-full">
                    <Input
                      labelName={"Họ tên khách hàng"}
                      inputName="hoTen"
                      userState={userState}
                      setUserState={setUserState}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <Input
                    labelName={"Số điện thoại liên lạc"}
                    inputName="soDt"
                    userState={userState}
                    setUserState={setUserState}
                  />
                  <Input
                    labelName={"Địa chỉ email"}
                    inputName="email"
                    userState={userState}
                    setUserState={setUserState}
                  />
                </div>
                <div>
                  <Input
                    inputName={"noiNhan"}
                    labelName="Địa chỉ nhận hàng"
                    setUserState={setUserState}
                    userState={userState}
                  />
                </div>
              </div>
            </div>
            <div className="basis-1/3">
              <h2 className="font-semibold text-xl">Đơn hàng của bạn</h2>
              <div className="flex flex-col gap-5 mt-4 divide-y">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-lg">Sản phẩm</h2>
                  <h2 className="font-semibold text-lg">Tổng cộng</h2>
                </div>
                <div className="flex flex-col gap-3 pt-5">
                  {gioHang.chiTietGioHang.map((product, i) => (
                    <Product product={product} key={i} />
                  ))}
                </div>
                <div className="flex justify-between pt-5">
                  <h3 className="text-lg">Phí vận chuyển</h3>
                  <p>Free shipping</p>
                </div>
                <div className="flex justify-between pt-5">
                  <h3 className="text-lg font-semibold">Tổng cộng</h3>
                  <p className="font-semibold text-lg text-purple-500">
                    {numberWithDots(total)} đ
                  </p>
                </div>
                <div className="flex justify-between pt-5 flex-col gap-3">
                  <h2>Hình thức thanh toán</h2>
                  <div class="flex">
                    <div className="flex gap-2 flex-col">
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value={"cash"}
                          onClick={handleChangeMethod}
                          checked
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault1"
                        >
                          Tiền mặt
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          value={"paypal"}
                          onClick={handleChangeMethod}
                        />
                        {/* <label
                          class="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault2"
                        >
                          Paypal <img src={Paypal} alt="paypal" />
                        </label> */}
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="flexRadioDefault2"
                        >
                          <PayPalButton
                            options={{
                              clientId:
                                "Ad77B1c_3OwOo-F5Ivl3mFfvlD1Lekx558kRDBOV_cdnZUvZHC-UaFcRvtcafQP-pi4L0EAuDr897QYI",
                              currency: "USD",
                              buyerCountry: "VN",
                            }}
                            amount="20000"
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                              handleCheckout();
                              // OPTIONAL: Call your server to save the transaction
                              //redirect to checkoutsuccess
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={`bg-purple-500 w-full py-3 mt-5 rounded-full text-white uppercase ${
                  gioHang.chiTietGioHang.length === 0 ||
                  paymentMethod === "paypal"
                    ? "cursor-not-allowed"
                    : ""
                }`}
                onClick={handleCheckout}
                disabled={
                  gioHang.chiTietGioHang.length === 0 ||
                  paymentMethod === "paypal"
                }
              >
                Thanh toán
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
