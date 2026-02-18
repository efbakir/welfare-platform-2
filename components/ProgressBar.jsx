export default function ProgressBar({ value }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-app-surface2">
      <div className="h-full rounded-full bg-brand-blue" style={{ width: `${value}%` }} />
    </div>
  );
}
