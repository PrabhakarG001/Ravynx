import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpTray as UploadIcon, HiCpuChip, HiDocumentText, HiXMark, HiCheckCircle } from "react-icons/hi2";
import { Badge } from "../components/common/Badge";
export const Upload = () => {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [docType, setDocType] = useState("Land Record");
    const [applicantName, setApplicantName] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanType, setLoanType] = useState("Mortgage");
    const inputRef = useRef(null);
    const docTypes = ["Land Record", "Sale Deed", "Financial Statement", "Bank Statement", "GST Certificate"];
    const handleFiles = (fl) => {
        if (!fl)
            return;
        const added = Array.from(fl).map(f => ({
            name: f.name,
            size: f.size,
            type: docType,
            status: "ready",
        }));
        setFiles(prev => [...prev, ...added]);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };
    const fmt = (bytes) => bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
    return (<div className="p-6 md:p-8 flex flex-col gap-6 overflow-auto max-w-4xl mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground">New Loan Application</h1>
        <p className="text-muted-foreground text-sm mt-1">Submit applicant details and supporting documents for AI verification.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-card border border-border rounded-2xl shadow-sm p-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-border pb-8">
          <div>
            <label className="text-sm font-semibold text-foreground block mb-1.5">Applicant Name</label>
            <input type="text" value={applicantName} onChange={e => setApplicantName(e.target.value)} placeholder="e.g. Ramesh Kumar" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-background transition-all"/>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground block mb-1.5">Loan Amount (₹)</label>
            <input type="text" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} placeholder="e.g. 50,00,000" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-background transition-all"/>
          </div>
          <div>
            <label className="text-sm font-semibold text-foreground block mb-1.5">Loan Type</label>
            <select value={loanType} onChange={e => setLoanType(e.target.value)} className="border border-border rounded-xl text-sm px-4 py-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full cursor-pointer transition-shadow">
              <option>Mortgage</option>
              <option>SME Business Loan</option>
              <option>Personal Loan</option>
              <option>Auto Loan</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-base font-semibold text-foreground mb-1">Select Document Type</h2>
            <p className="text-sm text-muted-foreground">Ensure the correct type is selected for accurate AI models.</p>
          </div>
          <select value={docType} onChange={e => setDocType(e.target.value)} className="border border-border rounded-xl text-sm px-4 py-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-64 cursor-pointer transition-shadow">
            {docTypes.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div className="border-2 border-dashed border-border rounded-2xl bg-secondary/30 p-12 text-center cursor-pointer hover:border-blue-500/50 hover:bg-blue-50/50 transition-all group" onClick={() => inputRef.current?.click()} onDrop={handleDrop} onDragOver={e => e.preventDefault()}>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
            <UploadIcon size={28} className="text-blue-500"/>
          </div>
          <p className="text-base font-semibold text-foreground">Drag & drop files here</p>
          <p className="text-sm text-muted-foreground mt-1.5">or click to browse from your computer</p>
          <p className="text-xs text-muted-foreground mt-4 opacity-70">Supported formats: PDF, TIFF, JPEG, PNG (max 25 MB)</p>
          <input ref={inputRef} type="file" multiple accept=".pdf,.tiff,.jpg,.jpeg,.png" className="hidden" onChange={e => handleFiles(e.target.files)}/>
        </div>
      </motion.div>

      <AnimatePresence>
        {files.length > 0 && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-card border border-border rounded-2xl shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <h3 className="text-base font-semibold text-foreground">Files Queued ({files.length})</h3>
              <button onClick={() => navigate("/processing")} className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <HiCpuChip size={16}/> Submit Application
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {files.map((f, i) => (<motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="flex items-center gap-4 border border-border rounded-xl p-3 bg-secondary/10 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <HiDocumentText size={18} className="text-blue-600"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{f.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{fmt(f.size)} • {f.type}</p>
                  </div>
                  <Badge status={f.status}/>
                  <button onClick={() => setFiles(prev => prev.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-red-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors ml-2">
                    <HiXMark size={16}/>
                  </button>
                </motion.div>))}
            </div>
          </motion.div>)}
      </AnimatePresence>

      {files.length === 0 && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 mt-2">
          <h3 className="text-sm font-semibold text-foreground mb-4">Accepted Document Types Guide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
                ["Land Record", "Khasra, Khatauni, Mutation entries"],
                ["Sale Deed", "Registered sale & purchase agreements"],
                ["Financial Statement", "Balance sheets, P&L, audit reports"],
                ["Bank Statement", "6–24 month account statements"],
                ["GST Certificate", "GSTIN registration and returns"],
            ].map(([type, desc]) => (<div key={type} className="flex gap-3 bg-secondary/30 p-3 rounded-xl border border-border/50">
                <HiCheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5"/>
                <div>
                  <p className="text-sm font-semibold text-foreground">{type}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>))}
          </div>
        </motion.div>)}
    </div>);
};
