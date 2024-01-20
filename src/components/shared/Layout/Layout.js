import React from "react";
import Header from "./Header";
import Sidebar from "./Menus/Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-3 g-0">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;
