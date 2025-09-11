import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="h-18">
          <Header />
        </div>
        <div className="flex-1 flex flex-row gap-5">
          <div className="w-30">
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col flex-grow p-4 space-y-4">
            <Outlet />
          </div>
        </div>
        <div className="h-13">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
