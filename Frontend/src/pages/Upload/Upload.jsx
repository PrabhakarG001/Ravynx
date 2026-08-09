import './Upload.css';
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpTray as UploadIcon, HiCpuChip, HiDocumentText, HiXMark, HiCheckCircle } from "react-icons/hi2";
import { Badge } from '../../components/common/Badge/Badge';
import { uploadDocumentApi, analyzeDocumentApi } from '../../services/api';

export const Upload = () => {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [docType, setDocType] = useState("Land Record");
    const [applicantName, setApplicantName] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanType, setLoanType] = useState("Mortgage");
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = useRef(null);
    const docTypes = ["Land Record", "Sale Deed", "Financial Statement", "Bank Statement", "GST Certificate"];

    const handleFiles = (fl) => {
        if (!fl) return;
        const added = Array.from(fl).map(f => ({
            fileObj: f,
            name: f.name,
            size: f.size,
            type: docType,
            status: "ready",
        }));
        setFiles(prev => [...prev, ...added]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
    };

    const handleSubmitApplication = async () => {
        setIsUploading(true);
        try {
            for (const f of files) {
                const formData = new FormData();
                if (f.fileObj) {
                    formData.append('file', f.fileObj);
                }
                formData.append('title', f.name);
                formData.append('documentType', f.type);
                formData.append('borrowerName', applicantName || 'Applicant');
                
                const uploaded = await uploadDocumentApi(formData);
                if (uploaded && uploaded.document) {
                    // Trigger AI analysis
                    await analyzeDocumentApi(uploaded.document._id);
                }
            }
        } catch (err) {
            console.warn('[Upload submit]:', err.message);
        } finally {
            setIsUploading(false);
            navigate("/processing");
        }
    };

    const fmt = (bytes) => bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
    
    return (<div className="upload-cls-1">
      <div className="upload-cls-2">
        <h1 className="upload-cls-3">New Loan Application</h1>
        <p className="upload-cls-4">Submit applicant details and supporting documents for AI verification.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="upload-cls-5">
        
        <div className="upload-cls-6">
          <div>
            <label className="upload-cls-7">Applicant Name</label>
            <input type="text" value={applicantName} onChange={e => setApplicantName(e.target.value)} placeholder="e.g. Ramesh Kumar" className="upload-cls-8"/>
          </div>
          <div>
            <label className="upload-cls-9">Loan Amount (₹)</label>
            <input type="text" value={loanAmount} onChange={e => setLoanAmount(e.target.value)} placeholder="e.g. 50,00,000" className="upload-cls-10"/>
          </div>
          <div>
            <label className="upload-cls-11">Loan Type</label>
            <select value={loanType} onChange={e => setLoanType(e.target.value)} className="upload-cls-12">
              <option>Mortgage</option>
              <option>SME Business Loan</option>
              <option>Personal Loan</option>
              <option>Auto Loan</option>
            </select>
          </div>
        </div>
        
        <div className="upload-cls-13">
          <div>
            <h2 className="upload-cls-14">Select Document Type</h2>
            <p className="upload-cls-15">Ensure the correct type is selected for accurate AI models.</p>
          </div>
          <select value={docType} onChange={e => setDocType(e.target.value)} className="upload-cls-16">
            {docTypes.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div className="upload-cls-17" onClick={() => inputRef.current?.click()} onDrop={handleDrop} onDragOver={e => e.preventDefault()}>
          <div className="upload-cls-18">
            <UploadIcon size={24} className="upload-cls-19"/>
          </div>
          <p className="upload-cls-20">Drag & drop files here</p>
          <p className="upload-cls-21">or click to browse from your computer</p>
          <p className="upload-cls-22">Supported formats: PDF, TIFF, JPEG, PNG (max 25 MB)</p>
          <input ref={inputRef} type="file" multiple accept=".pdf,.tiff,.jpg,.jpeg,.png" className="upload-cls-23" onChange={e => handleFiles(e.target.files)}/>
        </div>
      </motion.div>

      <AnimatePresence>
        {files.length > 0 && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="upload-cls-24">
            <div className="upload-cls-25">
              <h3 className="upload-cls-26">Files Queued ({files.length})</h3>
              <button onClick={handleSubmitApplication} disabled={isUploading} className="upload-cls-27">
                <HiCpuChip size={16}/> {isUploading ? 'Processing AI...' : 'Submit Application'}
              </button>
            </div>

            <div className="upload-cls-28">
              {files.map((f, i) => (<motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} key={i} className="upload-cls-29">
                  <div className="upload-cls-30">
                    <HiDocumentText size={18} className="upload-cls-31"/>
                  </div>
                  <div className="upload-cls-32">
                    <p className="upload-cls-33">{f.name}</p>
                    <p className="upload-cls-34">{fmt(f.size)} • {f.type}</p>
                  </div>
                  <Badge status={f.status}/>
                  <button onClick={() => setFiles(prev => prev.filter((_, j) => j !== i))} className="upload-cls-35">
                    <HiXMark size={16}/>
                  </button>
                </motion.div>))}
            </div>
          </motion.div>)}
      </AnimatePresence>

      {files.length === 0 && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="upload-cls-36">
          <h3 className="upload-cls-37">Accepted Document Types Guide</h3>
          <div className="upload-cls-38">
            {[
                ["Land Record", "Khasra, Khatauni, Mutation entries"],
                ["Sale Deed", "Registered sale & purchase agreements"],
                ["Financial Statement", "Balance sheets, P&L, audit reports"],
                ["Bank Statement", "6–24 month account statements"],
                ["GST Certificate", "GSTIN registration and returns"],
            ].map(([type, desc]) => (<div key={type} className="upload-cls-39">
                <HiCheckCircle size={16} className="upload-cls-40"/>
                <div>
                  <p className="upload-cls-41">{type}</p>
                  <p className="upload-cls-42">{desc}</p>
                </div>
              </div>))}
          </div>
        </motion.div>)}
    </div>);
};
