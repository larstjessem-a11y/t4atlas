type AiMoneyPick = {
  name: string;
  bestFor: string;
  whyChooseIt: string;
  watchOutFor: string;
  idealFor: string;
};

type AiMoneyPicksProps = {
  title?: string;
  intro?: string;
  picks: AiMoneyPick[];
};

export default function AiMoneyPicks({
  title = "Top picks",
  intro,
  picks,
}: AiMoneyPicksProps) {
  if (!picks.length) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-sm">
      <div className="border-b bg-white/70 px-6 py-6 md:px-8">
        <div className="mb-3 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-600">
          Decision layer
        </div>

        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h2>

        {intro ? <p className="max-w-3xl text-gray-600">{intro}</p> : null}
      </div>

      <div className="grid gap-4 p-6 md:p-8">
        {picks.map((pick, index) => (
          <div
            key={pick.name}
            className="rounded-[1.5rem] border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                  Pick {index + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                  {pick.name}
                </h3>
              </div>

              <div className="inline-flex rounded-full border bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                Best for: {pick.bestFor}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Ideal for
                </p>
                <p className="text-gray-700">{pick.idealFor}</p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Why choose it
                </p>
                <p className="text-gray-700">{pick.whyChooseIt}</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 md:col-span-2">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Watch out for
                </p>
                <p className="text-gray-700">{pick.watchOutFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}