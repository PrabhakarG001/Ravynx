import React from "react";
import { useNavigate } from "react-router";
import { HiMagnifyingGlass, HiBell, HiBars3, HiOutlineSquares2X2, HiOutlineQuestionMarkCircle, HiOutlineCog8Tooth, HiPlus } from "react-icons/hi2";

export const Navbar = ({ title, onMenu }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white px-10 py-8 pb-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-[#8792a2] hover:text-[#1a1f36] transition-colors" onClick={onMenu}>
          <HiBars3 size={24}/>
        </button>
        <h1 className="text-xl font-bold text-[#1a1f36] tracking-tight md:hidden">{title}</h1>
        
        <div className="relative hidden sm:block ml-2">
          <HiMagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8792a2]"/>
          <input type="text" placeholder="Search..." className="text-sm border border-[#e3e8ee] rounded-lg bg-[#f7f9fc] pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#635BFF] focus:border-transparent w-64 transition-all hover:bg-white"/>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-4 pl-4">
          {/* Infinity Icons */}
          <div className="hidden lg:flex items-center gap-2 mr-2">
            <span className="text-sm font-medium text-[#4f566b] mr-2">Test mode</span>
            <div className="w-9 h-5 bg-[#e3e8ee] rounded-full relative cursor-pointer flex items-center mr-2">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm absolute left-0.5"></div>
            </div>
            
            <button className="p-2 text-[#8792a2] hover:text-[#1a1f36] transition-colors rounded-md hover:bg-gray-50">
              <HiOutlineSquares2X2 size={20}/>
            </button>
            <button className="p-2 text-[#8792a2] hover:text-[#1a1f36] transition-colors rounded-md hover:bg-gray-50">
              <HiOutlineQuestionMarkCircle size={20}/>
            </button>
          </div>

          <button className="relative p-2 text-[#8792a2] hover:text-[#1a1f36] transition-colors rounded-md hover:bg-gray-50">
            <HiBell size={20}/>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#ef4444] border-2 border-white"/>
          </button>
          
          <button className="hidden lg:block p-2 text-[#8792a2] hover:text-[#1a1f36] transition-colors rounded-md hover:bg-gray-50">
            <HiOutlineCog8Tooth size={20}/>
          </button>
          
          <button className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] transition-colors ml-1">
            <HiPlus size={14}/>
          </button>
          
          <button 
            onClick={() => navigate("/login")}
            className="flex items-center gap-2 hover:bg-[#f7f9fc] p-1 pr-3 rounded-full transition-colors text-sm font-medium text-[#3c4257]"
            title="Profile"
          >
            <div className="w-8 h-8 rounded-full bg-[#f7f9fc] border border-[#e3e8ee] flex items-center justify-center text-xs font-bold text-[#1a1f36]">
              AS
            </div>
            <span className="hidden md:block">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};
