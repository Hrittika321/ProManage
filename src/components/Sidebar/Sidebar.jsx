import { Link } from "react-router";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <aside className="w-40 bg-blue-600 text-white h-full p-6 ">
        <h2 className="text-2xl font-bold mb-20">Find your way</h2>
        <nav className="flex flex-col space-y-10">
          <NavLink
            to="/home"
            end
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
            to="/home/about"
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
            to="/home/contact"
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
            to="/home/help"
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
