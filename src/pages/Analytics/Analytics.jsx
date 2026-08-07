import './Analytics.css';
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { HiExclamationTriangle, HiArrowTrendingUp, HiCpuChip, HiUserGroup } from "react-icons/hi2";
import { StatCard } from "../../components/cards/StatCard";
import { monthlyData, processingTimeData, riskTypeData, COLORS } from "../../utils/mockData";

export const Analytics = () => {
    return (<div className="p-8 flex flex-col gap-6 overflow-auto max-w-[1400px] mx-auto w-full">
      <div className="mb-2">
        <h1 className="text-2xl font-bold text-[#1a1f36]">Analytics & Reporting</h1>
        <p className="text-[#8792a2] text-sm mt-1">System performance and fraud detection metrics.</p>
      </div>

      {/* KPI Row */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Fraud Rate (Aug)" value="8.97%" sub="↑ 1.2% vs Jul" icon={HiExclamationTriangle} bgClass="bg-[#ef4444]/10" colorClass="text-[#ef4444]"/>
        <StatCard label="Avg. Risk Score" value="52.4" sub="Across all docs" icon={HiArrowTrendingUp} bgClass="bg-[#635BFF]/10" colorClass="text-[#635BFF]"/>
        <StatCard label="Avg. Processing" value="2.4s" sub="↓ 0.3s vs Jul" icon={HiCpuChip} bgClass="bg-[#10b981]/10" colorClass="text-[#10b981]"/>
        <StatCard label="Total Analysts" value="14" sub="Active this month" icon={HiUserGroup} bgClass="bg-[#f59e0b]/10" colorClass="text-[#f59e0b]"/>
      </motion.div>

      {/* Charts row 1 */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="stripe-card p-8">
          <h3 className="text-base font-semibold text-[#1a1f36] mb-6">Monthly Fraud vs Safe (Jan–Aug)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData} barSize={24} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e8ee"/>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8792a2" }} axisLine={false} tickLine={false} dy={10}/>
              <YAxis tick={{ fontSize: 12, fill: "#8792a2" }} axisLine={false} tickLine={false}/>
              <Tooltip cursor={{ fill: '#f7f9fc' }} contentStyle={{ fontSize: 13, borderRadius: '8px', border: '1px solid #e3e8ee', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              <Legend wrapperStyle={{ fontSize: 13, paddingTop: '15px' }} iconType="circle"/>
              <Bar dataKey="safe" name="Safe Documents" fill="#10b981" radius={[4, 4, 0, 0]}/>
              <Bar dataKey="fraud" name="Fraud Detected" fill="#ef4444" radius={[4, 4, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="stripe-card p-8">
          <h3 className="text-base font-semibold text-[#1a1f36] mb-6">Avg. Processing Time (s)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={processingTimeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e8ee"/>
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#8792a2" }} axisLine={false} tickLine={false} dy={10}/>
              <YAxis tick={{ fontSize: 12, fill: "#8792a2" }} axisLine={false} tickLine={false} domain={[1, 6]}/>
              <Tooltip contentStyle={{ fontSize: 13, borderRadius: '8px', border: '1px solid #e3e8ee', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              <Line type="monotone" dataKey="avg" stroke="#635BFF" strokeWidth={3} dot={{ fill: "#635BFF", r: 5, strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 8, strokeWidth: 0 }}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Charts row 2 */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="stripe-card p-8 flex flex-col">
          <h3 className="text-base font-semibold text-[#1a1f36] mb-6">Risk Type Distribution</h3>
          <div className="flex-1 flex flex-col justify-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={riskTypeData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value" stroke="none">
                  {riskTypeData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 13, borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-3 mt-6">
              {riskTypeData.map((item, i) => (<div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ background: COLORS[i] }}/>
                    <span className="text-[#8792a2] font-medium">{item.name}</span>
                  </div>
                  <span className="font-semibold text-[#1a1f36]">{item.value}%</span>
                </div>))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 stripe-card overflow-hidden flex flex-col">
          <div className="p-8 border-b border-[#e3e8ee]">
            <h3 className="text-base font-semibold text-[#1a1f36]">Analyst Performance</h3>
            <p className="text-xs text-[#8792a2] mt-1">Review times and accuracy by team member.</p>
          </div>
          <div className="overflow-x-auto flex-1 p-2">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {["Analyst Name", "Docs Processed", "Flagged", "Cleared", "Avg Review Time (min)"].map(h => (<th key={h} className="text-left py-3 px-4 text-[#8792a2] font-semibold uppercase tracking-wider text-xs">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {[
            ["Priya Menon", 342, 45, 297, 38],
            ["Arjun Kumar", 284, 22, 262, 44],
            ["Deepa Iyer", 258, 9, 249, 31],
            ["Rajan Sharma", 241, 6, 235, 28],
            ["Meena Pillai", 189, 3, 186, 22],
        ].map(([name, p, f, c, avg]) => (<tr key={name} className="border-b border-[#e3e8ee] hover:bg-[#f7f9fc] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#1a1f36] flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#f7f9fc] border border-[#e3e8ee] text-[#635BFF] flex items-center justify-center text-xs">{name.split(' ').map(n => n[0]).join('')}</div>
                      {name}
                    </td>
                    <td className="py-4 px-4 font-medium">{p}</td>
                    <td className="py-4 px-4 text-[#ef4444] font-bold">{f}</td>
                    <td className="py-4 px-4 text-[#10b981] font-bold">{c}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-[#f7f9fc] rounded-full overflow-hidden">
                          <div className="h-full bg-[#635BFF] rounded-full" style={{ width: `${avg}%` }}/>
                        </div>
                        <span className="text-xs font-semibold">{avg}</span>
                      </div>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>);
};
