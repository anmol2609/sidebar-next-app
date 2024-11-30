"use client"
import React from "react";
import Sidebar from "./SidebarL1";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen p-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {children}
      </main>
    </div>
  );
};

export default Layout;
