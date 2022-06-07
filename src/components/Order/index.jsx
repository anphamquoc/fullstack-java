import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import Breadcrumb from "../../wrapper/Breadcrumb";
import OrderItem from "../../wrapper/Order/OrderItem";
import PaginationItem from "../ScrollToTop/Pagination";

const Order = () => {
  const [index, setIndex] = useState(1);
  const user = useSelector((state) => state.user);
  const { cacDonDatHang } = user;
  return (
    <div className="w-full pt-32 flex flex-col items-center gap-5">
      <Breadcrumb header={"Đơn đặt hàng"} breadcrumbName={"Đơn đặt hàng"} />
      {user.loading ? (
        <div class="flex flex-col w-4/5">
          <Skeleton height={"100px"} />
        </div>
      ) : (
        <>
          {cacDonDatHang
            ?.slice(0)
            .reverse()
            .slice((index - 1) * 3, index * 3)
            .map((order, i) => (
              <div className="w-4/5 items-center flex flex-col">
                <OrderItem order={order} key={i} />
              </div>
            ))}
          <PaginationItem
            products={cacDonDatHang}
            quantity={3}
            setIndex={setIndex}
          />
        </>
      )}
    </div>
  );
};

export default Order;
