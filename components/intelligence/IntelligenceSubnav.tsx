type IntelligenceSubnavItem = {
  label: string;
  href: string;
};

type IntelligenceSubnavProps = {
  items: IntelligenceSubnavItem[];
};

export default function IntelligenceSubnav({ items }: IntelligenceSubnavProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-[73px] z-30 -mx-3 overflow-x-auto border-y border-slate-800 bg-slate-950/95 px-3 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border md:top-[81px]">
      <div className="flex min-w-max gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}