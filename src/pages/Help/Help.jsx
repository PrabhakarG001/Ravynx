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
    <div className="help-cls-1">
      <div className="help-cls-2">
        <h1 className="help-cls-3">
          Get Help
        </h1>
        <div className="help-cls-4">
          <p className="help-cls-5">
            Welcome to the Ravynx Support Center. If you are experiencing issues with document processing, risk analytics, or API integrations, our documentation provides comprehensive guides and troubleshooting steps. 
          </p>
          <p className="help-cls-6">
            For critical system failures or custom API integration assistance, you can directly connect with our core engineering team. They can help you debug complex issues or configure your workspace for optimal performance.
          </p>
        </div>

        {!showDevs && (
          <button 
            onClick={() => setShowDevs(true)}
            className="help-cls-7"
          >
            <HiOutlineCodeBracket className="help-cls-8" />
            Connect to Developers
          </button>
        )}
      </div>

      <AnimatePresence>
        {showDevs && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="help-cls-9"
          >
            <h2 className="help-cls-10">Engineering Team</h2>
            
            <div className="help-cls-11">
              {developers.map((dev, idx) => (
                <div key={idx} className="help-cls-12">
                  <div className="help-cls-13">
                    <div className={`w-12 h-12 rounded-full ${dev.color} text-white flex items-center justify-center text-lg font-bold`}>
                      {dev.initials}
                    </div>
                    <div>
                      <h3 className="help-cls-14">{dev.name}</h3>
                      <p className="help-cls-15">{dev.role}</p>
                    </div>
                  </div>
                  
                  <div className="help-cls-16">
                    <div className="help-cls-17">
                      <HiOutlineEnvelope className="help-cls-18" />
                      {dev.email}
                    </div>
                    <div className="help-cls-19">
                      <HiOutlineLink className="help-cls-20" />
                      <a href={`https://${dev.github}`} target="_blank" rel="noreferrer" className="help-cls-21">
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
