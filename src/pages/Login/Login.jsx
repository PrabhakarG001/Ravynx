import './Login.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { HiEnvelope, HiChevronDown, HiGlobeAlt } from "react-icons/hi2";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Logo } from "../../components/Logo";

export const Login = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [showDropdown, setShowDropdown] = useState(false);

    // Animated background particles
    const [particles] = useState(() =>
        Array.from({ length: 200 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.3 + 0.05,
        }))
    );

    const handleContinue = (e) => {
        e.preventDefault();
        if (phone.length > 5) {
            navigate("/dashboard");
        }
    };

    const countries = [
        { code: "+91", flag: "🇮🇳", name: "India" },
        { code: "+1", flag: "🇺🇸", name: "United States" },
        { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
        { code: "+61", flag: "🇦🇺", name: "Australia" },
        { code: "+81", flag: "🇯🇵", name: "Japan" },
        { code: "+49", flag: "🇩🇪", name: "Germany" },
        { code: "+33", flag: "🇫🇷", name: "France" },
        { code: "+86", flag: "🇨🇳", name: "China" },
    ];

    const selectedCountry = countries.find(c => c.code === countryCode) || countries[0];
    const isPhoneValid = phone.length > 5;

    return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-[#020617] flex flex-col relative overflow-hidden font-[Inter,sans-serif]">
      
      {/* Animated Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Blue Gradient Aura */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <motion.div
          animate={{ 
            x: [0, -40, 30, 0], 
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[130px]"
        />
        
        {/* Floating Particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-300"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              opacity: [p.opacity, p.opacity * 2, p.opacity],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Top Navbar */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-10 py-5 flex items-center relative z-10"
      >
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <Logo className="text-[20px] text-white" />
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[400px] border border-white/10 rounded-[32px] p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-[28px] font-bold text-white mb-2 tracking-tight">Welcome back</h1>
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Enter the phone number associated with your account
            </p>
          </div>

          {/* Phone Input */}
          <form onSubmit={handleContinue}>
            <div className="flex gap-2 mb-4">
              {/* Country Code Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="h-[46px] px-3 bg-[#1E293B] hover:bg-[#334155] border-none rounded-xl flex items-center gap-1.5 text-white text-sm transition-colors min-w-[85px]"
                >
                  <span className="text-lg">{selectedCountry.flag}</span>
                  <span className="text-[14px] font-medium ml-0.5">{countryCode}</span>
                  <HiChevronDown size={14} className="text-gray-400 ml-auto" />
                </button>

                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-[52px] left-0 w-[220px] bg-[#1E293B] border border-slate-700 rounded-xl shadow-2xl z-50 py-2 max-h-[220px] overflow-y-auto custom-scrollbar"
                  >
                    {countries.map(c => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => { setCountryCode(c.code); setShowDropdown(false); }}
                        className={`w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-[#334155] transition-colors ${c.code === countryCode ? 'bg-[#334155] text-white' : 'text-gray-300'}`}
                      >
                        <span className="text-lg">{c.flag}</span>
                        <span className="flex-1 text-left font-medium text-[13px]">{c.name}</span>
                        <span className="text-gray-400 text-xs">{c.code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="flex-1 h-[46px] bg-[#1E293B] border-none rounded-xl px-3 text-white text-[14px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner min-w-0"
              />
            </div>

            {/* Lost Access Link */}
            <button 
              type="button" 
              className="text-blue-400 text-[13px] font-medium hover:text-blue-300 transition-colors mb-6 block"
            >
              Lost access to my phone number
            </button>

            {/* Continue Button */}
            <motion.button
              whileHover={isPhoneValid ? { scale: 1.02 } : {}}
              whileTap={isPhoneValid ? { scale: 0.98 } : {}}
              type="submit"
              disabled={!isPhoneValid}
              className={`w-full h-[46px] rounded-full text-[14px] font-semibold transition-all duration-300 ${
                isPhoneValid 
                  ? "bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
                  : "bg-[#1E293B] text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-gray-400 text-[12px]">or continue with</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Social Logins */}
          <div className="flex justify-center gap-6 mb-6">
            {[
              { icon: <HiEnvelope size={20} />, label: "Email" },
              { icon: <FaGoogle size={18} />, label: "Google" },
              { icon: <FaApple size={20} />, label: "Apple" },
            ].map(item => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-[#1E293B] flex items-center justify-center text-gray-300 group-hover:bg-[#334155] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                  {item.icon}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Create Account */}
          <div className="text-center mt-4">
            <p className="text-gray-400 text-[13px] mb-3">Don't have an account?</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
              className="w-full h-[46px] bg-transparent border border-slate-700 hover:border-slate-500 rounded-full text-white text-[14px] font-medium transition-all duration-300"
            >
              Create account
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 px-6 md:px-10 py-5 flex items-center gap-6 text-[13px] text-gray-400"
      >
        <button className="flex items-center gap-1.5 hover:text-gray-200 transition-colors">
          <HiGlobeAlt size={14} />
          <span>English</span>
          <HiChevronDown size={12} />
        </button>
        <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
      </motion.div>
    </div>
    );
};
