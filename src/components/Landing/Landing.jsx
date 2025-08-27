import { NavLink, Outlet } from "react-router";

function Landing() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-[url('./assets/landing_bg.jpg')] bg-cover bg-center">
      <div className="flex h-full w-full">
        <div className="flex flex-col h-full w-full ">
          <div className="flex-1 bg-blue-900">
            <div className="h-full w-full bg-black/40 flex items-start pt-8 pl-8 justify-between">
              <h1 className="text-white text-5xl font-bold">
                Welcome to ProManage
              </h1>
              <div className="space-x-6 pr-10">
                <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-amber-50 border-2 border-blue-800 text-blue-800 hover:bg-blue-100 shadow-md">
                  <NavLink to="/landing/login">Login</NavLink>
                </button>
                <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-800 text-white hover:bg-blue-900 shadow-md">
                  <NavLink to="/landing/register">Register</NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-centre align-middle flex-7">
            <Outlet />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Landing;

