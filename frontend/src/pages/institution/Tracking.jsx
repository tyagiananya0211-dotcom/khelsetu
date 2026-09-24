import DashboardLayout from '../../components/DashboardLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Tracking() {
  const data = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 55 },
    { name: 'Apr', value: 65 },
    { name: 'May', value: 72 },
  ];

  return (
    <DashboardLayout role="institution">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Improvement Tracking</h1>
          <p className="text-slate-500 mt-1">Monitor the progress of applied AI action plans</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col gap-8">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Low Basketball Participation</h3>
                <p className="text-slate-600 mt-1">Action: Start beginner basketball program</p>
                <p className="text-xs font-semibold text-slate-400 mt-2">Target Date: 30 Jun 2026</p>
              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">In Progress</span>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4">Impact Over Time</h4>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4 flex justify-between items-center border border-slate-100">
            <div>
              <p className="text-sm font-semibold text-slate-500">Participation Rate</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-lg font-bold text-slate-900">40% <span className="text-sm font-normal text-slate-400">Before</span></span>
                <span className="text-slate-300">→</span>
                <span className="text-lg font-bold text-emerald-600">72% <span className="text-sm font-normal text-slate-400">After</span></span>
              </div>
            </div>
            <div className="bg-emerald-100 text-emerald-700 font-bold px-4 py-2 rounded-lg">
              +32% Growth
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
