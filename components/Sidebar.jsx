import { NavLink } from 'react-router-dom';

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/communities', label: 'Communities' },
  { to: '/challenges', label: 'Challenges' },
  { to: '/events', label: 'Events' },
  { to: '/insights', label: 'Insights (Admin)' },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[var(--sidebar-w)] border-r border-white/10 bg-app-sidebarBg p-6 md:block">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-app-sidebarText/70">TeamSystem</p>
        <h1 className="mt-1 font-display text-xl font-bold text-white">Community OS</h1>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? 'bg-app-sidebarActive text-white'
                  : 'text-app-sidebarText hover:bg-app-sidebarHover hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
