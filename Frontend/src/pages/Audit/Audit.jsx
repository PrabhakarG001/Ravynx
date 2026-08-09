import './Audit.css';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMagnifyingGlass, HiFunnel, HiArrowDownTray, HiOutlineDocumentText } from "react-icons/hi2";
import { Badge } from '../../components/common/Badge/Badge';
import { auditLogs } from "../../utils/mockData";

export const Audit = () => {
    const [search, setSearch] = useState("");
    const filtered = auditLogs.filter(l => 
        l.doc.toLowerCase().includes(search.toLowerCase()) ||
        l.user.toLowerCase().includes(search.toLowerCase()) ||
        l.action.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
      <div className="audit-cls-1">
        <div className="audit-cls-2">
          <h1 className="audit-cls-3">Audit Logs</h1>
          <p className="audit-cls-4">Immutable record of all system activities and user interactions.</p>
        </div>
  
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className="audit-cls-5"
        >
          <div className="audit-cls-6">
            <div className="audit-cls-7">
              <h3 className="audit-cls-8">
                <HiOutlineDocumentText className="audit-cls-9" />
                System Activity Log
              </h3>
              <div className="audit-cls-10">
                <div className="audit-cls-11">
                  <HiMagnifyingGlass className="audit-cls-12"/>
                  <input 
                    type="text" 
                    placeholder="Search records..." 
                    value={search} 
                    onChange={e => setSearch(e.target.value)} 
                    className="audit-cls-13"
                  />
                </div>
                <button className="audit-cls-14">
                  <HiFunnel className="audit-cls-15"/> Filter
                </button>
                <button className="audit-cls-16">
                  <HiArrowDownTray className="audit-cls-17"/> Export CSV
                </button>
              </div>
            </div>
          </div>
          <div className="audit-cls-18">
            <table className="audit-cls-19">
              <thead className="audit-cls-20">
                <tr>
                  {["Log ID", "Timestamp", "User", "Action", "Document", "Status"].map(h => (
                    <th key={h} className="audit-cls-21">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="audit-cls-22">
                {filtered.map(log => (
                  <tr key={log.id} className="audit-cls-23">
                    <td className="audit-cls-24">
                      <span className="audit-cls-25">{log.id}</span>
                    </td>
                    <td className="audit-cls-26">{log.time}</td>
                    <td className="audit-cls-27">{log.user}</td>
                    <td className="audit-cls-28">{log.action}</td>
                    <td className="audit-cls-29">
                      {log.doc !== "—" ? (
                        <span className="audit-cls-30">{log.doc}</span>
                      ) : (
                        <span className="audit-cls-31">—</span>
                      )}
                    </td>
                    <td className="audit-cls-32"><Badge status={log.status}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="audit-cls-33">
            <p className="audit-cls-34">Showing <strong className="audit-cls-35">{filtered.length}</strong> of {auditLogs.length} entries</p>
            <div className="audit-cls-36">
              <button className="audit-cls-37" disabled>Previous</button>
              <button className="audit-cls-38">1</button>
              <button className="audit-cls-39">2</button>
              <button className="audit-cls-40">Next</button>
            </div>
          </div>
        </motion.div>
  
        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.1 }} 
          className="audit-cls-41"
        >
          <h3 className="audit-cls-42">Activity Timeline — Aug 5, 2026</h3>
          <div className="audit-cls-43">
            {auditLogs.slice(0, 5).map((log, i) => (
              <div key={log.id} className="audit-cls-44">
                {/* Timeline connector line */}
                {i < 4 && <div className="audit-cls-45" />}
                
                <div className="audit-cls-46">
                  <div className={`w-4 h-4 rounded-full mt-1.5 shadow-sm border-[3px] border-white ${
                    log.status === "success" ? "bg-emerald-500" : 
                    log.status === "warning" ? "bg-amber-500" : "bg-red-500"
                  }`}/>
                </div>
                
                <div className="audit-cls-47">
                  <div className="audit-cls-48">
                    <span className="audit-cls-49">{log.action}</span>
                    {log.doc !== "—" && (
                      <span className="audit-cls-50">{log.doc}</span>
                    )}
                  </div>
                  <p className="audit-cls-51">
                    <span className="audit-cls-52">{log.user}</span> • <span className="audit-cls-53">{log.time}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
};
