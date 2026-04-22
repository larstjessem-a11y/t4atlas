export type WeightLossCalculatorType =
  | "calorie-deficit"
  | "tdee"
  | "bmi"
  | "timeline";

export type WeightLossCalculator = {
  slug: string;
  title: string;
  type: WeightLossCalculatorType;
  description: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
};

export const weightLossCalculators: WeightLossCalculator[] = [
  {
    slug: "calorie-deficit-calculator",
    title: "Calorie Deficit Calculator",
    type: "calorie-deficit",
    description:
      "Estimate the calorie deficit needed to lose weight based on your target pace and body metrics.",
    seoTitle: "Calorie Deficit Calculator | Estimate Weight Loss Deficit",
    seoDescription:
      "Use this calorie deficit calculator to estimate how many calories you need to cut to lose weight at your target pace.",
    intro:
      "A calorie deficit calculator helps estimate how many calories you need to consume below maintenance to lose weight at a realistic pace.",
  },
  {
    slug: "tdee-calculator",
    title: "TDEE Calculator",
    type: "tdee",
    description:
      "Estimate total daily energy expenditure (TDEE) based on body size, sex, age, and activity level.",
    seoTitle: "TDEE Calculator | Estimate Daily Calorie Needs",
    seoDescription:
      "Use this TDEE calculator to estimate how many calories you burn per day based on your body and activity level.",
    intro:
      "A TDEE calculator estimates how many calories you burn each day, which is the foundation for planning a calorie deficit or maintenance intake.",
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    type: "bmi",
    description:
      "Calculate body mass index (BMI) from height and weight.",
    seoTitle: "BMI Calculator | Calculate Body Mass Index",
    seoDescription:
      "Use this BMI calculator to estimate body mass index from your height and weight.",
    intro:
      "A BMI calculator estimates body mass index using height and weight and can be used as a simple screening tool in weight-related planning.",
  },
  {
    slug: "weight-loss-timeline-calculator",
    title: "Weight Loss Timeline Calculator",
    type: "timeline",
    description:
      "Estimate how long it may take to lose weight based on your target loss and daily calorie deficit.",
    seoTitle: "Weight Loss Timeline Calculator | Estimate Time to Lose Weight",
    seoDescription:
      "Use this weight loss timeline calculator to estimate how long it may take to lose your target amount of weight.",
    intro:
      "A weight loss timeline calculator estimates how long it may take to lose a given amount of weight based on deficit size and target pace.",
  },
];