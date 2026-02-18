function BaseIcon({ children, className = 'h-4 w-4', strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </BaseIcon>
  );
}

export function UsersIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a3 3 0 0 1 0 5.82" />
    </BaseIcon>
  );
}

export function TargetIcon(props) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </BaseIcon>
  );
}

export function CalendarIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </BaseIcon>
  );
}

export function ChartIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </BaseIcon>
  );
}

export function SearchIcon(props) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </BaseIcon>
  );
}

export function ActivityIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </BaseIcon>
  );
}

export function SparklesIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
      <path d="M5 15l.8 2L8 17.8l-2.2.8L5 21l-.8-2.4L2 17.8l2.2-.8L5 15z" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </BaseIcon>
  );
}
