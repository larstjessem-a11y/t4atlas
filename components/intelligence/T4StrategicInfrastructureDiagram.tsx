export default function T4StrategicInfrastructureDiagram() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[var(--t4-border)] bg-[var(--t4-surface)] shadow-sm">
      <div className="border-b border-[var(--t4-border)] px-6 py-5">
        <div className="mb-2 inline-flex rounded-full border border-[#a67c3d]/30 bg-[#a67c3d]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
          Strategic Infrastructure Model
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-[var(--t4-text)]">
          The New Strategic Infrastructure
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--t4-muted)]">
          Strategic power is increasingly determined by control over the
          infrastructure layers that enable intelligence, biology, and
          industrial capacity.
        </p>
      </div>

      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="mb-10 rounded-2xl border border-[#a67c3d]/30 bg-[#f8f6f1] px-8 py-4 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
              Outcome
            </div>
            <div className="mt-1 text-xl font-semibold text-[var(--t4-text)]">
              Strategic Power
            </div>
          </div>

          <div className="mb-10 h-12 w-px bg-[var(--t4-border)]" />

          <div className="grid w-full gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
                DNA
              </div>

              <h4 className="mb-4 text-lg font-semibold text-[var(--t4-text)]">
                Biological Infrastructure
              </h4>

              <ul className="space-y-2 text-sm text-[var(--t4-muted)]">
                <li>DNA synthesis</li>
                <li>Sequence screening</li>
                <li>Biological databases</li>
                <li>Biosecurity systems</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
                Chips
              </div>

              <h4 className="mb-4 text-lg font-semibold text-[var(--t4-text)]">
                Semiconductor Infrastructure
              </h4>

              <ul className="space-y-2 text-sm text-[var(--t4-muted)]">
                <li>Advanced fabs</li>
                <li>Packaging capacity</li>
                <li>Supply chains</li>
                <li>Export controls</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--t4-border)] bg-[#faf8f4] p-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
                Compute
              </div>

              <h4 className="mb-4 text-lg font-semibold text-[var(--t4-text)]">
                AI Infrastructure
              </h4>

              <ul className="space-y-2 text-sm text-[var(--t4-muted)]">
                <li>Data centers</li>
                <li>Cloud platforms</li>
                <li>GPU clusters</li>
                <li>Energy systems</li>
              </ul>
            </div>
          </div>

          <div className="my-10 h-12 w-px bg-[var(--t4-border)]" />

          <div className="rounded-2xl border border-[var(--t4-border)] bg-[#f8f6f1] px-8 py-4 text-center">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#7c5b2d]">
              Strategic Result
            </div>

            <div className="mt-1 text-lg font-semibold text-[var(--t4-text)]">
              National Resilience & Competitive Advantage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}