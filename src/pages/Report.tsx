import React from "react";
import { motion } from "framer-motion";
import { Building2, Download, RefreshCw, FileText, Cpu, XCircle, AlertTriangle, CheckCircle } from "lucide-react";

export const Report = () => (
  <div className="p-6 md:p-8 flex flex-col gap-6 overflow-auto max-w-5xl mx-auto w-full">
    {/* Header */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8">
      <div className="flex items-start justify-between flex-wrap gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Building2 size={16} className="text-white" />
            </div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Ravynx</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Fraud Analysis Report</h2>
          <p className="text-sm font-medium text-muted-foreground mt-2">Application: <span className="font-mono text-blue-600">APP-2026-1021</span> • Generated: 05 Aug 2026, 15:04</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2">
            <Download size={16} /> Download PDF
          </button>
          <button className="border-2 border-border text-foreground font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-secondary flex items-center gap-2 transition-colors">
            <RefreshCw size={16} /> Regenerate
          </button>
        </div>
      </div>
    </motion.div>

    {/* Summary */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {[
        ["Risk Score", "86 / 100", "text-red-600", "bg-red-50", "border-red-200"],
        ["Risk Level", "High", "text-red-600", "bg-red-50", "border-red-200"],
        ["Confidence", "97%", "text-blue-600", "bg-blue-50", "border-blue-200"],
        ["Decision", "Reject", "text-red-600", "bg-red-50", "border-red-200"],
      ].map(([label, val, textCls, bgCls, borderCls]) => (
        <div key={label} className={`bg-card border ${borderCls} ${bgCls} rounded-2xl p-6 shadow-sm text-center transition-transform hover:-translate-y-1`}>
          <p className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">{label}</p>
          <p className={`text-2xl font-black ${textCls}`}>{val}</p>
        </div>
      ))}
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Document Details */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8">
        <h3 className="text-base font-bold text-foreground mb-4 border-b border-border pb-3 flex items-center gap-2"><FileText size={18} className="text-blue-600"/> Application Information</h3>
        <div className="flex flex-col gap-4">
          {[
            ["Application ID", "APP-2026-1021", true],
            ["Applicant Name", "Ramesh Kumar Gupta", false],
            ["Loan Type", "Mortgage", false],
            ["Submitted By", "analyst.priya@example.com", false],
            ["Documents Analyzed", "5 Files", true],
            ["Branch", "South Delhi — Hauz Khas", false],
          ].map(([label, val, mono]) => (
            <div key={label as string} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0 last:pb-0">
              <span className="text-sm font-medium text-muted-foreground">{label}</span>
              <span className={`text-sm font-bold text-foreground ${mono ? 'font-mono' : ''}`}>{val}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-foreground mb-4 border-b border-border pb-3 flex items-center gap-2"><Cpu size={18} className="text-purple-600"/> AI Insights & Recommendation</h3>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-5 shadow-sm">
            <p className="text-sm text-red-800 font-black mb-3 flex items-center gap-2"><XCircle size={18}/> REJECT — Do Not Process Loan</p>
            <p className="text-sm text-red-800 leading-relaxed font-medium">
              This application exhibits multiple cross-document fraud indicators with 97% model confidence. The combination of an entity
              name mismatch (Sale Deed vs GST) and severe financial inconsistencies (GST revenue vs Bank Deposits) is consistent
              with a class of forged loan applications. Furthermore, the Bank Statement exhibits metadata tampering. It is
              strongly recommended that the application be rejected and the case escalated to the Fraud Monitoring Unit.
            </p>
          </div>
        </div>
        <div className="text-xs text-muted-foreground bg-secondary/50 p-3 rounded-lg border border-border/50">
          <p className="font-medium">Report generated by Ravynx v3.2.1 • Model accuracy: 97.3%</p>
          <p className="mt-1 opacity-75">Internal use only. Must be reviewed by an authorised officer.</p>
        </div>
      </motion.div>
    </div>

    {/* Findings */}
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 mb-8">
      <h3 className="text-base font-bold text-foreground mb-6 border-b border-border pb-3 flex items-center gap-2"><AlertTriangle size={18} className="text-amber-500"/> Key Findings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { sev: "danger", title: "Cross-Document Entity Mismatch", desc: "Applicant name 'Ramesh Kumar' in GST Certificate differs from 'Ramesh Kumar Gupta' in Sale Deed." },
          { sev: "danger", title: "Financial Reconciliation Failure", desc: "Declared GST revenue (₹1.2Cr) does not match Bank Statement deposits (₹45L)." },
          { sev: "danger", title: "Metadata Tampering (Bank Statement)", desc: "Bank Statement PDF shows signs of layer editing via Adobe Photoshop metadata." },
          { sev: "success", title: "Survey Number Validation", desc: "Survey number on Sale Deed matches government Land Records API." },
          { sev: "success", title: "Registrar Signature Valid", desc: "Digital signature of Sub-Registrar on Sale Deed verified against government store." },
          { sev: "success", title: "No Prior Encumbrance", desc: "No mortgage, lien, or court order found against the property in our records." },
        ].map((item, i) => (
          <div key={item.title} className={`flex gap-4 rounded-xl p-5 border shadow-sm transition-transform hover:-translate-y-1 ${
            item.sev === "danger" ? "bg-red-50 border-red-200"
            : item.sev === "warning" ? "bg-amber-50 border-amber-200"
            : "bg-emerald-50 border-emerald-200"
          }`}>
            {item.sev === "danger" ? <XCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
              : item.sev === "warning" ? <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              : <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-0.5" />}
            <div>
              <p className="text-sm font-bold text-foreground mb-1">{item.title}</p>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);
