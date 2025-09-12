import React from "react";
import { useNavigate, NavLink } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { useTasks } from "../../context/TaskContext";

function Header() {
  const navigate = useNavigate();
  const { showForm, setShowForm } = useTasks();

  const { logout } = useAuth();
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };
  return (
    <header className=" bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        Project-Management-App
      </div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => setShowForm(true)}
        >
          + Add Task
        </button>
        {showForm && (
          <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 h-screen w-screen"
            onClick={() => setShowForm(false)}
          >
            <div
              className="flex justify-center align-middle h-130 w-120 bg-white rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AddTaskForm onClose={() => setShowForm(false)} />
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-60 right-180 text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
