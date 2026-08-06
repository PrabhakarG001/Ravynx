import React from "react";
import { Search, Bell, Menu } from "lucide-react";

export const Navbar = ({ title, onMenu }: { title: string; onMenu: () => void }) => (
  <header className="bg-card border-b border-border px-5 py-3 flex items-center justify-between shrink-0">
    <div className="flex items-center gap-3">
      <button className="md:hidden text-muted-foreground" onClick={onMenu}>
        <Menu size={20} />
      </button>
      <h1 className="text-base font-semibold text-foreground">{title}</h1>
    </div>
    <div className="flex items-center gap-3">
      <div className="relative hidden sm:block">
        <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search documents..."
          className="text-xs border border-border rounded bg-background pl-8 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary w-44"
        />
      </div>
      <button className="relative p-1.5 text-muted-foreground hover:text-foreground">
        <Bell size={17} />
        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary" />
      </button>
    </div>
  </header>
);
