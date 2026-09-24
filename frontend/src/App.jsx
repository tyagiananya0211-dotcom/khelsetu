import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentOpportunities from './pages/student/Opportunities';
import OpportunityDetails from './pages/student/OpportunityDetails';
import InstitutionDashboard from './pages/institution/InstitutionDashboard';
import CreateOpportunity from './pages/institution/CreateOpportunity';
import AuthorityDashboard from './pages/authority/AuthorityDashboard';
import InstitutionsList from './pages/authority/InstitutionsList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/opportunities" element={<StudentOpportunities />} />
        <Route path="/student/opportunities/:id" element={<OpportunityDetails />} />
        
        {/* Institution Routes */}
        <Route path="/institution/dashboard" element={<InstitutionDashboard />} />
        <Route path="/institution/opportunities/create" element={<CreateOpportunity />} />
        
        {/* Authority Routes */}
        <Route path="/authority/dashboard" element={<AuthorityDashboard />} />
        <Route path="/authority/institutions" element={<InstitutionsList />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}
export default App;
