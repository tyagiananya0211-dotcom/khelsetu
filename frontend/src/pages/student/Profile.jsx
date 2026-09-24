import DashboardLayout from '../../components/DashboardLayout';
import { User, Mail, MapPin, Award } from 'lucide-react';

export default function Profile() {
  return (
    <DashboardLayout role="student">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Sports Profile</h1>
          <p className="text-slate-500 mt-1">Manage your athletic information</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex gap-8">
          <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border-4 border-white shadow-lg shrink-0 overflow-hidden relative">
            <User size={48} />
          </div>
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input type="text" defaultValue="Aarav Sharma" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input type="email" defaultValue="student@khelsetu.demo" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Primary Sport</label>
                <input type="text" defaultValue="Basketball" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Age</label>
                <input type="number" defaultValue="20" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 outline-none" />
              </div>
            </div>
            <button className="bg-emerald-500 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
