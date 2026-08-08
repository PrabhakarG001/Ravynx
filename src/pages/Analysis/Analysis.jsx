import './Analysis.css';
import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Badge } from '../../components/common/Badge/Badge';
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
    return (<div className="analysis-cls-1">
      <div className="analysis-cls-2">
        <h1 className="analysis-cls-3">Application Analysis</h1>
        <p className="analysis-cls-4">Detailed AI cross-document fraud analysis for APP-2026-1021.</p>
      </div>

      <div className="analysis-cls-5">
        {/* Risk Score */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="analysis-cls-6">
          <div className="analysis-cls-7"/>
          <p className="analysis-cls-8">Risk Score</p>
          <div className="analysis-cls-9">
            <svg viewBox="0 0 100 100" className="analysis-cls-10">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="12"/>
              <circle cx="50" cy="50" r="42" fill="none" stroke="#ef4444" strokeWidth="12" strokeDasharray={`${86 * 2.64} ${264 - 86 * 2.64}`} strokeLinecap="round" className="analysis-cls-11"/>
            </svg>
            <div className="analysis-cls-12">
              <span className="analysis-cls-13">86</span>
              <span className="analysis-cls-14">/100</span>
            </div>
          </div>
          <Badge status="high"/>
          <p className="analysis-cls-15">High Risk — Officer Review Required</p>
          <p className="analysis-cls-16">Confidence: 97%</p>
        </motion.div>

        {/* AI Explanation */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="analysis-cls-17">
          <h3 className="analysis-cls-18">AI Explanation</h3>
          <div className="analysis-cls-19">
            <div className="analysis-cls-20">
              <HiExclamationTriangle size={18} className="analysis-cls-21"/>
              <p className="analysis-cls-22">High-Risk Determination</p>
            </div>
            <p className="analysis-cls-23">
              This application presents three critical cross-document anomalies: (1) Entity names do not perfectly match across
              the GST Certificate and Sale Deed, indicating possible misrepresentation. (2) There is a severe discrepancy between
              reported GST revenue and actual banking deposits. (3) The submitted Bank Statement PDF contains metadata traces
              from Adobe Photoshop, strongly suggesting fabrication. Manual verification and applicant interview is advised.
            </p>
          </div>
          <div className="analysis-cls-24">
            {[
            ["Issues Found", "3", "text-red-600", "bg-red-50"],
            ["Checks Passed", "3", "text-emerald-600", "bg-emerald-50"],
            ["Confidence", "97%", "text-blue-600", "bg-blue-50"],
            ["Processing", "2.4s", "text-foreground", "bg-secondary"],
        ].map(([label, val, cls, bg]) => (<div key={label} className={`${bg} border border-border/50 rounded-xl p-4 shadow-sm`}>
                <p className="analysis-cls-25">{label}</p>
                <p className={`text-2xl font-bold ${cls} leading-none`}>{val}</p>
              </div>))}
          </div>
        </motion.div>
      </div>

      {/* Checks table */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="analysis-cls-26">
        <h3 className="analysis-cls-27">Verification Checks</h3>
        <div className="analysis-cls-28">
          {checks.map((check, i) => (<motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.05) }} key={check.label} className={`border rounded-xl p-5 shadow-sm transition-colors hover:shadow-md ${check.status === "danger" ? "border-red-200 bg-red-50"
                : check.status === "warning" ? "border-yellow-200 bg-yellow-50"
                    : "border-emerald-200 bg-emerald-50"}`}>
              <div className="analysis-cls-29">
                <div className="analysis-cls-30">
                  {check.status === "danger" ? <HiXCircle size={18} className="analysis-cls-31"/>
                : check.status === "warning" ? <HiExclamationTriangle size={18} className="analysis-cls-32"/>
                    : <HiCheckCircle size={18} className="analysis-cls-33"/>}
                  <span className="analysis-cls-34">{check.label}</span>
                </div>
                <Badge status={check.status}/>
              </div>
              <p className="analysis-cls-35"><span className="analysis-cls-36">{check.result}</span> — {check.detail}</p>
            </motion.div>))}
        </div>
        <div className="analysis-cls-37">
          <button onClick={() => navigate("/report")} className="analysis-cls-38">
            Generate Detailed Report <HiDocumentCheck size={16}/>
          </button>
          <button onClick={() => navigate("/viewer")} className="analysis-cls-39">
            View Document Bundle
          </button>
        </div>
      </motion.div>
    </div>);
};
