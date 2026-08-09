import './Navbar.css';
import React from "react";
import { useNavigate } from "react-router";
import { HiMagnifyingGlass, HiBell, HiBars3, HiOutlineSquares2X2, HiOutlineQuestionMarkCircle, HiOutlineCog8Tooth, HiPlus } from "react-icons/hi2";

export const Navbar = ({ title, onMenu }) => {
  const navigate = useNavigate();

  return (
    <header className="navbar-cls-1">
      <div className="navbar-cls-2">
        <button className="navbar-cls-3" onClick={onMenu}>
          <HiBars3 size={24}/>
        </button>
        <h1 className="navbar-cls-4">{title}</h1>
        
        <div className="navbar-cls-5">
          <HiMagnifyingGlass size={16} className="navbar-cls-6"/>
          <input type="text" placeholder="Search..." className="navbar-cls-7"/>
        </div>
      </div>
      <div className="navbar-cls-8">
        <div className="navbar-cls-9">
          {/* Infinity Icons */}
          <div className="navbar-cls-10">
            <span className="navbar-cls-11">Test mode</span>
            <div className="navbar-cls-12">
              <div className="navbar-cls-13"></div>
            </div>
            
            <button className="navbar-cls-14">
              <HiOutlineSquares2X2 size={20}/>
            </button>
            <button className="navbar-cls-15">
              <HiOutlineQuestionMarkCircle size={20}/>
            </button>
          </div>

          <button className="navbar-cls-16">
            <HiBell size={20}/>
            <span className="navbar-cls-17"/>
          </button>
          
          <button className="navbar-cls-18">
            <HiOutlineCog8Tooth size={20}/>
          </button>
          
          <button className="navbar-cls-19">
            <HiPlus size={14}/>
          </button>
          
          <button 
            onClick={() => navigate("/login")}
            className="navbar-cls-20"
            title="Profile"
          >
            <div className="navbar-cls-21">
              AS
            </div>
            <span className="navbar-cls-22">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};
