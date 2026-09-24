import DashboardLayout from '../../components/DashboardLayout';
import { useState } from 'react';
import { createOpportunity, getCurrentUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Target, MapPin, Calendar, FileText } from 'lucide-react';

export default function CreateOpportunity() {
  const [formData, setFormData] = useState({ title: '', sport_id: '1', description: '', location: '', date: '', eligibility: '' });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
        const res = await createOpportunity({ ...formData, user_id: user?.id });
        if(res.success) {
            setMsg({type: 'success', text: res.message});
            setTimeout(() => navigate('/institution/dashboard'), 2000);
        }
    } catch(err) {
        setMsg({type: 'error', text: 'Failed to create.'});
    }
    setLoading(false);
  };

  return (
    <DashboardLayout role="institution">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Post New Opportunity</h1>
        <p className="text-slate-500 mb-8">Create a new tournament, trial, or camp for students.</p>
        
        {msg && <div className={`mb-6 p-4 rounded-xl text-sm font-medium ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{msg.text}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
           <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Opportunity Title</label>
              <input type="text" required value={formData.title} onChange={e=>setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. State Level Basketball Trials" />
           </div>
           
           <div className="grid grid-cols-2 gap-5">
               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Sport</label>
                  <select value={formData.sport_id} onChange={e=>setFormData({...formData, sport_id: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                      <option value="1">Basketball</option>
                      <option value="2">Football</option>
                      <option value="3">Cricket</option>
                      <option value="4">Athletics</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date</label>
                  <input type="date" required value={formData.date} onChange={e=>setFormData({...formData, date: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" />
               </div>
           </div>

           <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location</label>
              <input type="text" required value={formData.location} onChange={e=>setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. Main Stadium, Delhi" />
           </div>

           <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Description</label>
              <textarea required rows="3" value={formData.description} onChange={e=>setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-none" placeholder="Details about the event..."></textarea>
           </div>
           
           <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Eligibility Criteria</label>
              <input type="text" value={formData.eligibility} onChange={e=>setFormData({...formData, eligibility: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. Under 19, All Genders" />
           </div>

           <div className="pt-4">
              <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md flex justify-center items-center">
                 {loading ? 'Posting...' : 'Post Opportunity'}
              </button>
           </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
