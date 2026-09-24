import DashboardLayout from '../../components/DashboardLayout';
import { MapPin, Calendar, Search, Filter, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOpportunities } from '../../services/api';

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOpportunities().then(res => {
        if(res.success) setOpportunities(res.data);
        setLoading(false);
    });
  }, []);

  return (
    <DashboardLayout role="student">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Opportunities</h1>
            <p className="text-slate-500 mt-1">Discover and apply for trials, tournaments, and camps.</p>
          </div>
          <div className="flex gap-3">
             <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search sports..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
             </div>
             <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg flex items-center gap-2 text-sm font-semibold"><Filter size={16}/> Filter</button>
          </div>
        </div>

        {loading ? (
           <div className="p-12 text-center text-slate-500 animate-pulse">Loading Opportunities...</div>
        ) : opportunities.length === 0 ? (
           <div className="p-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">No opportunities available right now.</div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {opportunities.map(opp => (
              <div key={opp.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{opp.sport_name}</span>
                  <span className="text-emerald-500 font-bold bg-emerald-50 px-3 py-1 rounded-full text-xs">New</span>
                </div>
                
                <h3 className="font-bold text-xl text-slate-900 mb-2">{opp.title}</h3>
                <p className="text-sm font-medium text-slate-600 mb-4">{opp.institution_name || 'KhelSetu Partner'}</p>
                
                <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-1">{opp.description}</p>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-6 bg-slate-50 p-3 rounded-xl">
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-400"/> {opp.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-slate-400"/> {opp.date}</span>
                </div>

                <Link to={`/student/opportunities/${opp.id}`} className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition-all text-center">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
