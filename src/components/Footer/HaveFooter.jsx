import React from "react";
import { Outlet } from "react-router-dom";
import Footer from ".";

const HaveFooter = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default HaveFooter;
