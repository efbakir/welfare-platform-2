import { NavLink } from 'react-router-dom';
import { navItems } from './Sidebar';

export default function MobileNav() {
  return (
    <nav className="-mx-4 mb-4 flex gap-2 overflow-x-auto border-b border-app-border px-4 pb-3 sm:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition ${
              isActive ? 'bg-brand-blue text-white' : 'bg-white text-app-textSecondary border border-app-border'
            }`
          }
        >
          <span className="inline-flex items-center gap-1.5">
            <item.icon className="h-3.5 w-3.5" />
            <span>{item.label}</span>
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
