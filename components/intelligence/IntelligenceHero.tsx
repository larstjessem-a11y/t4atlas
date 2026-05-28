import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type IntelligenceHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  actions?: HeroAction[];
  meta?: string;
};

export default function IntelligenceHero({
  eyebrow = "T4 Atlas Intelligence",
  title,
  description,
  breadcrumbs = [],
  actions = [],
  meta,
}: IntelligenceHeroProps) {
  return (
    <section className="overflow-hidden rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-5 shadow-2xl shadow-blue-950/20 md:rounded-[2rem] md:p-8">
      {breadcrumbs.length > 0 ? (
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-400 md:mb-5 md:text-sm">
          {breadcrumbs.map((item, index) => (
            <span
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}

              {index < breadcrumbs.length - 1 ? <span>→</span> : null}
            </span>
          ))}
        </div>
      ) : null}

      <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-200 md:text-xs">
        {eyebrow}
      </span>

      <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:mt-5 md:text-lg md:leading-8">
        {description}
      </p>

      {actions.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-3 md:mt-7">
          {actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              className={
                action.variant === "secondary"
                  ? "rounded-2xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 md:px-5 md:py-3"
                  : "rounded-2xl bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:px-5 md:py-3"
              }
            >
              {action.label}
            </a>
          ))}
        </div>
      ) : null}

      {meta ? (
        <p className="mt-5 text-xs text-slate-400 md:mt-6 md:text-sm">
          {meta}
        </p>
      ) : null}
    </section>
  );
}