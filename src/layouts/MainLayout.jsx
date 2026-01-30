import { Outlet } from "react-router-dom";
import Sidebar from "../components/navbar/Sidebar";
import Topbar from "../components/navbar/Topbar";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Topbar />
        <Navbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
