export type AiReplacingExcelEntry = {
  slug: string;
  name: string;
  category:
    | "spreadsheet-ai"
    | "data-analysis"
    | "general-assistant"
    | "business-intelligence"
    | "automation"
    | "database-workflow";
  replacementStrength: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  bestFor: string;
  replacesExcelFor: string;
  whyTeamsUseIt: string;
  whereExcelStillWins: string;
  relatedPage?: string;
};

export const aiReplacingExcelLastUpdated = "2026-05-14";

export const aiReplacingExcelMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI tools replacing parts of traditional Excel and spreadsheet workflows. It combines public AI tool visibility, workflow relevance, business adoption signals, and T4 Atlas analysis. Replacement strength is directional and should not be interpreted as audited software market share.",
};

export const aiReplacingExcelData: AiReplacingExcelEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "general-assistant",
    replacementStrength: "high",
    momentumScore: 90,
    bestFor:
      "Formula help, data cleanup logic, spreadsheet explanation, analysis planning, and lightweight automation",
    replacesExcelFor:
      "Explaining formulas, generating spreadsheet logic, writing CSV transformations, summarizing tables, and helping users reason through data tasks.",
    whyTeamsUseIt:
      "ChatGPT is often the fastest way to get help with formulas, data-cleaning logic, spreadsheet interpretation, and quick analysis workflows.",
    whereExcelStillWins:
      "Excel remains stronger for direct spreadsheet editing, established finance models, offline workbooks, pivot tables, and deeply embedded business workflows.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot",
    category: "spreadsheet-ai",
    replacementStrength: "very high",
    momentumScore: 88,
    bestFor:
      "AI assistance inside Microsoft Excel and Microsoft 365 workflows",
    replacesExcelFor:
      "Natural-language spreadsheet interaction, formula generation, summaries, chart suggestions, and analysis inside existing Microsoft workflows.",
    whyTeamsUseIt:
      "Copilot is especially important because it brings AI directly into the spreadsheet ecosystem many businesses already use.",
    whereExcelStillWins:
      "Traditional Excel skills still matter for model structure, auditing, complex financial logic, and high-stakes spreadsheet governance.",
  },
  {
    slug: "google-sheets-gemini",
    name: "Gemini in Google Sheets",
    category: "spreadsheet-ai",
    replacementStrength: "high",
    momentumScore: 82,
    bestFor:
      "AI support inside Google Workspace and collaborative spreadsheet workflows",
    replacesExcelFor:
      "Formula support, spreadsheet summaries, table organization, collaborative analysis, and natural-language help inside Google Sheets.",
    whyTeamsUseIt:
      "Teams already using Google Workspace can access AI assistance inside collaborative spreadsheet workflows.",
    whereExcelStillWins:
      "Excel still has stronger legacy business adoption, advanced modeling depth, and finance-heavy workflow penetration.",
  },
  {
    slug: "rows",
    name: "Rows",
    category: "spreadsheet-ai",
    replacementStrength: "medium",
    momentumScore: 74,
    bestFor:
      "Modern spreadsheet workflows with integrations, AI functions, and business data connections",
    replacesExcelFor:
      "Lightweight business dashboards, connected spreadsheets, enrichment workflows, and AI-assisted tables.",
    whyTeamsUseIt:
      "Rows is attractive when teams want a more modern spreadsheet experience with integrations and AI-native workflows.",
    whereExcelStillWins:
      "Excel remains stronger for complex modeling, enterprise familiarity, and legacy spreadsheet processes.",
  },
  {
    slug: "airtable",
    name: "Airtable AI",
    category: "database-workflow",
    replacementStrength: "medium",
    momentumScore: 76,
    bestFor:
      "Structured operational databases, lightweight apps, project workflows, and AI-assisted records",
    replacesExcelFor:
      "Operational spreadsheets, trackers, content calendars, CRM-like tables, and collaborative business databases.",
    whyTeamsUseIt:
      "Airtable replaces spreadsheet chaos when teams need structure, permissions, views, and workflow-oriented databases.",
    whereExcelStillWins:
      "Excel remains stronger for ad hoc analysis, finance models, personal spreadsheets, and heavy formula-based workbooks.",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    category: "database-workflow",
    replacementStrength: "medium",
    momentumScore: 72,
    bestFor:
      "Docs-connected databases, project tracking, knowledge bases, and internal operating systems",
    replacesExcelFor:
      "Simple trackers, project lists, content workflows, internal planning databases, and team knowledge tables.",
    whyTeamsUseIt:
      "Notion AI is useful when spreadsheet-like data is connected to notes, docs, tasks, and internal knowledge.",
    whereExcelStillWins:
      "Excel remains better for numeric modeling, financial analysis, formulas, and spreadsheet-native workflows.",
    relatedPage: "/tools/ai/best-ai-workspace-tools",
  },
  {
    slug: "power-bi-copilot",
    name: "Power BI Copilot",
    category: "business-intelligence",
    replacementStrength: "medium",
    momentumScore: 79,
    bestFor:
      "Business intelligence, dashboards, enterprise reporting, and natural-language analytics",
    replacesExcelFor:
      "Recurring reports, dashboards, management reporting, data visualization, and business metrics exploration.",
    whyTeamsUseIt:
      "Power BI can replace spreadsheet-based reporting when teams need governed dashboards and repeatable analytics.",
    whereExcelStillWins:
      "Excel remains faster for small ad hoc analysis, personal models, and flexible one-off calculations.",
  },
  {
    slug: "zapier-ai",
    name: "Zapier AI",
    category: "automation",
    replacementStrength: "medium",
    momentumScore: 70,
    bestFor:
      "Spreadsheet workflow automation, app connections, and repetitive data movement",
    replacesExcelFor:
      "Manual copy-paste workflows, recurring spreadsheet updates, data routing, and simple operational automations.",
    whyTeamsUseIt:
      "Zapier AI helps teams move spreadsheet-like workflows into automated processes across apps.",
    whereExcelStillWins:
      "Excel remains better for human-controlled analysis, spreadsheet modeling, and flexible exploratory work.",
  },
];

export const aiReplacingExcelKeyFindings = [
  {
    title: "AI replaces spreadsheet assistance before spreadsheets themselves",
    description:
      "AI is strongest at helping users write formulas, understand tables, clean data, generate summaries, and automate repetitive spreadsheet work.",
  },
  {
    title: "Excel remains deeply embedded in business workflows",
    description:
      "Excel is hard to replace because it is familiar, flexible, trusted, and central to finance, reporting, operations, and analysis.",
  },
  {
    title: "The real shift is from spreadsheets to workflows",
    description:
      "Many teams are not replacing Excel with one AI tool; they are moving spreadsheet-like work into databases, dashboards, automation systems, and AI assistants.",
  },
  {
    title: "Microsoft Copilot may defend Excel rather than replace it",
    description:
      "Copilot could make Excel more powerful by adding natural-language interaction inside the spreadsheet environment.",
  },
];

export const aiReplacingExcelUseCases = [
  {
    useCase: "Formula help and spreadsheet logic",
    strongestTools: ["ChatGPT", "Microsoft Copilot", "Gemini in Google Sheets"],
    description:
      "AI helps users write formulas, debug spreadsheet logic, explain calculations, and understand workbook structure.",
  },
  {
    useCase: "Data cleanup and transformation",
    strongestTools: ["ChatGPT", "Rows", "Zapier AI"],
    description:
      "AI can help clean messy data, generate transformation logic, structure CSV workflows, and automate repetitive spreadsheet tasks.",
  },
  {
    useCase: "Dashboards and recurring reports",
    strongestTools: ["Power BI Copilot", "Airtable AI", "Rows"],
    description:
      "Spreadsheet-based reporting can move into dashboards, structured databases, and AI-assisted business intelligence workflows.",
  },
  {
    useCase: "Operational trackers",
    strongestTools: ["Airtable AI", "Notion AI", "Rows"],
    description:
      "Teams often replace spreadsheets used as databases with more structured tools that support views, permissions, collaboration, and automations.",
  },
  {
    useCase: "Finance models and ad hoc analysis",
    strongestTools: ["Excel", "Microsoft Copilot", "ChatGPT"],
    description:
      "Excel remains extremely strong for finance models and flexible analysis, but AI can assist with formulas, explanations, and scenario logic.",
  },
];