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
    <div className="dashboard-container">
      {/* Top Header */}
      <div className="dashboard-cls-1">
        <h1 className="dashboard-cls-2">Workspace Overview</h1>
      </div>

      {/* Hero Banner */}
      <div className="dashboard-hero">
        <img 
          src="/assets/dashboard_hero.jpg" 
          alt="Hero Background" 
          className="dashboard-cls-3" 
        />
        <div className="dashboard-cls-4"></div>
        
        <div className="dashboard-hero-content">
          <h1 className="dashboard-hero-title">Automate Document Verification</h1>
          <p className="dashboard-hero-text">
            Instantly scan documents, flag fraudulent activity, and clear your review queue with the Ravynx Aegis Core. Process your first 500 documents for free.
          </p>
          <div className="dashboard-cls-5">
            <button className="dashboard-cls-6">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats Grid */}
      <h2 className="dashboard-cls-7">Overview</h2>
      <div className="dashboard-grid dashboard-grid-cols-4">
        <div className="dashboard-cls-8">
          <div className="dashboard-cls-9">
            <div className="dashboard-cls-10">
              <HiDocumentText className="dashboard-cls-11" />
            </div>
            <span className="dashboard-cls-12">Total Docs</span>
          </div>
          <div className="dashboard-cls-13">1,248</div>
        </div>
        
        <div className="dashboard-cls-14">
          <div className="dashboard-cls-15">
            <div className="dashboard-cls-16">
              <HiShieldExclamation className="dashboard-cls-17" />
            </div>
            <span className="dashboard-cls-18">Fraud Cases</span>
          </div>
          <div className="dashboard-cls-19">32</div>
        </div>

        <div className="dashboard-cls-20">
          <div className="dashboard-cls-21">
            <div className="dashboard-cls-22">
              <HiShieldCheck className="dashboard-cls-23" />
            </div>
            <span className="dashboard-cls-24">Safe Cases</span>
          </div>
          <div className="dashboard-cls-25">1,150</div>
        </div>

        <div className="dashboard-cls-26">
          <div className="dashboard-cls-27">
            <div className="dashboard-cls-28">
              <HiClock className="dashboard-cls-29" />
            </div>
            <span className="dashboard-cls-30">Pending</span>
          </div>
          <div className="dashboard-cls-31">66</div>
        </div>
      </div>

      <div className="dashboard-cls-32">
        {/* Main Content Area */}
        <div className="dashboard-cls-33">
          
          {/* Charts Card */}
          <div className="dashboard-cls-34">
            <div className="dashboard-cls-35">
              <h3 className="dashboard-cls-36">Analytics Overview</h3>
              <div className="dashboard-cls-37">
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

            <div className="dashboard-cls-38">
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
              <div className="dashboard-cls-39">
                {riskDistData.map((entry, index) => (
                  <div key={entry.name} className="dashboard-cls-40">
                    <div className="dashboard-cls-41" style={{backgroundColor: COLORS[index]}}></div>
                    <span className="dashboard-cls-42">{entry.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Activity Card */}
          <div className="dashboard-cls-43">
            <div className="dashboard-cls-44">
              <h3 className="dashboard-cls-45">Recent Activity</h3>
              <button className="dashboard-cls-46">View all</button>
            </div>
            <div className="dashboard-cls-47">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="dashboard-cls-48">
                  <div className="dashboard-cls-49">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'Safe' ? 'bg-emerald-50 text-emerald-600' :
                      activity.status === 'Fraud' ? 'bg-red-50 text-red-600' :
                      'bg-amber-50 text-amber-600'
                    }`}>
                      <HiDocumentText className="dashboard-cls-50" />
                    </div>
                    <div>
                      <p className="dashboard-cls-51">{activity.id}</p>
                      <p className="dashboard-cls-52">{activity.user}</p>
                    </div>
                  </div>
                  <div className="dashboard-cls-53">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      activity.status === 'Safe' ? 'bg-emerald-100 text-emerald-700' :
                      activity.status === 'Fraud' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {activity.status}
                    </span>
                    <span className="dashboard-cls-54">{activity.time}</span>
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
