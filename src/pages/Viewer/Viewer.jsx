import './Viewer.css';
import React from "react";
import { motion } from "framer-motion";
import { HiDocumentText, HiArrowDownTray, HiXCircle, HiExclamationTriangle, HiCheckCircle } from "react-icons/hi2";
import { Badge } from "../../components/common/Badge";

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
      <div className="p-8 md:p-12 max-w-[1400px] mx-auto w-full h-full flex flex-col gap-8 font-[Inter,sans-serif]">
        
        {/* Header */}
        <div>
          <h1 className="text-[24px] font-bold text-[#1a1f36]">Document Viewer</h1>
          <p className="text-[14px] text-gray-500 mt-1">Review extracted text and flagged anomalies for DEED-2026-0821.pdf.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
          
          {/* Document Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }} 
            className="flex-[2] bg-white border border-[#e3e8ee] rounded-2xl shadow-sm p-8 flex flex-col min-h-[500px]"
          >
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#e3e8ee]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                  <HiDocumentText className="w-5 h-5 text-blue-600"/>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1a1f36]">DEED-2026-0821.pdf</h3>
                  <p className="text-[12px] text-gray-400 font-medium">Uploaded 2 hours ago</p>
                </div>
              </div>
              <button className="bg-white border border-[#d1d5db] text-[#1a1f36] px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
                <HiArrowDownTray className="w-4 h-4"/> Download Original
              </button>
            </div>

            {/* Document Content */}
            <div className="bg-[#f8faff] border border-[#e3e8ee] rounded-xl p-8 font-mono text-[13px] leading-8 flex-1 overflow-auto shadow-inner text-[#3c4257] selection:bg-blue-200 custom-scrollbar">
              {docLines.map((line, i) => {
                const isHighlighted = issues.some(iss => iss.line === i + 1);
                const severity = issues.find(iss => iss.line === i + 1)?.severity;
                
                return (
                  <div key={i} className={`px-4 py-1 rounded-lg transition-colors group ${
                    isHighlighted
                      ? severity === "high" 
                        ? "bg-red-50 border-l-[3px] border-red-500 shadow-sm"
                        : "bg-amber-50 border-l-[3px] border-amber-500 shadow-sm"
                      : "hover:bg-white"
                  }`}>
                    <span className="text-gray-400 select-none mr-6 text-right inline-block w-6 text-[11px] opacity-60 group-hover:opacity-100 transition-opacity">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={isHighlighted ? "font-semibold text-[#1a1f36]" : ""}>{line}</span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex gap-8 text-[12px] font-semibold text-gray-500 bg-gray-50 p-4 rounded-xl border border-[#e3e8ee]">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center border border-red-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"/>
                </span> 
                High Severity Mismatch
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"/>
                </span> 
                Medium Severity Issue
              </div>
            </div>
          </motion.div>

          {/* Issues Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: 0.1 }} 
            className="flex-1 bg-white border border-[#e3e8ee] rounded-2xl shadow-sm flex flex-col min-h-[500px] overflow-hidden"
          >
            <div className="p-6 md:p-8 flex flex-col h-full">
              <h3 className="text-[18px] font-bold text-[#1a1f36] mb-6 flex justify-between items-center">
                Flagged Issues
                <div className="flex items-center gap-1.5 bg-red-50 text-red-600 px-2.5 py-1 rounded-md text-[11px] font-bold border border-red-100 shadow-sm uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  {issues.length} detected
                </div>
              </h3>
              
              <div className="flex flex-col gap-4 flex-1 overflow-auto custom-scrollbar pr-2 pb-4">
                {issues.map((issue, idx) => (
                  <div key={idx} className={`border rounded-xl p-5 transition-shadow hover:shadow-md ${
                    issue.severity === "high" ? "border-red-100 bg-red-50/30" : "border-amber-100 bg-amber-50/30"
                  }`}>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200/60">
                      <span className="text-[14px] font-bold text-[#1a1f36]">Line {issue.line} — {issue.field}</span>
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-200 rounded-md shadow-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${issue.severity === 'high' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                        <span className="text-[10px] font-bold text-[#1a1f36] uppercase tracking-wider">
                          {issue.severity}
                        </span>
                      </div>
                    </div>
                    <div className="text-[13px] space-y-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Found (Extracted)</span>
                        <span className="text-red-600 font-mono font-semibold">{issue.found}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Expected (System)</span>
                        <span className="text-emerald-600 font-mono font-semibold">{issue.expected}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-[#e3e8ee]">
                <p className="text-[13px] font-semibold text-gray-500 mb-4 uppercase tracking-wider">Officer Decision</p>
                <div className="flex flex-col gap-3">
                  <button className="w-full bg-[#d32f2f] text-white text-[14px] font-semibold py-3.5 rounded-xl hover:bg-[#b71c1c] transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2">
                    <HiXCircle className="w-5 h-5 text-red-200"/> Reject Document
                  </button>
                  <button className="w-full bg-[#f57c00] text-white text-[14px] font-semibold py-3.5 rounded-xl hover:bg-[#e65100] transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2">
                    <HiExclamationTriangle className="w-5 h-5 text-orange-200"/> Send for Review
                  </button>
                  <button className="w-full bg-white border border-[#d1d5db] text-[#1a1f36] font-semibold text-[14px] py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2 group">
                    <HiCheckCircle className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform"/> Override & Approve
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
};
