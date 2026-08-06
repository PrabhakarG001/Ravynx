import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, XCircle, AlertTriangle, CheckCircle } from "lucide-react";
import { Badge } from "../components/common/Badge";

export const Viewer = () => {
  const issues = [
    { line: 3, field: "Seller Name", found: "Ramesh Kumar Gupta", expected: "Ram Kumar Gupta", severity: "high" },
    { line: 7, field: "Survey Number", found: "472/B (disputed)", expected: "472/B (clear title)", severity: "medium" },
    { line: 12, field: "PDF Metadata Date", found: "2026-08-05", expected: "≤ 2026-07-22", severity: "high" },
    { line: 15, field: "Stamp Duty Amount", found: "₹3,40,000", expected: "₹4,20,000 (est.)", severity: "medium" },
  ];

  const docLines = [
    "SALE DEED",
    "This deed of sale is executed on 22nd day of July 2026 at New Delhi.",
    "Between: Ramesh Kumar Gupta, S/o Mohan Lal Gupta, residing at 14-B, Vasant Kunj, New Delhi — 110070",
    "hereinafter referred to as the SELLER of the FIRST PART;",
    "AND",
    "Suresh Lal Verma, S/o Hari Shankar Verma, residing at 7, Patel Nagar, New Delhi — 110008",
    "hereinafter referred to as the BUYER of the SECOND PART;",
    "Plot bearing Survey No. 472/B, situated in Hauz Khas, South Delhi, measuring 420 sq. mt.",
    "The SELLER being the absolute owner of the said property has agreed to sell the same to",
    "the BUYER for a total consideration of ₹ 68,00,000 (Rupees Sixty-Eight Lakhs Only).",
    "Stamp Duty paid: ₹ 3,40,000 vide challan no. DELHI/2026/SD/40821.",
    "Registered at Sub-Registrar Office, Hauz Khas, South Delhi.",
  ];

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 overflow-auto max-w-7xl mx-auto w-full h-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground">Document Viewer</h1>
        <p className="text-muted-foreground text-sm mt-1">Review extracted text and identified anomalies directly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Document */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="lg:col-span-2 bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 flex flex-col h-[calc(100vh-14rem)]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-blue-600" />
              <h3 className="text-base font-bold text-foreground">DEED-2026-0821.pdf</h3>
            </div>
            <div className="flex gap-2">
              <button className="border border-border font-medium text-sm px-4 py-2 rounded-xl hover:bg-secondary flex items-center gap-2 text-foreground transition-colors shadow-sm">
                <Download size={14} /> Download PDF
              </button>
            </div>
          </div>
          <div className="bg-white border border-border rounded-xl p-8 font-mono text-sm leading-8 flex-1 overflow-auto shadow-inner text-slate-800 selection:bg-blue-200">
            {docLines.map((line, i) => {
              const isHighlighted = issues.some(iss => iss.line === i + 1);
              const severity = issues.find(iss => iss.line === i + 1)?.severity;
              return (
                <div
                  key={i}
                  className={`px-3 py-0.5 rounded-lg transition-colors ${isHighlighted
                    ? severity === "high" ? "bg-red-50 border-l-4 border-red-500 shadow-sm"
                    : "bg-amber-50 border-l-4 border-amber-500 shadow-sm"
                    : "hover:bg-slate-50"}`}
                >
                  <span className="text-slate-400 select-none mr-4 text-right inline-block w-6 text-xs">{i + 1}</span>
                  {line}
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex gap-6 text-sm font-medium text-muted-foreground bg-secondary/50 p-4 rounded-xl">
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center border border-red-200"><span className="w-2 h-2 rounded-full bg-red-500" /></span> High severity mismatch</span>
            <span className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200"><span className="w-2 h-2 rounded-full bg-amber-500" /></span> Medium severity issue</span>
          </div>
        </motion.div>

        {/* Issues */}
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-8 flex flex-col h-[calc(100vh-14rem)]">
          <h3 className="text-base font-bold text-foreground mb-6">Flagged Issues ({issues.length})</h3>
          <div className="flex flex-col gap-4 flex-1 overflow-auto pr-2">
            {issues.map(issue => (
              <div key={issue.field} className={`border rounded-xl p-4 shadow-sm transition-transform hover:-translate-y-1 ${issue.severity === "high" ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-foreground">Line {issue.line} — {issue.field}</span>
                  <Badge status={issue.severity} />
                </div>
                <div className="text-sm space-y-2 bg-white/60 p-3 rounded-lg">
                  <p className="flex justify-between items-center border-b border-border/50 pb-2"><span className="text-muted-foreground font-medium">Found: </span><span className="text-red-700 font-bold">{issue.found}</span></p>
                  <p className="flex justify-between items-center pt-1"><span className="text-muted-foreground font-medium">Expected: </span><span className="text-emerald-700 font-bold">{issue.expected}</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm font-semibold text-foreground mb-4">Officer Decision</p>
            <div className="flex flex-col gap-3">
              <button className="w-full bg-red-600 text-white text-sm font-bold py-3 rounded-xl hover:bg-red-700 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <XCircle size={18} /> Reject Document
              </button>
              <button className="w-full bg-amber-500 text-white text-sm font-bold py-3 rounded-xl hover:bg-amber-600 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <AlertTriangle size={18} /> Send for Review
              </button>
              <button className="w-full border-2 border-border text-foreground font-bold text-sm py-3 rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                <CheckCircle size={18} /> Clear & Approve
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
