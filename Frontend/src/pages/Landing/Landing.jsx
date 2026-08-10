import './Landing.css';
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import NeuralNetwork from "../../components/ui/NeuralNetwork/NeuralNetwork";
import { HiShieldCheck, HiDocumentCheck, HiChartBar, HiClipboardDocumentList, HiCpuChip, HiLockClosed, HiArrowRight, HiClock, HiExclamationTriangle, HiCheckCircle, HiCircleStack, HiSquares2X2, HiServerStack, HiPlayCircle, HiEye, HiMagnifyingGlass, HiDocumentText, HiCheck } from "react-icons/hi2";
import { FiGithub, FiLinkedin, FiGitMerge, FiLoader } from "react-icons/fi";
import { FaGithub, FaDiscord, FaReddit, FaTwitter } from "react-icons/fa";
import { Landmark, Database, BrainCircuit, ArrowRight, PlayCircle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CardNav from '../../components/CardNav/CardNav';
import { Logo } from '../../components/Logo/Logo';
export default function Landing() {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isLightNavbar, setIsLightNavbar] = useState(false);
    const [navVisible, setNavVisible] = useState(true);
    const [activeModal, setActiveModal] = useState(null);
    const [activeSection, setActiveSection] = useState("");
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

        const sectionIds = ["aegis-core", "how-it-works", "architecture", "team"];
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleFooterClick = (e, title, category) => {
        e.preventDefault();
        setActiveModal({ title, category });
    };
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsLightNavbar(latest > 0.55);
    });
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        const threshold = window.innerHeight * 1.5;
        if (latest > previous && latest > threshold) {
            setNavVisible(false);
        }
        else if (latest < previous) {
            setNavVisible(true);
        }
    });
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
    // Scroll Transition Hooks
    const moveProgress = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
    const expandProgress = useTransform(scrollYProgress, [0.35, 0.75], [0, 1]);
    const heroOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);
    const mobileBgOpacity = useTransform(expandProgress, [0, 1], [0, 1]);
    const cardLeft = useTransform(() => {
        const m = moveProgress.get();
        const e = expandProgress.get();
        const cardHalfWidth = 160;
        if (e > 0) {
            return `calc((50vw - ${cardHalfWidth}px) * ${1 - e})`;
        }
        return `calc((max(50vw - 560px, 80px) + 484px) * ${1 - m} + (50vw - 160px) * ${m})`;
    });
    const cardWidth = useTransform(() => {
        return '100vw';
    });
    const cardHeight = useTransform(() => {
        const e = expandProgress.get();
        return `calc(100vh * ${e})`;
    });
    const cardBorderRadius = useTransform(expandProgress, [0, 1], ["0px", "0px"]);
    const cardBorderWidth = useTransform(expandProgress, [0, 1], ["0px", "0px"]);
    const cardBorderColor = useTransform(expandProgress, [0, 1], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)"]);
    const cardBgColor = useTransform(expandProgress, [0, 1], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]);
    const cardInnerOpacity = useTransform(expandProgress, [0, 0.5], [0, 0]);
    const pageOpacity = useTransform(expandProgress, [0.5, 1], [0, 1]);
    useEffect(() => {
        document.documentElement.classList.add('landing-theme');
        const handleScroll = () => {
            const isMobile = window.innerWidth <= 768;
            const threshold = isMobile ? 180 : 350;
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };



        window.addEventListener("scroll", handleScroll);
        return () => {
            document.documentElement.classList.remove('landing-theme');
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const features = [
        { icon: HiShieldCheck, title: "Deep-Learning Fraud Engine", desc: "Multi-layered neural networks analyze metadata, and pixel-level tampering to flag synthetic or forged documents." },
        { icon: HiDocumentCheck, title: "Multi-Format Verification", desc: "Instantly process and verify complex financial documents: GST certificates, ITRs, land registries, and bank statements." },
        { icon: HiChartBar, title: "Dynamic Risk Scoring", desc: "Proprietary algorithms compute a real-time risk score (0-100) based on anomaly detection and historical underwriting data." },
        { icon: HiClipboardDocumentList, title: "Automated Underwriting", desc: "Reduce loan decision times from days to seconds by automatically cross-referencing extracted data against secure databases." },
        { icon: HiCpuChip, title: "Computer Vision OCR", desc: "Advanced layout-aware text extraction that perfectly parses tabular financial data, stamps, and signatures." },
        { icon: HiLockClosed, title: "Strict Compliance Audit", desc: "Tamper-evident, cryptographically secure logging of every verification step to ensure regulatory compliance for NBFCs." },
    ];
    const team = [
        { name: "Prabhakar Gupta", role: "Frontend Developer", initial: "PG" },
        { name: "Saksham Varshney", role: "Backend Developer", initial: "SV" },
    ];
    const navLinks = [
    { name: "Aegis Core", href: "#aegis-core" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Architecture", href: "#architecture" },
    { name: "Team", href: "#team" }
  ];
  const cardNavItems = [
        {
            label: "Platform",
            bgColor: "#0f172a",
            textColor: "#fff",
            links: [
                { label: "Aegis Core", href: "#aegis-core", ariaLabel: "Aegis Core" },
                { label: "How it Works", href: "#how-it-works", ariaLabel: "How it Works" }
            ]
        },
        {
            label: "Company",
            bgColor: "#0f172a",
            textColor: "#fff",
            links: [
                { label: "Architecture", href: "#architecture", ariaLabel: "Architecture" },
                { label: "Team", href: "#team", ariaLabel: "Meet the Team" }
            ]
        },
        {
            label: "Connect",
            bgColor: "#0f172a",
            textColor: "#fff",
            links: [
                { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" },
                { label: "Twitter", href: "#", ariaLabel: "Twitter" }
            ]
        }
    ];
    return (<div className="min-h-screen bg-background font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Desktop Navbar */}
      <nav className={`hidden md:block fixed top-0 left-0 w-full z-50 pt-4 pb-4 transition-all duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'} ${isLightNavbar ? 'bg-white/90 backdrop-blur-md shadow-sm' : scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>
        <motion.div 

          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between"
        >
          
          <div className="flex items-center lg:gap-14 gap-8">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <Logo className={`text-[28px] transition-colors ${isLightNavbar ? 'text-foreground' : 'text-white'}`} />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.substring(1);
                return (
                <a key={link.name} href={link.href} className={`group relative font-semibold text-[15px] transition-all duration-300 ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600' : (isLightNavbar ? 'text-foreground hover:text-fuchsia-600' : 'text-white/80 hover:text-white')}`}>
                  <span className={`relative inline-block transition-transform duration-300 ${isActive ? '' : 'group-hover:-translate-y-[2px] group-hover:scale-105'}`}>
                    {link.name}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-out rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} bg-gradient-to-r from-fuchsia-500 to-purple-600`} />
                </a>
              )})}
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 lg:mr-24 md:mr-16 mr-4">
            <button
              onClick={() => navigate("/login")}
              className={`font-semibold text-[14px] transition-colors hidden sm:block ${isLightNavbar ? 'text-foreground hover:text-black/70' : 'text-white hover:text-white/80'}`}
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/login")}
              className={`text-[14px] font-bold px-4 py-2 sm:px-5 sm:py-2 rounded-full transition-colors shadow-lg hover:scale-105 ${isLightNavbar ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              Sign up
            </button>
          </div>

        </motion.div>
      </nav>

      {/* CardNav Island Navbar for Mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 translate-y-0">

        <CardNav
          logo={<Logo className={`text-[24px] transition-colors ${scrolled ? 'text-black' : 'text-white'}`} />}
          items={cardNavItems}
          baseColor={scrolled ? "rgba(255, 255, 255, 0.94)" : "transparent"}
          menuColor={scrolled ? "#000000" : "#ffffff"}
          buttonBgColor="#2563eb"
          buttonTextColor="#ffffff"
          onLoginClick={() => navigate("/login")}
          onSignupClick={() => navigate("/login")}
          scrolled={scrolled}
          isLightNavbar={scrolled}
          activeSection={activeSection}
        />
      </div>


      {/* Scroll Transition Container (Hero + Card Expansion) */}
      <div ref={containerRef} id="aegis-core" className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between">
          

          {/* Hero Content (Fades out) */}
          <motion.div className="absolute inset-0 z-0 h-full w-full flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden" style={{ opacity: heroOpacity }}>
             {/* Hero background image */}
             <img
               src="/hero_landing.jpg"
               alt="Document Verification"
               className="hero-bg-image"
             />
             {/* Dark overlay */}
             <div className="hero-bg-overlay" />

             {/* Background glow accent */}
             <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

             <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center mt-4">
               <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="hero-trust-badge">
                 <span className="hero-trust-dot" />
                 AI-Powered · NBFC-Compliant · Bank-Grade Security
               </motion.div>

               <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] mb-4 md:mb-6">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">AI-Powered Underwriting &</span><br />
                 <span className="text-white">Document Fraud Detection</span>
               </motion.h1>
               
               <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/90 text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] max-w-3xl mx-auto mb-3 md:mb-4 font-medium">
                 Instantly analyze financial and legal documents, detect fraud patterns, and generate explainable risk scores for faster, safer lending decisions.
               </motion.p>

               <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="text-white/60 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-2xl mx-auto mb-6 md:mb-10">
                 Built for banks and financial institutions to automate verification, reduce manual effort, and eliminate document tampering risks using advanced AI.
               </motion.p>

               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative z-[100] pointer-events-auto">
                 <button onClick={() => navigate("/dashboard")} style={{ cursor: "pointer", pointerEvents: "auto" }} className="hero-cta-btn px-8 py-2.5 rounded-full border border-purple-500 text-white text-sm font-medium hover:bg-purple-500/10 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] inline-flex items-center justify-center gap-2 cursor-pointer">
                   Launch Dashboard <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                 </button>
                 <button onClick={() => navigate("/upload")} style={{ cursor: "pointer", pointerEvents: "auto" }} className="hero-cta-btn px-8 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer">
                   <PlayCircle className="w-4 h-4" strokeWidth={2.5} /> Try Demo
                 </button>
               </motion.div>


             </div>

             {/* 3D Animated Surface (Glowing Horizon) */}
             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="hero-glow-container">
               <div className="absolute inset-0 w-full h-full overflow-hidden flex items-end justify-center" style={{ perspective: "1000px" }}>
                 {/* Horizon glow */}
                 <div className="hero-glow"></div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20"></div>
             </motion.div>
          </motion.div>

          {/* Expanding Card */}
          <motion.div className="flex pointer-events-auto absolute bottom-0 flex-col overflow-hidden origin-bottom" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{
            left: cardLeft,
            width: cardWidth,
            height: cardHeight,
            borderTopLeftRadius: cardBorderRadius,
            borderTopRightRadius: cardBorderRadius,
            borderTopWidth: cardBorderWidth,
            borderLeftWidth: cardBorderWidth,
            borderRightWidth: cardBorderWidth,
            borderColor: cardBorderColor,
            backgroundColor: cardBgColor,
            borderStyle: "solid",
            zIndex: 30
        }}>
            {/* Card Content Removed as per user request */}

          </motion.div>

          {/* Core Capabilities Revealed — DESKTOP STICKY SCROLL ANIMATION */}
          <motion.div className="absolute inset-0 z-40 hidden md:flex items-start justify-center pt-20 pointer-events-none" style={{ opacity: pageOpacity }}>
            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pointer-events-auto">
              <div className="mb-10 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Core Capabilities</h2>
                <p className="text-slate-500 text-base">An advanced suite of AI tools designed to automate your underwriting process and eliminate document fraud at the source.</p>
              </div>
              <div className="features-grid">
                {features.map(({ icon: Icon, title, desc }, idx) => (<motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm transition-shadow">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary"/>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </motion.div>))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Capabilities — PHONE ANIMATED SLIDING CARD SHEET (md:hidden) */}
      <section className="md:hidden relative z-30 bg-white px-6 py-14 -mt-12 rounded-t-3xl border-t border-slate-200/80 shadow-[0_-12px_40px_rgba(0,0,0,0.35)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Core Capabilities</h2>
          <p className="text-slate-500 text-base">An advanced suite of AI tools designed to automate your underwriting process and eliminate document fraud at the source.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-20px" }}
              transition={{ type: "spring", stiffness: 280, damping: 22, delay: idx * 0.08 }}
              className="bg-slate-50/90 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 border border-slate-200">
                <Icon size={22} className="text-black" style={{ color: "#000000" }} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>





      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">The Underwriting Bottleneck</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Traditional document verification is slow, manual, and prone to sophisticated fraud.</p>
        </motion.div>


        
        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Stylish & Professional VS Badge between both cards (Desktop) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-950 border-2 border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.5)] backdrop-blur-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 font-black text-lg tracking-widest">VS</span>
              <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping opacity-40"></div>
            </div>
          </div>

          {/* Problem Image Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="relative h-[600px] rounded-3xl overflow-hidden group">
            <img src="/manual_verification_bg.jpg" alt="Manual Verification" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
            
            <div className="relative z-10 h-full flex flex-col p-10">
              <div className="text-center mt-8">
                <h3 className="text-3xl font-bold text-white mb-4">Manual Verification</h3>
                <p className="text-white/80 text-lg max-w-md mx-auto">
                  High operational costs, slow turnaround times, and sophisticated forgeries that go undetected by the human eye.
                </p>
              </div>
              
              <div className="mt-auto mx-auto max-w-sm w-full text-center">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <span className="text-white/80 text-sm font-medium">Processing Time</span>
                    <span className="text-red-400 font-bold">24-48 Hours</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white/90 text-sm text-left">
                      <HiExclamationTriangle className="w-4 h-4 text-red-400 shrink-0"/> Human Error & Inconsistencies
                    </li>
                    <li className="flex items-center gap-3 text-white/90 text-sm text-left">
                      <HiExclamationTriangle className="w-4 h-4 text-red-400 shrink-0"/> High Cost Per Application
                    </li>
                  </ul>
              </div>
            </div>
          </motion.div>

          {/* Stylish VS Badge for Mobile */}
          <div className="md:hidden flex justify-center -my-3 z-30 relative pointer-events-none">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-2 border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 font-black text-base tracking-widest">VS</span>
            </div>
          </div>
          
          {/* Solution Image Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: 0.1 }} className="relative h-[600px] rounded-3xl overflow-hidden group">
            <img src="/ai_verification_bg.jpg" alt="Ravynx AI Engine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-black/40 to-black/30"></div>
            
            <div className="relative z-10 h-full flex flex-col p-10">
              <div className="text-center mt-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ravynx AI Engine</h3>
                <p className="text-white/80 text-lg max-w-md mx-auto">
                  Instant processing, cross-document data reconciliation, and pixel-level tampering detection.
                </p>
              </div>
              
              <div className="mt-auto mx-auto max-w-sm w-full text-center">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-blue-400/20">
                      <span className="text-blue-200/80 text-sm font-medium">Processing Time</span>
                      <span className="text-blue-400 font-bold">&lt; 3 Seconds</span>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-white text-sm font-medium text-left">
                        <HiCheckCircle className="w-4 h-4 text-blue-400 shrink-0"/> 90% Cost Reduction
                      </li>
                      <li className="flex items-center gap-3 text-white text-sm font-medium text-left">
                        <HiCheckCircle className="w-4 h-4 text-blue-400 shrink-0"/> Zero Margin for Error
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual How It Works */}
      <section id="how-it-works" className="bg-secondary/50 py-24 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Ravynx Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A seamless pipeline from document upload to actionable risk intelligence.</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0">
               <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-primary"/>
            </div>
            
            {[
            { icon: HiDocumentText, title: "Upload", desc: "Ingest PDFs, Images" },
            { icon: HiMagnifyingGlass, title: "OCR", desc: "Extract structured data" },
            { icon: HiCpuChip, title: "AI Checks", desc: "Detect anomalies" },
            { icon: FiGitMerge, title: "Aegis Core", desc: "Cross-validate facts" },
            { icon: HiSquares2X2, title: "Report", desc: "Actionable insights" }
        ].map((step, i, arr) => (<React.Fragment key={step.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, delay: i * 0.2 }} className="relative z-10 flex flex-col items-center text-center w-full md:w-48 group">
                <div className="w-24 h-24 rounded-2xl bg-card border border-border shadow-md flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <step.icon className="w-10 h-10 text-primary"/>
                </div>
                <h4 className="font-bold text-foreground text-lg">{step.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
              </motion.div>
              {/* Mobile Arrow Between Steps */}
              {i < arr.length - 1 && (
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.3, delay: i * 0.2 + 0.1 }} className="md:hidden flex items-center justify-center py-1">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>))}
          </div>
        </div>
      </section>

      {/* Live AI Processing */}
      <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Real-Time Processing Engine</h2>
          <p className="text-muted-foreground">Watch the AI analyze a document in real-time.</p>
        </motion.div>
        
        <div className="bg-[#030213] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono relative">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 relative">
            <div className="flex gap-2 relative z-10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-xs text-slate-400 font-semibold tracking-wide">ravynx-node-process</div>
            </div>
          </div>
          <div className="p-6 text-sm text-gray-300 h-72 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Simulated Terminal Lines */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ staggerChildren: 0.8 }} className="space-y-4">
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-blue-400 shrink-0">[INFO]</span> <span>Receiving Document payload (GST_Cert_2026.pdf)...</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-blue-400 shrink-0">[INFO]</span> <span>Running OCR Extraction...</span> <FiLoader className="w-4 h-4 animate-spin text-muted-foreground mt-0.5"/>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">[SUCCESS]</span> <span>OCR complete. 48 fields extracted with 99.2% confidence.</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-yellow-400 shrink-0">[SCAN]</span> <span>Running EXIF metadata & forgery analysis...</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-red-500 font-bold shrink-0">[ALERT]</span> <span className="text-red-400">Metadata modified date (2026-08-05) does not match creation date. Possible tampering detected.</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-blue-400 shrink-0">[INFO]</span> <span>Cross-validating PAN & GST records via Gov API...</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-red-500 font-bold shrink-0">[ALERT]</span> <span className="text-red-400">Owner name mismatch detected: "Rahul Sharma" (Doc) vs "Rahul Kumar Sharma" (Registry)</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">[DONE]</span> <span className="font-bold text-foreground">Risk Score Calculated: 86/100 (HIGH RISK)</span>
              </motion.div>
            </motion.div>
          </div>
          {/* Animated Progress Bar */}
          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-secondary">
            <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 6, ease: "linear" }} className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]"/>
          </div>
        </div>
      </section>

      {/* Output Preview & Document Comparison */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Dashboard Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Intelligent Risk Assessment</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">Every risk score comes with a clear, traceable reasoning chain for human underwriters. No black box decisions.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center mt-12 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Complete Transparency in Every Decision</h3>
            <p className="text-white/90 text-base md:text-xl leading-relaxed">
              Ravynx doesn't just give you a score. Our system cross-references hundreds of data points — from metadata tampering to registry mismatches — and presents a crystal clear, human-readable reasoning chain. Underwriters can instantly see the "why" behind every alert, drastically reducing manual review time while ensuring zero margin for error in compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="text-center mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Enterprise-Grade Architecture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Built to scale. Secure by design. Deploy on-premise or in the cloud.</p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 hidden md:flex">
             <div className="w-[85%] h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
            { icon: HiCircleStack, title: "Data Ingestion", desc: "API, SFTP, and Portal integration" },
            { icon: HiServerStack, title: "Processing Node", desc: "Scalable OCR & Vision AI clusters" },
            { icon: HiCpuChip, title: "LLM Engine", desc: "Context-aware anomaly detection" },
            { icon: HiLockClosed, title: "Compliance Vault", desc: "Encrypted zero-retention storage" }
        ].map((node, i) => (<motion.div key={node.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} whileHover={{ scale: 1.04, y: -10 }} transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }} className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center mb-6 relative z-10">
                  <node.icon className="w-8 h-8 text-primary"/>
                </div>
                <h4 className="font-bold text-foreground text-lg relative z-10">{node.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 relative z-10">{node.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Trust / Enterprise Section */}
      <section className="bg-[#030213] text-white py-24 sm:py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div initial={{ opacity: 0, x: 60, y: 60 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ type: "spring", stiffness: 80, damping: 30, duration: 1.4 }} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
                <span className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600 uppercase">Enterprise Grade</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Designed for institutions with zero margin for error.
              </h2>
            </div>
            <div className="md:max-w-sm text-white/60 text-base md:text-lg leading-relaxed border-l border-white/10 pl-6">
              Our architecture ensures complete data isolation and algorithmic transparency for strict regulatory compliance.
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80, y: 80 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ type: "spring", stiffness: 70, damping: 30, delay: 0.3, duration: 1.6 }} className="trust-metrics bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            {[
              {
                icon: Landmark,
                title: "Built for Banks & NBFCs",
                desc: "Meets stringent regulatory guidelines and internal audit requirements out of the box with complete tamper-evident logs.",
              },
              {
                icon: Database,
                title: "Zero Data Retention",
                desc: "Documents are processed in isolated memory enclaves and immediately discarded. PII is never stored permanently.",
              },
              {
                icon: BrainCircuit,
                title: "Explainable AI",
                desc: "Every risk score comes with a clear, traceable reasoning chain for human underwriters. No black box decisions.",
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-[#030213] p-10 lg:p-12 transition-colors hover:bg-white/[0.02] group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white/60 group-hover:text-white transition-colors shadow-sm">
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed flex-grow">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Team Section */}
      <section id="team" className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="text-center mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Development Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A team bridging the gap between deep learning and financial compliance.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map(({ name, role, initial }, index) => (<motion.div key={name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-[0_0_40px_rgba(var(--primary),0.15)] hover:-translate-y-3 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-inner">
                {initial}
              </div>
              <p className="text-xl font-bold text-foreground relative z-10">{name}</p>
              <p className="text-sm text-primary font-semibold mt-1.5 relative z-10">{role}</p>
              
              <div className="flex items-center justify-center gap-4 mt-6 relative z-10">
                 <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background transition-colors"><FiGithub className="w-4 h-4"/></a>
                 <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-[#0A66C2] hover:text-foreground transition-colors"><FiLinkedin className="w-4 h-4"/></a>
              </div>
            </motion.div>))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-32 relative overflow-hidden bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#030213] border border-white/10 shadow-2xl">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-primary/20 z-0"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-0"></div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8 }} className="relative z-10 text-center text-white py-20 px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">Ready to detect fraud in seconds?</h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Stop relying on manual checks. Automate your underwriting pipeline with government-grade AI verification.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => navigate("/dashboard")} className="w-auto bg-white text-black font-bold text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2 cursor-pointer">
                  Launch Dashboard <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
                <button onClick={() => navigate("/upload")} className="w-auto bg-white/10 border border-white/20 backdrop-blur-md text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
                  <PlayCircle className="w-4 h-4" strokeWidth={2.5} /> Try Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030213] border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2 footer-brand">
              <Logo className="text-[28px] text-white mb-4 block" />
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm sm:max-w-md px-4 sm:px-0 sm:pr-4">
                Government-grade AI underwriting and document fraud detection for modern financial institutions.
              </p>
              <div className="mt-6 max-w-sm">
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2.5">
                  Subscribe to Fraud Intelligence Insights
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter your work email..."
                    className="bg-white/5 border border-white/15 rounded-full px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/80 w-full transition-all"
                  />
                  <button onClick={(e) => { e.preventDefault(); alert("Thank you for subscribing to Ravynx Fraud Intelligence!"); }} className="bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-bold text-xs px-4 py-2 rounded-full transition-all shrink-0 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/40 text-[12px] mt-2.5">
                  Join 500+ risk analysts & underwriters getting weekly fraud prevention alerts.
                </p>
              </div>
            </div>
            
            <div className="footer-links">
              <h4 className="text-white font-semibold mb-6">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-white/60 hover:text-white text-sm transition-colors">How it Works</a></li>
                <li><a href="#architecture" className="text-white/60 hover:text-white text-sm transition-colors">Architecture</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Security & Compliance', 'Platform')} className="text-white/60 hover:text-white text-sm transition-colors">Security & Compliance</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Pricing', 'Platform')} className="text-white/60 hover:text-white text-sm transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#team" className="text-white/60 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Careers', 'Company')} className="text-white/60 hover:text-white text-sm transition-colors">Careers</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Blog', 'Company')} className="text-white/60 hover:text-white text-sm transition-colors">Blog</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Contact', 'Company')} className="text-white/60 hover:text-white text-sm transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Privacy Policy', 'Legal')} className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Terms of Service', 'Legal')} className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Cookie Policy', 'Legal')} className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative">
            <div className="text-white/60 text-sm">
              © 2026 Ravynx. All rights reserved.
            </div>
            <div className="text-white/60 text-sm md:text-center md:absolute md:left-1/2 md:-translate-x-1/2">
              Developed and Design by Team DataMineX
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </div>
          </div>
        </div>
      </footer>


      
      <AnimatePresence>
        {activeModal && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6" onClick={() => setActiveModal(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-card border border-border max-w-lg w-full rounded-2xl p-8 relative shadow-2xl" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                ✕
              </button>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                 <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{activeModal.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thank you for your interest in {activeModal.title}.
              </p>
              
              {activeModal.category === 'Platform' && (<p className="text-foreground leading-relaxed mb-8">
                  You're exploring our <strong>{activeModal.title}</strong> features! As this project is a hackathon MVP built by <strong>Prabhakar Gupta</strong> and <strong>Saksham Varshney</strong>, we are currently focused on demonstrating our core AI processing engine. Check out the "How it Works" section to see the platform in action!
                </p>)}
              
              {activeModal.category === 'Company' && (<p className="text-foreground leading-relaxed mb-8">
                  Interested in our <strong>{activeModal.title}</strong>? Ravynx is an ambitious hackathon project created by developers <strong>Prabhakar Gupta</strong> and <strong>Saksham Varshney</strong>. We're currently a two-person powerhouse building the future of financial underwriting. Reach out to us directly via our LinkedIn profiles in the Team section if you want to connect!
                </p>)}
              
              {activeModal.category === 'Legal' && (<p className="text-foreground leading-relaxed mb-8">
                  Ah, the fine print for <strong>{activeModal.title}</strong>! Since Ravynx is a 48-hour hackathon prototype built by <strong>Prabhakar Gupta</strong> and <strong>Saksham Varshney</strong>, our official legal team (which is also just the two of us) hasn't drafted these documents yet. Rest assured, our AI is designed with bank-grade security and compliance in mind!
                </p>)}
              <button onClick={() => setActiveModal(null)} className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                Back to Exploring
              </button>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </div>);
}
;

