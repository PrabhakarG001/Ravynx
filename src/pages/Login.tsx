import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Lock, Mail, EyeOff, Eye, ChevronDown, Building2 } from "lucide-react";

export const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col relative overflow-hidden font-[Inter,sans-serif]">
      {/* Decorative Background */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="bg-primary px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Building2 size={22} className="text-white" />
          <span className="text-white font-bold text-sm tracking-wide">Ravynx</span>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock size={24} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
              <p className="text-sm text-muted-foreground mt-1.5">Sign in to the portal</p>
            </div>
            
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Employee Email</label>
                <div className="relative group">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@example.com"
                    className="w-full border border-border rounded-xl px-4 pl-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-background/50 backdrop-blur-sm transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Password</label>
                <div className="relative group">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full border border-border rounded-xl px-4 pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-background/50 backdrop-blur-sm transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-1">
                <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <input type="checkbox" className="accent-blue-600 rounded-sm w-4 h-4" />
                  Remember me
                </label>
                <button type="button" className="text-sm text-blue-600 font-medium hover:underline">Forgot password?</button>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 hover:shadow-lg transition-all text-sm mt-2"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-center text-muted-foreground">
                Access issues? Contact{" "}
                <a href="#" className="text-blue-600 font-medium hover:underline">helpdesk@example.com</a>
              </p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-center mt-6"
          >
            <button onClick={() => navigate("/")} className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronDown size={14} className="rotate-90" /> Back to Home
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
