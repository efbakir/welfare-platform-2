export default function Filters({ config, values, onChange }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
      {config.map((filter) => (
        <label key={filter.key} className="text-sm font-semibold text-app-textSecondary">
          <span className="mb-1 block">{filter.label}</span>
          <select
            value={values[filter.key] || 'All'}
            onChange={(event) => onChange(filter.key, event.target.value)}
            className="h-10 w-full rounded-md border border-app-border bg-white px-3 text-sm text-app-textPrimary focus:border-brand-blue focus:outline-none"
          >
            {filter.options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
