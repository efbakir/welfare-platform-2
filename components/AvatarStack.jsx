export default function AvatarStack({ names = [] }) {
  return (
    <div className="flex items-center">
      {names.slice(0, 5).map((name, index) => (
        <div
          key={name}
          className="-ml-2 first:ml-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-blueTint text-xs font-bold text-brand-blue"
          style={{ zIndex: 10 - index }}
          title={name}
        >
          {name.slice(0, 1)}
        </div>
      ))}
      {names.length > 5 && (
        <span className="ml-2 text-xs font-semibold text-app-textMuted">+{names.length - 5} more</span>
      )}
    </div>
  );
}
