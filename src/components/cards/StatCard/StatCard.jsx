import './StatCard.css';
import React from "react";
import { motion } from "framer-motion";
export const StatCard = ({ label, value, sub, icon: Icon, colorClass, bgClass, }) => (<motion.div whileHover={{ y: -4 }} className="statcard-cls-1">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${bgClass}`}>
      <Icon size={22} className={colorClass}/>
    </div>
    <div>
      <p className="statcard-cls-2">{value}</p>
      <p className="statcard-cls-3">{label}</p>
      <p className="statcard-cls-4">{sub}</p>
    </div>
  </motion.div>);
