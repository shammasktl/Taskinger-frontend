import { X } from "lucide-react";

import logoImg from '/logo-main.svg'

const SidebarHeader = ({ isCollapsed, isMobile, toggleSidebar }) => {
  return (
    <div className="border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-3 py-[19px]">
          <img src={logoImg} className="w-16 mx-3" alt="" />
      </div>

      {/* Mobile Close Button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="p-2 mr-4 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default SidebarHeader;