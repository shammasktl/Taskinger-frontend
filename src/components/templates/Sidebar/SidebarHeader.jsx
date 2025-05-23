import logoImg from "/logo-main.svg";
import React from "react";

const SidebarHeader = () => {
  return (
    <div className="border-b border-gray-200 flex items-center">
      <div className="flex items-center space-x-3 py-[21px]">
        <img src={logoImg} alt="" className="w-14 mx-3" />
      </div>
    </div>
  );
};

export default SidebarHeader;
