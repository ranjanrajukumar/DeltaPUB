// src/components/Sidebar.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import axios from "axios";

export default function Sidebar() {
  const [menus, setMenus] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();                 // ✅ ADD THIS

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    try {
      const res = await axios.get("https://localhost:7118/api/Menu");
      setMenus(res.data);
    } catch (err) {
      console.error("Menu load error", err);
    }
  };

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen px-4 py-6">

      {/* Logo */}
      <div className="text-xl font-bold text-indigo-600 mb-8 flex items-center gap-2">
        ⚡ DeltaUI
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menus
          .sort((a, b) => a.menuOrder - b.menuOrder)
          .map((menu) => (
            <div key={menu.menuID}>

              {/* Parent Menu */}
              <div
                onClick={() => toggleMenu(menu.menuID)}
                className="flex justify-between items-center px-4 py-2 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
              >
                <span>{menu.menuTitle}</span>

                {menu.children.length > 0 && (
                  <span className="text-sm">
                    {openMenu === menu.menuID ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {/* Child Menu */}
              {openMenu === menu.menuID &&
                menu.children.map((child) => (
                  <div
                    key={child.menuID}
                    onClick={() => navigate(child.menuUrl)}   // ✅ THIS IS THE FIX
                    className="ml-6 mt-1 px-4 py-2 text-sm rounded-lg text-gray-500 hover:bg-indigo-100 hover:text-indigo-600 cursor-pointer"
                  >
                    {child.menuTitle}
                  </div>
                ))}
            </div>
          ))}
      </nav>
    </aside>
  );
}
