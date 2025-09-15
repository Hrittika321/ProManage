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
      <div className="flex flex-col align-top h-full w-full">
        <div className="flex h-25 w-full items-center pl-8 justify-between  bg-blue-950">
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
        {!login && !register && (<div className="text-blue-950 text-3xl h-100 w-180 mt-60 ml-30 shadow-2xl rounded-2xl p-6">
          <span className="text-blue-950 text-5xl font-bold  text-shadow-indigo-800 ">
            ProManage...
            <br />
          </span>{" "}
          is a smart project management app designed to help teams plan, track,
          and deliver work seamlessly. With intuitive task boards, real-time
          collaboration, and progress tracking, ProManage keeps everyone aligned
          and projects on schedule. Whether you’re managing a small team or
          scaling across departments, ProManage makes project execution simple,
          transparent, and efficient.
        </div>)}
        <div className="flex justify-center items-center flex-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Landing;
