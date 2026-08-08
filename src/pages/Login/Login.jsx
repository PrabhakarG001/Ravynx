import './Login.css';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { HiEnvelope, HiChevronDown, HiGlobeAlt } from "react-icons/hi2";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Logo } from '../../components/Logo/Logo';

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
    <div className="login-cls-1">
      
      {/* Animated Background Effect */}
      <div className="login-cls-2">
        {/* Top-Left Blue Gradient Aura */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="login-cls-3"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <motion.div
          animate={{ 
            x: [0, -40, 30, 0], 
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="login-cls-4"
        />
        
        {/* Floating Particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="login-cls-5"
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
          className="login-cls-6"
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
        className="login-cls-7"
      >
        <div className="login-cls-8" onClick={() => navigate("/")}>
          <Logo className="login-cls-9" />
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="login-cls-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="login-cls-11"
        >
          {/* Heading */}
          <div className="login-cls-12">
            <h1 className="login-cls-13">Welcome back</h1>
            <p className="login-cls-14">
              Enter the phone number associated with your account
            </p>
          </div>

          {/* Phone Input */}
          <form onSubmit={handleContinue}>
            <div className="login-cls-15">
              {/* Country Code Selector */}
              <div className="login-cls-16">
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="login-cls-17"
                >
                  <span className="login-cls-18">{selectedCountry.flag}</span>
                  <span className="login-cls-19">{countryCode}</span>
                  <HiChevronDown size={14} className="login-cls-20" />
                </button>

                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="login-cls-21"
                  >
                    {countries.map(c => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => { setCountryCode(c.code); setShowDropdown(false); }}
                        className={`w-full px-4 py-2 flex items-center gap-2 text-sm hover:bg-[#334155] transition-colors ${c.code === countryCode ? 'bg-[#334155] text-white' : 'text-gray-300'}`}
                      >
                        <span className="login-cls-22">{c.flag}</span>
                        <span className="login-cls-23">{c.name}</span>
                        <span className="login-cls-24">{c.code}</span>
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
                className="login-cls-25"
              />
            </div>

            {/* Lost Access Link */}
            <button 
              type="button" 
              className="login-cls-26"
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
          <div className="login-cls-27">
            <div className="login-cls-28" />
            <span className="login-cls-29">or continue with</span>
            <div className="login-cls-30" />
          </div>

          {/* Social Logins */}
          <div className="login-cls-31">
            {[
              { icon: <HiEnvelope size={20} />, label: "Email" },
              { icon: <FaGoogle size={18} />, label: "Google" },
              { icon: <FaApple size={20} />, label: "Apple" },
            ].map(item => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="login-cls-32"
              >
                <div className="login-cls-33">
                  {item.icon}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Create Account */}
          <div className="login-cls-34">
            <p className="login-cls-35">Don't have an account?</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
              className="login-cls-36"
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
        className="login-cls-37"
      >
        <button className="login-cls-38">
          <HiGlobeAlt size={14} />
          <span>English</span>
          <HiChevronDown size={12} />
        </button>
        <a href="#" className="login-cls-39">Privacy Policy</a>
      </motion.div>
    </div>
    );
};
