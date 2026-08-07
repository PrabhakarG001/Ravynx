import React, { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { Logo } from "../Logo";
export const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // We map the route pathname to a generic title (or pass context)
    // For simplicity, we just use a generic title or extract it from location
    return (<div className="flex h-screen w-full bg-background overflow-hidden font-[Inter,sans-serif]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        <main className="flex-1 overflow-auto flex flex-col relative z-0 bg-[#f7f9fc]">
          <Outlet />
        </main>
      </div>
    </div>);
};
