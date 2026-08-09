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
  <div className="report-cls-1">
    
    {/* Header */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4 }} 
      className="report-cls-2"
    >
      <div className="report-cls-3">
        <div>
          <div className="report-cls-4">
            <div className="report-cls-5">
              <HiBuildingOffice2 className="report-cls-6"/>
            </div>
            <span className="report-cls-7">Ravynx Intelligence</span>
          </div>
          <h2 className="report-cls-8">Fraud Analysis Report</h2>
          <p className="report-cls-9">
            Application: <span className="report-cls-10">APP-2026-1021</span> • Generated: 05 Aug 2026, 15:04
          </p>
        </div>
        <div className="report-cls-11">
          <button className="report-cls-12">
            <HiArrowPath className="report-cls-13"/> Regenerate
          </button>
          <button className="report-cls-14">
            <HiArrowDownTray className="report-cls-15"/> Download PDF
          </button>
        </div>
      </div>
    </motion.div>

    {/* Summary Metric Cards */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: 0.1 }} 
      className="report-cls-16"
    >
      {[
        { label: "Risk Score", val: "86 / 100", color: "text-[#d32f2f]", iconBg: "bg-red-50", iconBorder: "border-red-100", iconColor: "text-red-500", Icon: HiChartBar },
        { label: "Risk Level", val: "High", color: "text-[#d32f2f]", iconBg: "bg-red-50", iconBorder: "border-red-100", iconColor: "text-red-500", Icon: HiShieldExclamation },
        { label: "Confidence", val: "97%", color: "text-[#0066cc]", iconBg: "bg-blue-50", iconBorder: "border-blue-100", iconColor: "text-blue-500", Icon: HiShieldCheck },
        { label: "Decision", val: "Reject", color: "text-[#d32f2f]", iconBg: "bg-red-50", iconBorder: "border-red-100", iconColor: "text-red-500", Icon: HiXCircle },
      ].map((metric, idx) => (
        <div key={idx} className="report-cls-17">
          <div className="report-cls-18">
            <div className={`w-8 h-8 rounded-lg ${metric.iconBg} flex items-center justify-center border ${metric.iconBorder}`}>
              <metric.Icon className={`w-5 h-5 ${metric.iconColor}`} />
            </div>
            <span className="report-cls-19">{metric.label}</span>
          </div>
          <div className={`text-[28px] font-bold ${metric.color}`}>{metric.val}</div>
        </div>
      ))}
    </motion.div>

    <div className="report-cls-20">
      {/* Document Details */}
      <motion.div 
        initial={{ opacity: 0, x: -10 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.4, delay: 0.2 }} 
        className="report-cls-21"
      >
        <div className="report-cls-22">
          <h3 className="report-cls-23">
            <HiDocumentText className="report-cls-24"/> Application Information
          </h3>
        </div>
        <div className="report-cls-25">
          {[
            ["Application ID", "APP-2026-1021", true],
            ["Applicant Name", "Ramesh Kumar Gupta", false],
            ["Loan Type", "Mortgage", false],
            ["Submitted By", "analyst.priya@example.com", false],
            ["Documents Analyzed", "5 Files", true],
            ["Branch", "South Delhi — Hauz Khas", false],
          ].map(([label, val, mono], idx) => (
            <div key={idx} className="report-cls-26">
              <span className="report-cls-27">{label}</span>
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
        className="report-cls-28"
      >
        <div className="report-cls-29">
          <h3 className="report-cls-30">
            <HiCpuChip className="report-cls-31"/> AI Insights & Recommendation
          </h3>
        </div>
        <div className="report-cls-32">
          <div className="report-cls-33">
            <p className="report-cls-34">
              <HiShieldExclamation className="report-cls-35"/> REJECT — Do Not Process Loan
            </p>
            <p className="report-cls-36">
              This application exhibits multiple cross-document fraud indicators with <strong>97% model confidence</strong>. The combination of an entity
              name mismatch (Sale Deed vs GST) and severe financial inconsistencies (GST revenue vs Bank Deposits) is consistent
              with a class of forged loan applications. Furthermore, the Bank Statement exhibits metadata tampering. It is
              strongly recommended that the application be rejected and the case escalated to the Fraud Monitoring Unit.
            </p>
          </div>
          
          <div className="report-cls-37">
            <p className="report-cls-38">Report generated by Ravynx Engine v3.2.1 • Model accuracy: 97.3%</p>
            <p className="report-cls-39">Internal use only. Must be reviewed by an authorised officer.</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Findings */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4, delay: 0.3 }} 
      className="report-cls-40"
    >
      <div className="report-cls-41">
        <h3 className="report-cls-42">
          <HiExclamationTriangle className="report-cls-43"/> Key Findings Log
        </h3>
      </div>
      
      <div className="report-cls-44">
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
            <div className="report-cls-45">
              {item.sev === "danger" ? (
                <div className="report-cls-46">
                  <HiXCircle className="report-cls-47"/>
                </div>
              ) : item.sev === "warning" ? (
                <div className="report-cls-48">
                  <HiExclamationTriangle className="report-cls-49"/>
                </div>
              ) : (
                <div className="report-cls-50">
                  <HiCheckCircle className="report-cls-51"/>
                </div>
              )}
            </div>
            <div>
              <p className="report-cls-52">{item.title}</p>
              <p className="report-cls-53">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);
