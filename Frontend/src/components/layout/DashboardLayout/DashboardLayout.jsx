import './DashboardLayout.css';
import React, { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from '../Sidebar/Sidebar';
import { Logo } from '../../Logo/Logo';
export const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // We map the route pathname to a generic title (or pass context)
    // For simplicity, we just use a generic title or extract it from location
    return (
      <div className="dashboardlayout-cls-1">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
        <div className="dashboardlayout-cls-2">
          
          {/* Mobile Header (Only visible on md:hidden) */}
          <header className="dashboardlayout-cls-3">
            <div className="dashboardlayout-cls-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="dashboardlayout-cls-5"
              >
                <svg className="dashboardlayout-cls-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Logo className="dashboardlayout-cls-7" />
            </div>
          </header>

          <main className="dashboardlayout-cls-8">
            <Outlet />
          </main>
        </div>
      </div>
    );
};
