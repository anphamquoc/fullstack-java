import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const SendMailSuccess = () => {
  const password = useSelector((state) => state.password);
  function hideEmail(target) {
    let i;
    var email = target; //anas.behhari@gmail.com
    var hiddenEmail = "";
    for (i = 0; i < email.length; i++) {
      if (i > 2 && i < email.indexOf("@")) {
        hiddenEmail += "*";
      } else {
        hiddenEmail += email[i];
      }
    }
    return hiddenEmail;
  }
  useEffect(() => {
    if (password.user) {
      emailjs.send(
        "service_bizxgnf",
        "template_xmlvu2c",
        {
          name: password.user.ho_ten,
          link: `${window.location.origin}/reset-password/${password.user.maKh}`,
          username: password.user.username,
          reply_to: password.user.email,
          to_email: password.user.email,
        },
        "q9E_OWHY7-fqsGjoW"
      );
    }
  }, [password.user]);
  return (
    <div className="w-full pt-32 flex flex-col items-center gap-3">
      <div class="svg-container">
        <svg
          class="ft-green-tick"
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle class="circle" fill="#5bb543" cx="24" cy="24" r="22" />
          <path
            class="tick"
            fill="none"
            stroke="#FFF"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M14 27l5.917 4.917L34 17"
          />
        </svg>
      </div>
      <h1 className="text-gray-900 text-3xl">Lấy mật khẩu thành công</h1>
      <p className="text-gray-900 text-lg">
        Để lấy lại mật khẩu. Truy cập email: {hideEmail(password.user.email)} .
      </p>
      <Link to={"/"}>
        <button className="bg-purple-500 py-3 px-4 rounded-full text-white">
          Quay lại trang chủ
        </button>
      </Link>
    </div>
  );
};

export default SendMailSuccess;
