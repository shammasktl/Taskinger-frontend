import React, { useState } from "react";
import {
  Plus,
  BarChart3,
  LayoutDashboard,
  Calendar,
  Inbox,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Header from "./Header";
import SidebarHeader from "./SidebarHeader";

// Content Component
const Content = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Dashboard Content
        </h2>
        <p className="text-gray-600">
          Your main content will go here. The sidebar is fully collapsible!
        </p>
      </div>
    </main>
  );
};

// Main Sidebar Component
export default function SidebarNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isProjectsOpen, setIsProjectsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "Calendar", icon: Calendar },
    { name: "Inbox", icon: Inbox },
  ];

  const projects = [
    "Ecommerce Project",
    "Arduino Waste Cleaner",
    "Social Service",
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col`}
      >
        <SidebarHeader />

        <div className="p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg py-2.5 px-4 flex items-center justify-center space-x-2 transition-colors">
            <Plus className="w-4 h-4" />
            {!isCollapsed && <span className="font-medium">Add New</span>}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center gap-4 space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeItem === item.name ? "bg-blue-200" : "hover:bg-blue-50"
              } `}
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </button>
          ))}

          {/* Add new Project */}

          <div className="border-t border-gray-200 my-2" />
          <button
            onClick={() => setActiveItem("All Projects")}
            className={`w-full flex items-center gap-4 space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
              activeItem === "Add Project" ? "bg-blue-200" : "hover:bg-blue-50"
            } `}
          >
            <Plus className="w-5 h-5" />
            {!isCollapsed && <span className="font-medium">Add Project</span>}
          </button>
          <div className="border-t border-gray-200 my-2" />

          {/* All Projects Sections - Collapsible */}
          <div className="pt-4">
            <button
              onClick={() => {
                if (isCollapsed) {
                  setActiveItem("Add Project");
                } else {
                  setIsProjectsOpen(!isProjectsOpen);
                }
              }}
              className={`w-full flex items-center justify-between cursor-pointer px-3 py-2.5 rounded-lg text-left transition-colors ${
                activeItem === "Add Project"
                  ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center space-x-3">
                {!isCollapsed && ( <ChevronRight /> )}
                {!isCollapsed && <span className="font-medium">Project</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isProjectsOpen ? "" : "rotate-180"
                  }`}
                />
              )}
            </button>

            {/* Project List - only show when sidebar is expanded and projects are open */}
            {!isCollapsed && isProjectsOpen && (
              <div className="ml-8 mt-2 space-y-1">
                {projects.map((project) => (
                  <button
                    key={project}
                    onClick={() => setActiveItem(project)}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded transition-colors cursor-pointer ${
                      activeItem === project
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {project}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Help Section */}
        <div className={`p-4 border-t border-gray-200 flex ${isCollapsed ? "justify-center" : 'justify-between'} items-center`}>
          <button className="ml-6 flex justify-center items-center">
            <Settings />
          </button>
          {!isCollapsed && (
            <button className="mr-6 font-medium">Help</button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
        <Content />
      </section>
    </div>
  );
}
