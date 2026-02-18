import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import MobileNav from './MobileNav';

const pageTitleByPath = {
  '/': 'Home Feed',
  '/communities': 'Communities',
  '/challenges': 'Challenges',
  '/events': 'Events',
  '/insights': 'Insights',
};

function resolveTitle(pathname) {
  if (pageTitleByPath[pathname]) return pageTitleByPath[pathname];
  if (pathname.startsWith('/communities/')) return 'Community Detail';
  if (pathname.startsWith('/challenges/')) return 'Challenge Detail';
  if (pathname.startsWith('/events/')) return 'Event Detail';
  return 'Community OS';
}

export default function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-app-bg text-app-textPrimary">
      <Sidebar />
      <div className="md:ml-[var(--sidebar-w)]">
        <Topbar title={resolveTitle(location.pathname)} />
        <main className="px-4 py-6 md:px-8">
          <MobileNav />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
