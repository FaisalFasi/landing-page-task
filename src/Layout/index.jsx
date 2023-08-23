import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-[120px] px-[64px] pb-[64px]   ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
