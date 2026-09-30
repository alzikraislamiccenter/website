export default function AnimatedArrow({ className = "" }: { className?: string }) {
  return <span className={`arrow-swap ${className}`} aria-hidden="true"><span className="arrow-swap-current">↗</span><span className="arrow-swap-next">↗</span></span>;
}
