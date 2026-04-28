type SleepAffiliateBlockProps = {
  pageSlug: string;
};

const sleepAffiliateData: Record<
  string,
  {
    title: string;
    intro: string;
    items: {
      name: string;
      bestFor: string;
      description: string;
      cta: string;
    }[];
  }
> = {
  "best-sleep-apps": {
    title: "Sleep apps to compare",
    intro:
      "These are example recommendation slots. Replace them later with real app reviews, affiliate links, or sponsored placements.",
    items: [
      {
        name: "CBT-I focused app",
        bestFor: "Insomnia patterns",
        description:
          "Best for users who need structured sleep scheduling, sleep diaries, and behavioral guidance.",
        cta: "Compare CBT-I apps",
      },
      {
        name: "Meditation sleep app",
        bestFor: "Stress and overthinking",
        description:
          "Best for users whose sleep problems are driven by rumination, worry, or bedtime tension.",
        cta: "Compare meditation apps",
      },
      {
        name: "Sleep sound app",
        bestFor: "Noise disruption",
        description:
          "Best for users who mainly need sound masking, white noise, or relaxing audio.",
        cta: "Compare sound apps",
      },
    ],
  },

  "best-cbt-i-apps": {
    title: "CBT-I app features to compare",
    intro:
      "CBT-I apps should be judged by structure, not just relaxation content.",
    items: [
      {
        name: "Sleep diary support",
        bestFor: "Tracking patterns",
        description:
          "Useful for identifying sleep timing, sleep efficiency, and repeated insomnia patterns.",
        cta: "Review sleep diary tools",
      },
      {
        name: "Sleep window planning",
        bestFor: "CBT-I light",
        description:
          "Helps users build a realistic sleep window instead of spending too long awake in bed.",
        cta: "Compare planning tools",
      },
      {
        name: "Stimulus control guidance",
        bestFor: "Conditioned wakefulness",
        description:
          "Useful when the bed has become associated with frustration, wakefulness, or worry.",
        cta: "Compare CBT-I features",
      },
    ],
  },

  "best-white-noise-apps": {
    title: "White noise app features to compare",
    intro:
      "White noise tools can help with environmental noise, but they should not be presented as a cure for insomnia or sleep apnea.",
    items: [
      {
        name: "White noise library",
        bestFor: "General masking",
        description:
          "Useful for blocking inconsistent background noise such as traffic or neighbors.",
        cta: "Compare white noise apps",
      },
      {
        name: "Nature sounds",
        bestFor: "Relaxation",
        description:
          "May help users who prefer softer soundscapes before sleep.",
        cta: "Compare sound libraries",
      },
      {
        name: "Timer and fade-out",
        bestFor: "Battery and comfort",
        description:
          "A simple timer prevents audio from running all night if not needed.",
        cta: "Compare app features",
      },
    ],
  },

  "best-sunrise-alarm-clocks": {
    title: "Sunrise alarm clock features to compare",
    intro:
      "Sunrise alarms can support a stable wake time, especially in dark mornings.",
    items: [
      {
        name: "Gradual light alarm",
        bestFor: "Waking earlier",
        description:
          "Simulates increasing morning light before the alarm time.",
        cta: "Compare sunrise alarms",
      },
      {
        name: "Adjustable brightness",
        bestFor: "Different rooms",
        description:
          "Important for matching light intensity to room size and personal sensitivity.",
        cta: "Compare brightness options",
      },
      {
        name: "Backup sound alarm",
        bestFor: "Reliability",
        description:
          "Useful if light alone is not enough to wake the user.",
        cta: "Compare alarm features",
      },
    ],
  },

  "best-sleep-trackers": {
    title: "Sleep tracker features to compare",
    intro:
      "Sleep trackers are useful for patterns and trends, but they should not be treated as diagnostic tools.",
    items: [
      {
        name: "Sleep timing trends",
        bestFor: "Schedule consistency",
        description:
          "Useful for seeing bedtime, wake time, and variability over time.",
        cta: "Compare sleep trackers",
      },
      {
        name: "Recovery metrics",
        bestFor: "Training and fatigue",
        description:
          "Useful for users who connect sleep with exercise, stress, and recovery.",
        cta: "Compare recovery tools",
      },
      {
        name: "Comfort and battery life",
        bestFor: "Long-term use",
        description:
          "A tracker only helps if the user can comfortably wear it night after night.",
        cta: "Compare device comfort",
      },
    ],
  },

  "whoop-vs-oura-sleep": {
    title: "Whoop vs Oura: sleep comparison points",
    intro:
      "This section is prepared for a future affiliate comparison table.",
    items: [
      {
        name: "Oura-style ring tracker",
        bestFor: "Minimal wearable feel",
        description:
          "Often preferred by users who do not want a wrist band during sleep.",
        cta: "Compare ring trackers",
      },
      {
        name: "Whoop-style band tracker",
        bestFor: "Recovery-focused users",
        description:
          "Often preferred by users focused on training, recovery, and strain metrics.",
        cta: "Compare recovery wearables",
      },
      {
        name: "Sleep score comparison",
        bestFor: "Behavior change",
        description:
          "Useful only if the data helps improve habits rather than increasing sleep anxiety.",
        cta: "Compare sleep scores",
      },
    ],
  },
};

export default function SleepAffiliateBlock({ pageSlug }: SleepAffiliateBlockProps) {
  const data = sleepAffiliateData[pageSlug];

  if (!data) {
    return null;
  }

  return (
    <section className="mt-10 rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
          Affiliate-ready section
        </p>
        <h2 className="mt-2 text-xl font-semibold">{data.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{data.intro}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {data.items.map((item) => (
          <div key={item.name} className="rounded-2xl border bg-gray-50 p-4">
            <div className="text-sm font-semibold text-gray-900">
              {item.name}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
              Best for: {item.bestFor}
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {item.description}
            </p>
            <button className="mt-4 rounded-xl border bg-white px-3 py-2 text-sm font-medium text-gray-700">
              {item.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Disclosure placeholder: this section may later contain affiliate links,
        sponsored placements, or product recommendations.
      </p>
    </section>
  );
}