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
    return (<div className="processing-cls-1">
      <div className="processing-cls-2">
        <h1 className="processing-cls-3">Application Processing</h1>
        <p className="processing-cls-4">Analyzing application bundle via multi-stage AI verification.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="processing-cls-5">
        <div className="processing-cls-6">
          <div className="processing-cls-7">
            <div className="processing-cls-8">
              <HiDocumentText size={24} className="processing-cls-9"/>
            </div>
            <div>
              <h2 className="processing-cls-10">APP-2026-1021</h2>
              <p className="processing-cls-11">Applicant: Ramesh Kumar Gupta • 5 Documents</p>
            </div>
          </div>
          <div className="processing-cls-12">
            <HiArrowPath size={16} className="processing-cls-13"/>
            In Progress
          </div>
        </div>

        {/* Progress bar */}
        <div className="processing-cls-14">
          <div className="processing-cls-15">
            <span>Overall Progress</span>
            <span className="processing-cls-16">50% (3 / 6 steps)</span>
          </div>
          <div className="processing-cls-17">
            <motion.div initial={{ width: 0 }} animate={{ width: "50%" }} transition={{ duration: 1, delay: 0.2 }} className="processing-cls-18">
              <div className="processing-cls-19"/>
            </motion.div>
          </div>
        </div>

        {/* Steps */}
        <div className="processing-cls-20">
          {steps.map((step, i) => (<motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} key={step.id} className="processing-cls-21">
              {/* Line + Dot */}
              <div className="processing-cls-22">
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
                <div className="processing-cls-23">
                  <p className={`text-base font-semibold ${step.status === "pending" ? "text-[#8792a2]" : "text-[#1a1f36]"}`}>
                    {step.label}
                  </p>
                  {step.time !== "—" && <span className="processing-cls-24">{step.time}s</span>}
                </div>
                <p className="processing-cls-25">{step.desc}</p>
                {step.status === "active" && (<div className="processing-cls-26">
                    <div className="processing-cls-27"/>
                  </div>)}
              </div>
            </motion.div>))}
        </div>

        <div className="processing-cls-28">
          <button onClick={() => navigate("/analysis")} className="processing-cls-29">
            View Live Analysis <HiChevronRight size={16}/>
          </button>
          <button className="processing-cls-30">
            Cancel Processing
          </button>
        </div>
      </motion.div>

      <div className="processing-cls-31">
        <h3 className="processing-cls-32">OCR Extracted Fields</h3>
        <div className="processing-cls-33">
          {[
            ["Application ID", "APP-2026-1021"],
            ["Applicant", "Ramesh Kumar Gupta"],
            ["Loan Type", "Mortgage"],
            ["Declared Income", "₹ 15,40,000"],
            ["Property Value", "₹ 50,00,000"],
            ["Submission Date", "05-Aug-2026"],
            ["Documents", "5 Files Parsed"],
            ["Status", "Cross-Checking"],
        ].map(([label, value]) => (<div key={label} className="processing-cls-34">
              <p className="processing-cls-35">{label}</p>
              <p className="processing-cls-36">{value}</p>
            </div>))}
        </div>
      </div>
    </div>);
};
