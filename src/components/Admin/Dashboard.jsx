import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import Data from "../../wrapper/Admin/Data";
import { useSelector } from "react-redux";
import ProductDashboardItem from "../../wrapper/Admin/ProductDashboardItem";
import { Skeleton } from "@mui/material";
import OrderDashboard from "../../wrapper/Admin/OrderDashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const products = useSelector((state) => state.products);
  const admin = useSelector((state) => state.admin);

  if (admin.loading)
    return <Skeleton variant="rect" width={"100%"} height={"100%"} />;
  const reviewArr = [0, 0, 0, 0, 0];
  let monthUser = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  admin.reviews.map((item) => (reviewArr[item.diem - 1] += 1));
  admin.users.forEach((item) => {
    const date = new Date(item.ngayTao);
    monthUser[date.getMonth()] += 1;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: monthUser,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataPieChart = {
    labels: ["One Star", "Two Star", "Three Star", "Four Star", "Five Star"],
    datasets: [
      {
        label: "# of Votes",
        data: reviewArr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  //reverse array
  return (
    <div className="basis-3/4">
      <h1 className="mb-5 text-2xl font-semibold">Hi, welcome back</h1>
      <div className="grid grid-cols-4 gap-5">
        <Data
          iconClass={"fas fa-box-check"}
          description={admin.orders.length}
          colorClass="text-blue"
          bgClass="bg-blue"
          name={"Weekly Sales"}
        />
        <Data
          iconClass={"fas fa-user-check"}
          description={admin.users.length}
          colorClass="text-green"
          bgClass="bg-green"
          name={"Users"}
        />
        <Data
          iconClass={"fas fa-smile-beam"}
          description={admin.orders.length}
          colorClass="text-yellow"
          bgClass="bg-yellow"
          name={"Orders"}
        />
        <Data
          iconClass={"fas fa-star"}
          description={admin.reviews.length}
          colorClass="text-red"
          bgClass="bg-red"
          name={"Rating"}
        />
      </div>
      <div className="flex flex-row gap-5 mt-10">
        <div className="flex flex-col gap-4 basis-2/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Users</h3>
            <span>(+100%) than last year</span>
          </div>
          <div>
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="basis-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Current Star Product</h3>
          </div>
          <div>
            <Pie data={dataPieChart} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="basis-2/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-5">Product Updates</h3>
          </div>
          <div className="flex flex-col gap-5">
            {products.loading ? (
              <>
                <Skeleton height={"50px"} />
                <Skeleton height={"50px"} />
                <Skeleton height={"50px"} />
                <Skeleton height={"50px"} />
              </>
            ) : (
              products.products
                .slice(0, 5)
                .map((product) => (
                  <ProductDashboardItem key={product.id} product={product} />
                ))
            )}
          </div>
        </div>
        <div className="basis-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-5">Order Timeline</h3>
          </div>
          <div className="flex flex-col gap-5">
            {admin.loading ? (
              <>
                <Skeleton height={"50px"} />
                <Skeleton height={"50px"} />
                <Skeleton height={"50px"} />
                <Skeleton height={"50px"} />
              </>
            ) : (
              admin.orders
                // .sort((a, b) => a.ngayDatHang - b.ngayDatHang)
                .slice(admin.orders.length - 6, admin.orders.length - 1)
                .reverse()
                .map((order) => <OrderDashboard key={order.id} order={order} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
