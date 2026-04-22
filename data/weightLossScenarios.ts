export type WeightLossScenario = {
  slug: string;
  calculatorSlug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  prefill?: {
    sex?: "male" | "female";
    age?: string;
    heightCm?: string;
    weightKg?: string;
    activityLevel?: "sedentary" | "light" | "moderate" | "active" | "very-active";
    targetWeightKg?: string;
    dailyCalories?: string;
    targetLossKg?: string;
    weeklyLossKg?: string;
    currentWeight?: string;
    targetWeight?: string;
    dailyDeficit?: string;
  };
};

export const weightLossScenarios: WeightLossScenario[] = [
  {
    slug: "how-long-to-lose-5-kg",
    calculatorSlug: "weight-loss-timeline-calculator",
    title: "How Long to Lose 5 kg",
    seoTitle: "How Long Does It Take to Lose 5 kg? | Weight Loss Timeline Calculator",
    seoDescription:
      "Estimate how long it may take to lose 5 kg based on calorie deficit and target pace.",
    intro:
      "Use this scenario to estimate how long it may take to lose 5 kg at different calorie deficits and weekly weight loss targets.",
   prefill: {
  currentWeight: "85",
  targetWeight: "80",
  dailyDeficit: "500",
},
  },
  {
    slug: "how-long-to-lose-10-kg",
    calculatorSlug: "weight-loss-timeline-calculator",
    title: "How Long to Lose 10 kg",
    seoTitle: "How Long Does It Take to Lose 10 kg? | Weight Loss Timeline Calculator",
    seoDescription:
      "Estimate how long it may take to lose 10 kg based on calorie deficit and target pace.",
    intro:
      "Use this scenario to estimate how long it may take to lose 10 kg based on your expected weekly rate of weight loss.",
    prefill: {
  currentWeight: "90",
  targetWeight: "80",
  dailyDeficit: "500",
},
  },
  {
    slug: "how-long-to-lose-15-kg",
    calculatorSlug: "weight-loss-timeline-calculator",
    title: "How Long to Lose 15 kg",
    seoTitle: "How Long Does It Take to Lose 15 kg? | Weight Loss Timeline Calculator",
    seoDescription:
      "Estimate how long it may take to lose 15 kg at different weekly rates of weight loss.",
    intro:
      "Use this scenario to estimate how long a 15 kg weight loss journey may take depending on your target pace.",
    prefill: {
  currentWeight: "95",
  targetWeight: "80",
  dailyDeficit: "500",
},
  },
  {
    slug: "calorie-deficit-to-lose-0-5-kg-per-week",
    calculatorSlug: "calorie-deficit-calculator",
    title: "Calorie Deficit to Lose 0.5 kg per Week",
    seoTitle: "Calorie Deficit to Lose 0.5 kg per Week | Calorie Deficit Calculator",
    seoDescription:
      "Estimate the calorie deficit needed to lose 0.5 kg per week.",
    intro:
      "Use this scenario to estimate the daily calorie deficit typically associated with a target loss of 0.5 kg per week.",
    prefill: {
  sex: "male",
  age: "35",
  heightCm: "180",
  weightKg: "90",
  activityLevel: "moderate",
  weeklyLossKg: "0.5",
},
  },
  {
    slug: "calorie-deficit-to-lose-1-kg-per-week",
    calculatorSlug: "calorie-deficit-calculator",
    title: "Calorie Deficit to Lose 1 kg per Week",
    seoTitle: "Calorie Deficit to Lose 1 kg per Week | Calorie Deficit Calculator",
    seoDescription:
      "Estimate the calorie deficit needed to lose 1 kg per week.",
    intro:
      "Use this scenario to estimate the calorie deficit associated with a more aggressive target of 1 kg weight loss per week.",
   prefill: {
  sex: "male",
  age: "35",
  heightCm: "180",
  weightKg: "90",
  activityLevel: "moderate",
  weeklyLossKg: "1",
},
  },
  {
    slug: "tdee-for-70-kg-male",
    calculatorSlug: "tdee-calculator",
    title: "TDEE for 70 kg Male",
    seoTitle: "TDEE for 70 kg Male | TDEE Calculator",
    seoDescription:
      "Estimate total daily energy expenditure for a 70 kg male using age, height, and activity assumptions.",
    intro:
      "Use this scenario to estimate TDEE for a 70 kg male under a moderate activity assumption.",
    prefill: {
      sex: "male",
      weightKg: "70",
      age: "35",
      heightCm: "178",
      activityLevel: "moderate",
    },
  },
  {
    slug: "tdee-for-90-kg-male",
    calculatorSlug: "tdee-calculator",
    title: "TDEE for 90 kg Male",
    seoTitle: "TDEE for 90 kg Male | TDEE Calculator",
    seoDescription:
      "Estimate total daily energy expenditure for a 90 kg male using age, height, and activity assumptions.",
    intro:
      "Use this scenario to estimate TDEE for a 90 kg male with moderate activity.",
    prefill: {
      sex: "male",
      weightKg: "90",
      age: "35",
      heightCm: "182",
      activityLevel: "moderate",
    },
  },
  {
    slug: "tdee-for-60-kg-female",
    calculatorSlug: "tdee-calculator",
    title: "TDEE for 60 kg Female",
    seoTitle: "TDEE for 60 kg Female | TDEE Calculator",
    seoDescription:
      "Estimate total daily energy expenditure for a 60 kg female using age, height, and activity assumptions.",
    intro:
      "Use this scenario to estimate TDEE for a 60 kg female under a moderate activity assumption.",
    prefill: {
      sex: "female",
      weightKg: "60",
      age: "35",
      heightCm: "165",
      activityLevel: "moderate",
    },
  },
  {
    slug: "tdee-for-80-kg-female",
    calculatorSlug: "tdee-calculator",
    title: "TDEE for 80 kg Female",
    seoTitle: "TDEE for 80 kg Female | TDEE Calculator",
    seoDescription:
      "Estimate total daily energy expenditure for a 80 kg female using age, height, and activity assumptions.",
    intro:
      "Use this scenario to estimate TDEE for an 80 kg female with moderate activity.",
    prefill: {
      sex: "female",
      weightKg: "80",
      age: "35",
      heightCm: "168",
      activityLevel: "moderate",
    },
  },
  {
    slug: "bmi-for-170-cm-and-70-kg",
    calculatorSlug: "bmi-calculator",
    title: "BMI for 170 cm and 70 kg",
    seoTitle: "BMI for 170 cm and 70 kg | BMI Calculator",
    seoDescription:
      "Calculate BMI for a person who is 170 cm tall and weighs 70 kg.",
    intro:
      "Use this scenario to calculate BMI for a height of 170 cm and a body weight of 70 kg.",
    prefill: {
      heightCm: "170",
      weightKg: "70",
    },
  },
  {
    slug: "bmi-for-180-cm-and-90-kg",
    calculatorSlug: "bmi-calculator",
    title: "BMI for 180 cm and 90 kg",
    seoTitle: "BMI for 180 cm and 90 kg | BMI Calculator",
    seoDescription:
      "Calculate BMI for a person who is 180 cm tall and weighs 90 kg.",
    intro:
      "Use this scenario to calculate BMI for a height of 180 cm and a body weight of 90 kg.",
    prefill: {
      heightCm: "180",
      weightKg: "90",
    },
  },
];