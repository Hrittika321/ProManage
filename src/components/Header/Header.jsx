import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          Project-Management-App
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            <NavLink to="/form">+ Add Task</NavLink>
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <NavLink to="/profile">Profile</NavLink>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
