import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserImage from "../../assets/images/discount.webp";
import AdminDataMenu from "../../data/Admin/SectionData.json";
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
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllOrders,
  loadAllReviews,
  loadAllUsers,
} from "../../redux/features/AdminSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

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
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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

const Admin = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadAllOrders());
    dispatch(loadAllUsers());
    dispatch(loadAllReviews());
  }, [dispatch]);
  if (user.loading === false && (!user.user || user.user.vaiTro !== "admin")) {
    navigate("/");
  }
  const [section, setSection] = useState("Dashboard");
  return (
    <div className="w-full pt-32 flex flex-row pl-2 pr-10 bg-gray-50 gap-10">
      <div className="basis-1/4 flex flex-col gap-10 items-center">
        <div className="flex flex-row items-center justify-between mx-10 px-10 py-3 bg-gray-100 w-full rounded-lg">
          <img src={UserImage} alt="user" />
          <h3 className="font-semibold">Admin</h3>
        </div>
        <ul className="flex flex-col w-full text-gray-700">
          {AdminDataMenu.map((item) => (
            <Link to={`/admin/${item.url}`}>
              <li
                className={`w-full flex gap-5 items-center px-5 py-3 ${
                  section === item.name && "bg-blue-100"
                } rounded-lg text-sm font-semibold cursor-pointer`}
                onClick={() => setSection(item.name)}
              >
                <i class={`${item.iconClass} text-2xl`}></i> {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
