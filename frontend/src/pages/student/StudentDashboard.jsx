import DashboardLayout from '../../components/DashboardLayout';
import { Target, Users, Award, Briefcase, ChevronRight, CheckCircle2, Activity } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getStudentDashboard, getCurrentUser } from '../../services/api';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  const [data, setData] = useState(null);
  const user = getCurrentUser() || { name: 'Student' };

  useEffect(() => {
    if(user.id) {
        getStudentDashboard(user.id).then(res => {
            if(res.success) setData(res.data);
        }).catch(console.error);
    } else {
        setData({ events: 12, medals: 5, active_apps: 3, progress: {profile: 80, events: 60, goals: 40} });
    }
  }, []);

  if(!data) return <DashboardLayout role="student"><div className="p-8">Loading...</div></DashboardLayout>;

  return (
    <DashboardLayout role="student">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Good Morning, {user.name}!</h1>
          <p className="text-slate-500 mt-1">Keep pushing your limits. Your journey to excellence continues.</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Sports Profile</p><p className="text-xl font-bold text-slate-900">Complete</p></div>
            <div className="p-3 rounded-xl bg-blue-50 text-blue-500"><Target size={24} /></div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Participation</p><p className="text-xl font-bold text-slate-900">{data.events} Events</p></div>
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-500"><Users size={24} /></div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Achievements</p><p className="text-xl font-bold text-slate-900">{data.medals} Medals</p></div>
            <div className="p-3 rounded-xl bg-amber-50 text-amber-500"><Award size={24} /></div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Applications</p><p className="text-xl font-bold text-slate-900">{data.active_apps} Active</p></div>
            <div className="p-3 rounded-xl bg-purple-50 text-purple-500"><Briefcase size={24} /></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-4">AI Recommended Opportunities</h3>
            <div className="space-y-4">
              <div className="p-4 border border-slate-100 rounded-xl flex items-center justify-between bg-emerald-50/30">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl">S</div>
                  <div><h4 className="font-bold text-slate-800">State Basketball Trials</h4><p className="text-sm text-slate-500">Delhi • Next Week</p></div>
                </div>
                <div className="text-right"><p className="text-xs font-semibold text-slate-500 mb-1">Match Score</p><p className="text-2xl font-extrabold text-emerald-500">92%</p></div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 space-y-6">
             <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
               <h3 className="font-bold text-lg text-slate-900 mb-4">Progress Summary</h3>
               <div className="flex justify-between items-end gap-2">
                 {Object.entries(data.progress).map(([key, val]) => (
                   <div key={key} className="flex flex-col items-center">
                     <div className="w-16 h-16 relative flex items-center justify-center mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart><Pie data={[{value: val}, {value: 100-val}]} innerRadius={22} outerRadius={30} dataKey="value" stroke="none"><Cell fill="#10B981"/><Cell fill="#f1f5f9"/></Pie></PieChart>
                        </ResponsiveContainer>
                        <span className="absolute text-xs font-bold">{val}%</span>
                     </div>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{key}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
