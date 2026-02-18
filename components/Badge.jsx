export default function Badge({ children, tone = 'blue' }) {
  const tones = {
    blue: 'bg-brand-blueTint text-brand-blue',
    pink: 'bg-brand-secondaryTint text-brand-secondary',
    green: 'bg-[#eaf8ee] text-[#2f9e44]',
    gray: 'bg-app-surface2 text-app-textSecondary',
  };

  return <span className={`inline-flex rounded-md px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
