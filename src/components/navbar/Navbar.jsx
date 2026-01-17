import { useState } from "react";

import Sidebar from "../components/navbar/Sidebar";
import Topbar from "../components/navbar/Topbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50">
        <Topbar />
        
      </div>
    </div>
  );
};

export default Navbar;
