export default function Tabs({ items, activeKey, onChange }) {
  return (
    <div className="inline-flex rounded-md border border-app-border bg-app-surface p-1 shadow-xs">
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            key={item.key}
            onClick={() => onChange(item.key)}
            className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
              isActive ? 'bg-brand-blue text-white shadow-blue' : 'text-app-textSecondary hover:bg-app-surface2'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
