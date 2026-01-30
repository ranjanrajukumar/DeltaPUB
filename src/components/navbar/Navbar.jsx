import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useMenus from "../common/useMenus";

const Navbar = () => {
  const menus = useMenus();
  const [moduleOpen, setModuleOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentModule = menus.find((m) =>
    m.children?.some((c) =>
      location.pathname.startsWith(c.menuUrl)
    )
  );

  const currentPage = currentModule?.children?.find((c) =>
    location.pathname.startsWith(c.menuUrl)
  );

  const tabs = currentPage?.tabs || [];



  return (
    <header className="bg-white border-b shadow-sm">
      <div className="h-10 px-6 flex items-center">
        <div className="flex items-center gap-3 text-slate-700 font-medium">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back
          </button>

          <span className="text-slate-400">|</span>

          {/* Module Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setModuleOpen(true)}
            onMouseLeave={() => setModuleOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <span>{currentModule?.menuTitle || "Module"}</span>
              <span className="text-xs">▼</span>
            </div>
            <div className="absolute left-0 top-full h-2 w-full"></div>
            {moduleOpen && (
              <div className="absolute left-0 top-full w-52 bg-white border rounded-lg shadow-lg z-50">
                {currentModule?.children?.map((item) => (
                  <div
                    key={item.menuID}
                    onClick={() => {
                      navigate(item.menuUrl);
                      setModuleOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer
                      ${location.pathname === item.menuUrl
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "hover:bg-gray-100"
                      }`}
                  >
                    {item.menuTitle}
                  </div>
                ))}
              </div>
            )}
          </div>


          <span className="text-slate-400">›</span>

          {/* Page */}
          <span className="text-blue-600 font-semibold">
            {currentPage?.menuTitle || ""}
          </span>
        </div>
      </div>

      {/* Tabs */}
      {tabs.length > 0 && (
        <div className="bg-white border-b px-6 mt-2">
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            {tabs.map((tab, index) => {
              const isActive = index === 0; // default active (no tabUrl in API)

              return (
                <div
                  key={index}
                  className={`cursor-pointer pb-2
              ${isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "hover:text-blue-600"
                    }`}
                >
                  {tab.tabName}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
