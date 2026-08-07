import './Report.css';
import React from "react";
import { motion } from "framer-motion";
import { 
  HiBuildingOffice2, 
  HiArrowDownTray, 
  HiArrowPath, 
  HiDocumentText, 
  HiCpuChip, 
  HiXCircle, 
  HiExclamationTriangle, 
  HiCheckCircle,
  HiShieldExclamation,
  HiShieldCheck,
  HiChartBar
} from "react-icons/hi2";

export const Report = () => (
  <div className="p-8 md:p-12 flex flex-col gap-8 overflow-auto max-w-[1200px] mx-auto w-full font-[Inter,sans-serif]">
    
    {/* Header */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4 }} 
      className="bg-white border border-[#e3e8ee] rounded-2xl shadow-sm p-8"
    >
      <div className="flex items-start justify-between flex-wrap gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <HiBuildingOffice2 className="w-4 h-4 text-blue-600"/>
            </div>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Ravynx Intelligence</span>
          </div>
          <h2 className="text-[24px] font-bold text-[#1a1f36]">Fraud Analysis Report</h2>
          <p className="text-[13px] font-medium text-gray-500 mt-1">
            Application: <span className="font-mono text-[#0066cc] font-semibold bg-blue-50 px-1.5 py-0.5 rounded">APP-2026-1021</span> • Generated: 05 Aug 2026, 15:04
          </p>
        </div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <button className="bg-white border border-[#d1d5db] text-[#1a1f36] font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
            <HiArrowPath className="w-4 h-4 text-gray-500"/> Regenerate
          </button>
          <button className="bg-[#0066cc] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0055aa] transition-colors shadow-sm flex items-center gap-2">
            <HiArrowDownTray className="w-4 h-4"/> Download PDF
          </button>
        </div>
      </div>
    </motion.div>

    {/* Summary Metric Cards */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: 0.1 }} 
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {[
        { label: "Risk Score", val: "86 / 100", color: "text-[#d32f2f]", iconBg: "bg-red-50", iconBorder: "border-red-100", iconColor: "text-red-500", Icon: HiChartBar },
        { label: "Risk Level", val: "High", color: "text-[#d32f2f]", iconBg: "bg-red-50", iconBorder: "border-red-100", iconColor: "text-red-500", Icon: HiShieldExclamation },
        { label: "Confidence", val: "97%", color: "text-[#0066cc]", iconBg: "bg-blue-50", iconBorder: "border-blue-100", iconColor: "text-blue-500", Icon: HiShieldCheck },
        { label: "Decision", val: "Reject", color: "text-[#d32f2f]", iconBg: "bg-red-50", iconBorder: "border-red-100", iconColor: "text-red-500", Icon: HiXCircle },
      ].map((metric, idx) => (
        <div key={idx} className="bg-white border border-[#e3e8ee] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-8 h-8 rounded-lg ${metric.iconBg} flex items-center justify-center border ${metric.iconBorder}`}>
              <metric.Icon className={`w-5 h-5 ${metric.iconColor}`} />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">{metric.label}</span>
          </div>
          <div className={`text-[28px] font-bold ${metric.color}`}>{metric.val}</div>
        </div>
      ))}
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Document Details */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.4, delay: 0.2 }} 
        className="bg-white border border-[#e3e8ee] rounded-2xl shadow-sm flex flex-col"
      >
        <div className="p-6 md:p-8 border-b border-[#e3e8ee]">
          <h3 className="text-[16px] font-bold text-[#1a1f36] flex items-center gap-2">
            <HiDocumentText className="w-5 h-5 text-gray-400"/> Application Information
          </h3>
        </div>
        <div className="p-6 md:p-8 flex-1 flex flex-col gap-5">
          {[
            ["Application ID", "APP-2026-1021", true],
            ["Applicant Name", "Ramesh Kumar Gupta", false],
            ["Loan Type", "Mortgage", false],
            ["Submitted By", "analyst.priya@example.com", false],
            ["Documents Analyzed", "5 Files", true],
            ["Branch", "South Delhi — Hauz Khas", false],
          ].map(([label, val, mono], idx) => (
            <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <span className="text-[13px] font-semibold text-gray-500">{label}</span>
              <span className={`text-[14px] font-bold text-[#1a1f36] ${mono ? 'font-mono text-[13px] bg-gray-50 px-2 py-0.5 rounded border border-gray-200' : ''}`}>
                {val}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Insights */}
      <motion.div 
        initial={{ opacity: 0, x: 10 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.4, delay: 0.2 }} 
        className="bg-white border border-[#e3e8ee] rounded-2xl shadow-sm flex flex-col justify-between"
      >
        <div className="p-6 md:p-8 border-b border-[#e3e8ee]">
          <h3 className="text-[16px] font-bold text-[#1a1f36] flex items-center gap-2">
            <HiCpuChip className="w-5 h-5 text-purple-500"/> AI Insights & Recommendation
          </h3>
        </div>
        <div className="p-6 md:p-8">
          <div className="bg-red-50/50 border border-red-100 rounded-xl p-6 mb-6 shadow-sm">
            <p className="text-[14px] text-red-700 font-bold mb-3 flex items-center gap-2">
              <HiShieldExclamation className="w-5 h-5"/> REJECT — Do Not Process Loan
            </p>
            <p className="text-[13px] text-red-800/80 leading-relaxed font-medium">
              This application exhibits multiple cross-document fraud indicators with <strong>97% model confidence</strong>. The combination of an entity
              name mismatch (Sale Deed vs GST) and severe financial inconsistencies (GST revenue vs Bank Deposits) is consistent
              with a class of forged loan applications. Furthermore, the Bank Statement exhibits metadata tampering. It is
              strongly recommended that the application be rejected and the case escalated to the Fraud Monitoring Unit.
            </p>
          </div>
          
          <div className="text-[12px] text-gray-500 bg-[#f8faff] p-4 rounded-xl border border-blue-100/50 flex flex-col gap-1.5">
            <p className="font-semibold text-[#1a1f36]">Report generated by Ravynx Engine v3.2.1 • Model accuracy: 97.3%</p>
            <p className="opacity-80">Internal use only. Must be reviewed by an authorised officer.</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Findings */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: 0.3 }} 
      className="bg-white border border-[#e3e8ee] rounded-2xl shadow-sm flex flex-col mb-12"
    >
      <div className="p-6 md:p-8 border-b border-[#e3e8ee]">
        <h3 className="text-[16px] font-bold text-[#1a1f36] flex items-center gap-2">
          <HiExclamationTriangle className="w-5 h-5 text-amber-500"/> Key Findings Log
        </h3>
      </div>
      
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { sev: "danger", title: "Cross-Document Entity Mismatch", desc: "Applicant name 'Ramesh Kumar' in GST Certificate differs from 'Ramesh Kumar Gupta' in Sale Deed." },
          { sev: "danger", title: "Financial Reconciliation Failure", desc: "Declared GST revenue (₹1.2Cr) does not match Bank Statement deposits (₹45L)." },
          { sev: "danger", title: "Metadata Tampering (Bank Statement)", desc: "Bank Statement PDF shows signs of layer editing via Adobe Photoshop metadata." },
          { sev: "success", title: "Survey Number Validation", desc: "Survey number on Sale Deed matches government Land Records API." },
          { sev: "success", title: "Registrar Signature Valid", desc: "Digital signature of Sub-Registrar on Sale Deed verified against government store." },
          { sev: "success", title: "No Prior Encumbrance", desc: "No mortgage, lien, or court order found against the property in our records." },
        ].map((item, i) => (
          <div key={i} className={`flex gap-4 rounded-xl p-5 border transition-shadow hover:shadow-md ${
            item.sev === "danger" ? "bg-white border-red-100 shadow-sm"
              : item.sev === "warning" ? "bg-white border-amber-100 shadow-sm"
              : "bg-white border-emerald-100 shadow-sm"
          }`}>
            <div className="shrink-0 mt-0.5">
              {item.sev === "danger" ? (
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                  <HiXCircle className="w-5 h-5 text-red-500"/>
                </div>
              ) : item.sev === "warning" ? (
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                  <HiExclamationTriangle className="w-5 h-5 text-amber-500"/>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                  <HiCheckCircle className="w-5 h-5 text-emerald-500"/>
                </div>
              )}
            </div>
            <div>
              <p className="text-[14px] font-bold text-[#1a1f36] mb-1.5">{item.title}</p>
              <p className="text-[13px] font-medium text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);
