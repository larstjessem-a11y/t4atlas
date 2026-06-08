type IntelligenceSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function IntelligenceSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: IntelligenceSectionProps) {
  return (
    <section
      id={id}
      className="rounded-[1.5rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] p-5 shadow-sm md:rounded-[2rem] md:p-8"
    >
      {eyebrow ? (
        <span className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#7c5b2d] md:text-xs">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="t4-title max-w-4xl text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--t4-muted)] md:text-base">
          {description}
        </p>
      ) : null}

      <div className="mt-5 min-w-0 md:mt-6">{children}</div>
    </section>
  );
}