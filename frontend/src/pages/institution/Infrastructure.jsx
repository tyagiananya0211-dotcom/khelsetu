import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Infrastructure() {
  const [infra, setInfra] = useState(null);

  useEffect(() => {
    api.get('/institutions/infrastructure.php')
       .then(res => setInfra(res.data.data))
       .catch(err => console.error(err));
  }, []);

  if (!infra) return <div style={{padding: '2rem'}}>Loading infrastructure...</div>;

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2 className="text-2xl" style={{color: '#2563eb'}}>KhelSetu Inst.</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            <li className="mb-4 text-gray"><Link to="/institution/dashboard" style={{textDecoration: 'none', color: 'inherit'}}>Dashboard</Link></li>
            <li className="mb-4"><strong>Infrastructure</strong></li>
            <li className="mb-4 text-gray">Participation</li>
            <li className="mb-4 text-gray">AI Insights</li>
        </ul>
        <Link to="/" style={{ color: 'red', textDecoration: 'none', marginTop: 'auto', display: 'block' }}>Logout</Link>
      </div>
      
      <div className="main-content">
        <h1 className="text-2xl mb-4">Infrastructure Management</h1>
        
        <div className="grid grid-cols-2 mb-4">
            <div className="card">
                <div style={{color: '#64748b'}}>Total Facilities</div>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{infra.summary.total_facilities}</div>
            </div>
            <div className="card">
                <div style={{color: '#64748b'}}>Maintenance Score</div>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: infra.summary.maintenance_score > 70 ? '#10b981' : '#f59e0b'}}>
                    {infra.summary.maintenance_score}/100
                </div>
            </div>
        </div>

        <div className="card">
            <h3 className="text-2xl mb-4">Facility Directory</h3>
            <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
                <thead>
                    <tr style={{borderBottom: '2px solid #e2e8f0'}}>
                        <th style={{padding: '1rem 0'}}>Name</th>
                        <th style={{padding: '1rem 0'}}>Sport</th>
                        <th style={{padding: '1rem 0'}}>Condition</th>
                        <th style={{padding: '1rem 0'}}>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {infra.facilities.map(f => (
                        <tr key={f.id} style={{borderBottom: '1px solid #e2e8f0'}}>
                            <td style={{padding: '1rem 0', fontWeight: '500'}}>{f.name}</td>
                            <td style={{padding: '1rem 0', color: '#64748b'}}>{f.sport}</td>
                            <td style={{padding: '1rem 0'}}>
                                <span style={{
                                    padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold',
                                    background: f.condition === 'Excellent' ? '#dcfce3' : f.condition === 'Good' ? '#fef3c7' : '#fee2e2',
                                    color: f.condition === 'Excellent' ? '#166534' : f.condition === 'Good' ? '#92400e' : '#991b1b'
                                }}>
                                    {f.condition}
                                </span>
                            </td>
                            <td style={{padding: '1rem 0', color: '#64748b'}}>{f.capacity} students</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
