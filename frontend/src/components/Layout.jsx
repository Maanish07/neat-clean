import React from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";



const Layout = ({ children }) => {
  return (
    <>
    <div className="gradient-circle" ></div>
    <Announcement/>
        <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
