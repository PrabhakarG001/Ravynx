import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMagnifyingGlass, HiFunnel, HiArrowDownTray } from "react-icons/hi2";
import { Badge } from "../components/common/Badge";
import { auditLogs } from "../utils/mockData";
export const Audit = () => {
    const [search, setSearch] = useState("");
    const filtered = auditLogs.filter(l => l.doc.toLowerCase().includes(search.toLowerCase()) ||
        l.user.toLowerCase().includes(search.toLowerCase()) ||
        l.action.toLowerCase().includes(search.toLowerCase()));
    return (<div className="p-6 md:p-8 flex flex-col gap-6 overflow-auto max-w-[1600px] mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground">Audit Logs</h1>
        <p className="text-muted-foreground text-sm mt-1">Immutable record of all system activities and user interactions.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1">
        <div className="p-6 md:p-8 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-base font-semibold text-foreground">System Activity</h3>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <HiMagnifyingGlass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"/>
                <input type="text" placeholder="Search logs..." value={search} onChange={e => setSearch(e.target.value)} className="text-sm border border-border rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-background w-full sm:w-64 transition-shadow"/>
              </div>
              <button className="border border-border text-sm font-medium px-4 py-2 rounded-xl hover:bg-secondary flex items-center gap-2 text-foreground transition-colors shadow-sm">
                <HiFunnel size={14}/> Filter
              </button>
              <button className="border border-border text-sm font-medium px-4 py-2 rounded-xl hover:bg-secondary flex items-center gap-2 text-foreground transition-colors shadow-sm">
                <HiArrowDownTray size={14}/> Export CSV
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto flex-1 p-2">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {["Log ID", "Timestamp", "User", "Action", "Document", "Status"].map(h => (<th key={h} className="text-left py-4 px-4 text-muted-foreground font-semibold uppercase tracking-wider text-xs">{h}</th>))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(log => (<tr key={log.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-4 px-4 font-mono text-muted-foreground">{log.id}</td>
                  <td className="py-4 px-4 font-mono text-foreground whitespace-nowrap">{log.time}</td>
                  <td className="py-4 px-4 font-medium text-foreground">{log.user}</td>
                  <td className="py-4 px-4 text-foreground">{log.action}</td>
                  <td className="py-4 px-4 font-mono font-medium text-blue-600">{log.doc}</td>
                  <td className="py-4 px-4"><Badge status={log.status}/></td>
                </tr>))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border bg-secondary/30 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing {filtered.length} of {auditLogs.length} entries</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 text-sm text-muted-foreground border border-border rounded-md hover:bg-white disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md font-medium">1</button>
            <button className="px-3 py-1 text-sm text-muted-foreground border border-border rounded-md hover:bg-white">2</button>
            <button className="px-3 py-1 text-sm text-muted-foreground border border-border rounded-md hover:bg-white">Next</button>
          </div>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 mt-4">
        <h3 className="text-base font-semibold text-foreground mb-6">Activity Timeline — Aug 5, 2026</h3>
        <div className="flex flex-col">
          {auditLogs.slice(0, 5).map((log, i) => (<div key={log.id} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full shrink-0 mt-1 shadow-sm ring-4 ring-white ${log.status === "success" ? "bg-emerald-500"
                : log.status === "warning" ? "bg-amber-500" : "bg-red-500"}`}/>
                {i < 4 && <div className="w-0.5 flex-1 bg-border my-2 rounded-full"/>}
              </div>
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm font-semibold text-foreground bg-secondary/80 px-3 py-1 rounded-lg">{log.action}</span>
                  {log.doc !== "—" && <span className="text-sm font-mono text-blue-600 font-medium">{log.doc}</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{log.user} • <span className="font-mono">{log.time}</span></p>
              </div>
            </div>))}
        </div>
      </motion.div>
    </div>);
};
