import './Logo.css';
import React from "react";

export const Logo = ({ className = "" }) => {
  return (
    <span className={`logo-root ${className}`}>
      {/* Geometric shield mark */}
      <img src="/logo.png" alt="Ravynx Logo" className="logo-mark" />
      {/* Wordmark */}
      <span className="logo-wordmark">Ravynx</span>
    </span>
  );
};
