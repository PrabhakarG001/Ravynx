import React from "react";

export const Logo = ({ className = "" }) => {
  return (
    <span 
      className={`font-['Space_Grotesk',sans-serif] font-bold bg-transparent ${className}`}
      style={{ letterSpacing: "1.5px" }}
    >
      Ravynx
    </span>
  );
};
