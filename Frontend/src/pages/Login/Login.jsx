import './Login.css';
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { HiEnvelope, HiChevronDown, HiGlobeAlt, HiShieldCheck, HiDocumentCheck, HiChartBar, HiBars3, HiXMark } from "react-icons/hi2";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Logo } from '../../components/Logo/Logo';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';


export const Login = ({ initialMode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const { language, setLanguage, t } = useLanguage();

    const isSignUpInitial = initialMode === "signup" || location.pathname === "/signup";
    const [isSignUp, setIsSignUp] = useState(isSignUpInitial);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [showDropdown, setShowDropdown] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);
    const [policyModal, setPolicyModal] = useState(null); // 'privacy' | 'terms' | null
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setIsSignUp(initialMode === "signup" || location.pathname === "/signup");
    }, [initialMode, location.pathname]);

    const handleToggleMode = () => {
        const nextSignUp = !isSignUp;
        setIsSignUp(nextSignUp);
        navigate(nextSignUp ? "/signup" : "/login", { replace: true });
    };

    const handleContinue = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await login({ phone: `${countryCode}${phone}`, email, name, company, isSignUp });
            navigate("/dashboard");
        } catch (err) {
            navigate("/dashboard");
        } finally {
            setIsSubmitting(false);
        }
    };

    const countries = [
        { code: "+91", flag: "🇮🇳", name: "India" },
        { code: "+1",  flag: "🇺🇸", name: "United States" },
        { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
        { code: "+61", flag: "🇦🇺", name: "Australia" },
        { code: "+81", flag: "🇯🇵", name: "Japan" },
        { code: "+49", flag: "🇩🇪", name: "Germany" },
        { code: "+33", flag: "🇫🇷", name: "France" },
        { code: "+86", flag: "🇨🇳", name: "China" },
    ];

    const selectedCountry = countries.find(c => c.code === countryCode) || countries[0];
    const isFormValid = isSignUp
        ? (name.trim().length > 1 && email.includes("@") && phone.length > 5)
        : (phone.length > 5);

    const trustPoints = [
        { icon: HiShieldCheck,       label: t("bankSecurity") },
        { icon: HiDocumentCheck,     label: t("aiDocVerify") },
        { icon: HiChartBar,          label: t("realtimeRisk") },
    ];

    return (
        <div className="login-page">

            {/* ── Left Panel ── */}
            <div className="login-left-panel">
                <img
                    src="/hero_documents.jpg"
                    alt="Document verification"
                    className="login-bg-img"
                />
                {/* Dark overlay */}
                <div className="login-left-overlay" />

                {/* Content over image */}
                <div className="login-left-content">
                    {/* Logo — top */}
                    <div className="login-left-top">
                        <Logo className="login-logo-light" />
                    </div>

                    {/* Body — below logo */}
                    <div className="login-left-body">
                        <div className="login-left-divider" />
                        <h2 className="login-left-headline">
                            {language === 'hi' ? "एआई-संचालित दस्तावेज़\nसत्यापन प्लेटफ़ॉर्म" : "AI-Powered Document\nVerification Platform"}
                        </h2>
                        <p className="login-left-sub">
                            {t("leftSub")}
                        </p>
                        <div className="login-trust-list">
                            {trustPoints.map(({ icon: Icon, label }) => (
                                <div key={label} className="login-trust-item">
                                    <Icon className="login-trust-icon" />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer — pinned to very bottom */}
                    <p className="login-left-footer">
                        {t("trustedFooter")}
                    </p>
                </div>
            </div>

            {/* ── Right Panel (Login / Sign Up Form) ── */}
            <div className="login-right-panel">
                {/* Top nav for mobile */}
                <div className="login-mobile-nav">
                    <button
                        onClick={() => navigate("/")}
                        className="p-1.5 -ml-1.5 text-black hover:bg-gray-100 rounded-md transition-colors"
                        aria-label="Home menu"
                    >
                        <HiBars3 className="w-6 h-6 text-black" style={{ color: '#000000', stroke: '#000000' }} />
                    </button>
                    <div className="cursor-pointer" onClick={() => navigate("/")}>
                        <Logo className="login-logo-dark" />
                    </div>
                </div>


                <div className="login-form-outer">
                <motion.div
                    key={isSignUp ? "signup" : "signin"}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="login-form-card"
                >
                    {/* Heading */}
                    <div className="login-heading-wrap">
                        <h1 className="login-heading">{isSignUp ? t("createAccount") : t("welcomeBack")}</h1>
                        <p className="login-subheading">
                            {isSignUp ? t("createAccountSub") : t("enterPhoneSub")}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleContinue} className="login-form">
                        {isSignUp && (
                            <>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder={t("fullName")}
                                    className="login-field-input"
                                />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t("workEmail")}
                                    className="login-field-input"
                                />
                            </>
                        )}

                        {/* Phone row */}
                        <div className="login-phone-row">
                            {/* Country code */}
                            <div className="login-country-wrap">
                                <button
                                    type="button"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="login-country-btn"
                                >
                                    <span className="login-flag">{selectedCountry.flag}</span>
                                    <span className="login-code">{countryCode}</span>
                                    <HiChevronDown size={13} className="login-chevron" />
                                </button>

                                {showDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="login-country-dropdown"
                                    >
                                        {countries.map(c => (
                                            <button
                                                key={c.code}
                                                type="button"
                                                onClick={() => { setCountryCode(c.code); setShowDropdown(false); }}
                                                className={`login-country-option${c.code === countryCode ? " login-country-option--active" : ""}`}
                                            >
                                                <span>{c.flag}</span>
                                                <span className="login-country-name">{c.name}</span>
                                                <span className="login-country-code">{c.code}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </div>

                            {/* Phone input */}
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={t("phoneNumber")}
                                className="login-phone-input"
                            />
                        </div>

                        {isSignUp && (
                            <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder={t("companyName")}
                                className="login-field-input"
                            />
                        )}

                        {/* Continue / Create Account CTA */}
                        <motion.button
                            whileHover={isFormValid ? { scale: 1.015 } : {}}
                            whileTap={isFormValid ? { scale: 0.985 } : {}}
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className={`login-cta-btn${isFormValid ? " login-cta-btn--active" : " login-cta-btn--disabled"}`}
                        >
                            {isSubmitting ? t("processing") : (isSignUp ? t("createAccountBtn") : t("continueBtn"))}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="login-divider">
                        <div className="login-divider-line" />
                        <span className="login-divider-text">{t("orContinueWith")}</span>
                        <div className="login-divider-line" />
                    </div>

                    {/* Social logins */}
                    <div className="login-socials">
                        {[
                            { icon: <HiEnvelope size={18} />, label: "Email" },
                            { icon: <FaGoogle size={16} />, label: "Google" },
                            { icon: <FaApple size={18} />, label: "Apple" },
                        ].map(item => (
                            <motion.button
                                key={item.label}
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="login-social-btn"
                                aria-label={`Sign in with ${item.label}`}
                            >
                                {item.icon}
                            </motion.button>
                        ))}
                    </div>

                    {/* Create account / Switch mode */}
                    <div className="login-create-account">
                        <span className="login-create-text">
                            {isSignUp ? t("alreadyHaveAccount") : t("dontHaveAccount")}
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleToggleMode}
                            className="login-create-btn"
                        >
                            {isSignUp ? t("loginBtn") : t("createAccountBtn")}
                        </motion.button>
                    </div>
                </motion.div>
                </div>{/* /login-form-outer */}

                {/* Footer */}
                <div className="login-footer relative">
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowLangMenu(!showLangMenu)}
                            className="login-footer-lang"
                        >
                            <HiGlobeAlt size={14} />
                            <span className="font-semibold">{language === 'hi' ? "हिंदी (Hindi)" : "Language / भाषा"}</span>
                            <HiChevronDown size={12} />
                        </button>

                        {/* Language Dropdown Menu */}
                        <AnimatePresence>
                            {showLangMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute bottom-9 left-0 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-1.5 w-48"
                                >
                                    <button
                                        type="button"
                                        onClick={() => { setLanguage('hi'); setShowLangMenu(false); }}
                                        className={`w-full px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-between transition-colors ${language === 'hi' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        <span>🇮🇳 हिंदी (Hindi)</span>
                                        {language === 'hi' && <span>✓</span>}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setLanguage('en'); setShowLangMenu(false); }}
                                        className={`w-full px-3 py-2 text-xs font-semibold rounded-lg flex items-center justify-between transition-colors ${language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        <span>🌐 English (Default)</span>
                                        {language === 'en' && <span>✓</span>}
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        type="button"
                        onClick={() => setPolicyModal('privacy')}
                        className="login-footer-link"
                    >
                        {t("privacyPolicy")}
                    </button>
                    <button
                        type="button"
                        onClick={() => setPolicyModal('terms')}
                        className="login-footer-link"
                    >
                        {t("terms")}
                    </button>
                </div>
            </div>

            {/* ── Privacy Policy & Terms Popups / Modals ── */}
            <AnimatePresence>
                {policyModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
                        onClick={() => setPolicyModal(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0, y: 16 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.94, opacity: 0, y: 16 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden text-slate-900"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {policyModal === 'privacy' ? t("privacyPolicy") : t("terms")}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium">Ravynx Trust & Legal Framework</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setPolicyModal(null)}
                                    className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors"
                                >
                                    <HiXMark size={18} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
                                {policyModal === 'privacy' ? (
                                    <>
                                        <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 text-xs font-semibold">
                                            🔒 Ephemeral Memory Processing — Zero Permanent Data Storage
                                        </div>
                                        <p>
                                            <strong>1. Data Isolation:</strong> Ravynx processes all uploaded financial, bank, and legal documents inside isolated memory enclaves. Documents are never ingested to train public AI models.
                                        </p>
                                        <p>
                                            <strong>2. Encryption & Retention:</strong> All PII (Personally Identifiable Information) and document graphics are encrypted using AES-256 in transit and immediately purged post-verification.
                                        </p>
                                        <p>
                                            <strong>3. Regulatory Compliance:</strong> Audit trails maintain tamper-evident cryptographic checksums for NBFC and banking regulatory standards.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <div className="p-3 bg-purple-50 border border-purple-100 rounded-xl text-purple-800 text-xs font-semibold">
                                            📜 Institutional Terms of Service — Authorized Use
                                        </div>
                                        <p>
                                            <strong>1. Authorized Access:</strong> Ravynx is provided for licensed financial institutions, underwriting teams, banks, and authorized audit professionals.
                                        </p>
                                        <p>
                                            <strong>2. Explainable Intelligence:</strong> Anomaly scores and metadata checks assist decision-makers. Final underwriting authority remains with institutionally approved officers.
                                        </p>
                                        <p>
                                            <strong>3. SLA & Support:</strong> 99.99% operational uptime SLA with dedicated enterprise engineering support.
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 border-t border-slate-100 flex justify-end bg-slate-50">
                                <button
                                    type="button"
                                    onClick={() => setPolicyModal(null)}
                                    className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
                                >
                                    Understood & Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

