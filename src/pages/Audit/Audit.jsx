import './Audit.css';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMagnifyingGlass, HiFunnel, HiArrowDownTray, HiOutlineDocumentText } from "react-icons/hi2";
import { Badge } from "../../components/common/Badge";
import { auditLogs } from "../../utils/mockData";

export const Audit = () => {
    const [search, setSearch] = useState("");
    const filtered = auditLogs.filter(l => 
        l.doc.toLowerCase().includes(search.toLowerCase()) ||
        l.user.toLowerCase().includes(search.toLowerCase()) ||
        l.action.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
      <div className="p-8 md:p-12 flex flex-col gap-8 overflow-auto max-w-[1200px] mx-auto w-full font-[Inter,sans-serif]">
        <div className="mb-2">
          <h1 className="text-[24px] font-bold text-[#1a1f36]">Audit Logs</h1>
          <p className="text-[14px] font-medium text-gray-500 mt-1">Immutable record of all system activities and user interactions.</p>
        </div>
  
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className="bg-white border border-[#e3e8ee] rounded-2xl shadow-sm overflow-hidden flex flex-col flex-1"
        >
          <div className="p-6 md:p-8 border-b border-[#e3e8ee] bg-gray-50/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-[16px] font-bold text-[#1a1f36] flex items-center gap-2">
                <HiOutlineDocumentText className="w-5 h-5 text-gray-400" />
                System Activity Log
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative group">
                  <HiMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#0066cc] transition-colors"/>
                  <input 
                    type="text" 
                    placeholder="Search records..." 
                    value={search} 
                    onChange={e => setSearch(e.target.value)} 
                    className="text-[13px] font-medium text-[#1a1f36] border border-[#d1d5db] rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] bg-white w-full md:w-64 transition-all shadow-sm placeholder-gray-400"
                  />
                </div>
                <button className="bg-white border border-[#d1d5db] text-[#1a1f36] font-semibold text-[13px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                  <HiFunnel className="w-4 h-4 text-gray-500"/> Filter
                </button>
                <button className="bg-white border border-[#d1d5db] text-[#1a1f36] font-semibold text-[13px] px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                  <HiArrowDownTray className="w-4 h-4 text-gray-500"/> Export CSV
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-[#f7f9fc] border-b border-[#e3e8ee]">
                <tr>
                  {["Log ID", "Timestamp", "User", "Action", "Document", "Status"].map(h => (
                    <th key={h} className="py-3 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3e8ee]">
                {filtered.map(log => (
                  <tr key={log.id} className="hover:bg-[#f8faff] transition-colors group">
                    <td className="py-4 px-6">
                      <span className="font-mono text-[13px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 group-hover:bg-white">{log.id}</span>
                    </td>
                    <td className="py-4 px-6 text-[13px] font-medium text-[#1a1f36] whitespace-nowrap">{log.time}</td>
                    <td className="py-4 px-6 text-[13px] font-semibold text-[#1a1f36]">{log.user}</td>
                    <td className="py-4 px-6 text-[13px] text-gray-600 font-medium">{log.action}</td>
                    <td className="py-4 px-6">
                      {log.doc !== "—" ? (
                        <span className="font-mono text-[13px] font-semibold text-[#0066cc] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{log.doc}</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6"><Badge status={log.status}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-[#e3e8ee] bg-[#f7f9fc] flex items-center justify-between">
            <p className="text-[13px] font-medium text-gray-500">Showing <strong className="text-[#1a1f36]">{filtered.length}</strong> of {auditLogs.length} entries</p>
            <div className="flex gap-1.5">
              <button className="px-3 py-1.5 text-[13px] font-semibold text-gray-400 border border-transparent rounded hover:bg-gray-100 disabled:opacity-50" disabled>Previous</button>
              <button className="w-8 h-8 flex items-center justify-center text-[13px] bg-[#0066cc] text-white rounded font-bold shadow-sm">1</button>
              <button className="w-8 h-8 flex items-center justify-center text-[13px] font-semibold text-gray-600 hover:bg-gray-200 rounded transition-colors">2</button>
              <button className="px-3 py-1.5 text-[13px] font-semibold text-gray-600 hover:bg-gray-200 rounded transition-colors">Next</button>
            </div>
          </div>
        </motion.div>
  
        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.1 }} 
          className="bg-white border border-[#e3e8ee] rounded-2xl shadow-sm p-6 md:p-8 mt-4 mb-8"
        >
          <h3 className="text-[16px] font-bold text-[#1a1f36] mb-8">Activity Timeline — Aug 5, 2026</h3>
          <div className="flex flex-col pl-2">
            {auditLogs.slice(0, 5).map((log, i) => (
              <div key={log.id} className="flex gap-6 relative group">
                {/* Timeline connector line */}
                {i < 4 && <div className="absolute left-[7px] top-[14px] bottom-[-14px] w-[2px] bg-[#e3e8ee] group-hover:bg-[#0066cc] transition-colors" />}
                
                <div className="flex flex-col items-center z-10">
                  <div className={`w-4 h-4 rounded-full mt-1.5 shadow-sm border-[3px] border-white ${
                    log.status === "success" ? "bg-emerald-500" : 
                    log.status === "warning" ? "bg-amber-500" : "bg-red-500"
                  }`}/>
                </div>
                
                <div className="pb-8 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[13px] font-semibold text-[#1a1f36] bg-[#f7f9fc] border border-[#e3e8ee] px-2.5 py-1 rounded-md">{log.action}</span>
                    {log.doc !== "—" && (
                      <span className="font-mono text-[13px] font-semibold text-[#0066cc]">{log.doc}</span>
                    )}
                  </div>
                  <p className="text-[13px] font-medium text-gray-500 mt-2">
                    <span className="text-[#1a1f36] font-semibold">{log.user}</span> • <span className="font-mono bg-gray-50 px-1 py-0.5 rounded">{log.time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
};
