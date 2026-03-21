export const tools = [
  {
    slug: "cm-to-inches",
    name: "CM to Inches Converter",
    category: "converters",
    factor: 1 / 2.54,
    unitFrom: "cm",
    unitTo: "inches",
    formula: "1 cm = 0.3937 inches",
    examples: [150, 160, 170, 180],
    reverseSlug: "inches-to-cm",
  },
  {
    slug: "inches-to-cm",
    name: "Inches to CM Converter",
    category: "converters",
    factor: 2.54,
    unitFrom: "inches",
    unitTo: "cm",
    formula: "1 inch = 2.54 cm",
    examples: [10, 20, 30, 40],
    reverseSlug: "cm-to-inches",
  },
];