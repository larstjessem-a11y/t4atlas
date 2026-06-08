type T4SignalBadgeProps = {
  label: string;
  variant?: "signal" | "watchlist" | "frontier" | "critical";
};

export default function T4SignalBadge({
  label,
  variant = "signal",
}: T4SignalBadgeProps) {
  const styles = {
    signal:
      "border-[#1e3a5f]/20 bg-[#e7eef5] text-[#1e3a5f]",
    watchlist:
      "border-[#a67c3d]/30 bg-[#a67c3d]/10 text-[#7c5b2d]",
    frontier:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    critical:
      "border-red-200 bg-red-50 text-red-700",
  };

  return (
    <span
      className={`inline-flex w-fit rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-sm ${styles[variant]}`}
    >
      {label}
    </span>
  );
}