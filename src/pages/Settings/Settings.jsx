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
    <div className="settings-cls-1">
      <h1 className="settings-cls-2">
        Settings
      </h1>

      <div className="settings-cls-3">
        {/* Settings Sidebar */}
        <div className="settings-cls-4">
          <nav className="settings-cls-5">
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
        <div className="settings-cls-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="settings-cls-7"
            >
              {activeTab === "Notifications" && (
                <div className="settings-cls-8">
                  <div>
                    <h2 className="settings-cls-9">Notification Settings</h2>
                    <p className="settings-cls-10">Control how and when you want to be alerted.</p>
                  </div>
                  <hr className="settings-cls-11" />
                  
                  <div className="settings-cls-12">
                    <div className="settings-cls-13">
                      <div>
                        <p className="settings-cls-14">Processing Complete Alerts</p>
                        <p className="settings-cls-15">Receive an email immediately when a batch finishes processing.</p>
                      </div>
                      <label className="settings-cls-16">
                        <input type="checkbox" className="settings-cls-17" defaultChecked />
                        <div className="settings-cls-18"></div>
                      </label>
                    </div>
                    
                    <div className="settings-cls-19">
                      <div>
                        <p className="settings-cls-20">Weekly Summary</p>
                        <p className="settings-cls-21">Get a weekly digest of your risk analytics and audit logs.</p>
                      </div>
                      <label className="settings-cls-22">
                        <input type="checkbox" className="settings-cls-23" />
                        <div className="settings-cls-24"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Security" && (
                <div className="settings-cls-25">
                  <div>
                    <h2 className="settings-cls-26">Account Security</h2>
                    <p className="settings-cls-27">Keep your account safe and manage authentication.</p>
                  </div>
                  <hr className="settings-cls-28" />
                  
                  <div className="settings-cls-29">
                    <div>
                      <p className="settings-cls-30">Password</p>
                      <p className="settings-cls-31">Last changed 3 months ago.</p>
                    </div>
                    <button className="settings-cls-32">
                      Update Password
                    </button>
                  </div>

                  <div className="settings-cls-33">
                    <div>
                      <p className="settings-cls-34">Two-Factor Authentication</p>
                      <p className="settings-cls-35">Add an extra layer of security to your account.</p>
                    </div>
                    <button className="settings-cls-36">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "Advanced" && (
                <div className="settings-cls-37">
                  <div>
                    <h2 className="settings-cls-38">Danger Zone</h2>
                    <p className="settings-cls-39">Irreversible actions for your account.</p>
                  </div>
                  <hr className="settings-cls-40" />
                  
                  <div className="settings-cls-41">
                    <h3 className="settings-cls-42">Delete Account</h3>
                    <p className="settings-cls-43">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="settings-cls-44">
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
