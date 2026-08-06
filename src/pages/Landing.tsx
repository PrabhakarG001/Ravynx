import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, FileCheck, BarChart2, ClipboardList, Cpu, Lock, ArrowRight } from "lucide-react";

export const Landing = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const cardY = useTransform(scrollY, [0, 1000], [0, 100]); // Card moves slower than page

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: Shield, title: "AI-Powered Fraud Detection", desc: "Multi-layer analysis using OCR, metadata validation, and risk scoring to flag suspicious documents instantly." },
    { icon: FileCheck, title: "Document Verification", desc: "Verify land deeds, financial records, GST documents, and bank statements with 97%+ accuracy." },
    { icon: BarChart2, title: "Real-Time Analytics", desc: "Comprehensive dashboards tracking fraud rates, risk distributions, and processing performance." },
    { icon: ClipboardList, title: "Audit Trail", desc: "Complete, tamper-evident logs of every action — compliant with RBI and government audit standards." },
    { icon: Cpu, title: "OCR Processing", desc: "Automated text extraction from scanned PDFs with error correction and field-level validation." },
    { icon: Lock, title: "Bank-Grade Security", desc: "End-to-end encryption, role-based access control, and session management per PNB security policy." },
  ];

  const team = [
    { name: "Rajiv Sharma", role: "Chief Technology Officer", initial: "RS" },
    { name: "Priya Menon", role: "Lead ML Engineer", initial: "PM" },
    { name: "Arjun Nair", role: "Security Architect", initial: "AN" },
    { name: "Deepa Iyer", role: "Product Manager", initial: "DI" },
  ];

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 pt-4 pb-4 transition-all duration-300 ${scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between"
        >
          
          <div className="flex items-center lg:gap-14 gap-8">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <span className="text-white text-[28px] font-['Inter',sans-serif] font-semibold tracking-[-0.5px]">Ravynx</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 -mt-2.5">
              {["Product", "Features", "Docs", "Team"].map(link => (
                <a key={link} href="#" className="text-white font-semibold text-[15px] hover:text-white/80 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 lg:mr-24 md:mr-16 mr-8">
            <button
              onClick={() => navigate("/login")}
              className="text-white font-semibold text-[14px] hover:text-white/80 transition-colors hidden sm:block"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-black text-[14px] font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:scale-105"
            >
              Sign up
            </button>
          </div>

        </motion.div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 h-[120%] -top-[10%]"
        >
          <motion.img 
            initial={{ scale: 1 }} animate={{ scale: 1.05 }} transition={{ duration: 6, ease: "easeOut" }}
            src="/hero-fintech-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Clean, professional dark sky-blue overlay for text readability */}
          <div className="absolute inset-0 bg-sky-900/10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/80 via-sky-900/40 to-transparent pointer-events-none"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Main Text Content */}
          <div className="max-w-[520px] relative z-20 -top-24">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6 drop-shadow-sm whitespace-nowrap"
            >
              Trust & Verification
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/95 text-[16px] md:text-[17px] font-medium leading-[1.6] mb-8 max-w-[380px] drop-shadow-sm"
            >
              This is risk intelligence, redefined. Make smarter underwriting decisions and detect fraud in real time. Sign up for free in a tap.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-[#111] text-white text-[15px] font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Revolut Style Transparent Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative z-20 -top-12 w-[340px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.3 }}
              className="w-full h-[500px] border-[1.5px] border-white/40 rounded-[2.5rem] flex flex-col justify-between p-6 relative overflow-hidden"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-white/90 text-[15px] font-medium mb-1 drop-shadow-md">Risk Analysis</div>
                <div className="text-white text-[64px] font-bold tracking-tight drop-shadow-lg mb-3 leading-none">92%</div>
                <div className="bg-white text-black px-5 py-2 rounded-full text-[14px] font-bold shadow-md">
                  Verified
                </div>
              </div>
              
              <div className="w-full bg-white rounded-[1.25rem] py-4 px-4 flex items-center justify-center gap-2 shadow-lg">
                <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
                <span className="text-black font-extrabold text-[14px] tracking-wide">FRAUD PROTECTED</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">Core Capabilities</h2>
          <p className="text-muted-foreground text-sm mb-10">Built for government-grade reliability and compliance.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div 
              key={title} 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="bg-secondary border-y border-border px-6 md:px-12 py-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
            <div className="flex flex-col gap-6">
              {[
                ["Upload", "Submit land deeds, GST certificates, bank statements, or financial documents."],
                ["OCR Extraction", "Automated text extraction and field parsing from scanned PDFs."],
                ["Risk Analysis", "Multi-check validation: ownership, survey numbers, metadata, financial patterns."],
                ["Report", "Downloadable PDF report with risk score, flagged issues, and AI explanation."],
              ].map(([step, desc], i) => (
                <motion.div 
                  key={step} 
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{step}</p>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-8 shadow-sm"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-5 font-medium">Sample Risk Assessment</p>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-5xl font-bold text-destructive">86</p>
                <p className="text-sm text-muted-foreground mt-1">Risk Score</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-red-100 text-red-800">High</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="w-4 h-4 text-red-600 shrink-0 flex items-center justify-center font-bold">✗</span>
                <span className="text-foreground">Owner Name Mismatch</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-4 h-4 text-red-600 shrink-0 flex items-center justify-center font-bold">✗</span>
                <span className="text-foreground">Metadata Tampering Detected</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-4 h-4 text-yellow-600 shrink-0 flex items-center justify-center font-bold">⚠</span>
                <span className="text-foreground">Survey Number Inconsistency</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed border-t border-border pt-4 font-medium">
              Confidence: 97% — Document flagged for manual review by senior officer.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-foreground mb-10"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map(({ name, role, initial }, index) => (
            <motion.div 
              key={name}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration