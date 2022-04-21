import React, { useEffect } from "react";
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

const currentMonth = new Date().getMonth();
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

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataPieChart = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const products = useSelector((state) => state.products);
  const admin = useSelector((state) => state.admin);
  let monthUser = [];
  useEffect(() => {
    for (let i = 0; i < currentMonth; i++) {
      monthUser[i] = 0;
    }
    if (admin.users) {
      admin.users.forEach((user) => {
        const date = new Date(user.ngayTao);
        if (date.getFullYear() === new Date().getFullYear()) {
          if (monthUser[date.getMonth()]) {
            monthUser[date.getMonth()] += 1;
          } else {
            monthUser[date.getMonth()] = 1;
          }
          console.log(monthUser);
        }
      });
    }
  }, [admin.loadingUser]);
  console.log(monthUser);
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
          description={50}
          colorClass="text-red"
          bgClass="bg-red"
          name={"Rating"}
        />
      </div>
      <div className="flex flex-row gap-5 mt-10">
        <div className="flex flex-col gap-4 basis-2/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Users</h3>
            <span>(+43%) than last year</span>
          </div>
          <div>
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="basis-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Current Visits</h3>
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
                .slice(0, 5)
                .map((order) => <OrderDashboard key={order.id} order={order} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
