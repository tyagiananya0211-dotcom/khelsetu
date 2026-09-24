import DashboardLayout from '../../components/DashboardLayout';
import { Brain, Lightbulb, Target } from 'lucide-react';

export default function Insights() {
  return (
    <DashboardLayout role="institution">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Sports Coach Insights</h1>
          <p className="text-slate-500 mt-1">AI-assisted recommendations based on your institutional data</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md"><Brain size={24} /></div>
            <h2 className="text-xl font-bold text-slate-900">Key Insights</h2>
          </div>
          
          <p className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-blue-500 pl-6 mb-8">
            "Your basketball infrastructure is rated excellent (Available/Maintained), but participation is significantly lower than expected for your student capacity. The AI predicts that introducing structured beginner programs and increasing external competition exposure will boost engagement by 25%."
          </p>

          <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2"><Lightbulb size={20} className="text-amber-500" /> Suggested Action Plan</h3>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-800">Start beginner basketball program</h4>
                <p className="text-sm text-slate-600 mt-1">Allocate 2 coaches to run a 4-week introductory camp for new students.</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-800">Conduct awareness event</h4>
                <p className="text-sm text-slate-600 mt-1">Host an exhibition match on campus to highlight the facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
