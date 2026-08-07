import './Settings.css';
import React, { useState } from "react";
import { HiOutlineUser, HiOutlineBell, HiOutlineShieldCheck, HiOutlineCog8Tooth } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export const Settings = () => {
  const [activeTab, setActiveTab] = useState("Notifications");

  const tabs = [
    { id: "Notifications", icon: HiOutlineBell, label: "Notifications" },
    { id: "Security", icon: HiOutlineShieldCheck, label: "Security" },
    { id: "Advanced", icon: HiOutlineCog8Tooth, label: "Advanced" },
  ];

  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto w-full mt-4">
      <h1 className="text-[32px] font-semibold text-[#1a1f36] mb-8 tracking-tight">
        Settings
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-col gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all ${
                    isActive 
                      ? "bg-[#f2f8ff] text-[#0066cc]" 
                      : "text-[#3c4257] hover:bg-gray-100"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${isActive ? "text-[#0066cc]" : "text-gray-500"}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white border border-[#e3e8ee] rounded-xl shadow-sm min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="p-8"
            >
              {activeTab === "Notifications" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-[18px] font-semibold text-[#1a1f36] mb-1">Notification Settings</h2>
                    <p className="text-[14px] text-gray-500">Control how and when you want to be alerted.</p>
                  </div>
                  <hr className="border-[#e3e8ee]" />
                  
                  <div className="space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[14px] font-medium text-[#1a1f36]">Processing Complete Alerts</p>
                        <p className="text-[13px] text-gray-500 mt-0.5">Receive an email immediately when a batch finishes processing.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#635BFF]"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[14px] font-medium text-[#1a1f36]">Weekly Summary</p>
                        <p className="text-[13px] text-gray-500 mt-0.5">Get a weekly digest of your risk analytics and audit logs.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#635BFF]"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Security" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-[18px] font-semibold text-[#1a1f36] mb-1">Account Security</h2>
                    <p className="text-[14px] text-gray-500">Keep your account safe and manage authentication.</p>
                  </div>
                  <hr className="border-[#e3e8ee]" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div>
                      <p className="text-[14px] font-medium text-[#1a1f36]">Password</p>
                      <p className="text-[13px] text-gray-500">Last changed 3 months ago.</p>
                    </div>
                    <button className="bg-white border border-[#d1d5db] hover:bg-gray-100 text-[#3c4257] font-medium text-[13px] px-4 py-2 rounded transition-colors shadow-sm">
                      Update Password
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div>
                      <p className="text-[14px] font-medium text-[#1a1f36]">Two-Factor Authentication</p>
                      <p className="text-[13px] text-gray-500">Add an extra layer of security to your account.</p>
                    </div>
                    <button className="bg-[#1a1f36] hover:bg-black text-white font-medium text-[13px] px-4 py-2 rounded transition-colors shadow-sm">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Advanced" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-[18px] font-semibold text-red-600 mb-1">Danger Zone</h2>
                    <p className="text-[14px] text-gray-500">Irreversible actions for your account.</p>
                  </div>
                  <hr className="border-[#e3e8ee]" />
                  
                  <div className="border border-red-200 rounded-lg p-5 bg-red-50/30">
                    <h3 className="text-[15px] font-medium text-[#1a1f36] mb-1">Delete Account</h3>
                    <p className="text-[13px] text-gray-500 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="bg-white border border-red-200 text-red-600 hover:bg-red-50 font-medium text-[13px] px-4 py-2 rounded transition-colors">
                      Delete my account
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
