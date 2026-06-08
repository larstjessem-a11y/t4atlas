type IntelligenceCardProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  eyebrow?: string;
  score?: string | number;
  href?: string;
};

export default function IntelligenceCard({
  title,
  description,
  children,
  eyebrow,
  score,
  href,
}: IntelligenceCardProps) {
  const content = (
    <div className="group h-full min-w-0 rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#a67c3d]/50 hover:bg-white hover:shadow-md sm:p-5 md:rounded-[1.75rem]">
      <div className="flex min-w-0 items-start justify-between gap-3 md:gap-4">
        <div className="min-w-0">
          {eyebrow ? (
            <span className="inline-flex max-w-full rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-[11px]">
              {eyebrow}
            </span>
          ) : null}

          {title ? (
            <h3 className="mt-3 text-base font-semibold tracking-tight text-[var(--t4-text)] md:mt-4 md:text-lg">
              {title}
            </h3>
          ) : null}
        </div>

        {score !== undefined ? (
          <div className="shrink-0 rounded-full border border-[#1e3a5f]/20 bg-[#e7eef5] px-3 py-1 text-xs font-semibold text-[#1e3a5f] md:text-sm">
            {score}
          </div>
        ) : null}
      </div>

      {description ? (
        <p className="mt-3 text-sm leading-6 text-[var(--t4-muted)] md:mt-4">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-4 min-w-0">{children}</div> : null}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full min-w-0">
        {content}
      </a>
    );
  }

  return content;
}