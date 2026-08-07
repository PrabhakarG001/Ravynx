import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, } from "recharts";
import { HiDocumentText, HiExclamationTriangle, HiCheckCircle, HiClock, HiExclamationCircle, HiArrowTrendingUp, HiChevronRight } from "react-icons/hi2";
import { StatCard } from "../components/cards/StatCard";
import { Badge } from "../components/common/Badge";
import { monthlyData, riskTypeData, COLORS } from "../utils/mockData";
export const Dashboard = () => {
    const navigate = useNavigate();
    const activity = [
        { doc: "APP-2026-1021", applicant: "Ramesh Kumar Gupta", type: "Mortgage", analyst: "Priya M.", risk: "high", status: "Flagged", time: "14:32" },
        { doc: "APP-2026-1020", applicant: "Sunita Verma", type: "Personal Loan", analyst: "Arjun K.", risk: "low", status: "Approved", time: "13:18" },
        { doc: "APP-2026-1019", applicant: "Apex Solutions Pvt Ltd", type: "SME Business Loan", analyst: "Deepa I.", risk: "medium", status: "Pending", time: "12:05" },
        { doc: "APP-2026-1018", applicant: "Rajendra Singh", type: "Auto Loan", analyst: "Rajan S.", risk: "low", status: "Approved", time: "11:40" },
        { doc: "APP-2026-1017", applicant: "Kavita Rao", type: "Mortgage", analyst: "Priya M.", risk: "high", status: "Rejected", time: "10:22" },
    ];
    return (<div className="flex flex-col gap-6 p-6 md:p-8 overflow-auto max-w-[1600px] mx-auto w-full">
      {/* Header */}
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-foreground">Overview</h1>
        <p className="text-muted-foreground text-sm mt-1">Real-time statistics and recent document activity.</p>
      </div>

      {/* Stats */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard label="Applications Processed" value="1,284" sub="This month" icon={FileText} bgClass="bg-blue-500/10" colorClass="text-blue-600"/>
        <StatCard label="Fraud Detected" value="78" sub="High risk applications" icon={AlertTriangle} bgClass="bg-red-500/10" colorClass="text-red-600"/>
        <StatCard label="Safe Applications" value="1,162" sub="Verified successfully" icon={CheckCircle} bgClass="bg-emerald-500/10" colorClass="text-emerald-600"/>
        <StatCard label="Pending Review" value="44" sub="Awaiting officer" icon={Clock} bgClass="bg-amber-500/10" colorClass="text-amber-600"/>
      </motion.div>

      {/* Charts */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl shadow-sm p-6 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-foreground">Monthly Application Volume</h3>
              <p className="text-xs text-muted-foreground mt-1">Volume of Safe vs Fraudulent applications.</p>
            </div>
            <button className="text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">Download CSV</button>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthlyData} barSize={20} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} dy={10}/>
              <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false}/>
              <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ fontSize: 13, borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              <Legend wrapperStyle={{ fontSize: 13, paddingTop: '10px' }} iconType="circle"/>
              <Bar dataKey="safe" name="Safe Applications" fill="#10b981" radius={[4, 4, 0, 0]}/>
              <Bar dataKey="fraud" name="Fraud Detected" fill="#ef4444" radius={[4, 4, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 flex flex-col">
          <h3 className="text-base font-semibold text-foreground mb-6">Risk Distribution</h3>
          <div className="flex-1 flex flex-col justify-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={riskTypeData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value" stroke="none">
                  {riskTypeData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 13, borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-3 mt-6">
              {riskTypeData.map((item, i) => (<div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ background: COLORS[i] }}/>
                    <span className="text-muted-foreground font-medium">{item.name}</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.value}%</span>
                </div>))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Notifications + Activity */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
          <h3 className="text-base font-semibold text-foreground mb-5">Recent Notifications</h3>
          <div className="flex flex-col gap-4">
            {[
            { icon: AlertCircle, color: "text-red-500", bg: "bg-red-50", msg: "3 high-risk applications require officer review", time: "2 min ago" },
            { icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50", msg: "Batch LAND-AUG-2026 processed successfully", time: "18 min ago" },
            { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50", msg: "OCR failed on BANK-2026-0115 — retry needed", time: "1 hr ago" },
            { icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50", msg: "Monthly report ready for download", time: "3 hr ago" },
        ].map(({ icon: Icon, color, bg, msg, time }) => (<div key={msg} className="flex gap-3 group cursor-pointer">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${bg} group-hover:scale-110 transition-transform`}>
                  <Icon size={16} className={color}/>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug group-hover:text-blue-600 transition-colors">{msg}</p>
                  <p className="text-xs text-muted-foreground mt-1">{time}</p>
                </div>
              </div>))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl shadow-sm p-0 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-foreground">Recent Activity</h3>
              <p className="text-xs text-muted-foreground mt-1">Latest application verification results.</p>
            </div>
            <button onClick={() => navigate("/audit")} className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
              View all <HiChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
          <div className="overflow-x-auto flex-1 p-2">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Application ID", "Applicant Name", "Loan Type", "Analyst", "Risk", "Status", "Time"].map(h => (<th key={h} className="text-left py-3 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {activity.map(row => (<tr key={row.doc} className="border-b border-border/50 hover:bg-secondary/50 transition-colors group">
                    <td className="py-3 px-4 font-mono font-medium text-blue-600 cursor-pointer hover:underline" onClick={() => navigate("/viewer")}>{row.doc}</td>
                    <td className="py-3 px-4 font-medium text-foreground">{row.applicant}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.type}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.analyst}</td>
                    <td className="py-3 px-4"><Badge status={row.risk}/></td>
                    <td className="py-3 px-4 text-foreground">{row.status}</td>
                    <td className="py-3 px-4 text-muted-foreground text-xs whitespace-nowrap">{row.time}</td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>);
};
