import DashboardLayout from '../../components/DashboardLayout';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getStudentApplications } from '../../services/api';

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    // Assuming student ID 3 (Aarav Sharma Demo User)
    getStudentApplications(3).then(res => {
      if(res.success) setApps(res.data);
    }).catch(console.error);
  }, []);

  return (
    <DashboardLayout role="student">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Applications</h1>
          <p className="text-slate-500 mt-1">Track your real application status and history</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex border-b border-slate-100 p-2 gap-2 bg-slate-50/50">
            <button className="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-lg">All ({apps.length})</button>
            <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 text-sm font-semibold rounded-lg">Applied ({apps.filter(a => a.status === 'Applied').length})</button>
            <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 text-sm font-semibold rounded-lg">Under Review ({apps.filter(a => a.status === 'Under Review').length})</button>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-white">
                <th className="p-4 pl-6">Opportunity</th>
                <th className="p-4">Date Applied</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-sm">
              {apps.length === 0 ? <tr><td colSpan="4" className="p-4 text-center text-slate-500">No applications found.</td></tr> : null}
              {apps.map((a, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 pl-6 font-semibold text-slate-800">{a.opp}</td>
                  <td className="p-4 text-slate-600">{a.date}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${a.color}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="p-4 text-right pr-6">
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
