import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "address", headerName: "Address", width: 200 },
  { field: "username", headerName: "Username", width: 200 },
  {
    field: "role",
    headerName: "Role",
    width: 200,
  },
];

const Users = () => {
  const admin = useSelector((state) => state.admin);
  const [query, setQuery] = useState("");
  //get data from users with id, name, email, phone, address, username, role
  const rows = admin.users.map((user) => {
    return {
      id: user.maKh,
      name: user.hoTen,
      email: user.email,
      phone: user.soDt,
      address: user.diaChi,
      username: user.username,
      role: user.vaiTro,
    };
  });
  const [userFilter, setUserFilter] = useState([...rows]);

  useEffect(() => {
    setUserFilter(rows);
  }, [admin.loadingUser]);
  const handleFilterValue = (e) => {
    setQuery(e.target.value);
    const filter = rows.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setUserFilter(filter);
  };

  return (
    <div className="basis-3/4">
      <h1 className="mb-5 text-2xl font-semibold">Người dùng</h1>
      <div className="flex items-center justify-between mb-5">
        <input
          className="px-5 py-3 border rounded-lg"
          type="text"
          name="search"
          placeholder="Tìm kiếm theo tên"
          value={query}
          onChange={handleFilterValue}
        />
        <i class="fas fa-trash-alt text-xl"></i>
      </div>
      <div className="h-[400px] w-full bg-white">
        {admin.loadingUser ? (
          <Skeleton height={"300px"} />
        ) : (
          <DataGrid
            rows={userFilter}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};

export default Users;
