
export default function Topbar() {
  return (
    <header className="h-10 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-2 w-1/2">
        {/* <Search size={18} className="text-gray-400" /> */}
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* <Bell className="text-gray-500 cursor-pointer" /> */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full w-8 h-8"
          />
          <span className="font-medium">Tom Cook</span>
        </div>
      </div>
    </header>
  );
}
