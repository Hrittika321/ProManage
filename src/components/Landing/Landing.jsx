import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";

function Landing() {
  const location = useLocation();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  useEffect(() => {
    setLogin(location.pathname.includes("login"));
    setRegister(location.pathname.includes("register"));
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 h-screen w-screen bg-[url('./assets/landing_bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col h-full w-full ">
        <div className="flex-1 bg-blue-900">
          <div className="h-full w-full bg-black/40 flex items-start pt-8 pl-8 justify-between">
            <h1 className="text-white text-5xl font-bold">
              Welcome to ProManage
            </h1>
            <div className="space-x-6 pr-10">
              {!register && (
                <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-800 text-white hover:bg-blue-900 shadow-md">
                  <NavLink to="/register">Register</NavLink>
                </button>
              )}

              {!login && (
                <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-amber-50 border-2 border-blue-800 text-blue-800 hover:bg-blue-100 shadow-md">
                  <NavLink to="/login">Login</NavLink>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Landing;
