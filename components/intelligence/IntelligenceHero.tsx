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
    <section className="t4-map-texture t4-contours relative overflow-hidden rounded-[1.75rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8">
      <img
        src="/branding/t4-compass-rose.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] opacity-[0.07] md:-right-14 md:-top-20 md:h-[380px] md:w-[380px]"
      />

      <div className="relative z-10">
        {breadcrumbs.length > 0 ? (
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-[var(--t4-muted)] md:mb-5 md:text-sm">
            {breadcrumbs.map((item, index) => (
              <span
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition hover:text-[var(--t4-blue)]"
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

        <span className="mb-4 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
          {eyebrow}
        </span>

        <h1 className="t4-title max-w-4xl text-3xl font-semibold text-[var(--t4-text)] sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--t4-muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
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
                    ? "rounded-2xl border border-[var(--t4-border)] bg-white/70 px-4 py-2.5 text-sm font-medium text-[var(--t4-text)] transition hover:bg-[var(--t4-surface-soft)] md:px-5 md:py-3"
                    : "rounded-2xl bg-[var(--t4-blue)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#162d49] md:px-5 md:py-3"
                }
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}

        {meta ? (
          <p className="mt-5 text-xs text-[var(--t4-muted)] md:mt-6 md:text-sm">
            {meta}
          </p>
        ) : null}
      </div>
    </section>
  );
}