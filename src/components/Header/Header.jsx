import React from "react";
import { useNavigate, NavLink } from "react-router";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/landing/login");
  };
  return (
    <>
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          Project-Management-App
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            <NavLink to="/home/form">+ Add Task</NavLink>
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
