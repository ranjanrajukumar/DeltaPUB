import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left - Logo */}
        <div className="text-lg font-semibold text-slate-800">
          MyApp
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex space-x-10 text-slate-600 font-medium">
          <span className="cursor-pointer hover:text-blue-600">Home</span>
          <span className="cursor-pointer hover:text-blue-600">Profiles</span>
          <span className="cursor-pointer hover:text-blue-600">Reports</span>
        </nav>

        {/* Right - Profile */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full border"
              alt="profile"
            />
            <span className="hidden md:block text-sm font-medium text-slate-700">
              Admin
            </span>
          </div>

          {open && (
            <div className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">Admin User</p>
                <p className="text-xs text-gray-500">admin@myapp.com</p>
              </div>

              <ul className="py-2 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Account
                </li>
                <li className="px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
