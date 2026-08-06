import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FileText, Loader, CheckCircle, ChevronRight } from "lucide-react";

export const Processing = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, label: "Application Received", desc: "Applicant details and document bundle stored", status: "done", time: "00:00" },
    { id: 2, label: "Multi-Document OCR", desc: "Text extraction across all submitted files", status: "done", time: "00:18" },
    { id: 3, label: "Entity Extraction & Mapping", desc: "Parsing names, financials, and asset details", status: "done", time: "00:35" },
    { id: 4, label: "Cross-Document Reconciliation", desc: "Matching data between statements and deeds", status: "active", time: "—" },
    { id: 5, label: "Fraud & Risk Assessment", desc: "AI scoring and anomaly detection", status: "pending", time: "—" },
    { id: 6, label: "Case Report Generation", desc: "Comprehensive summary and underwriter recommendation", status: "pending", time: "—" },
  ];

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 overflow-auto max-w-3xl mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground">Application Processing</h1>
        <p className="text-muted-foreground text-sm mt-1">Analyzing application bundle via multi-stage AI verification.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
              <FileText size={24} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">APP-2026-1021</h2>
              <p className="text-sm text-muted-foreground mt-0.5">Applicant: Ramesh Kumar Gupta • 5 Documents</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2">
            <Loader size={16} className="animate-spin" />
            In Progress
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm font-medium text-foreground mb-2">
            <span>Overall Progress</span>
            <span className="text-blue-600">50% (3 / 6 steps)</span>
          </div>
          <div className="h-2.5 bg-secondary rounded-full overflow-hidden shadow-inner">
            <motion.div 
              initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-blue-600 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 relative"
            >
              <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full" />
            </motion.div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={step.id} className="flex gap-5">
              {/* Line + Dot */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 z-10 text-sm font-bold shadow-sm transition-colors
                  ${step.status === "done" ? "bg-emerald-500 border-emerald-500 text-white"
                    : step.status === "active" ? "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-600/20"
                    : "bg-background border-border text-muted-foreground"}`}>
                  {step.status === "done" ? <CheckCircle size={16} /> : step.id}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-0.5 flex-1 my-1.5 rounded-full ${step.status === "done" ? "bg-emerald-500" : "bg-border"}`} />
                )}
              </div>
              {/* Content */}
              <div className={`pb-8 flex-1 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <div className="flex items-center justify-between">
                  <p className={`text-base font-semibold ${step.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                    {step.label}
                  </p>
                  {step.time !== "—" && <span className="text-sm text-muted-foreground font-mono bg-secondary/50 px-2 py-0.5 rounded-md">{step.time}s</span>}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                {step.status === "active" && (
                  <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden w-64 max-w-full">
                    <div className="h-full bg-blue-600 rounded-full animate-[pulse_1.5s_infinite] w-[60%]" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/analysis")}
            className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center gap-2 sm:flex-1"
          >
            View Live Analysis <ChevronRight size={16} />
          </button>
          <button className="border border-border text-foreground font-medium text-sm px-6 py-2.5 rounded-xl hover:bg-secondary transition-colors sm:w-auto">
            Cancel Processing
          </button>
        </div>
      </motion.div>

      <div className="bg-card border border-border rounded shadow-sm p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">OCR Extracted Fields</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["Application ID", "APP-2026-1021"],
            ["Applicant", "Ramesh Kumar Gupta"],
            ["Loan Type", "Mortgage"],
            ["Declared Income", "₹ 15,40,000"],
            ["Property Value", "₹ 50,00,000"],
            ["Submission Date", "05-Aug-2026"],
            ["Documents", "5 Files Parsed"],
            ["Status", "Cross-Checking"],
          ].map(([label, value]) => (
            <div key={label} className="bg-secondary rounded p-2.5">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-xs font-medium text-foreground mt-0.5">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
