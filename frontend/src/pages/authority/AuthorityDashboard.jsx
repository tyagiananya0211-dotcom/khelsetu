import DashboardLayout from '../../components/DashboardLayout';
import { Users, Activity, Target, BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getAuthorityDashboard } from '../../services/api';

export default function AuthorityDashboard() {
  const [data, setData] = useState(null);
  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6'];

  useEffect(() => {
    getAuthorityDashboard().then(res => {
      if(res.success) setData(res.data);
    }).catch(console.error);
  }, []);

  if(!data) return <DashboardLayout role="authority"><div className="p-8">Loading Authority Data...</div></DashboardLayout>;

  return (
    <DashboardLayout role="authority">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome, Sports Authority!</h1>
          <p className="text-slate-500 mt-1">Here's the overall sports ecosystem overview fed by real-time backend data.</p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Total Institutions</p><p className="text-3xl font-extrabold text-slate-900">{data.stats.institutions}</p></div>
            <div className="p-3 rounded-xl bg-slate-50 text-emerald-500"><Target size={24} /></div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Total Students</p><p className="text-3xl font-extrabold text-slate-900">{data.stats.students}</p></div>
            <div className="p-3 rounded-xl bg-slate-50 text-blue-500"><Users size={24} /></div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Active Sports</p><p className="text-3xl font-extrabold text-slate-900">{data.stats.sports}</p></div>
            <div className="p-3 rounded-xl bg-slate-50 text-amber-500"><Activity size={24} /></div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-center justify-between">
            <div><p className="text-sm font-semibold text-slate-500 mb-1">Total Opportunities</p><p className="text-3xl font-extrabold text-slate-900">{data.stats.opportunities}</p></div>
            <div className="p-3 rounded-xl bg-slate-50 text-purple-500"><BarChart3 size={24} /></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Participation by Sport</h3>
            <div className="h-64"><ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data.charts.participation.map(d => ({...d, value: Number(d.value)}))} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" nameKey="name">
                  {data.charts.participation.map((e, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer></div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Institutional Development Score</h3>
            <div className="h-64"><ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.charts.scores} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
