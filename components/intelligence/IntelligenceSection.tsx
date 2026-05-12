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
      className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 md:p-8"
    >
      {eyebrow ? (
        <span className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      {description ? (
        <p className="mt-3 max-w-3xl leading-7 text-slate-300">
          {description}
        </p>
      ) : null}

      <div className="mt-6">{children}</div>
    </section>
  );
}