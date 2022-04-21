import React from "react";

const ReviewItem = ({ item }) => {
  const convertDate = (date) => {
    const d = new Date(date);
    const dateString =
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds() +
      " " +
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear();
    return dateString;
  };
  let star = [];
  const calculateStar = (sao) => {
    for (let index = 0; index < Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star text-yellow-500"></i>);
    }
    for (let index = 0; index < 5 - Math.ceil(sao); index++) {
      star.push(<i class="fal fa-star"></i>);
    }
  };
  calculateStar(item.diem);
  return (
    <div className="flex flex-row gap-3">
      <div>
        <img
          className="w-14 h-14 rounded-full"
          src={
            "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          }
          alt="user"
        />
      </div>
      <div className="text-base">
        <p>{item.tenNguoiDanhGia}</p>
        <div>{star}</div>
        <span>{convertDate(item.ngayDG)}</span>
        <p className="mt-2">{item.noiDung}</p>
      </div>
    </div>
  );
};

export default ReviewItem;
