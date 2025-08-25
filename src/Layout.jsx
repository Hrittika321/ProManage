import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <div className="flex flex-row gap-5 h-209">
        
        <div className="w-64">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col flex-grow p-4 space-y-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
