import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { AlertTriangle, Lightbulb } from 'lucide-react';

export default function DevelopmentGaps() {
  const [gaps, setGaps] = useState([]);

  useEffect(() => {
    api.get('/institutions/gaps.php')
       .then(res => setGaps(res.data.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2 className="text-2xl" style={{color: '#2563eb'}}>KhelSetu Inst.</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            <li className="mb-4 text-gray"><Link to="/institution/dashboard" style={{textDecoration: 'none', color: 'inherit'}}>Dashboard</Link></li>
            <li className="mb-4 text-gray"><Link to="/institution/coaches" style={{textDecoration: 'none', color: 'inherit'}}>Coaches</Link></li>
            <li className="mb-4"><strong><AlertTriangle size={16} style={{display: 'inline', marginBottom: '-2px'}}/> Development Gaps</strong></li>
            <li className="mb-4 text-gray"><Link to="/institution/ai-insights" style={{textDecoration: 'none', color: 'inherit'}}>AI Insights</Link></li>
        </ul>
        <Link to="/" style={{ color: 'red', textDecoration: 'none', marginTop: 'auto', display: 'block' }}>Logout</Link>
      </div>
      
      <div className="main-content">
        <h1 className="text-2xl mb-4">Detected Development Gaps</h1>
        <p className="text-gray mb-4">These gaps are identified deterministically by our rule-based intelligence engine comparing infrastructure, coaches, and student participation.</p>
        
        <div className="grid">
            {gaps.map(gap => (
                <div key={gap.id} className="card" style={{borderLeft: `4px solid ${gap.severity === 'High' ? '#ef4444' : '#f59e0b'}`}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3 style={{margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <AlertTriangle size={18} color={gap.severity === 'High' ? '#ef4444' : '#f59e0b'}/>
                            {gap.title}
                        </h3>
                        <span style={{
                            background: gap.severity === 'High' ? '#fef2f2' : '#fef3c7',
                            color: gap.severity === 'High' ? '#991b1b' : '#92400e',
                            padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold'
                        }}>
                            {gap.severity} Priority
                        </span>
                    </div>
                    
                    <div style={{display: 'flex', gap: '2rem', marginTop: '1rem'}}>
                        <div style={{flex: 1}}>
                            <strong style={{color: '#64748b', fontSize: '0.9rem'}}>Description</strong>
                            <p style={{margin: '0.5rem 0 0', fontSize: '0.95rem'}}>{gap.description}</p>
                        </div>
                        <div style={{flex: 1, background: '#f8fafc', padding: '1rem', borderRadius: '8px'}}>
                            <strong style={{color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px'}}><Lightbulb size={16} color="#f59e0b"/> Suggested Actions</strong>
                            <ul style={{margin: '0.5rem 0 0', paddingLeft: '1.2rem', fontSize: '0.9rem', color: '#334155'}}>
                                {gap.suggested_actions.map((act, i) => <li key={i}>{act}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
