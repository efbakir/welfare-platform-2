export default function Card({ children, className = '' }) {
  return <article className={`surface-card p-5 ${className}`}>{children}</article>;
}
