import './Teams.css';
import React, { useState, useEffect } from "react";
import { HiOutlineUserGroup, HiOutlinePlus } from "react-icons/hi2";
import { getTeamMembersApi, inviteTeamMemberApi } from '../../services/api';

export const Teams = () => {
  const [members, setMembers] = useState([
    { _id: '1', name: 'Prabhakar Sahu', email: 'agadityag465@gmail.com', role: 'Admin' },
    { _id: '2', name: 'Sarah Jenkins', email: 'sarah.j@ravynx.ai', role: 'Senior Underwriter' },
  ]);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Junior Underwriter");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await getTeamMembersApi();
        if (res.success && res.members && res.members.length > 0) {
          setMembers(res.members);
        }
      } catch (err) {
        console.warn('Team loaded mock');
      }
    };
    fetchTeam();
  }, []);

  const handleInvite = async (e) => {
    e.preventDefault();
    if (!inviteEmail) return;

    try {
      const res = await inviteTeamMemberApi({ email: inviteEmail, role: inviteRole });
      if (res.success && res.member) {
        setMembers(prev => [...prev, res.member]);
      }
    } catch (err) {
      console.warn('Invite error:', err.message);
    } finally {
      setInviteEmail("");
      setShowInviteModal(false);
    }
  };

  return (
    <div className="teams-cls-1">
      <div className="teams-cls-2">
        <h1 className="teams-cls-3">
          Teams
        </h1>
        <button onClick={() => setShowInviteModal(!showInviteModal)} className="teams-cls-4">
          <HiOutlinePlus className="teams-cls-5" />
          Invite member
        </button>
      </div>

      {showInviteModal && (
        <form onSubmit={handleInvite} className="mb-6 p-4 bg-slate-900 border border-slate-800 rounded-xl flex gap-3 items-center">
          <input 
            type="email" 
            placeholder="colleague@ravynx.ai" 
            value={inviteEmail} 
            onChange={e => setInviteEmail(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-2 text-sm flex-1"
            required
          />
          <select 
            value={inviteRole} 
            onChange={e => setInviteRole(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-white rounded-lg px-3 py-2 text-sm"
          >
            <option>Senior Underwriter</option>
            <option>Junior Underwriter</option>
            <option>Fraud Risk Analyst</option>
          </select>
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg font-medium">
            Send Invite
          </button>
        </form>
      )}

      <div className="teams-cls-6">
        <div className="teams-cls-7">
          <h2 className="teams-cls-8">Team Members ({members.length})</h2>
          <p className="teams-cls-9">
            Manage your team members and their account permissions here.
          </p>
        </div>
        
        <div className="teams-cls-10">
          {members.map(m => (
            <div key={m._id || m.email} className="teams-cls-11">
              <div className="teams-cls-12">
                <div className="teams-cls-13">
                  {(m.name || m.email).slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="teams-cls-14">{m.name || 'Team Member'}</p>
                  <p className="teams-cls-15">{m.email}</p>
                </div>
              </div>
              <div className="teams-cls-16">
                <span className="teams-cls-17">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

