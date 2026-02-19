import { NavLink } from 'react-router-dom';
import { CalendarIcon, ChartIcon, HomeIcon, TargetIcon, UsersIcon, SparkleIcon } from './Icons';

export const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/communities', label: 'Communities', icon: UsersIcon },
  { to: '/challenges', label: 'Challenges', icon: TargetIcon },
  { to: '/events', label: 'Events', icon: CalendarIcon },
  { to: '/insights', label: 'Insights (Admin)', icon: ChartIcon },
  { to: '/welfare/ai', label: 'AI Assistant', icon: SparkleIcon, highlight: true },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[var(--sidebar-w)] border-r border-white/10 bg-app-sidebarBg p-6 sm:block">
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
            className={({ isActive }) => {
              const base = 'block rounded-lg px-3 py-2.5 text-sm font-semibold transition ';
              if (isActive) return base + 'bg-app-sidebarActive text-white';
              if (item.highlight) {
                return base + 'bg-brand-blue/20 text-app-sidebarText hover:bg-app-sidebarHover hover:text-white';
              }
              return base + 'text-app-sidebarText hover:bg-app-sidebarHover hover:text-white';
            }}
          >
            <span className="flex items-center gap-2.5">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
