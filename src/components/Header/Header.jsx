import React from "react";

function Header() {
  return (
    <>
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          Project-Management-App
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            + Add Task
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Profile
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
