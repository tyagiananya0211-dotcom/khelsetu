import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Activity, Mail, Lock, User, ChevronDown } from 'lucide-react';
import { registerUser } from '../services/api';

export default function Register() {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await registerUser(name, email, password, role);
      if(res.success) {
        localStorage.setItem('khelsetu_user', JSON.stringify(res.data));
        setSuccess(res.message);
        setTimeout(() => navigate(`/${res.data.role.toLowerCase()}/dashboard`), 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  const handleGoogleAuth = () => {
    // For Hackathon Prototype: Simulate Google Auth
    setIsGoogleLoading(true);
    setSuccess('Connecting to Google...');
    setTimeout(() => {
        setSuccess('Google Authentication successful! Logging you in...');
        setTimeout(() => navigate(`/${role}/dashboard`), 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="flex-1 flex items-center justify-center z-10 p-6">
        <div className="w-full max-w-[440px] bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 backdrop-blur-sm bg-white/95">
          <div className="flex items-center justify-center gap-2 font-bold text-2xl text-slate-800 mb-6">
            <Activity className="text-emerald-500" size={28} /> KhelSetu
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Create Your Account</h2>
            <p className="text-sm text-slate-500">Join KhelSetu and start your sports journey</p>
          </div>

          {error && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">{error}</div>}
          {success && <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 text-sm rounded-lg border border-emerald-200">{success}</div>}

          <div className="flex bg-slate-100/80 p-1 rounded-xl mb-6">
            {['student', 'institution', 'authority'].map(r => (
              <button key={r} type="button" onClick={() => setRole(r)} className={`flex-1 py-1.5 text-sm font-semibold rounded-lg capitalize transition-all ${role === r ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500'}`}>{r}</button>
            ))}
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="text" required value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your full name" className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input type="password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Create a password" className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none" />
              </div>
            </div>
            <button type="submit" disabled={isGoogleLoading} className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg mt-2">Register</button>
            
            <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase font-medium">Or</span>
                <div className="flex-grow border-t border-slate-200"></div>
            </div>
            <button type="button" onClick={handleGoogleAuth} disabled={isGoogleLoading} className="w-full py-2.5 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 font-semibold rounded-xl flex items-center justify-center gap-2">
              {isGoogleLoading ? (
                  <span className="animate-spin h-5 w-5 border-2 border-slate-400 border-t-transparent rounded-full"></span>
              ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              )}
              {isGoogleLoading ? 'Connecting...' : 'Sign up with Google'}
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-500">
            Already have an account? <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
