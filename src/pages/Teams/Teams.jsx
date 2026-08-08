import './Teams.css';
import React from "react";
import { HiOutlineUserGroup, HiOutlinePlus } from "react-icons/hi2";

export const Teams = () => {
  return (
    <div className="teams-cls-1">
      <div className="teams-cls-2">
        <h1 className="teams-cls-3">
          Teams
        </h1>
        <button className="teams-cls-4">
          <HiOutlinePlus className="teams-cls-5" />
          Invite member
        </button>
      </div>

      <div className="teams-cls-6">
        <div className="teams-cls-7">
          <h2 className="teams-cls-8">Team Members</h2>
          <p className="teams-cls-9">
            Manage your team members and their account permissions here.
          </p>
        </div>
        
        <div className="teams-cls-10">
          {/* Member 1 */}
          <div className="teams-cls-11">
            <div className="teams-cls-12">
              <div className="teams-cls-13">
                PS
              </div>
              <div>
                <p className="teams-cls-14">Prabhakar Sahu</p>
                <p className="teams-cls-15">agadityag465@gmail.com</p>
              </div>
            </div>
            <div className="teams-cls-16">
              <span className="teams-cls-17">Admin</span>
            </div>
          </div>
          
          {/* Empty State / Info */}
          <div className="teams-cls-18">
            <div className="teams-cls-19">
              <HiOutlineUserGroup className="teams-cls-20" />
            </div>
            <h3 className="teams-cls-21">Build your team</h3>
            <p className="teams-cls-22">
              Invite colleagues to collaborate on document verification and risk analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
