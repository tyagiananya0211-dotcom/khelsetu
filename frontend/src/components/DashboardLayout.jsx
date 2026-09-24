import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ children, role }) {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
