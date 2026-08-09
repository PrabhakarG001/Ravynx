import './Analytics.css';
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { HiExclamationTriangle, HiArrowTrendingUp, HiCpuChip, HiUserGroup } from "react-icons/hi2";
import { StatCard } from '../../components/cards/StatCard/StatCard';
import { monthlyData, processingTimeData, riskTypeData, COLORS } from "../../utils/mockData";

export const Analytics = () => {
    return (<div className="analytics-cls-1">
      <div className="analytics-cls-2">
        <h1 className="analytics-cls-3">Analytics & Reporting</h1>
        <p className="analytics-cls-4">System performance and fraud detection metrics.</p>
      </div>

      {/* KPI Row */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="analytics-cls-5">
        <StatCard label="Fraud Rate (Aug)" value="8.97%" sub="↑ 1.2% vs Jul" icon={HiExclamationTriangle} bgClass="bg-[#ef4444]/10" colorClass="text-[#ef4444]"/>
        <StatCard label="Avg. Risk Score" value="52.4" sub="Across all docs" icon={HiArrowTrendingUp} bgClass="bg-[#635BFF]/10" colorClass="text-[#635BFF]"/>
        <StatCard label="Avg. Processing" value="2.4s" sub="↓ 0.3s vs Jul" icon={HiCpuChip} bgClass="bg-[#10b981]/10" colorClass="text-[#10b981]"/>
        <StatCard label="Total Analysts" value="14" sub="Active this month" icon={HiUserGroup} bgClass="bg-[#f59e0b]/10" colorClass="text-[#f59e0b]"/>
      </motion.div>

      {/* Charts row 1 */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="analytics-cls-6">
        <div className="analytics-cls-7">
          <h3 className="analytics-cls-8">Monthly Fraud vs Safe (Jan–Aug)</h3>
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
        <div className="analytics-cls-9">
          <h3 className="analytics-cls-10">Avg. Processing Time (s)</h3>
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
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="analytics-cls-11">
        <div className="analytics-cls-12">
          <h3 className="analytics-cls-13">Risk Type Distribution</h3>
          <div className="analytics-cls-14">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={riskTypeData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value" stroke="none">
                  {riskTypeData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 13, borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="analytics-cls-15">
              {riskTypeData.map((item, i) => (<div key={item.name} className="analytics-cls-16">
                  <div className="analytics-cls-17">
                    <span className="analytics-cls-18" style={{ background: COLORS[i] }}/>
                    <span className="analytics-cls-19">{item.name}</span>
                  </div>
                  <span className="analytics-cls-20">{item.value}%</span>
                </div>))}
            </div>
          </div>
        </div>
        
        <div className="analytics-cls-21">
          <div className="analytics-cls-22">
            <h3 className="analytics-cls-23">Analyst Performance</h3>
            <p className="analytics-cls-24">Review times and accuracy by team member.</p>
          </div>
          <div className="analytics-cls-25">
            <table className="analytics-cls-26">
              <thead>
                <tr>
                  {["Analyst Name", "Docs Processed", "Flagged", "Cleared", "Avg Review Time (min)"].map(h => (<th key={h} className="analytics-cls-27">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {[
            ["Priya Menon", 342, 45, 297, 38],
            ["Arjun Kumar", 284, 22, 262, 44],
            ["Deepa Iyer", 258, 9, 249, 31],
            ["Rajan Sharma", 241, 6, 235, 28],
            ["Meena Pillai", 189, 3, 186, 22],
        ].map(([name, p, f, c, avg]) => (<tr key={name} className="analytics-cls-28">
                    <td className="analytics-cls-29">
                      <div className="analytics-cls-30">{name.split(' ').map(n => n[0]).join('')}</div>
                      {name}
                    </td>
                    <td className="analytics-cls-31">{p}</td>
                    <td className="analytics-cls-32">{f}</td>
                    <td className="analytics-cls-33">{c}</td>
                    <td className="analytics-cls-34">
                      <div className="analytics-cls-35">
                        <div className="analytics-cls-36">
                          <div className="analytics-cls-37" style={{ width: `${avg}%` }}/>
                        </div>
                        <span className="analytics-cls-38">{avg}</span>
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
