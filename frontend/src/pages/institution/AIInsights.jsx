import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Sparkles, BrainCircuit, Target } from 'lucide-react';

export default function AIInsights() {
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    api.get('/ai/insights.php')
       .then(res => setInsights(res.data.data))
       .catch(err => console.error(err));
  }, []);

  if (!insights) return <div style={{padding: '2rem'}}>Generating AI Insights...</div>;

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2 className="text-2xl" style={{color: '#2563eb'}}>KhelSetu Inst.</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            <li className="mb-4 text-gray"><Link to="/institution/dashboard" style={{textDecoration: 'none', color: 'inherit'}}>Dashboard</Link></li>
            <li className="mb-4 text-gray"><Link to="/institution/infrastructure" style={{textDecoration: 'none', color: 'inherit'}}>Infrastructure</Link></li>
            <li className="mb-4 text-gray">Participation</li>
            <li className="mb-4"><strong><Sparkles size={16} style={{display: 'inline', marginBottom: '-2px'}}/> AI Insights</strong></li>
        </ul>
        <Link to="/" style={{ color: 'red', textDecoration: 'none', marginTop: 'auto', display: 'block' }}>Logout</Link>
      </div>
      
      <div className="main-content">
        <h1 className="text-2xl mb-4" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <BrainCircuit color="#2563eb" /> AI-Generated Intelligence
        </h1>
        
        <div className="grid grid-cols-2 mb-4">
            <div className="card" style={{borderTop: '4px solid #2563eb'}}>
                <h3 className="text-2xl mb-4 text-gray">Historical Analysis</h3>
                <p style={{lineHeight: '1.6'}}>{insights.historical_insight}</p>
            </div>
            
            <div className="card" style={{borderTop: '4px solid #10b981'}}>
                <h3 className="text-2xl mb-4 text-gray">Predictive Trends</h3>
                <p style={{lineHeight: '1.6'}}>{insights.predictive_insight}</p>
            </div>
        </div>

        <div className="card" style={{background: '#f8fafc'}}>
            <h3 className="text-2xl mb-4" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Target color="#f59e0b" /> Recommended Action Plan
            </h3>
            <ul style={{lineHeight: '2', fontSize: '1.1rem'}}>
                {insights.action_plan.map((action, i) => <li key={i}>{action}</li>)}
            </ul>
        </div>
      </div>
    </div>
  );
}
