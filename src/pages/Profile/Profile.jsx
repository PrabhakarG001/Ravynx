import './Profile.css';
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";

export const Profile = () => {
  return (
    <div className="p-8 md:p-12 max-w-3xl mx-auto w-full mt-4">
      <h1 className="text-[32px] font-semibold text-[#1a1f36] mb-10 tracking-tight">
        Profile
      </h1>

      <div className="flex flex-col gap-6">
        {/* First Name */}
        <div className="relative">
          <label className="absolute -top-[9px] left-3 px-1 bg-white text-[11px] font-medium text-gray-500 tracking-wide z-10">
            First name
          </label>
          <input 
            type="text" 
            defaultValue="Prabhakar"
            className="w-full bg-white border border-[#d1d5db] rounded-[4px] px-4 py-[14px] text-[15px] text-[#1a1f36] focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-all relative z-0"
          />
        </div>

        {/* Last Name */}
        <div className="relative">
          <label className="absolute -top-[9px] left-3 px-1 bg-white text-[11px] font-medium text-gray-500 tracking-wide z-10">
            Last name
          </label>
          <input 
            type="text" 
            defaultValue="Sahu"
            className="w-full bg-white border border-[#d1d5db] rounded-[4px] px-4 py-[14px] text-[15px] text-[#1a1f36] focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-all relative z-0"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label className="absolute -top-[9px] left-3 px-1 bg-white text-[11px] font-medium text-gray-500 tracking-wide z-10">
            Email
          </label>
          <input 
            type="email" 
            defaultValue="agadityag465@gmail.com"
            className="w-full bg-white border border-[#d1d5db] rounded-[4px] px-4 py-[14px] text-[15px] text-[#1a1f36] focus:outline-none focus:border-[#635BFF] focus:ring-1 focus:ring-[#635BFF] transition-all relative z-0"
          />
        </div>

        {/* Action Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-[#6b7280] hover:bg-[#4b5563] text-white font-medium text-[14px] px-5 py-2.5 rounded flex items-center gap-2 transition-colors">
            Save changes
            <HiOutlineChevronRight className="w-4 h-4 opacity-80" />
          </button>
        </div>
      </div>
    </div>
  );
};
