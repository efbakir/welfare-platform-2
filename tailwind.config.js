/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './routes/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: 'var(--color-blue)',
          blueDark: 'var(--color-blue-dark)',
          blueMid: 'var(--color-blue-mid)',
          blueTint: 'var(--color-blue-tint)',
          secondary: 'var(--color-secondary)',
          secondaryTint: 'var(--color-secondary-tint)',
        },
        app: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          surface2: 'var(--color-surface-2)',
          border: 'var(--color-border)',
          borderDark: 'var(--color-border-dark)',
          textPrimary: 'var(--color-text-primary)',
          textSecondary: 'var(--color-text-secondary)',
          textMuted: 'var(--color-text-muted)',
          sidebarBg: 'var(--color-sidebar-bg)',
          sidebarActive: 'var(--color-sidebar-active)',
          sidebarHover: 'var(--color-sidebar-hover)',
        },
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        blue: 'var(--shadow-blue)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      fontFamily: {
        body: 'var(--font-body)',
        display: 'var(--font-display)',
      },
    },
  },
  plugins: [],
};
