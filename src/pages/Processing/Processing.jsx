import './Processing.css';
import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { HiDocumentText, HiArrowPath, HiCheckCircle, HiChevronRight } from "react-icons/hi2";

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
    return (<div className="p-8 flex flex-col gap-6 overflow-auto max-w-3xl mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-[#1a1f36]">Application Processing</h1>
        <p className="text-[#8792a2] text-sm mt-1">Analyzing application bundle via multi-stage AI verification.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="stripe-card p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#f7f9fc] border border-[#e3e8ee] rounded-xl flex items-center justify-center shrink-0">
              <HiDocumentText size={24} className="text-[#635BFF]"/>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1a1f36]">APP-2026-1021</h2>
              <p className="text-sm text-[#8792a2] mt-0.5">Applicant: Ramesh Kumar Gupta • 5 Documents</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#635BFF] bg-[#f7f9fc] border border-[#e3e8ee] rounded-lg px-4 py-2">
            <HiArrowPath size={16} className="animate-spin"/>
            In Progress
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm font-medium text-[#1a1f36] mb-2">
            <span>Overall Progress</span>
            <span className="text-[#635BFF]">50% (3 / 6 steps)</span>
          </div>
          <div className="h-2 bg-[#f7f9fc] rounded-full overflow-hidden shadow-inner">
            <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-[#635BFF] rounded-full relative">
              <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full"/>
            </motion.div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (<motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={step.id} className="flex gap-5">
              {/* Line + Dot */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 z-10 text-sm font-bold shadow-sm transition-colors
                  ${step.status === "done" ? "bg-[#10b981] border-[#10b981] text-white"
                : step.status === "active" ? "bg-[#635BFF] border-[#635BFF] text-white ring-4 ring-blue-500/20"
                    : "bg-white border-[#e3e8ee] text-[#8792a2]"}`}>
                  {step.status === "done" ? <HiCheckCircle size={16}/> : step.id}
                </div>
                {i < steps.length - 1 && (<div className={`w-0.5 flex-1 my-1.5 rounded-full ${step.status === "done" ? "bg-[#10b981]" : "bg-[#e3e8ee]"}`}/>)}
              </div>
              {/* Content */}
              <div className={`pb-8 flex-1 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <div className="flex items-center justify-between">
                  <p className={`text-base font-semibold ${step.status === "pending" ? "text-[#8792a2]" : "text-[#1a1f36]"}`}>
                    {step.label}
                  </p>
                  {step.time !== "—" && <span className="text-sm text-[#8792a2] font-mono bg-[#f7f9fc] px-2 py-0.5 rounded-md border border-[#e3e8ee]">{step.time}s</span>}
                </div>
                <p className="text-sm text-[#8792a2] mt-1">{step.desc}</p>
                {step.status === "active" && (<div className="mt-3 h-2 bg-[#f7f9fc] rounded-full overflow-hidden w-64 max-w-full">
                    <div className="h-full bg-[#635BFF] rounded-full animate-[pulse_1.5s_infinite] w-[60%]"/>
                  </div>)}
              </div>
            </motion.div>))}
        </div>

        <div className="mt-6 pt-6 border-t border-[#e3e8ee] flex flex-col sm:flex-row gap-3">
          <button onClick={() => navigate("/analysis")} className="stripe-button-primary flex items-center justify-center gap-2 sm:flex-1">
            View Live Analysis <HiChevronRight size={16}/>
          </button>
          <button className="stripe-button-secondary sm:w-auto">
            Cancel Processing
          </button>
        </div>
      </motion.div>

      <div className="stripe-card p-6">
        <h3 className="text-sm font-semibold text-[#1a1f36] mb-4">OCR Extracted Fields</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Application ID", "APP-2026-1021"],
            ["Applicant", "Ramesh Kumar Gupta"],
            ["Loan Type", "Mortgage"],
            ["Declared Income", "₹ 15,40,000"],
            ["Property Value", "₹ 50,00,000"],
            ["Submission Date", "05-Aug-2026"],
            ["Documents", "5 Files Parsed"],
            ["Status", "Cross-Checking"],
        ].map(([label, value]) => (<div key={label} className="bg-[#f7f9fc] border border-[#e3e8ee] rounded-lg p-3">
              <p className="text-xs text-[#8792a2]">{label}</p>
              <p className="text-sm font-medium text-[#1a1f36] mt-0.5">{value}</p>
            </div>))}
        </div>
      </div>
    </div>);
};
