import DashboardLayout from '../../components/DashboardLayout';
import { useEffect, useState } from 'react';
import { getAuthorityInstitutions } from '../../services/api';
import { MapPin, Users, Award, Search, Filter } from 'lucide-react';

export default function InstitutionsList() {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuthorityInstitutions().then(res => {
        if(res.success) setInstitutions(res.data);
        setLoading(false);
    });
  }, []);

  return (
    <DashboardLayout role="authority">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Registered Institutions</h1>
            <p className="text-slate-500 mt-1">Manage and monitor all institutions in the ecosystem.</p>
          </div>
          <div className="flex gap-3">
             <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm" />
             </div>
             <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-slate-50"><Filter size={16}/> Filter</button>
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center text-slate-500 animate-pulse">Loading Institutions...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map(inst => (
              <div key={inst.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl">{inst.name.charAt(0)}</div>
                    <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1"><Award size={14} /> Score: {inst.score}</div>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1">{inst.name}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1 mb-4"><MapPin size={14} /> {inst.location}</p>
                  
                  <div className="flex gap-4 border-t border-slate-100 pt-4 mt-4">
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 font-medium mb-1">Total Students</p>
                        <p className="font-semibold text-slate-800 flex items-center gap-1"><Users size={14} className="text-blue-500" /> {inst.students || 0}</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 font-medium mb-1">Email Contact</p>
                        <p className="font-medium text-slate-800 text-xs truncate" title={inst.email}>{inst.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
