import { notFound } from "next/navigation";
import {
  sleepLandingPages,
  type SleepLandingPage,
} from "@/data/sleepLandingPages";
import SleepAffiliateBlock from "@/components/SleepAffiliateBlock";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getRelatedPages(currentPage: SleepLandingPage) {
  return sleepLandingPages
    .filter((page) => page.slug !== currentPage.slug)
    .map((page) => {
      const overlap = page.tags.filter((tag) =>
        currentPage.tags.includes(tag)
      ).length;

      return {
        ...page,
        score: overlap,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function getPageAngle(page: SleepLandingPage) {
  if (page.tags.includes("apnea")) {
    return {
      label: "Possible medical sleep issue",
      whatThisMeans:
        "This pattern should not be treated as simple poor sleep if symptoms are frequent, severe, or include breathing-related warning signs.",
      commonCauses: [
        "Loud snoring or interrupted breathing",
        "Fragmented sleep quality",
        "Morning headaches or dry mouth",
        "Excessive daytime sleepiness",
      ],
      nextSteps: [
        "Use the Sleep Assessment Tool to check your symptom pattern.",
        "Do not rely only on sleep hygiene if breathing symptoms are present.",
        "Consider professional medical assessment if warning signs are frequent.",
      ],
    };
  }

  if (page.tags.includes("circadian")) {
    return {
      label: "Sleep timing and body clock",
      whatThisMeans:
        "This pattern often reflects a mismatch between your desired sleep time and your internal body clock.",
      commonCauses: [
        "Irregular wake times",
        "Late light exposure",
        "Too little morning light",
        "Shift work, travel, or inconsistent routines",
      ],
      nextSteps: [
        "Anchor your wake time first.",
        "Use morning light as a timing signal.",
        "Move bedtime gradually rather than forcing an early bedtime.",
      ],
    };
  }

  if (page.tags.includes("stress") || page.tags.includes("anxiety")) {
    return {
      label: "Stress and mental activation",
      whatThisMeans:
        "This pattern often happens when the brain remains alert at bedtime because of worry, planning, frustration, or tension.",
      commonCauses: [
        "Racing thoughts",
        "Bedtime worry or planning",
        "Pressure to fall asleep quickly",
        "Conditioned wakefulness in bed",
      ],
      nextSteps: [
        "Move planning and problem-solving earlier in the evening.",
        "Use a short, repeatable wind-down routine.",
        "Avoid turning bedtime into a performance test.",
      ],
    };
  }

  if (page.tags.includes("apps") || page.tags.includes("products")) {
    return {
      label: "Product and tool comparison",
      whatThisMeans:
        "Apps and devices can support better sleep habits, but they should match the actual sleep problem rather than becoming another source of sleep anxiety.",
      commonCauses: [
        "Choosing tools before understanding the sleep pattern",
        "Overreliance on sleep scores",
        "Using relaxation tools for problems that need structure",
        "Ignoring possible medical warning signs",
      ],
      nextSteps: [
        "Start by identifying your sleep problem type.",
        "Use tools that match your main pattern.",
        "Treat tracker data as trend information, not a diagnosis.",
      ],
    };
  }

  return {
    label: "Insomnia-type sleep pattern",
    whatThisMeans:
      "This pattern often involves difficulty falling asleep, staying asleep, or waking too early, especially when it starts repeating and affects daytime function.",
    commonCauses: [
      "Too much time awake in bed",
      "Irregular wake time",
      "Late caffeine or evening stimulation",
      "Stress, worry, or conditioned wakefulness",
    ],
    nextSteps: [
      "Keep wake time stable for one week.",
      "Avoid going to bed much earlier after a bad night.",
      "Use the Sleep Assessment Tool to identify the dominant pattern.",
    ],
  };
}

export function generateStaticParams() {
  return sleepLandingPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = sleepLandingPages.find((item) => item.slug === slug);

  if (!page) {
    return {
      title: "Sleep Guide | T4 Atlas",
    };
  }

  return {
    title: `${page.title} | T4 Atlas`,
    description: page.description,
  };
}

export default async function SleepLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = sleepLandingPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const relatedPages = getRelatedPages(page);
  const angle = getPageAngle(page);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="mb-8">
        <p className="text-sm font-medium text-gray-500">Sleep Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{page.title}</h1>
        <p className="mt-4 max-w-2xl text-gray-700">{page.description}</p>
      </section>

      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
          {angle.label}
        </p>
        <h2 className="mt-2 text-lg font-semibold">Short answer</h2>
        <p className="mt-3 text-gray-700">{page.shortAnswer}</p>

        <a
          href={page.primaryTool.href}
          className="mt-5 inline-block rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          {page.primaryTool.label}
        </a>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">What this means</h2>
        <p className="mt-3 text-gray-700">{angle.whatThisMeans}</p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Common causes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            {angle.commonCauses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">What to do next</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            {angle.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

     <section className="mt-10 space-y-6">
  {page.sections.map((section) => (
    <div key={section.heading} className="rounded-2xl border bg-white p-5">
      <h2 className="text-xl font-semibold">{section.heading}</h2>
      <p className="mt-3 text-gray-700">{section.body}</p>

      <p className="mt-4 text-gray-600">
        This type of sleep pattern is common and often develops gradually. Many
        people respond by trying to fix sleep directly, but changes in timing,
        behavior, and expectations around sleep are often more effective.
      </p>

      <p className="mt-3 text-gray-600">
        The key is to focus on consistent signals to the body rather than
        isolated “sleep hacks”. Sleep is usually an outcome of the right
        conditions, not something that can be forced.
      </p>
    </div>
  ))}
</section>

      <section className="mt-10 rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Use a sleep tool</h2>
        <p className="mt-2 text-sm text-gray-600">
          Tools work best when they match your actual sleep pattern. Start with
          assessment if you are unsure.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <a
            href="/tools/sleep/sleep-assessment"
            className="rounded-xl border p-4 text-sm hover:bg-gray-50"
          >
            Sleep Assessment
          </a>
          <a
            href="/tools/sleep/sleep-plan-generator"
            className="rounded-xl border p-4 text-sm hover:bg-gray-50"
          >
            Sleep Plan Generator
          </a>
          <a
            href="/tools/sleep/sleep-restriction-calculator"
            className="rounded-xl border p-4 text-sm hover:bg-gray-50"
          >
            Sleep Restriction Calculator
          </a>
        </div>
      </section>

<section className="mt-10 rounded-2xl border bg-white p-5 shadow-sm">
  <h2 className="text-xl font-semibold">How long does this take to improve?</h2>

  <p className="mt-3 text-gray-700">
    Sleep problems rarely resolve overnight. Most people see gradual improvement
    over days to weeks when the main pattern is addressed consistently.
  </p>

  <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
    <li>Sleep timing changes: often 3–7 days</li>
    <li>Insomnia-type patterns: often 2–4 weeks</li>
    <li>Stress-related sleep: varies depending on underlying factors</li>
  </ul>

  <p className="mt-4 text-gray-600">
    Trying multiple strategies at once often makes it harder to see what
    actually works. A simple, consistent approach is usually more effective.
  </p>
</section>

      <SleepAffiliateBlock pageSlug={page.slug} />

      <section className="mt-10 rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Related sleep guides</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {relatedPages.map((relatedPage) => (
            <a
              key={relatedPage.href}
              href={relatedPage.href}
              className="rounded-xl border p-4 text-sm hover:bg-gray-50"
            >
              {relatedPage.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t pt-6 text-sm text-gray-500">
        <p>
          This page is structured for future display ads, affiliate comparison
          blocks, and internal promotion of sleep tools.
        </p>
      </section>
    </main>
  );
}