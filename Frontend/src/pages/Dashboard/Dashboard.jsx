import './Dashboard.css';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HiDocumentText,
  HiShieldExclamation,
  HiShieldCheck,
  HiClock,
  HiArrowTrendingUp,
  HiArrowTrendingDown,
} from "react-icons/hi2";
import { 
  LineChart, Line, 
  BarChart, Bar, 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from "recharts";
import { getKpisApi, getDocumentsApi } from '../../services/api';

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

const defaultActivity = [
  { id: "DOC-8923", status: "Fraud", time: "2 mins ago", user: "johndoe@email.com" },
  { id: "DOC-8922", status: "Verified", time: "15 mins ago", user: "sarah.m@email.com" },
  { id: "DOC-8921", status: "Flagged", time: "1 hour ago", user: "mike.w@email.com" },
  { id: "DOC-8920", status: "Verified", time: "2 hours ago", user: "anna.k@email.com" },
];

const statusStyles = {
  Safe:   { badge: "db-badge db-badge--safe",   icon: "bg-emerald-50 text-emerald-600" },
  Verified: { badge: "db-badge db-badge--safe", icon: "bg-emerald-50 text-emerald-600" },
  Fraud:  { badge: "db-badge db-badge--fraud",  icon: "bg-red-50 text-red-600" },
  Rejected: { badge: "db-badge db-badge--fraud", icon: "bg-red-50 text-red-600" },
  Review: { badge: "db-badge db-badge--review", icon: "bg-amber-50 text-amber-600" },
  Flagged: { badge: "db-badge db-badge--review", icon: "bg-amber-50 text-amber-600" },
  Pending: { badge: "db-badge db-badge--review", icon: "bg-blue-50 text-blue-600" },
};

export const Dashboard = () => {
  const [activeChart, setActiveChart] = useState('distribution');
  const [kpis, setKpis] = useState(null);
  const [recentDocs, setRecentDocs] = useState([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const kpiRes = await getKpisApi();
        if (kpiRes.success) {
          setKpis(kpiRes.kpis);
        }
      } catch (e) {
        console.warn('Dashboard KPIs loaded default mock');
      }

      try {
        const docRes = await getDocumentsApi();
        if (docRes.success && docRes.documents) {
          setRecentDocs(docRes.documents.slice(0, 5));
        }
      } catch (e) {
        console.warn('Dashboard Documents loaded default mock');
      }
    };

    loadDashboardData();
  }, []);

  const activityList = recentDocs.length > 0
    ? recentDocs.map(d => ({
        id: d._id ? `DOC-${d._id.slice(-4).toUpperCase()}` : (d.title || 'DOC-1001'),
        status: d.status || 'Verified',
        time: d.createdAt ? new Date(d.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
        user: d.borrowerName || d.title || 'underwriter@ravynx.ai',
      }))
    : defaultActivity;


  const statCards = [
    {
      icon: HiDocumentText,
      label: "Total Docs",
      value: kpis ? kpis.totalDocuments : "1,248",
      change: "+12%",
      up: true,
      accent: "#6366f1",
      bg: "#eef2ff",
    },
    {
      icon: HiShieldExclamation,
      label: "Fraud Cases",
      value: kpis ? kpis.flaggedCount + kpis.rejectedCount : "34",
      change: kpis ? `${kpis.fraudDetectionRate}` : "+3",
      up: false,
      accent: "#ef4444",
      bg: "#fef2f2",
    },
    {
      icon: HiShieldCheck,
      label: "Safe Cases",
      value: kpis ? kpis.verifiedCount : "1,150",
      change: "+98%",
      up: true,
      accent: "#10b981",
      bg: "#ecfdf5",
    },
    {
      icon: HiClock,
      label: "Avg Time",
      value: kpis ? `${kpis.avgProcessingTimeSec}s` : "3.2s",
      change: "-18%",
      up: true,
      accent: "#f59e0b",
      bg: "#fffbeb",
    },
  ];


  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="db-header">
        <div>
          <h1 className="db-title">Workspace Overview</h1>
          <p className="db-subtitle">Welcome back, Prabhakar — here's what's happening today.</p>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="dashboard-hero">
        <img
          src="/assets/dashboard_hero.jpg"
          alt="Hero Background"
          className="dashboard-cls-3"
        />
        <div className="dashboard-cls-4" />
        <div className="dashboard-hero-content">
          <h1 className="dashboard-hero-title">Automate Document Verification</h1>
          <p className="dashboard-hero-text">
            Instantly scan documents, flag fraudulent activity, and clear your review queue with the Ravynx Aegis Core. Process your first 500 documents for free.
          </p>
          <div className="dashboard-cls-5">
            <button className="db-hero-btn">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <h2 className="db-section-label">Overview</h2>
      <div className="db-stats-grid">
        {statCards.map((card) => {
          const Icon = card.icon;
          const TrendIcon = card.up ? HiArrowTrendingUp : HiArrowTrendingDown;
          return (
            <motion.div
              key={card.label}
              whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgba(0,0,0,0.09)" }}
              transition={{ duration: 0.2 }}
              className="db-stat-card"
              style={{ borderTopColor: card.accent }}
            >
              <div className="db-stat-top">
                <div className="db-stat-icon-wrap" style={{ background: card.bg }}>
                  <Icon className="db-stat-icon" style={{ color: card.accent }} />
                </div>
                <span className="db-stat-label">{card.label}</span>
              </div>
              <div className="db-stat-bottom">
                <span className="db-stat-value">{card.value}</span>
                <span className={`db-stat-change${card.up ? " db-stat-change--up" : " db-stat-change--down"}`}>
                  <TrendIcon className="db-stat-trend-icon" />
                  {card.change}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts + Activity */}
      <div className="db-lower-grid">

        {/* Analytics Card */}
        <div className="db-chart-card">
          <div className="db-card-header">
            <h3 className="db-card-title">Analytics Overview</h3>
            <div className="db-chart-tabs">
              {[
                { id: 'distribution', label: 'Risk Distribution' },
                { id: 'trend',        label: 'Fraud Trend' },
                { id: 'monthly',      label: 'Monthly' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChart(tab.id)}
                  className={`db-tab${activeChart === tab.id ? " db-tab--active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="db-chart-area">
            <AnimatePresence mode="wait">
              {activeChart === 'trend' && (
                <motion.div key="trend" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="db-chart-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={fraudTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <Tooltip contentStyle={{ borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                      <Line type="monotone" dataKey="fraud" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4, fill: '#ef4444', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
              {activeChart === 'monthly' && (
                <motion.div key="monthly" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="db-chart-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                      <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                      <Bar dataKey="docs" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
              {activeChart === 'distribution' && (
                <motion.div key="dist" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="db-chart-inner">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={riskDistData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={3} dataKey="value">
                        {riskDistData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {activeChart === 'distribution' && (
            <div className="db-legend">
              {riskDistData.map((entry, index) => (
                <div key={entry.name} className="db-legend-item">
                  <div className="db-legend-dot" style={{ backgroundColor: COLORS[index] }} />
                  <span className="db-legend-label">{entry.name}</span>
                  <span className="db-legend-value">{entry.value}%</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="db-activity-card">
          <div className="db-card-header">
            <h3 className="db-card-title">Recent Activity</h3>
            <button className="db-view-all">View all</button>
          </div>
          <div className="db-activity-list">
            {activityList.map((activity, idx) => {
              const s = statusStyles[activity.status] || statusStyles.Verified;
              return (

                <div key={idx} className="db-activity-row">
                  <div className="db-activity-left">
                    <div className={`db-activity-avatar ${s.icon}`}>
                      <HiDocumentText className="db-activity-avatar-icon" />
                    </div>
                    <div>
                      <p className="db-activity-id">{activity.id}</p>
                      <p className="db-activity-user">{activity.user}</p>
                    </div>
                  </div>
                  <div className="db-activity-right">
                    <span className={s.badge}>{activity.status}</span>
                    <span className="db-activity-time">{activity.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
