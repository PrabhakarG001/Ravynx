import React from "react";
import { motion } from "framer-motion";
export const StatCard = ({ label, value, sub, icon: Icon, colorClass, bgClass, }) => (<motion.div whileHover={{ y: -4 }} className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${bgClass}`}>
      <Icon size={22} className={colorClass}/>
    </div>
    <div>
      <p className="text-3xl font-bold text-foreground leading-none mb-1.5">{value}</p>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-xs text-muted-foreground mt-1">{sub}</p>
    </div>
  </motion.div>);
