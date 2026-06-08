type IntelligenceSubnavItem = {
  label: string;
  href: string;
};

type IntelligenceSubnavProps = {
  items: IntelligenceSubnavItem[];
};

export default function IntelligenceSubnav({
  items,
}: IntelligenceSubnavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-[73px] z-30 -mx-3 overflow-x-auto border-y border-[var(--t4-border)] bg-[rgba(252,251,248,0.95)] px-3 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border md:top-[81px]">
      <div className="flex min-w-max gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-[var(--t4-border)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[var(--t4-text)] transition hover:border-[#a67c3d]/50 hover:bg-[#f8f6f1]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}