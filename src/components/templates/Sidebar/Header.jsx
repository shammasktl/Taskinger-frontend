import React from "react";
import { ChevronLeft, ChevronRight, User, Search } from "lucide-react";

const Header = ({ toggleSidebar, isCollapsed }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <nav className="flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Here..."
            className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors cursor-pointer">
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
