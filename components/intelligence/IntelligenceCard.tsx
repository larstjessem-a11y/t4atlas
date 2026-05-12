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
    <div className="group rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-slate-950/30 transition hover:border-cyan-500/30 hover:shadow-cyan-950/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-300">
              {eyebrow}
            </span>
          ) : null}

          {title ? (
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
              {title}
            </h3>
          ) : null}
        </div>

        {score !== undefined ? (
          <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-200">
            {score}
          </div>
        ) : null}
      </div>

      {description ? (
        <p className="mt-4 text-sm leading-6 text-slate-300">
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}