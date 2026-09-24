import DashboardLayout from '../../components/DashboardLayout';
import { MapPin, Calendar, Users, CheckCircle, Save, ArrowLeft, Target } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { applyForOpportunity, getCurrentUser } from '../../services/api';

export default function OpportunityDetails() {
  const { id } = useParams(); // Get opportunity ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'
  const [message, setMessage] = useState('');
  
  const user = getCurrentUser();

  const handleApply = async () => {
    if (!user || user.role.toLowerCase() !== 'student') {
        setStatus('error');
        setMessage('You must be logged in as a student to apply.');
        return;
    }

    setLoading(true);
    setStatus(null);
    try {
        const res = await applyForOpportunity(user.id, id);
        if (res.success) {
            setStatus('success');
            setMessage(res.message);
            // Optionally redirect after 2 seconds
            setTimeout(() => navigate('/student/applications'), 2000);
        }
    } catch (err) {
        setStatus('error');
        setMessage(err.response?.data?.message || 'Failed to apply.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <DashboardLayout role="student">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <Link to="/student/opportunities" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full">
          <ArrowLeft size={16} /> Back to Opportunities
        </Link>

        {/* Header Image Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-64 relative">
            <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=80" alt="Basketball" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Tournament</span>
              <h1 className="text-4xl font-extrabold text-white mb-2">Basketball State Trials</h1>
              <div className="flex items-center gap-6 text-sm font-medium text-slate-200">
                <span className="flex items-center gap-2"><Target size={16} /> Basketball</span>
                <span className="flex items-center gap-2"><MapPin size={16} /> NIT Delhi</span>
                <span className="flex items-center gap-2"><Calendar size={16} /> 15-20 Apr 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">About the Opportunity</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                State Basketball Trials are a great platform for talented players to showcase their skills and get selected for the state team. The trials will be conducted by expert coaches and selectors.
              </p>
              
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2"><CheckCircle size={20} className="text-emerald-500" /> Eligibility</h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Age: 16-21</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Gender: Both</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Experience: 2+ years</li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
              <p className="text-sm font-semibold text-slate-500 mb-2">Match Score</p>
              <div className="w-24 h-24 mx-auto relative flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="251" strokeDashoffset="20" strokeLinecap="round" />
                </svg>
                <span className="text-2xl font-extrabold text-emerald-600">92%</span>
              </div>
              <div className="space-y-3 text-left mb-6">
                <p className="text-xs font-semibold text-slate-700">Match Reasons:</p>
                <p className="text-xs text-slate-600 flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Preferred sport matches</p>
                <p className="text-xs text-slate-600 flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Experience level matches</p>
                <p className="text-xs text-slate-600 flex items-start gap-2"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Eligibility requirements satisfied</p>
              </div>

              {message && (
                  <div className={`mb-4 p-3 text-sm rounded-lg text-left ${status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                      {message}
                  </div>
              )}

              <button 
                onClick={handleApply}
                disabled={loading || status === 'success'} 
                className={`w-full py-3 font-bold rounded-xl transition-all shadow-md mb-3 flex justify-center items-center gap-2 ${status === 'success' ? 'bg-slate-200 text-slate-500 shadow-none cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200'}`}
              >
                {loading ? <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span> : (status === 'success' ? 'Applied' : 'Apply Now')}
              </button>
              <button className="w-full py-3 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                <Save size={18} /> Save to Wishlist
              </button>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
