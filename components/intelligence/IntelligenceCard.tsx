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
    <div className="group h-full min-w-0 rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4 shadow-lg shadow-slate-950/30 transition hover:border-cyan-500/30 hover:shadow-cyan-950/20 sm:p-5 md:rounded-[1.75rem]">
      <div className="flex min-w-0 items-start justify-between gap-3 md:gap-4">
        <div className="min-w-0">
          {eyebrow ? (
            <span className="inline-flex max-w-full rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300 md:text-[11px]">
              {eyebrow}
            </span>
          ) : null}

          {title ? (
            <h3 className="mt-3 text-base font-semibold tracking-tight text-white md:mt-4 md:text-lg">
              {title}
            </h3>
          ) : null}
        </div>

        {score !== undefined ? (
          <div className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200 md:text-sm">
            {score}
          </div>
        ) : null}
      </div>

      {description ? (
        <p className="mt-3 text-sm leading-6 text-slate-300 md:mt-4">
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