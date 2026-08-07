import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Badge } from "../components/common/Badge";
import { HiXCircle, HiExclamationTriangle, HiCheckCircle, HiDocumentCheck } from "react-icons/hi2";
export const Analysis = () => {
    const navigate = useNavigate();
    const checks = [
        { label: "Cross-Document Entity Match", result: "Mismatch detected", status: "danger", detail: "Applicant name 'Ramesh Kumar' in GST Certificate differs from 'Ramesh Kumar Gupta' in Sale Deed." },
        { label: "Financial Reconciliation", result: "Anomaly flagged", status: "danger", detail: "Declared GST revenue (₹1.2Cr) does not match Bank Statement deposits (₹45L)." },
        { label: "Metadata Integrity Check", result: "Tampering detected", status: "danger", detail: "Bank Statement PDF shows signs of layer editing (Photoshop metadata)." },
        { label: "Survey Number Validation", result: "Passed", status: "success", detail: "Survey number on Sale Deed matches government Land Records API." },
        { label: "Signature Verification", result: "Passed", status: "success", detail: "Digital signatures of registrar on Sale Deed verified successfully." },
        { label: "Income Validation", result: "Passed", status: "success", detail: "Tax returns align with Bank Statement historical averages." },
    ];
    return (<div className="p-6 md:p-8 flex flex-col gap-6 overflow-auto max-w-6xl mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground">Application Analysis</h1>
        <p className="text-muted-foreground text-sm mt-1">Detailed AI cross-document fraud analysis for APP-2026-1021.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Score */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-card border border-border rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600"/>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 font-semibold">Risk Score</p>
          <div className="relative w-40 h-40 mb-6 drop-shadow-md">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="12"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray={`${86 * 2.64} ${264 - 86 * 2.64}`} strokeLinecap="round" className="animate-[stroke_1.5s_ease-out_forwards]"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-red-600 tracking-tight">86</span>
              <span className="text-sm font-medium text-muted-foreground">/100</span>
            </div>
          </div>
          <Badge status="high"/>
          <p className="text-sm text-foreground mt-4 font-semibold">High Risk — Officer Review Required</p>
          <p className="text-xs text-muted-foreground mt-1">Confidence: 97%</p>
        </motion.div>

        {/* AI Explanation */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="lg:col-span-2 bg-card border border-border rounded-2xl shadow-sm p-8">
          <h3 className="text-base font-semibold text-foreground mb-4">AI Explanation</h3>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6 shadow-sm">
            <div className="flex gap-2.5 mb-3">
              <HiExclamationTriangle size={18} className="text-red-600 shrink-0 mt-0.5"/>
              <p className="text-sm font-bold text-red-700">High-Risk Determination</p>
            </div>
            <p className="text-sm text-red-800 leading-relaxed font-medium">
              This application presents three critical cross-document anomalies: (1) Entity names do not perfectly match across
              the GST Certificate and Sale Deed, indicating possible misrepresentation. (2) There is a severe discrepancy between
              reported GST revenue and actual banking deposits. (3) The submitted Bank Statement PDF contains metadata traces
              from Adobe Photoshop, strongly suggesting fabrication. Manual verification and applicant interview is advised.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
            ["Issues Found", "3", "text-red-600", "bg-red-50"],
            ["Checks Passed", "3", "text-emerald-600", "bg-emerald-50"],
            ["Confidence", "97%", "text-blue-600", "bg-blue-50"],
            ["Processing", "2.4s", "text-foreground", "bg-secondary"],
        ].map(([label, val, cls, bg]) => (<div key={label} className={`${bg} border border-border/50 rounded-xl p-4 shadow-sm`}>
                <p className="text-xs font-semibold text-muted-foreground mb-2">{label}</p>
                <p className={`text-2xl font-bold ${cls} leading-none`}>{val}</p>
              </div>))}
          </div>
        </motion.div>
      </div>

      {/* Checks table */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <h3 className="text-base font-semibold text-foreground mb-6">Verification Checks</h3>
        <div className="flex flex-col gap-4">
          {checks.map((check, i) => (<motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.05) }} key={check.label} className={`border rounded-xl p-5 shadow-sm transition-colors hover:shadow-md ${check.status === "danger" ? "border-red-200 bg-red-50"
                : check.status === "warning" ? "border-yellow-200 bg-yellow-50"
                    : "border-emerald-200 bg-emerald-50"}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                  {check.status === "danger" ? <HiXCircle size={18} className="text-red-600 shrink-0"/>
                : check.status === "warning" ? <HiExclamationTriangle size={18} className="text-yellow-600 shrink-0"/>
                    : <HiCheckCircle size={18} className="text-emerald-600 shrink-0"/>}
                  <span className="text-sm font-bold text-foreground">{check.label}</span>
                </div>
                <Badge status={check.status}/>
              </div>
              <p className="text-sm font-medium text-muted-foreground sm:ml-8 leading-relaxed"><span className="text-foreground">{check.result}</span> — {check.detail}</p>
            </motion.div>))}
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate("/report")} className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center gap-2 sm:flex-1">
            Generate Detailed Report <HiDocumentCheck size={16}/>
          </button>
          <button onClick={() => navigate("/viewer")} className="border border-border text-foreground font-medium text-sm px-6 py-2.5 rounded-xl hover:bg-secondary transition-colors sm:w-auto">
            View Document Bundle
          </button>
        </div>
      </motion.div>
    </div>);
};
