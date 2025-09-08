import { Link } from "react-router";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-blue-600 text-white h-full p-6 ">
        <h2 className="text-2xl font-bold mb-20">Find your way</h2>
        <nav className="flex flex-col space-y-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-4 rounded transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-blue-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-4 rounded transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-blue-500"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `px-3 py-4 rounded transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-blue-500"
              }`
            }
          >
            Tasks
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-4 rounded transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-blue-500"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `px-3 py-4 rounded transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-white hover:bg-blue-500"
              }`
            }
          >
            Help
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
