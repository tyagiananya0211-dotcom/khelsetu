import { NavLink } from 'react-router-dom';
import { Home, User, Target, ClipboardList, Award, TrendingUp, Bell, Settings, LayoutDashboard, Brain, Activity } from 'lucide-react';
import { getCurrentUser } from '../services/api';

export default function Sidebar({ role }) {
  const user = getCurrentUser() || { name: role, role: role };
  const actualRole = user.role.toLowerCase();

  const links = {
    student: [
      { name: 'Dashboard', path: '/student/dashboard', icon: Home },
      { name: 'My Sports Profile', path: '/student/profile', icon: User },
      { name: 'Opportunities', path: '/student/opportunities', icon: Target },
      { name: 'My Applications', path: '/student/applications', icon: ClipboardList },
      { name: 'Achievements', path: '/student/achievements', icon: Award },
    ],
    institution: [
      { name: 'Dashboard', path: '/institution/dashboard', icon: LayoutDashboard },
      { name: 'Post Opportunity', path: '/institution/opportunities/create', icon: Target },
      { name: 'AI Insights', path: '/institution/insights', icon: Brain },
      { name: 'Improvement Tracking', path: '/institution/tracking', icon: TrendingUp },
    ],
    authority: [
      { name: 'Dashboard', path: '/authority/dashboard', icon: LayoutDashboard },
    ]
  };

  const navLinks = links[actualRole] || links[role] || [];

  return (
    <aside className="w-64 bg-white border-r min-h-screen flex flex-col p-4 shrink-0 sticky top-0 h-screen overflow-y-auto">
      <div className="flex items-center gap-2 font-bold text-2xl text-slate-800 mb-8 pl-2 mt-2">
        <Activity className="text-emerald-500" size={28} /> KhelSetu
      </div>
      
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold uppercase shrink-0">
          {user.name.charAt(0)}
        </div>
        <div className="truncate">
          <p className="text-sm font-semibold text-slate-800 truncate">{user.name}</p>
          <p className="text-xs text-slate-500 capitalize">{actualRole}</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navLinks.map(link => {
          const Icon = link.icon;
          return (
            <NavLink key={link.name} to={link.path} className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
              <Icon size={18} /> {link.name}
            </NavLink>
          );
        })}
      </nav>
      
      <div className="mt-auto border-t pt-4 space-y-1">
        <NavLink to="/" onClick={() => localStorage.removeItem('khelsetu_user')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50">
           Logout
        </NavLink>
      </div>
    </aside>
  );
}
