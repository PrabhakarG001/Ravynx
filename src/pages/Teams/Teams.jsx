import './Teams.css';
import React from "react";
import { HiOutlineUserGroup, HiOutlinePlus } from "react-icons/hi2";

export const Teams = () => {
  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto w-full mt-4">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-[32px] font-semibold text-[#1a1f36] tracking-tight">
          Teams
        </h1>
        <button className="bg-[#6b7280] hover:bg-[#4b5563] text-white font-medium text-[14px] px-4 py-2 rounded flex items-center gap-2 transition-colors">
          <HiOutlinePlus className="w-4 h-4" />
          Invite member
        </button>
      </div>

      <div className="bg-white border border-[#e3e8ee] rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-[#e3e8ee]">
          <h2 className="text-[16px] font-semibold text-[#1a1f36]">Team Members</h2>
          <p className="text-[14px] text-[#3c4257] mt-1">
            Manage your team members and their account permissions here.
          </p>
        </div>
        
        <div className="divide-y divide-[#e3e8ee]">
          {/* Member 1 */}
          <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00897b] text-white flex items-center justify-center text-sm font-bold">
                PS
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#1a1f36]">Prabhakar Sahu</p>
                <p className="text-[13px] text-gray-500">agadityag465@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Admin</span>
            </div>
          </div>
          
          {/* Empty State / Info */}
          <div className="px-6 py-12 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
              <HiOutlineUserGroup className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-[15px] font-semibold text-[#1a1f36] mb-1">Build your team</h3>
            <p className="text-[14px] text-gray-500 max-w-sm">
              Invite colleagues to collaborate on document verification and risk analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
