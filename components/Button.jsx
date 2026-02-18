export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary:
      'bg-brand-blue text-white shadow-blue hover:bg-brand-blueDark focus:outline-none focus:ring-2 focus:ring-brand-blue/30',
    secondary:
      'bg-white text-app-textPrimary border border-app-border shadow-sm hover:bg-app-surface2 focus:outline-none focus:ring-2 focus:ring-brand-blue/20',
    subtle: 'bg-brand-blueTint text-brand-blue hover:bg-brand-blueTint/80 focus:outline-none focus:ring-2 focus:ring-brand-blue/20',
  };

  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
