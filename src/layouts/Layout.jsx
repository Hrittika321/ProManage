import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="h-18">
          <Header />
        </div>
        <div className="flex-1 flex flex-row gap-5">
            <Outlet />
        </div>
        <div className="h-13">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
