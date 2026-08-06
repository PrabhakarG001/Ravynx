import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard, FileText, Upload, Cpu, BarChart2, ClipboardList,
  FileCheck, Shield, LogOut, Building2, X
} from "lucide-react";

const navItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { path: "/upload", icon: Upload, label: "New Application" },
  { path: "/processing", icon: Cpu, label: "Processing" },
  { path: "/analysis", icon: Shield, label: "Analysis" },
  { path: "/viewer", icon: FileText, label: "Application Files" },
  { path: "/analytics", icon: BarChart2, label: "Analytics" },
  { path: "/audit", icon: ClipboardList, label: "Audit Logs" },
  { path: "/report", icon: FileCheck, label: "Report" },
];

export const Sidebar = ({
  open, setOpen,
}: {
  open: boolean; setOpen: (v: boolean) => void;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 md:hidden" onClick={() => setOpen(false)} />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-30 transition-transform duration-300 shadow-xl md:shadow-none
          ${open ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex md:shrink-0`}
      >
        {/* Brand */}
        <div className="px-6 py-6 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Building2 size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sidebar-foreground font-bold text-sm tracking-wide leading-none">Ravynx</p>
              <p className="text-sidebar-foreground/60 text-[10px] mt-1 font-semibold uppercase tracking-wider">Platform</p>
            </div>
          </div>
          <button className="md:hidden text-sidebar-foreground/70 hover:text-sidebar-foreground" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 px-3 overflow-y-auto flex flex-col gap-1">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = currentPath === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left relative group
                  ${isActive
                    ? "bg-blue-600/10 text-blue-600 font-semibold"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground font-medium"
                  }`}
              >
                {isActive && (
                  <motion.div layoutId="activeNav" className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full" />
                )}
                <Icon size={18} className={isActive ? "text-blue-600" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground"} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-sidebar-border bg-sidebar-accent/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
              AS
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sidebar-foreground text-sm font-semibold truncate">Admin User</p>
              <p className="text-sidebar-foreground/60 text-xs truncate">admin@example.com</p>
            </div>
          </div>
          <button 
            onClick={() => navigate("/login")}
            className="w-full flex items-center gap-2 text-sidebar-foreground/60 hover:text-red-500 hover:bg-red-500/10 px-3 py-2 rounded-lg text-sm transition-colors font-medium"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};
