export type WeightLossEditorialType = "best" | "alternative" | "comparison" | "guide";

export type WeightLossEditorialPage = {
  slug: string;
  title: string;
  type: WeightLossEditorialType;
  href: string;
  topics: string[];
  affiliateSlugs?: string[];
};

export const weightLossEditorialPages: WeightLossEditorialPage[] = [
  {
    slug: "best-weight-loss-apps",
    title: "Best Weight Loss Apps",
    type: "best",
    href: "/tools/weight-loss/best-weight-loss-apps",
    topics: ["apps", "tracking", "weight-loss"],
    affiliateSlugs: ["myfitnesspal", "noom", "lifesum"],
  },
  {
    slug: "best-calorie-tracking-apps",
    title: "Best Calorie Tracking Apps",
    type: "best",
    href: "/tools/weight-loss/best-calorie-tracking-apps",
    topics: ["apps", "calorie-tracking", "nutrition"],
    affiliateSlugs: ["myfitnesspal", "lifesum", "cronometer"],
  },
  {
    slug: "myfitnesspal-alternatives",
    title: "MyFitnessPal Alternatives",
    type: "alternative",
    href: "/tools/weight-loss/myfitnesspal-alternatives",
    topics: ["apps", "tracking", "alternatives"],
    affiliateSlugs: ["lifesum", "cronometer", "noom"],
  },
  {
    slug: "intermittent-fasting-vs-calorie-deficit",
    title: "Intermittent Fasting vs Calorie Deficit",
    type: "comparison",
    href: "/tools/weight-loss/intermittent-fasting-vs-calorie-deficit",
    topics: ["fasting", "calorie-deficit", "comparison"],
  },
  {
    slug: "walking-vs-running-for-weight-loss",
    title: "Walking vs Running for Weight Loss",
    type: "comparison",
    href: "/tools/weight-loss/walking-vs-running-for-weight-loss",
    topics: ["exercise", "comparison", "weight-loss"],
  },
  {
    slug: "what-actually-causes-weight-loss",
    title: "What Actually Causes Weight Loss?",
    type: "guide",
    href: "/tools/weight-loss/what-actually-causes-weight-loss",
    topics: ["energy-balance", "guide", "weight-loss"],
  },
  {
    slug: "how-much-calorie-deficit-is-safe",
    title: "How Much Calorie Deficit Is Safe?",
    type: "guide",
    href: "/tools/weight-loss/how-much-calorie-deficit-is-safe",
    topics: ["calorie-deficit", "guide", "safety"],
  },

];