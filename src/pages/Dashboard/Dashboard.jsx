import './Dashboard.css';
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiDocumentText,
  HiShieldExclamation,
  HiShieldCheck,
  HiClock,
  HiOutlineArrowUpTray,
  HiOutlineChartBar,
  HiOutlineUserPlus,
  HiOutlineBell
} from "react-icons/hi2";
import { 
  LineChart, Line, 
  BarChart, Bar, 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";

const fraudTrendData = [
  { name: 'Mon', fraud: 4 },
  { name: 'Tue', fraud: 7 },
  { name: 'Wed', fraud: 3 },
  { name: 'Thu', fraud: 8 },
  { name: 'Fri', fraud: 5 },
  { name: 'Sat', fraud: 2 },
  { name: 'Sun', fraud: 4 },
];

const monthlyData = [
  { name: 'Jan', docs: 400 },
  { name: 'Feb', docs: 300 },
  { name: 'Mar', docs: 550 },
  { name: 'Apr', docs: 480 },
  { name: 'May', docs: 600 },
  { name: 'Jun', docs: 750 },
];

const riskDistData = [
  { name: 'Safe', value: 75 },
  { name: 'Review', value: 15 },
  { name: 'Fraud', value: 10 },
];
const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

const recentActivity = [
  { id: "DOC-8923", status: "Fraud", time: "2 mins ago", user: "johndoe@email.com" },
  { id: "DOC-8922", status: "Safe", time: "15 mins ago", user: "sarah.m@email.com" },
  { id: "DOC-8921", status: "Review", time: "1 hour ago", user: "mike.w@email.com" },
  { id: "DOC-8920", status: "Safe", time: "2 hours ago", user: "anna.k@email.com" },
];

export const Dashboard = () => {
  const [activeChart, setActiveChart] = useState('distribution');

  return (
    <div className="p-8 md:p-12 max-w-[1200px] mx-auto w-full">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[24px] font-bold text-[#1a1f36]">Workspace Overview</h1>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-12 shadow-sm flex items-center px-10 border border-[#1a1f36]/10">
        <img 
          src="/assets/dashboard_hero.jpg" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001b33]/90 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-[32px] font-bold mb-3 tracking-tight">Automate Document Verification</h1>
          <p className="text-[16px] text-gray-200 mb-6 font-medium leading-relaxed">
            Instantly scan documents, flag fraudulent activity, and clear your review queue with the Ravynx Aegis Core. Process your first 500 documents for free.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-white text-[#001b33] px-6 py-2.5 rounded font-bold text-[14px] hover:bg-gray-100 transition-colors shadow-sm">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats Grid - Moved below Hero Banner */}
      <h2 className="text-[18px] font-semibold text-[#1a1f36] mb-4">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border border-[#e3e8ee] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <HiDocumentText className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">Total Docs</span>
          </div>
          <div className="text-[28px] font-bold text-[#1a1f36]">1,248</div>
        </div>
        
        <div className="bg-white border border-[#e3e8ee] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center border border-red-100">
              <HiShieldExclamation className="w-5 h-5 text-red-500" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">Fraud Cases</span>
          </div>
          <div className="text-[28px] font-bold text-[#1a1f36]">32</div>
        </div>

        <div className="bg-white border border-[#e3e8ee] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
              <HiShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">Safe Cases</span>
          </div>
          <div className="text-[28px] font-bold text-[#1a1f36]">1,150</div>
        </div>

        <div className="bg-white border border-[#e3e8ee] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
              <HiClock className="w-5 h-5 text-amber-500" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-500">Pending</span>
          </div>
          <div className="text-[28px] font-bold text-[#1a1f36]">66</div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Main Content Area */}
        <div className="w-full">
          
          {/* Charts Card */}
          <div className="bg-white border border-[#e3e8ee] rounded-2xl p-8 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[20px] font-semibold text-[#1a1f36]">Analytics Overview</h3>
              <div className="flex gap-2 bg-gray-50 p-1 rounded-lg border border-gray-100">
                <button 
                  onClick={() => setActiveChart('distribution')}
                  className={`px-3 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${activeChart === 'distribution' ? 'bg-white shadow-sm text-[#1a1f36]' : 'text-gray-500 hover:text-[#1a1f36]'}`}
                >
                  Risk Distribution
                </button>
                <button 
                  onClick={() => setActiveChart('trend')}
                  className={`px-3 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${activeChart === 'trend' ? 'bg-white shadow-sm text-[#1a1f36]' : 'text-gray-500 hover:text-[#1a1f36]'}`}
                >
                  Fraud Trend
                </button>
                <button 
                  onClick={() => setActiveChart('monthly')}
                  className={`px-3 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${activeChart === 'monthly' ? 'bg-white shadow-sm text-[#1a1f36]' : 'text-gray-500 hover:text-[#1a1f36]'}`}
                >
                  Monthly Analysis
                </button>
              </div>
            </div>

            <div className="h-[280px] w-full">
              {activeChart === 'trend' && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={fraudTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e8ee" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Line type="monotone" dataKey="fraud" stroke="#ef4444" strokeWidth={3} dot={{r: 4, fill: '#ef4444', strokeWidth: 0}} activeDot={{r: 6}} />
                  </LineChart>
                </ResponsiveContainer>
              )}
              {activeChart === 'monthly' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e8ee" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                    <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="docs" fill="#635BFF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
              {activeChart === 'distribution' && (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskDistData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {riskDistData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
            
            {/* Legend for Pie Chart */}
            {activeChart === 'distribution' && (
              <div className="flex justify-center gap-6 mt-4">
                {riskDistData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[index]}}></div>
                    <span className="text-[13px] text-[#3c4257] font-medium">{entry.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white border border-[#e3e8ee] rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[20px] font-semibold text-[#1a1f36]">Recent Activity</h3>
              <button className="text-[13px] text-[#0066cc] font-medium hover:underline">View all</button>
            </div>
            <div className="divide-y divide-[#e3e8ee]">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'Safe' ? 'bg-emerald-50 text-emerald-600' :
                      activity.status === 'Fraud' ? 'bg-red-50 text-red-600' :
                      'bg-amber-50 text-amber-600'
                    }`}>
                      <HiDocumentText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#1a1f36]">{activity.id}</p>
                      <p className="text-[12px] text-gray-500">{activity.user}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      activity.status === 'Safe' ? 'bg-emerald-100 text-emerald-700' :
                      activity.status === 'Fraud' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {activity.status}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
