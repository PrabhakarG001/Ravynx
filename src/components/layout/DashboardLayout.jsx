import React, { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { Logo } from "../Logo";
export const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // We map the route pathname to a generic title (or pass context)
    // For simplicity, we just use a generic title or extract it from location
    return (
      <div className="flex h-screen w-full bg-background overflow-hidden font-[Inter,sans-serif]">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
          
          {/* Mobile Header (Only visible on md:hidden) */}
          <header className="md:hidden flex items-center justify-between h-14 px-4 bg-white border-b border-[#e3e8ee] shrink-0">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 -ml-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Logo className="text-lg text-[#1a1f36]" />
            </div>
          </header>

          <main className="flex-1 overflow-auto flex flex-col relative z-0 bg-[#f7f9fc]">
            <Outlet />
          </main>
        </div>
      </div>
    );
};
