import './Profile.css';
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";

export const Profile = () => {
  return (
    <div className="profile-cls-1">
      <h1 className="profile-cls-2">
        Profile
      </h1>

      <div className="profile-cls-3">
        {/* First Name */}
        <div className="profile-cls-4">
          <label className="profile-cls-5">
            First name
          </label>
          <input 
            type="text" 
            defaultValue="Prabhakar"
            className="profile-cls-6"
          />
        </div>

        {/* Last Name */}
        <div className="profile-cls-7">
          <label className="profile-cls-8">
            Last name
          </label>
          <input 
            type="text" 
            defaultValue="Sahu"
            className="profile-cls-9"
          />
        </div>

        {/* Email */}
        <div className="profile-cls-10">
          <label className="profile-cls-11">
            Email
          </label>
          <input 
            type="email" 
            defaultValue="agadityag465@gmail.com"
            className="profile-cls-12"
          />
        </div>

        {/* Action Button */}
        <div className="profile-cls-13">
          <button className="profile-cls-14">
            Save changes
            <HiOutlineChevronRight className="profile-cls-15" />
          </button>
        </div>
      </div>
    </div>
  );
};
