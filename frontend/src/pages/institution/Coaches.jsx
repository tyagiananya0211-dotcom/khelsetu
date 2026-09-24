import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Users } from 'lucide-react';

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    api.get('/institutions/coaches.php')
       .then(res => setCoaches(res.data.data))
       .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2 className="text-2xl" style={{color: '#2563eb'}}>KhelSetu Inst.</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            <li className="mb-4 text-gray"><Link to="/institution/dashboard" style={{textDecoration: 'none', color: 'inherit'}}>Dashboard</Link></li>
            <li className="mb-4 text-gray"><Link to="/institution/infrastructure" style={{textDecoration: 'none', color: 'inherit'}}>Infrastructure</Link></li>
            <li className="mb-4"><strong><Users size={16} style={{display: 'inline', marginBottom: '-2px'}}/> Coaches</strong></li>
            <li className="mb-4 text-gray"><Link to="/institution/gaps" style={{textDecoration: 'none', color: 'inherit'}}>Development Gaps</Link></li>
        </ul>
        <Link to="/" style={{ color: 'red', textDecoration: 'none', marginTop: 'auto', display: 'block' }}>Logout</Link>
      </div>
      
      <div className="main-content">
        <h1 className="text-2xl mb-4">Coaching Staff</h1>
        
        <div className="card">
            <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
                <thead>
                    <tr style={{borderBottom: '2px solid #e2e8f0'}}>
                        <th style={{padding: '1rem 0'}}>Name</th>
                        <th style={{padding: '1rem 0'}}>Sport</th>
                        <th style={{padding: '1rem 0'}}>Experience</th>
                        <th style={{padding: '1rem 0'}}>Certification</th>
                        <th style={{padding: '1rem 0'}}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {coaches.map(c => (
                        <tr key={c.id} style={{borderBottom: '1px solid #e2e8f0'}}>
                            <td style={{padding: '1rem 0', fontWeight: '500'}}>{c.name}</td>
                            <td style={{padding: '1rem 0', color: '#2563eb', fontWeight: 'bold'}}>{c.sport}</td>
                            <td style={{padding: '1rem 0', color: '#64748b'}}>{c.experience}</td>
                            <td style={{padding: '1rem 0', color: '#64748b'}}>{c.certification}</td>
                            <td style={{padding: '1rem 0'}}>
                                <span style={{
                                    padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold',
                                    background: c.status === 'Active' ? '#dcfce3' : '#f1f5f9',
                                    color: c.status === 'Active' ? '#166534' : '#475569'
                                }}>
                                    {c.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
