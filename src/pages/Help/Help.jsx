import './Help.css';
import React, { useState } from "react";
import { HiOutlineCodeBracket, HiOutlineEnvelope, HiOutlineLink } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export const Help = () => {
  const [showDevs, setShowDevs] = useState(false);

  const developers = [
    {
      name: "Prabhakar Sahu",
      role: "Lead Full-Stack Engineer",
      email: "agadityag465@gmail.com",
      github: "github.com/prabhakar",
      initials: "PS",
      color: "bg-[#00897b]"
    },
    {
      name: "Saksham Varshney",
      role: "AI & Machine Learning",
      email: "saksham@ravynx.com",
      github: "github.com/saksham",
      initials: "SV",
      color: "bg-[#635BFF]"
    }
  ];

  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto w-full mt-4">
      <div className="mb-10">
        <h1 className="text-[32px] font-semibold text-[#1a1f36] tracking-tight mb-4">
          Get Help
        </h1>
        <div className="prose prose-sm text-[#3c4257] max-w-none">
          <p className="text-[15px] leading-relaxed mb-4">
            Welcome to the Ravynx Support Center. If you are experiencing issues with document processing, risk analytics, or API integrations, our documentation provides comprehensive guides and troubleshooting steps. 
          </p>
          <p className="text-[15px] leading-relaxed mb-6">
            For critical system failures or custom API integration assistance, you can directly connect with our core engineering team. They can help you debug complex issues or configure your workspace for optimal performance.
          </p>
        </div>

        {!showDevs && (
          <button 
            onClick={() => setShowDevs(true)}
            className="bg-[#635BFF] hover:bg-[#0A2540] text-white font-medium text-[14px] px-5 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          >
            <HiOutlineCodeBracket className="w-5 h-5" />
            Connect to Developers
          </button>
        )}
      </div>

      <AnimatePresence>
        {showDevs && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 border-t border-[#e3e8ee] pt-10"
          >
            <h2 className="text-[20px] font-semibold text-[#1a1f36] mb-6">Engineering Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developers.map((dev, idx) => (
                <div key={idx} className="bg-white border border-[#e3e8ee] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${dev.color} text-white flex items-center justify-center text-lg font-bold`}>
                      {dev.initials}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#1a1f36]">{dev.name}</h3>
                      <p className="text-[13px] text-[#635BFF] font-medium">{dev.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6 border-t border-[#e3e8ee] pt-4">
                    <div className="flex items-center gap-3 text-[14px] text-[#3c4257]">
                      <HiOutlineEnvelope className="w-4 h-4 text-gray-400" />
                      {dev.email}
                    </div>
                    <div className="flex items-center gap-3 text-[14px] text-[#3c4257]">
                      <HiOutlineLink className="w-4 h-4 text-gray-400" />
                      <a href={`https://${dev.github}`} target="_blank" rel="noreferrer" className="hover:text-[#635BFF] hover:underline transition-colors">
                        {dev.github}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
