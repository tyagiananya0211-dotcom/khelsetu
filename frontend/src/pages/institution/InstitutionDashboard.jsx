import DashboardLayout from '../../components/DashboardLayout';
import { Users, Target, Activity, ShieldAlert, ChevronRight } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { getInstitutionDashboard, getCurrentUser } from '../../services/api';
import { Link } from 'react-router-dom';

export default function InstitutionDashboard() {
  const [data, setData] = useState(null);
  const user = getCurrentUser() || { name: 'Institution' };

  useEffect(() => {
    if(user.id) {
        getInstitutionDashboard(user.id).then(res => {
            if(res.success) setData(res.data);
        }).catch(console.error);
    } else {
        setData({ score: 72, sports: 8, students: 428, coaches: 12, opportunities: 15 });
    }
  }, []);

  const radarData = [
    { subject: 'Infrastructure', A: 85, fullMark: 100 },
    { subject: 'Participation', A: 65, fullMark: 100 },
    { subject: 'Coaching', A: 70, fullMark: 100 },
    { subject: 'Achievements', A: 50, fullMark: 100 },
    { subject: 'Opportunities', A: 90, fullMark: 100 },
  ];

  if(!data) return <DashboardLayout role="institution"><div className="p-8">Loading...</div></DashboardLayout>;

  return (
    <DashboardLayout role="institution">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome, {user.name}!</h1>
          <p className="text-slate-500 mt-1">Track your sports development and progress.</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1 bg-emerald-500 rounded-2xl p-6 text-white shadow-md shadow-emerald-500/20">
            <p className="text-emerald-50 text-sm font-medium mb-1">Sports Dev. Score</p>
            <div className="flex items-baseline gap-1"><span className="text-4xl font-extrabold">{data.score}</span><span className="text-emerald-100 font-medium">/100</span></div>
          </div>
          {[
            {label: 'Active Sports', val: data.sports, icon: Activity, color: 'text-blue-500'},
            {label: 'Students', val: data.students, icon: Users, color: 'text-indigo-500'},
            {label: 'Coaches', val: data.coaches, icon: ShieldAlert, color: 'text-amber-500'},
            {label: 'Opportunities', val: data.opportunities, icon: Target, color: 'text-purple-500'}
          ].map((s,i) => (
             <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-sm font-semibold text-slate-500">{s.label}</p>
                  <s.icon size={18} className={s.color} />
                </div>
                <p className="text-2xl font-bold text-slate-900">{s.val}</p>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Score Breakdown</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 10}} />
                  <Radar name="Score" dataKey="A" stroke="#10B981" fill="#10B981" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="col-span-2 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">AI Insights</h3>
            <p className="text-slate-700 italic leading-relaxed">
               "Based on {user.name}'s data, basketball infrastructure is available, but participation is comparatively low. Increasing beginner programs may help improve engagement significantly across the campus."
            </p>
            <Link to="/institution/insights" className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md flex justify-center items-center gap-2">
               View Full Report <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
