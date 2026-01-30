// src/components/Sidebar.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useMenus from "../common/useMenus";

export default function Sidebar() {
  const menus = useMenus();
  const [openMenu, setOpenMenu] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}   
      onMouseLeave={() => {
        setIsExpanded(false);
        setOpenMenu(null);
      }}
      className={`bg-[#111827] text-gray-300 min-h-screen px-2 py-6
      transition-all duration-300 ease-in-out
      ${isExpanded ? "w-52 px-4" : "w-16"} `}
    >
      {/* Logo */}
      <div className="text-xl font-bold text-white mb-10 flex items-center gap-2">
        <span className="text-indigo-500">⬡</span>
        {isExpanded && <span>zentory.ai</span>}
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
                className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer
                hover:bg-gray-800 ${openMenu === menu.menuID ? "bg-gray-800 text-white" : ""
                  }`}
              >
                <span className="flex items-center gap-3">
                  📦
                  {isExpanded && <span>{menu.menuTitle}</span>}
                </span>

                {isExpanded && menu.children.length > 0 && (
                  <span className="text-xs">
                    {openMenu === menu.menuID ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {/* Child Menu */}
              {isExpanded &&
                openMenu === menu.menuID &&
                menu.children.map((child) => {
                  const isActive =
                    location.pathname === child.menuUrl;

                  return (
                    <div
                      key={child.menuID}
                      onClick={() => navigate(child.menuUrl)}
                      className={`ml-8 mt-1 px-3 py-2 text-sm rounded-md cursor-pointer
                      border-l-2 ${isActive
                          ? "bg-gray-800 text-white border-indigo-500"
                          : "border-gray-700 hover:bg-gray-800 hover:text-white"
                        }`}
                    >
                      {child.menuTitle}
                    </div>
                  );
                })}
            </div>
          ))}
      </nav>
    </aside>
  );
}
