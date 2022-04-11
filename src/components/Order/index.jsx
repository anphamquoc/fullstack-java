import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import Breadcrumb from "../../wrapper/Breadcrumb";
import OrderItem from "../../wrapper/Order/OrderItem";

const Order = () => {
  const user = useSelector((state) => state.user);
  const { cacDonDatHang } = user;
  console.log(cacDonDatHang);
  return (
    <div className="w-full pt-32 flex flex-col items-center gap-5">
      <Breadcrumb header={"Order"} breadcrumbName={"Order"} />
      {user.loading ? (
        <div class="flex flex-col w-4/5">
          <Skeleton height={"100px"} />
        </div>
      ) : (
        <>
          {cacDonDatHang.map((order, i) => (
            <OrderItem order={order} key={i} />
          ))}
        </>
      )}
    </div>
  );
};

export default Order;
