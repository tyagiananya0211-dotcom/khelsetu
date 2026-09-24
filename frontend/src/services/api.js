import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/khelsetu-api/api',
  headers: { 'Content-Type': 'application/json' },
});

export const login = async (email, password) => (await api.post('/auth/login.php', { email, password })).data;
export const registerUser = async (name, email, password, role) => (await api.post('/auth/register.php', { name, email, password, role })).data;
export const googleLoginAuth = async (email, role) => (await api.post('/auth/google_login.php', { email, role })).data;

export const getStudentDashboard = async (id) => (await api.get(`/students/dashboard.php?user_id=${id}`)).data;
export const getInstitutionDashboard = async (id) => (await api.get(`/institutions/dashboard.php?user_id=${id}`)).data;
export const getAuthorityDashboard = async () => (await api.get('/authority/dashboard.php')).data;
export const getAuthorityInstitutions = async () => (await api.get('/authority/institutions.php')).data;

export const getOpportunities = async () => (await api.get('/opportunities/list.php')).data;
export const createOpportunity = async (data) => (await api.post('/opportunities/create.php', data)).data;
export const applyForOpportunity = async (student_id, opportunity_id) => (await api.post('/students/apply.php', { student_id, opportunity_id })).data;
export const getStudentApplications = async (id) => (await api.get(`/students/applications.php?student_id=${id}`)).data;

export const getCurrentUser = () => {
    const u = localStorage.getItem('khelsetu_user');
    return u ? JSON.parse(u) : null;
};
