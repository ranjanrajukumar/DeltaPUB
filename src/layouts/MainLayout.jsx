import { Outlet } from "react-router-dom";
import Sidebar from "../components/navbar/Sidebar";
import Topbar from "../components/navbar/Topbar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
