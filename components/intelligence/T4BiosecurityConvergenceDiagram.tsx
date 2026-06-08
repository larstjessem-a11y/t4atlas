export default function T4BiosecurityConvergenceDiagram() {
  const inputs = [
    {
      title: "AI capability",
      description:
        "Models that help users reason, search, summarize, design, and automate scientific workflows.",
    },
    {
      title: "Synthetic biology",
      description:
        "Tools that make biological systems easier to edit, synthesize, test, and scale.",
    },
    {
      title: "DNA synthesis",
      description:
        "Infrastructure that can convert digital sequence information into physical biological material.",
    },
    {
      title: "Governance gap",
      description:
        "Rules, screening systems, and oversight mechanisms struggling to keep pace with capability diffusion.",
    },
  ];

  return (
    <section className="rounded-[1.5rem] border border-[#a67c3d]/30 bg-[#f8f6f1] p-5 shadow-sm md:rounded-[2rem] md:p-8">
      <div className="mb-5">
        <span className="mb-3 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
          Intelligence Diagram
        </span>

        <h2 className="t4-title text-2xl font-semibold text-[var(--t4-text)] sm:text-3xl">
          The Biosecurity Convergence
        </h2>

        <p className="mt-3 max-w-3xl leading-7 text-[var(--t4-muted)]">
          AI-enabled biological risk does not come from one technology alone. It
          emerges from the interaction between computational capability,
          biological tooling, synthesis infrastructure, and governance lag.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {inputs.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.25rem] border border-[var(--t4-border)] bg-white/80 p-4"
          >
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-[#7c5b2d]">
              Signal
            </div>

            <h3 className="mt-2 font-semibold text-[var(--t4-text)]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[var(--t4-muted)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="my-6 flex justify-center">
        <div className="h-10 w-px bg-[#a67c3d]/40" />
      </div>

      <div className="rounded-[1.5rem] border border-[#1e3a5f]/20 bg-[#e7eef5] p-5 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#1e3a5f]">
          Strategic outcome
        </div>

        <h3 className="mt-2 text-xl font-semibold text-[var(--t4-text)]">
          Biosecurity becomes national security infrastructure
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--t4-muted)]">
          The policy question shifts from isolated laboratory safety toward
          national resilience, synthesis screening, AI governance, and strategic
          preparedness.
        </p>
      </div>
    </section>
  );
}