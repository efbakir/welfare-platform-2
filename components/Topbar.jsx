import { SearchIcon } from './Icons';

export default function Topbar({ title }) {
  return (
    <header className="sticky top-0 z-20 border-b border-app-border bg-app-bg/90 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="page-title text-xl md:text-2xl">{title}</h2>
        <div className="flex items-center gap-3">
          <label className="relative hidden lg:block">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-app-textMuted" />
            <input
              type="search"
              placeholder="Search communities, challenges, events"
              className="h-10 w-80 rounded-md border border-app-border bg-white pl-9 pr-3 text-sm text-app-textSecondary focus:border-brand-blue focus:outline-none"
            />
          </label>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">ER</div>
        </div>
      </div>
    </header>
  );
}
