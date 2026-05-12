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
    <section className="overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 shadow-2xl shadow-blue-950/20 md:p-8">
      {breadcrumbs.length > 0 ? (
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-white">
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

      <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200">
        {eyebrow}
      </span>

      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
        {description}
      </p>

      {actions.length > 0 ? (
        <div className="mt-7 flex flex-wrap gap-3">
          {actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              className={
                action.variant === "secondary"
                  ? "rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  : "rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
              }
            >
              {action.label}
            </a>
          ))}
        </div>
      ) : null}

      {meta ? <p className="mt-6 text-sm text-slate-400">{meta}</p> : null}
    </section>
  );
}