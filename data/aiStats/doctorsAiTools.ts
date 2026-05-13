export type DoctorsAiToolEntry = {
  slug: string;
  name: string;
  category:
    | "clinical-documentation"
    | "medical-search"
    | "patient-communication"
    | "research"
    | "diagnostic-support"
    | "practice-operations"
    | "general-assistant";
  adoptionLevel: "very high" | "high" | "medium" | "emerging";
  momentumScore: number;
  bestFor: string;
  workflowRole: string;
  whyDoctorsUseIt: string;
  risksOrLimitations: string;
  relatedPage?: string;
};

export const doctorsAiToolsLastUpdated = "2026-05-13";

export const doctorsAiToolsMethodology = {
  title: "Methodology",
  description:
    "This page is a structured editorial intelligence model for AI tools used by doctors. It combines public AI tool visibility, healthcare workflow relevance, adoption signals, and T4 Atlas analysis. Adoption levels are directional and should not be interpreted as audited clinical usage statistics.",
};

export const doctorsAiToolsData: DoctorsAiToolEntry[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "general-assistant",
    adoptionLevel: "very high",
    momentumScore: 92,
    bestFor:
      "General medical writing support, patient-friendly explanations, admin drafts, and research assistance",
    workflowRole:
      "A flexible assistant for drafting, summarizing, translating medical language, preparing patient information, and structuring non-diagnostic clinical text.",
    whyDoctorsUseIt:
      "Doctors use ChatGPT because it is broadly available and useful for writing, explanation, summarization, and administrative support.",
    risksOrLimitations:
      "Should not be used as an unverified diagnostic authority. Outputs must be checked by qualified clinicians, especially for patient-specific decisions.",
    relatedPage: "/tools/ai/ai-tools-market-share",
  },
  {
    slug: "openai-api",
    name: "OpenAI API",
    category: "practice-operations",
    adoptionLevel: "high",
    momentumScore: 86,
    bestFor:
      "Custom clinic workflows, triage support, structured intake, summarization, and administrative automation",
    workflowRole:
      "Can power custom healthcare-adjacent tools such as intake forms, note summarization, patient-message classification, and internal workflow automation.",
    whyDoctorsUseIt:
      "Clinics and healthtech builders use APIs when they need controlled, repeatable workflows rather than a general chatbot interface.",
    risksOrLimitations:
      "Requires strict privacy, security, logging, data-processing, and clinical-governance controls before handling sensitive health information.",
  },
  {
    slug: "nablas-copilot",
    name: "Nabla Copilot",
    category: "clinical-documentation",
    adoptionLevel: "high",
    momentumScore: 84,
    bestFor: "AI medical scribing and clinical note generation",
    workflowRole:
      "Supports ambient clinical documentation by turning doctor-patient conversations into structured clinical notes.",
    whyDoctorsUseIt:
      "AI scribes are attractive because documentation burden is one of the largest daily friction points in clinical practice.",
    risksOrLimitations:
      "Generated notes require clinician review. Accuracy, consent, privacy, and local regulatory compliance are critical.",
  },
  {
    slug: "heidi-health",
    name: "Heidi Health",
    category: "clinical-documentation",
    adoptionLevel: "high",
    momentumScore: 82,
    bestFor: "Clinical documentation, medical notes, letters, and consultation summaries",
    workflowRole:
      "Helps clinicians create notes, letters, summaries, and structured clinical documentation from consultations.",
    whyDoctorsUseIt:
      "Doctors use clinical documentation tools to reduce administrative burden and reclaim time from note-writing.",
    risksOrLimitations:
      "Must be reviewed before use in patient records. Data protection and clinical accountability remain central.",
  },
  {
    slug: "doximity-gpt",
    name: "Doximity GPT",
    category: "general-assistant",
    adoptionLevel: "medium",
    momentumScore: 76,
    bestFor: "Medical drafting, letters, messages, and physician productivity",
    workflowRole:
      "Supports physician-facing writing tasks such as letters, administrative drafts, patient communication, and summarization.",
    whyDoctorsUseIt:
      "It is positioned for doctors and physician workflows rather than generic consumer AI use.",
    risksOrLimitations:
      "Still requires clinical review and should not replace professional judgment.",
  },
  {
    slug: "uptodate",
    name: "UpToDate",
    category: "medical-search",
    adoptionLevel: "very high",
    momentumScore: 88,
    bestFor: "Evidence-based clinical reference and medical decision support",
    workflowRole:
      "Provides clinician-oriented reference material for diagnosis, treatment, guidelines, and clinical decisions.",
    whyDoctorsUseIt:
      "Doctors rely on trusted medical references when clinical accuracy, guideline alignment, and source quality matter.",
    risksOrLimitations:
      "Not a general-purpose AI assistant. Access, local guideline differences, and context-specific judgment still matter.",
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "research",
    adoptionLevel: "medium",
    momentumScore: 78,
    bestFor: "Medical research discovery, source-backed answers, and literature exploration",
    workflowRole:
      "Can support early research discovery and source-finding when clinicians need to explore a topic quickly.",
    whyDoctorsUseIt:
      "Doctors and researchers may use Perplexity when they want source-backed answers faster than ordinary web search.",
    risksOrLimitations:
      "Should not replace PubMed, guidelines, systematic reviews, or validated clinical references.",
    relatedPage: "/tools/ai/best-ai-tools-for-research",
  },
  {
    slug: "elicit",
    name: "Elicit",
    category: "research",
    adoptionLevel: "medium",
    momentumScore: 74,
    bestFor: "Literature review support and research question exploration",
    workflowRole:
      "Helps researchers search, screen, and summarize scientific literature and evidence.",
    whyDoctorsUseIt:
      "Useful for doctors involved in research, guideline work, academic writing, or evidence synthesis.",
    risksOrLimitations:
      "Literature summaries must be verified against original papers and proper evidence appraisal methods.",
  },
  {
    slug: "deepgram",
    name: "Deepgram",
    category: "clinical-documentation",
    adoptionLevel: "emerging",
    momentumScore: 69,
    bestFor: "Speech-to-text infrastructure for healthcare and workflow automation",
    workflowRole:
      "Can support voice-driven workflows, transcription, and documentation infrastructure when integrated into clinical systems.",
    whyDoctorsUseIt:
      "Voice capture is central to reducing documentation burden, especially in busy clinical settings.",
    risksOrLimitations:
      "Healthcare usage requires appropriate privacy, consent, security, and domain-specific accuracy controls.",
  },
];

export const doctorsAiToolsKeyFindings = [
  {
    title: "Documentation is the highest-friction use case",
    description:
      "AI scribes and clinical documentation tools are especially relevant because note-writing and administrative work consume large amounts of physician time.",
  },
  {
    title: "General AI tools are useful but risky without governance",
    description:
      "General assistants can help with drafting and summarization, but clinical outputs must be reviewed and privacy rules must be respected.",
  },
  {
    title: "Doctors need evidence-first AI workflows",
    description:
      "Medical AI tools should be judged by source quality, verification, workflow fit, and clinical accountability rather than convenience alone.",
  },
  {
    title: "Operations may be a major near-term opportunity",
    description:
      "Many valuable AI uses in healthcare are administrative: intake, triage routing, summarization, letters, messaging, and internal workflow automation.",
  },
];

export const doctorsAiWorkflowStages = [
  {
    stage: "Clinical documentation",
    tools: ["Nabla Copilot", "Heidi Health", "Deepgram"],
    description:
      "AI scribes and transcription tools can reduce documentation burden by helping create structured notes, summaries, and letters.",
  },
  {
    stage: "Medical reference",
    tools: ["UpToDate", "ChatGPT", "Perplexity"],
    description:
      "Doctors use medical references and AI search tools to explore clinical questions, but patient-specific decisions require verified sources and professional judgment.",
  },
  {
    stage: "Patient communication",
    tools: ["ChatGPT", "Doximity GPT", "Heidi Health"],
    description:
      "AI can help draft patient-friendly explanations, letters, instructions, and administrative messages.",
  },
  {
    stage: "Research and evidence synthesis",
    tools: ["Perplexity", "Elicit", "ChatGPT"],
    description:
      "AI tools can support literature discovery, summarization, and early evidence mapping, but original sources still need review.",
  },
  {
    stage: "Clinic operations",
    tools: ["OpenAI API", "ChatGPT", "Deepgram"],
    description:
      "Custom AI workflows can support structured intake, message classification, internal triage, and administrative automation.",
  },
];