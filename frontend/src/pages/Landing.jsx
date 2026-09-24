import { Link } from 'react-router-dom';
import { Activity, Target, Shield, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-2 font-bold text-2xl text-slate-800">
          <Activity className="text-emerald-500" size={28} />
          KhelSetu
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="text-slate-900">Home</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Features</a>
          <a href="#" className="hover:text-emerald-600 transition-colors">Research</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2">Login</Link>
          <Link to="/login" className="text-sm font-medium bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-200">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto flex items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-2 border border-emerald-100">
            SIH26196 <span className="w-1 h-1 rounded-full bg-emerald-300"></span> AICTE <span className="w-1 h-1 rounded-full bg-emerald-300"></span> Fitness & Sports
          </div>
          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
            Build a Stronger <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Sports Ecosystem.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            KhelSetu connects students, institutions and sports opportunities through data-driven insights and AI-assisted recommendations.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link to="/login" className="flex items-center gap-2 text-sm font-medium bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-200">
              Get Started <ChevronRight size={16} />
            </Link>
            <button className="flex items-center gap-2 text-sm font-medium bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-50 transition-colors">
              Explore Platform
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
          <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80" alt="Athletes" className="rounded-[3rem] shadow-2xl border-4 border-white object-cover h-[500px] w-full" />
        </div>
      </section>

      {/* Stats/Stakeholders */}
      <section className="bg-slate-50 border-y py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><Target size={24} /></div>
            <div><h3 className="font-bold text-slate-900">Students</h3><p className="text-sm text-slate-500">Discover & Grow</p></div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Shield size={24} /></div>
            <div><h3 className="font-bold text-slate-900">Institutions</h3><p className="text-sm text-slate-500">Build & Improve</p></div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center"><Zap size={24} /></div>
            <div><h3 className="font-bold text-slate-900">Authorities</h3><p className="text-sm text-slate-500">Monitor & Guide</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
