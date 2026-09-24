import DashboardLayout from '../../components/DashboardLayout';
import { Award, Medal, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    { title: 'District Champion 2025', sport: 'Basketball', type: 'Gold', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-50 border-yellow-200' },
    { title: 'State Athletics Finalist', sport: 'Athletics', type: 'Silver', icon: Medal, color: 'text-slate-400', bg: 'bg-slate-50 border-slate-200' },
    { title: 'Inter-College MVP', sport: 'Basketball', type: 'Bronze', icon: Award, color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' }
  ];

  return (
    <DashboardLayout role="student">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Achievements</h1>
          <p className="text-slate-500 mt-1">Your medals, certificates, and milestones</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className={`rounded-2xl border shadow-sm p-6 flex flex-col items-center text-center ${a.bg}`}>
              <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 ${a.color}`}>
                <a.icon size={32} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{a.title}</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4">{a.sport}</p>
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white ${a.color} border shadow-sm`}>{a.type}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
