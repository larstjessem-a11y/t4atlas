import { sleepLandingPages } from "@/data/sleepLandingPages";

export const metadata = {
  title: "Sleep Tools and Guides | T4 Atlas",
  description:
    "Understand insomnia, sleep schedules, stress-related sleep issues, and possible sleep apnea warning signs using structured tools and guides.",
};

function filterByTag(tag: string) {
  return sleepLandingPages.filter((page) => page.tags.includes(tag));
}

export default function SleepHubPage() {
  const insomniaPages = filterByTag("insomnia");
  const circadianPages = filterByTag("circadian");
  const apneaPages = filterByTag("apnea");
  const stressPages = filterByTag("stress");
 const productPages = Array.from(
  new Map(
    sleepLandingPages
      .filter(
        (page) =>
          page.tags.includes("monetization") ||
          page.tags.includes("apps") ||
          page.tags.includes("products")
      )
      .map((page) => [page.href, page])
  ).values()
);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="mb-10">
        <p className="text-sm font-medium text-gray-500">Sleep Hub</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Sleep Tools and Guides
        </h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Identify your sleep problem, understand patterns, and build a practical
          plan using structured tools and focused guides.
        </p>
      </section>

      {/* START HERE */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Start here</h2>
        <p className="mt-3 max-w-2xl text-gray-700">
          Not sure what type of sleep problem you have? Start with the assessment
          tool.
        </p>

        <a
          href="/tools/sleep/sleep-assessment"
          className="mt-5 inline-block rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Take the Sleep Assessment
        </a>
      </section>

      {/* TOOLS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Sleep tools</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <a href="/tools/sleep/sleep-assessment" className="card">
            <h3>Sleep Assessment</h3>
          </a>

          <a href="/tools/sleep/sleep-plan-generator" className="card">
            <h3>Sleep Plan Generator</h3>
          </a>

          <a href="/tools/sleep/sleep-restriction-calculator" className="card">
            <h3>Sleep Restriction Calculator</h3>
          </a>
        </div>
      </section>

      {/* INSOMNIA */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Insomnia and falling asleep</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {insomniaPages.map((page) => (
            <a key={page.href} href={page.href} className="card">
              <h3>{page.title}</h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CIRCADIAN */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Sleep schedule and circadian rhythm</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {circadianPages.map((page) => (
            <a key={page.href} href={page.href} className="card">
              <h3>{page.title}</h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* APNEA */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Fatigue and sleep apnea risk</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {apneaPages.map((page) => (
            <a key={page.href} href={page.href} className="card">
              <h3>{page.title}</h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* STRESS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Stress, anxiety, and overthinking</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {stressPages.map((page) => (
            <a key={page.href} href={page.href} className="card">
              <h3>{page.title}</h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Apps, tools, and products</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {productPages.map((page) => (
            <a key={page.href} href={page.href} className="card">
              <h3>{page.title}</h3>
              <p className="text-sm text-gray-600">{page.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* MONETIZATION NOTE */}
      <section className="mt-10 rounded-2xl border p-5">
        <h2 className="text-lg font-semibold">About this hub</h2>
        <p className="mt-3 text-gray-700">
          This hub is structured to support both free tools and future product
          comparisons, affiliate recommendations, and decision guides.
        </p>
      </section>
    </main>
  );
}