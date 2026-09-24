import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { User, Medal, Target } from 'lucide-react';

export default function SportsProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/students/profile.php')
       .then(res => setProfile(res.data.data))
       .catch(err => console.error(err));
  }, []);

  if (!profile) return <div style={{padding: '2rem'}}>Loading profile...</div>;

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <h2 className="text-2xl" style={{color: '#2563eb'}}>KhelSetu</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
            <li className="mb-4 text-gray"><Link to="/student/dashboard" style={{textDecoration: 'none', color: 'inherit'}}>Dashboard</Link></li>
            <li className="mb-4"><strong>Sports Profile</strong></li>
            <li className="mb-4 text-gray"><Link to="/student/opportunities" style={{textDecoration: 'none', color: 'inherit'}}>Opportunities</Link></li>
            <li className="mb-4 text-gray">Applications</li>
        </ul>
        <Link to="/" style={{ color: 'red', textDecoration: 'none', marginTop: 'auto', display: 'block' }}>Logout</Link>
      </div>
      
      <div className="main-content">
        <h1 className="text-2xl mb-4">My Sports Profile</h1>
        
        <div className="grid grid-cols-2">
            <div className="card">
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                    <div style={{background: '#e2e8f0', padding: '1rem', borderRadius: '50%'}}>
                        <User size={48} color="#64748b" />
                    </div>
                    <div>
                        <h2 style={{margin: 0}}>{profile.name}</h2>
                        <p style={{margin: 0, color: '#64748b'}}>{profile.email}</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '1rem'}}>
                    <div>
                        <span style={{color: '#64748b', fontSize: '0.9rem'}}>Age</span><br/>
                        <strong>{profile.age}</strong>
                    </div>
                    <div>
                        <span style={{color: '#64748b', fontSize: '0.9rem'}}>Height</span><br/>
                        <strong>{profile.height}</strong>
                    </div>
                    <div>
                        <span style={{color: '#64748b', fontSize: '0.9rem'}}>Weight</span><br/>
                        <strong>{profile.weight}</strong>
                    </div>
                </div>
            </div>
            
            <div className="grid">
                <div className="card" style={{background: '#eff6ff', borderLeft: '4px solid #3b82f6'}}>
                    <h3 style={{margin: '0 0 0.5rem', display: 'flex', alignItems: 'center', gap: '8px'}}><Target size={18}/> Primary Sport</h3>
                    <p style={{fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#1e40af'}}>{profile.primary_sport}</p>
                    <p style={{color: '#3b82f6', margin: '0.5rem 0 0'}}>Experience: {profile.experience}</p>
                </div>
                <div className="card">
                    <h3 style={{margin: '0 0 1rem', display: 'flex', alignItems: 'center', gap: '8px'}}><Medal size={18}/> Achievements</h3>
                    <ul style={{paddingLeft: '1.2rem', margin: 0, color: '#334155'}}>
                        {profile.achievements.map((ach, i) => <li key={i} style={{marginBottom: '0.5rem'}}>{ach}</li>)}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
