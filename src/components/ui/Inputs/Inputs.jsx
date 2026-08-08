import './Inputs.css';
import React, { useState } from "react";
import { Search, Eye, EyeOff } from "lucide-react";

const baseInputStyles = "flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors";

export const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={`${baseInputStyles} ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export const SearchInput = React.forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="inputs-cls-1" />
      <input
        type="search"
        className={`${baseInputStyles} pl-10`}
        ref={ref}
        {...props}
      />
    </div>
  );
});
SearchInput.displayName = "SearchInput";

export const PasswordInput = React.forwardRef(({ className = "", ...props }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <input
        type={show ? "text" : "password"}
        className={`${baseInputStyles} pr-10`}
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="inputs-cls-2"
      >
        {show ? <EyeOff className="inputs-cls-3" /> : <Eye className="inputs-cls-4" />}
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";
