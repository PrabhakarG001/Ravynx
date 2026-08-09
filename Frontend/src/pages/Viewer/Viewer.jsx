import './Viewer.css';
import React from "react";
import { motion } from "framer-motion";
import { HiDocumentText, HiArrowDownTray, HiXCircle, HiExclamationTriangle, HiCheckCircle } from "react-icons/hi2";
import { Badge } from '../../components/common/Badge/Badge';

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
      <div className="viewer-cls-1">
        
        {/* Header */}
        <div>
          <h1 className="viewer-cls-2">Document Viewer</h1>
          <p className="viewer-cls-3">Review extracted text and flagged anomalies for DEED-2026-0821.pdf.</p>
        </div>

        <div className="viewer-cls-4">
          
          {/* Document Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }} 
            className="viewer-cls-5"
          >
            <div className="viewer-cls-6">
              <div className="viewer-cls-7">
                <div className="viewer-cls-8">
                  <HiDocumentText className="viewer-cls-9"/>
                </div>
                <div>
                  <h3 className="viewer-cls-10">DEED-2026-0821.pdf</h3>
                  <p className="viewer-cls-11">Uploaded 2 hours ago</p>
                </div>
              </div>
              <button className="viewer-cls-12">
                <HiArrowDownTray className="viewer-cls-13"/> Download Original
              </button>
            </div>

            {/* Document Content */}
            <div className="viewer-cls-14">
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
                    <span className="viewer-cls-15">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={isHighlighted ? "font-semibold text-[#1a1f36]" : ""}>{line}</span>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="viewer-cls-16">
              <div className="viewer-cls-17">
                <span className="viewer-cls-18">
                  <span className="viewer-cls-19"/>
                </span> 
                High Severity Mismatch
              </div>
              <div className="viewer-cls-20">
                <span className="viewer-cls-21">
                  <span className="viewer-cls-22"/>
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
            className="viewer-cls-23"
          >
            <div className="viewer-cls-24">
              <h3 className="viewer-cls-25">
                Flagged Issues
                <div className="viewer-cls-26">
                  <div className="viewer-cls-27"></div>
                  {issues.length} detected
                </div>
              </h3>
              
              <div className="viewer-cls-28">
                {issues.map((issue, idx) => (
                  <div key={idx} className={`border rounded-xl p-5 transition-shadow hover:shadow-md ${
                    issue.severity === "high" ? "border-red-100 bg-red-50/30" : "border-amber-100 bg-amber-50/30"
                  }`}>
                    <div className="viewer-cls-29">
                      <span className="viewer-cls-30">Line {issue.line} — {issue.field}</span>
                      <div className="viewer-cls-31">
                        <div className={`w-1.5 h-1.5 rounded-full ${issue.severity === 'high' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                        <span className="viewer-cls-32">
                          {issue.severity}
                        </span>
                      </div>
                    </div>
                    <div className="viewer-cls-33">
                      <div className="viewer-cls-34">
                        <span className="viewer-cls-35">Found (Extracted)</span>
                        <span className="viewer-cls-36">{issue.found}</span>
                      </div>
                      <div className="viewer-cls-37">
                        <span className="viewer-cls-38">Expected (System)</span>
                        <span className="viewer-cls-39">{issue.expected}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="viewer-cls-40">
                <p className="viewer-cls-41">Officer Decision</p>
                <div className="viewer-cls-42">
                  <button className="viewer-cls-43">
                    <HiXCircle className="viewer-cls-44"/> Reject Document
                  </button>
                  <button className="viewer-cls-45">
                    <HiExclamationTriangle className="viewer-cls-46"/> Send for Review
                  </button>
                  <button className="viewer-cls-47">
                    <HiCheckCircle className="viewer-cls-48"/> Override & Approve
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
};
