import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiGlobeAlt, HiChevronDown } from "react-icons/hi2";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageSelector = ({ variant = "light", className = "" }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = variant === "dark";

  return (
    <div className={`relative inline-block text-left z-50 ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 shadow-sm border ${
          isDark
            ? "bg-white/10 text-white border-white/20 hover:bg-white/20"
            : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
        }`}
        aria-label="Change Language"
      >
        <HiGlobeAlt className={`w-4 h-4 ${isDark ? "text-sky-400" : "text-blue-600"}`} />
        <span>{language === "hi" ? "🇮🇳 हिंदी" : "🇺🇸 English"}</span>
        <HiChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden p-1 text-slate-800"
          >
            <button
              type="button"
              onClick={() => {
                setLanguage("en");
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                language === "en" ? "bg-blue-50 text-blue-600" : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              <span className="flex items-center gap-2">🇺🇸 English</span>
              {language === "en" && <span className="font-bold">✓</span>}
            </button>

            <button
              type="button"
              onClick={() => {
                setLanguage("hi");
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                language === "hi" ? "bg-blue-50 text-blue-600" : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              <span className="flex items-center gap-2">🇮🇳 हिंदी (Hindi)</span>
              {language === "hi" && <span className="font-bold">✓</span>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
