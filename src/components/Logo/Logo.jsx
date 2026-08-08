import './Logo.css';
import React from "react";

export const Logo = ({ className = "" }) => {
  return (
    <span className={`logo-text ${className}`}>
      Ravynx
    </span>
  );
};
