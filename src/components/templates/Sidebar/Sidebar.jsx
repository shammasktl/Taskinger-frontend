import {
  ChevronDown,
  Plus,
  LayoutDashboard,
  BarChart3,
  Calendar,
  Inbox,
  ChevronRight,
  Folder,
  Settings,
  Workflow,
} from "lucide-react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import SidebarHeader from "./SidebarHeader";
import Header from "./Header";

export default function SidebarNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle sidebar toggle
  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "Calendar", icon: Calendar },
  ];

  const projects = [
    "Ecommerce Project",
    "Arduino Waste Cleaner",
    "Social Service",
  ];

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm bg-opacity-50 z-40 lg:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          ${
            isMobile
              ? `fixed left-0 top-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out ${
                  sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : `${
                  isCollapsed ? "w-20" : "w-64"
                } transition-all duration-300 ease-in-out`
          }
          bg-white shadow-lg flex flex-col
        `}
      >
        <SidebarHeader
          isCollapsed={!isMobile && isCollapsed}
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
        />

        <div className="p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg py-2.5 px-4 flex items-center justify-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            {(!isCollapsed || isMobile) && (
              <span className="font-medium">Add New</span>
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
                if (isMobile) setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeItem === item.name ? "bg-blue-200" : "hover:bg-blue-50"
              } `}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {(!isCollapsed || isMobile) && (
                <span className="font-medium">{item.name}</span>
              )}
            </button>
          ))}

          {/* Add new Project */}
          <div className="pt-4">
            <button
              onClick={() => {
                if (isCollapsed && !isMobile) {
                  setActiveItem("Projects");
                } else {
                  setIsProjectsOpen(!isProjectsOpen);
                }
              }}
              className={`w-full flex items-center justify-between cursor-pointer px-3 py-2.5 rounded-lg text-left transition-colors ${
                activeItem === "Projects"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                {(!isCollapsed || isMobile) && (
                  <Workflow className="flex-shrink-0" />
                )}
                {(!isCollapsed || isMobile) && (
                  <span className="font-medium">Projects</span>
                )}
                {isCollapsed && !isMobile && <Workflow />}
              </div>
              {(!isCollapsed || isMobile) && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform flex-shrink-0 ${
                    isProjectsOpen ? "" : "rotate-180"
                  }`}
                />
              )}
            </button>

            {/* Project List - only show when sidebar is expanded and projects are open */}
            {(!isCollapsed || isMobile) && isProjectsOpen && (
              <div className="ml-8 mt-2 space-y-1">
                {projects.map((project) => (
                  <button
                    key={project}
                    onClick={() => {
                      setActiveItem(project);
                      if (isMobile) setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeItem === project
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <Folder size={16} className="flex-shrink-0" />
                    <span className="truncate">{project}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* All Projects Sections - Collapsible */}
        </nav>

        {/* Help Section */}
        <div
          className={`p-4 border-t border-gray-200 flex ${
            isCollapsed && !isMobile ? "justify-center" : "justify-between"
          } items-center`}
        >
          <button
            className={`${
              isCollapsed && !isMobile ? "ml-0" : "ml-6"
            } flex justify-center items-center cursor-pointer`}
          >
            <Settings className="w-5 h-5" />
          </button>
          {(!isCollapsed || isMobile) && (
            <button className="mr-6 font-medium cursor-pointer">Help</button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col min-w-0">
        <Header
          toggleSidebar={toggleSidebar}
          isCollapsed={isCollapsed}
          isMobile={isMobile}
        />
        <Outlet />
      </section>
    </div>
  );
}
