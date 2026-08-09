import './Login.css';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { HiEnvelope, HiChevronDown, HiGlobeAlt, HiShieldCheck, HiDocumentCheck, HiChartBar } from "react-icons/hi2";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Logo } from '../../components/Logo/Logo';

export const Login = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleContinue = (e) => {
        e.preventDefault();
        if (phone.length > 5) {
            navigate("/dashboard");
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
    const isPhoneValid = phone.length > 5;

    const trustPoints = [
        { icon: HiShieldCheck,       label: "Bank-Grade Security" },
        { icon: HiDocumentCheck,     label: "AI Document Verification" },
        { icon: HiChartBar,          label: "Real-Time Risk Scoring" },
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
                            AI-Powered Document<br />Verification Platform
                        </h2>
                        <p className="login-left-sub">
                            Instantly verify financial documents, detect fraud, and generate risk scores for faster, safer lending decisions.
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
                        Trusted by leading NBFCs and financial institutions
                    </p>
                </div>
            </div>

            {/* ── Right Panel (Login Form) ── */}
            <div className="login-right-panel">
                {/* Top nav for mobile */}
                <div className="login-mobile-nav">
                    <div className="cursor-pointer" onClick={() => navigate("/")}>
                        <Logo className="login-logo-dark" />
                    </div>
                </div>

                <div className="login-form-outer">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="login-form-card"
                >
                    {/* Heading */}
                    <div className="login-heading-wrap">
                        <h1 className="login-heading">Welcome back</h1>
                        <p className="login-subheading">
                            Enter the phone number associated with your account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleContinue} className="login-form">
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone number"
                                className="login-phone-input"
                            />
                        </div>

                        {/* Lost access */}
                        <button type="button" className="login-lost-access">
                            Lost access to my phone number
                        </button>

                        {/* Continue */}
                        <motion.button
                            whileHover={isPhoneValid ? { scale: 1.015 } : {}}
                            whileTap={isPhoneValid ? { scale: 0.985 } : {}}
                            type="submit"
                            disabled={!isPhoneValid}
                            className={`login-cta-btn${isPhoneValid ? " login-cta-btn--active" : " login-cta-btn--disabled"}`}
                        >
                            Continue
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="login-divider">
                        <div className="login-divider-line" />
                        <span className="login-divider-text">or continue with</span>
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

                    {/* Create account */}
                    <div className="login-create-account">
                        <span className="login-create-text">Don't have an account?</span>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigate("/login")}
                            className="login-create-btn"
                        >
                            Create account
                        </motion.button>
                    </div>
                </motion.div>
                </div>{/* /login-form-outer */}

                {/* Footer */}
                <div className="login-footer">
                    <button className="login-footer-lang">
                        <HiGlobeAlt size={13} />
                        <span>English</span>
                        <HiChevronDown size={11} />
                    </button>
                    <a href="#" className="login-footer-link">Privacy Policy</a>
                    <a href="#" className="login-footer-link">Terms</a>
                </div>
            </div>
        </div>
    );
};
