import React from "react";

function Landing() {
  return (
    <>
      <div className="fixed h-screen w-full bg-[url('./assets/landing_bg.jpg')] bg-cover bg-center">
        <div className="h-full w-full bg-black/40 flex items-start pt-8 pl-8 justify-between">
          <h1 className="text-white text-5xl font-bold">
            Welcome to ProManage
          </h1>
          <div className="space-x-6 pr-10">
            <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-amber-50 border-2 border-blue-800 text-blue-800 hover:bg-blue-100 shadow-md">
              Login
            </button>
            <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-800 text-white hover:bg-blue-900 shadow-md">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
