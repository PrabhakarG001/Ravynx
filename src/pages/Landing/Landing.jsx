import './Landing.css';
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import NeuralNetwork from '../../components/ui/NeuralNetwork/NeuralNetwork';
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
        const isMobile = window.innerWidth < 1024;
        const cardHalfWidth = isMobile ? 130 : 160;
        if (e > 0) {
            return `calc((50vw - ${cardHalfWidth}px) * ${1 - e})`;
        }
        else {
            if (isMobile) {
                return `calc(50vw - ${cardHalfWidth}px)`;
            }
            return `calc((max(50vw - 560px, 80px) + 484px) * ${1 - m} + (50vw - 160px) * ${m})`;
        }
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
            if (window.scrollY > 50) {
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
    return (<div className="landing-cls-1">
      {/* Desktop Navbar */}
      <nav className={`hidden md:block fixed top-0 left-0 w-full z-50 pt-4 pb-4 transition-all duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'} ${isLightNavbar ? 'bg-white/90 backdrop-blur-md shadow-sm' : scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'}`}>
        <motion.div 

          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="landing-cls-2"
        >
          
          <div className="landing-cls-3">
            <div className="landing-cls-4" onClick={() => navigate("/")}>
              <Logo className={`text-[28px] transition-colors ${isLightNavbar ? 'text-foreground' : 'text-white'}`} />
            </div>
            
            <div className="landing-cls-5">
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

          <div className="landing-cls-6">
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
      <div className={`md:hidden fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${navVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <CardNav logo={<Logo className={`text-[24px] transition-colors ${isLightNavbar ? 'text-black' : 'text-white'}`} />} items={cardNavItems} baseColor={isLightNavbar ? "rgba(255, 255, 255, 0.9)" : scrolled ? "rgba(0, 0, 0, 0.3)" : "transparent"} menuColor={isLightNavbar ? "#000000" : "#ffffff"} buttonBgColor="#2563eb" buttonTextColor="#ffffff" onLoginClick={() => navigate("/login")} onSignupClick={() => navigate("/login")} scrolled={scrolled} isLightNavbar={isLightNavbar} activeSection={activeSection} />
      </div>

      {/* Scroll Transition Container (Hero + Card Expansion) */}
      <div ref={containerRef} id="aegis-core" className="landing-cls-7">
        <div className="landing-cls-8">
          

          {/* Hero Content (Fades out) */}
          <motion.div className="landing-cls-9" style={{ opacity: heroOpacity }}>
             {/* Background glow effects */}
             <div className="landing-cls-10"></div>

             <div className="landing-cls-11">
               <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="landing-cls-12">
                 <span className="landing-cls-13">AI-Powered Underwriting &</span><br />
                 <span className="landing-cls-14">Document Fraud Detection</span>
               </motion.h1>
               
               <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="landing-cls-15">
                 Instantly analyze financial and legal documents, detect fraud patterns, and generate explainable risk scores for faster, safer lending decisions.
               </motion.p>

               <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="landing-cls-16">
                 Built for banks and financial institutions to automate verification, reduce manual effort, and eliminate document tampering risks using advanced AI.
               </motion.p>

               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="landing-cls-17">
                 <button onClick={() => navigate("/dashboard")} className="landing-cls-18">
                   Launch Dashboard <ArrowRight className="landing-cls-19" strokeWidth={2.5} />
                 </button>
                 <button onClick={() => navigate("/dashboard")} className="landing-cls-20">
                   <PlayCircle className="landing-cls-21" strokeWidth={2.5} /> Try Demo
                 </button>
               </motion.div>
             </div>

             {/* 3D Animated Surface (Glowing Horizon) */}
             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="landing-cls-22 hero-glow-container">
               <div className="landing-cls-23" style={{ perspective: "1000px" }}>
                 {/* Horizon glow */}
                 <div className="landing-cls-24 hero-glow"></div>
               </div>
               <div className="landing-cls-25"></div>
             </motion.div>
          </motion.div>

          </div>
      </div>

          {/* Core Capabilities Revealed */}
<section className="py-24 relative z-10 overflow-hidden">
<motion.div initial={{ opacity: 0, x: 100, y: 100 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, margin: "-50px" }} className="w-full max-w-6xl mx-auto px-6 md:px-12">
<motion.div initial={{ opacity: 0, x: 50, y: 50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-28">
<h2 className="landing-cls-29">Core Capabilities</h2>
<p className="landing-cls-30">An advanced suite of AI tools designed to automate your underwriting process and eliminate document fraud at the source.</p>
</motion.div>
<div className="landing-cls-31 features-grid">
{features.map(({ icon: Icon, title, desc }, index) => (<motion.div key={title} initial={{ opacity: 0, x: 50, y: 50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-32">
<div className="landing-cls-33">
<Icon size={18} className="landing-cls-34"/>
</div>
<h3 className="landing-cls-35">{title}</h3>
<p className="landing-cls-36">{desc}</p>
</motion.div>))}
              </div>
</motion.div>
</section>

      {/* Problem vs Solution (Revolut Style Image Cards) */}
      <section className="landing-cls-37">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-38">
          <h2 className="landing-cls-39">The Underwriting Bottleneck</h2>
          <p className="landing-cls-40">Traditional document verification is slow, manual, and prone to sophisticated fraud.</p>
        </motion.div>
        
        <div className="landing-cls-41">
          {/* Problem Image Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-42">
            <img src="/manual_verification_bg.jpg" alt="Manual Verification" className="landing-cls-43" />
            <div className="landing-cls-44"></div>
            
            <div className="landing-cls-45">
              <div className="landing-cls-46">
                <h3 className="landing-cls-47">Manual Verification</h3>
                <p className="landing-cls-48">
                  High operational costs, slow turnaround times, and sophisticated forgeries that go undetected by the human eye.
                </p>
              </div>
              
              <div className="landing-cls-49">
                  <div className="landing-cls-50">
                    <span className="landing-cls-51">Processing Time</span>
                    <span className="landing-cls-52">24-48 Hours</span>
                  </div>
                  <ul className="landing-cls-53">
                    <li className="landing-cls-54">
                      <HiExclamationTriangle className="landing-cls-55"/> Human Error & Inconsistencies
                    </li>
                    <li className="landing-cls-56">
                      <HiExclamationTriangle className="landing-cls-57"/> High Cost Per Application
                    </li>
                  </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Solution Image Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ delay: 0.1 }} className="landing-cls-58">
            <img src="/ai_verification_bg.jpg" alt="Ravynx AI Engine" className="landing-cls-59" />
            <div className="landing-cls-60"></div>
            
            <div className="landing-cls-61">
              <div className="landing-cls-62">
                <h3 className="landing-cls-63">Ravynx AI Engine</h3>
                <p className="landing-cls-64">
                  Instant processing, cross-document data reconciliation, and pixel-level tampering detection.
                </p>
              </div>
              
              <div className="landing-cls-65">
                  <div className="landing-cls-66">
                    <div className="landing-cls-67">
                      <span className="landing-cls-68">Processing Time</span>
                      <span className="landing-cls-69"><HiClock className="landing-cls-70"/> &lt; 3 Seconds</span>
                    </div>
                    <ul className="landing-cls-71">
                      <li className="landing-cls-72">
                        <HiCheckCircle className="landing-cls-73"/> 90% Cost Reduction
                      </li>
                      <li className="landing-cls-74">
                        <HiCheckCircle className="landing-cls-75"/> Zero Margin for Error
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual How It Works */}
      <section id="how-it-works" className="landing-cls-76">
        <div className="landing-cls-77">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-78">
            <h2 className="landing-cls-79">How Ravynx Works</h2>
            <p className="landing-cls-80">A seamless pipeline from document upload to actionable risk intelligence.</p>
          </motion.div>
          
          <div className="landing-cls-81">
            {/* Desktop Connecting Line */}
            <div className="landing-cls-82">
               <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 1.5, delay: 0.2 }} className="landing-cls-83"/>
            </div>
            
            {[
            { icon: HiDocumentText, title: "Upload", desc: "Ingest PDFs, Images" },
            { icon: HiMagnifyingGlass, title: "OCR", desc: "Extract structured data" },
            { icon: HiCpuChip, title: "AI Checks", desc: "Detect anomalies" },
            { icon: FiGitMerge, title: "Aegis Core", desc: "Cross-validate facts" },
            { icon: HiSquares2X2, title: "Report", desc: "Actionable insights" }
        ].map((step, i, arr) => (<React.Fragment key={step.title}>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.2 }} className="landing-cls-84">
                <div className="landing-cls-85">
                  <div className="landing-cls-86"></div>
                  <step.icon className="landing-cls-87"/>
                </div>
                <h4 className="landing-cls-88">{step.title}</h4>
                <p className="landing-cls-89">{step.desc}</p>
              </motion.div>
              {/* Mobile Arrow Between Steps */}
              {i < arr.length - 1 && (
                <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.3, delay: i * 0.2 + 0.1 }} className="landing-cls-90">
                  <svg className="landing-cls-91" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>))}
          </div>
        </div>
      </section>

      {/* Live AI Processing */}
      <section className="landing-cls-92">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-93">
          <h2 className="landing-cls-94">Real-Time Processing Engine</h2>
          <p className="landing-cls-95">Watch the AI analyze a document in real-time.</p>
        </motion.div>
        
        <div className="landing-cls-96">
          <div className="landing-cls-97">
            <div className="landing-cls-98">
              <div className="landing-cls-99"></div>
              <div className="landing-cls-100"></div>
              <div className="landing-cls-101"></div>
            </div>
            <div className="landing-cls-102">
              <div className="landing-cls-103">ravynx-node-process</div>
            </div>
          </div>
          <div className="landing-cls-104">
            {/* Simulated Terminal Lines */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ staggerChildren: 0.8 }} className="landing-cls-105">
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-106">
                <span className="landing-cls-107">[INFO]</span> <span>Receiving Document payload (GST_Cert_2026.pdf)...</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-108">
                <span className="landing-cls-109">[INFO]</span> <span>Running OCR Extraction...</span> <FiLoader className="landing-cls-110"/>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-111">
                <span className="landing-cls-112">[SUCCESS]</span> <span>OCR complete. 48 fields extracted with 99.2% confidence.</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-113">
                <span className="landing-cls-114">[SCAN]</span> <span>Running EXIF metadata & forgery analysis...</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-115">
                <span className="landing-cls-116">[ALERT]</span> <span className="landing-cls-117">Metadata modified date (2026-08-05) does not match creation date. Possible tampering detected.</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-118">
                <span className="landing-cls-119">[INFO]</span> <span>Cross-validating PAN & GST records via Gov API...</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-120">
                <span className="landing-cls-121">[ALERT]</span> <span className="landing-cls-122">Owner name mismatch detected: "Rahul Sharma" (Doc) vs "Rahul Kumar Sharma" (Registry)</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="landing-cls-123">
                <span className="landing-cls-124">[DONE]</span> <span className="landing-cls-125">Risk Score Calculated: 86/100 (HIGH RISK)</span>
              </motion.div>
            </motion.div>
          </div>
          {/* Animated Progress Bar */}
          <div className="landing-cls-126">
            <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 6, ease: "linear" }} className="landing-cls-127"/>
          </div>
        </div>
      </section>

      {/* Output Preview & Document Comparison */}
      <section className="landing-cls-128">
        {/* Background Image */}
        <div className="landing-cls-129">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Dashboard Background" className="landing-cls-130" />
          <div className="landing-cls-131"></div>
        </div>

        <div className="landing-cls-132">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-133">
            <h2 className="landing-cls-134">Intelligent Risk Assessment</h2>
            <p className="landing-cls-135">Every risk score comes with a clear, traceable reasoning chain for human underwriters. No black box decisions.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.6 }} className="landing-cls-136">
            <h3 className="landing-cls-137">Complete Transparency in Every Decision</h3>
            <p className="landing-cls-138">
              Ravynx doesn't just give you a score. Our system cross-references hundreds of data points—from metadata tampering to registry mismatches—and presents a crystal clear, human-readable reasoning chain. Underwriters can instantly see the "why" behind every alert, drastically reducing manual review time while ensuring zero margin for error in compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="landing-cls-139">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-140">
          <h2 className="landing-cls-141">Enterprise-Grade Architecture</h2>
          <p className="landing-cls-142">Built to scale. Secure by design. Deploy on-premise or in the cloud.</p>
        </motion.div>
        
        <div className="landing-cls-143">
          <div className="landing-cls-144">
             <div className="landing-cls-145"></div>
          </div>
          
          <div className="landing-cls-146">
            {[
            { icon: HiCircleStack, title: "Data Ingestion", desc: "API, SFTP, and Portal integration" },
            { icon: HiServerStack, title: "Processing Node", desc: "Scalable OCR & Vision AI clusters" },
            { icon: HiCpuChip, title: "LLM Engine", desc: "Context-aware anomaly detection" },
            { icon: HiLockClosed, title: "Compliance Vault", desc: "Encrypted zero-retention storage" }
        ].map((node, i) => (<motion.div key={node.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.15 }} className="landing-cls-147">
                <div className="landing-cls-148"></div>
                <div className="landing-cls-149">
                  <node.icon className="landing-cls-150"/>
                </div>
                <h4 className="landing-cls-151">{node.title}</h4>
                <p className="landing-cls-152">{node.desc}</p>
              </motion.div>))}
          </div>
        </div>
      </section>

      {/* Trust / Enterprise Section */}
      <section className="landing-cls-153">
        <div className="landing-cls-154">
          
          <div className="landing-cls-155">
            <div className="landing-cls-156">
              <div className="landing-cls-157">
                <div className="landing-cls-158"></div>
                <span className="landing-cls-159">Enterprise Grade</span>
              </div>
              <h2 className="landing-cls-160">
                Designed for institutions with zero margin for error.
              </h2>
            </div>
            <div className="landing-cls-161">
              Our architecture ensures complete data isolation and algorithmic transparency for strict regulatory compliance.
            </div>
          </div>

          <div className="landing-cls-162 trust-metrics">
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
                className="landing-cls-163"
              >
                <div className="landing-cls-164">
                  <feature.icon className="landing-cls-165" strokeWidth={1.5} />
                </div>
                
                <h3 className="landing-cls-166">{feature.title}</h3>
                <p className="landing-cls-167">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section id="team" className="landing-cls-168">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} className="landing-cls-169">
          <h2 className="landing-cls-170">Meet Our Development Team</h2>
          <p className="landing-cls-171">A team bridging the gap between deep learning and financial compliance.</p>
        </motion.div>
        
        <div className="landing-cls-172">
          {team.map(({ name, role, initial }, index) => (<motion.div key={name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="landing-cls-173">
              <div className="landing-cls-174"></div>
              <div className="landing-cls-175">
                {initial}
              </div>
              <p className="landing-cls-176">{name}</p>
              <p className="landing-cls-177">{role}</p>
              
              <div className="landing-cls-178">
                 <a href="#" className="landing-cls-179"><FiGithub className="landing-cls-180"/></a>
                 <a href="#" className="landing-cls-181"><FiLinkedin className="landing-cls-182"/></a>
              </div>
            </motion.div>))}
        </div>
      </section>

      {/* CTA */}
      <section className="landing-cls-183">
        <div className="landing-cls-184">
          <div className="landing-cls-185">
            {/* Glowing Background */}
            <div className="landing-cls-186"></div>
            <div className="landing-cls-187"></div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.8 }} className="landing-cls-188">
              <h2 className="landing-cls-189">Ready to detect fraud in seconds?</h2>
              <p className="landing-cls-190">
                Stop relying on manual checks. Automate your underwriting pipeline with government-grade AI verification.
              </p>
              <div className="landing-cls-191">
                <button onClick={() => navigate("/dashboard")} className="landing-cls-192">
                  Launch Dashboard <ArrowRight className="landing-cls-193" strokeWidth={2.5} />
                </button>
                <button onClick={() => navigate("/dashboard")} className="landing-cls-194">
                  <PlayCircle className="landing-cls-195" strokeWidth={2.5} /> Try Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-cls-196">
        <div className="landing-cls-197">
          <div className="landing-cls-198">
            <div className="landing-cls-199 footer-brand">
              <Logo className="landing-cls-200" />
              <p className="landing-cls-201">
                Government-grade AI underwriting and document fraud detection for modern financial institutions.
              </p>
              <div className="landing-cls-202 footer-socials">
                <a href="#" className="landing-cls-203">
                  <FiGithub className="landing-cls-204"/>
                </a>
                <a href="#" className="landing-cls-205">
                  <FiLinkedin className="landing-cls-206"/>
                </a>
              </div>
            </div>
            
            <div className="landing-cls-207">
              <h4 className="landing-cls-208">Platform</h4>
              <ul className="landing-cls-209">
                <li><a href="#how-it-works" className="landing-cls-210">How it Works</a></li>
                <li><a href="#architecture" className="landing-cls-211">Architecture</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Security & Compliance', 'Platform')} className="landing-cls-212">Security & Compliance</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Pricing', 'Platform')} className="landing-cls-213">Pricing</a></li>
              </ul>
            </div>
            
            <div className="landing-cls-214">
              <h4 className="landing-cls-215">Company</h4>
              <ul className="landing-cls-216">
                <li><a href="#team" className="landing-cls-217">About Us</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Careers', 'Company')} className="landing-cls-218">Careers</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Blog', 'Company')} className="landing-cls-219">Blog</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Contact', 'Company')} className="landing-cls-220">Contact</a></li>
              </ul>
            </div>
            
            <div className="landing-cls-221">
              <h4 className="landing-cls-222">Legal</h4>
              <ul className="landing-cls-223">
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Privacy Policy', 'Legal')} className="landing-cls-224">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Terms of Service', 'Legal')} className="landing-cls-225">Terms of Service</a></li>
                <li><a href="#" onClick={(e) => handleFooterClick(e, 'Cookie Policy', 'Legal')} className="landing-cls-226">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="landing-cls-227">
            <div className="landing-cls-228">
              © 2026 Ravynx. All rights reserved.
            </div>
            <div className="landing-cls-229">
              Developed and Design by Team DataMineX
            </div>
            <div className="landing-cls-230">
              <span className="landing-cls-231"></span>
              All systems operational
            </div>
          </div>
        </div>
      </footer>
      
      <AnimatePresence>
        {activeModal && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="landing-cls-232" onClick={() => setActiveModal(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="landing-cls-233" onClick={e => e.stopPropagation()}>
              <button onClick={() => setActiveModal(null)} className="landing-cls-234">
                ✕
              </button>
              <div className="landing-cls-235">
                 <span className="landing-cls-236">✨</span>
              </div>
              <h3 className="landing-cls-237">{activeModal.title}</h3>
              <p className="landing-cls-238">
                Thank you for your interest in {activeModal.title}.
              </p>
              
              {activeModal.category === 'Platform' && (<p className="landing-cls-239">
                  You're exploring our <strong>{activeModal.title}</strong> features! As this project is a hackathon MVP built by <strong>Prabhakar Gupta</strong> and <strong>Saksham Varshney</strong>, we are currently focused on demonstrating our core AI processing engine. Check out the "How it Works" section to see the platform in action!
                </p>)}
              
              {activeModal.category === 'Company' && (<p className="landing-cls-240">
                  Interested in our <strong>{activeModal.title}</strong>? Ravynx is an ambitious hackathon project created by developers <strong>Prabhakar Gupta</strong> and <strong>Saksham Varshney</strong>. We're currently a two-person powerhouse building the future of financial underwriting. Reach out to us directly via our LinkedIn profiles in the Team section if you want to connect!
                </p>)}
              
              {activeModal.category === 'Legal' && (<p className="landing-cls-241">
                  Ah, the fine print for <strong>{activeModal.title}</strong>! Since Ravynx is a 48-hour hackathon prototype built by <strong>Prabhakar Gupta</strong> and <strong>Saksham Varshney</strong>, our official legal team (which is also just the two of us) hasn't drafted these documents yet. Rest assured, our AI is designed with bank-grade security and compliance in mind!
                </p>)}
              <button onClick={() => setActiveModal(null)} className="landing-cls-242">
                Back to Exploring
              </button>
            </motion.div>
          </motion.div>)}
      </AnimatePresence>
    </div>);
}
;

