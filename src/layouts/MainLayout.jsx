import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default MainLayout;
