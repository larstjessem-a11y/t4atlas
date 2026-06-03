export type IntelligenceCategory =
  | "ai"
  | "biosecurity"
  | "geopolitics"
  | "supply-chain"
  | "future-risk"
  | "operational-intelligence";

export type IntelligenceArticleSection = {
  title: string;
  body: string[];
};

export type IntelligenceArticle = {
  slug: string;
  title: string;
  category: IntelligenceCategory;
  description: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  executiveSummary: string;
  keyTakeaways: string[];
  mainAnalysis: IntelligenceArticleSection[];
  strategicImplications: string[];
  whatHappensNext: string[];
  relatedDatasets: {
    title: string;
    href: string;
    description: string;
  }[];
  relatedArticles: string[];
  affiliateCategory?: string;
};

export const intelligenceCategories: {
  slug: IntelligenceCategory;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    slug: "ai",
    title: "AI Intelligence",
    href: "/t4-intelligence/ai",
    description:
      "Analysis of AI adoption, AI risk, frontier models, enterprise AI, automation, and the changing technology landscape.",
  },
  {
    slug: "biosecurity",
    title: "Biosecurity Intelligence",
    href: "/t4-intelligence/biosecurity",
    description:
      "Analysis of pandemics, synthetic biology, antimicrobial resistance, biological risk, preparedness, and public-health security.",
  },
  {
    slug: "geopolitics",
    title: "Geopolitical Intelligence",
    href: "/t4-intelligence/geopolitics",
    description:
      "Analysis of strategic competition, chokepoints, national security, conflict scenarios, and geopolitical risk.",
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Intelligence",
    href: "/t4-intelligence/supply-chain",
    description:
      "Analysis of chokepoints, logistics fragility, industrial dependencies, critical minerals, semiconductors, and operational disruption.",
  },
  {
    slug: "future-risk",
    title: "Future Risk Intelligence",
    href: "/t4-intelligence/future-risk",
    description:
      "Scenario analysis across technological convergence, systemic risk, long-term disruption, and emerging strategic threats.",
  },
  {
    slug: "operational-intelligence",
    title: "Operational Intelligence",
    href: "/t4-intelligence/operational-intelligence",
    description:
      "Analysis of workforce resilience, absenteeism, enterprise risk, continuity planning, and organizational preparedness.",
  },
];

export const intelligenceArticles: IntelligenceArticle[] = [
  {
    slug: "the-silent-risk-every-company-ignores",
    title: "The Silent Risk Every Company Ignores",
    category: "operational-intelligence",
    description:
      "Why absenteeism, pandemics, workforce resilience, and health shocks should be treated as core operational risks rather than HR side issues.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: true,
    affiliateCategory: "productivity",
    executiveSummary:
      "Most companies treat workforce disruption as a human-resources problem. That is too narrow. Absenteeism, pandemics, chronic disease, burnout, seasonal infection waves, and care responsibilities can all disrupt operations, supply chains, and service delivery. Workforce resilience should be treated as a strategic risk category.",
    keyTakeaways: [
      "Absenteeism is often managed as a staffing issue even though it can create operational disruption.",
      "Pandemics and seasonal infection waves expose weak assumptions about workforce availability.",
      "Companies need better indicators for workforce resilience, not only retrospective absence reports.",
      "Operational continuity planning should include health shocks, care burdens, and local disease dynamics.",
    ],
    mainAnalysis: [
      {
        title: "Workforce risk is usually detected too late",
        body: [
          "Most organizations understand absenteeism after it has already affected operations. Monthly reports, sick-leave summaries, and HR dashboards are lagging indicators. They show what happened, not what is about to happen.",
          "The operational problem is that workforce availability is treated as a constant. In reality, it is a fragile input affected by disease patterns, school closures, care responsibilities, public-health shocks, burnout, and local outbreaks.",
        ],
      },
      {
        title: "Pandemics revealed the hidden dependency",
        body: [
          "COVID-19 showed that organizations can lose capacity even when buildings, suppliers, and IT systems remain intact. A business can have inventory, contracts, and customers but still fail operationally if the workforce is unavailable.",
          "This is especially important for healthcare, logistics, manufacturing, education, public services, and customer-facing operations where remote work cannot fully compensate for missing people.",
        ],
      },
      {
        title: "The missing layer is predictive workforce intelligence",
        body: [
          "Companies need to move from retrospective absence measurement to predictive workforce risk intelligence. That means combining internal absence patterns with external signals such as local infection trends, weather, school calendars, public-health alerts, and regional disruption indicators.",
          "The goal is not perfect prediction. The goal is enough early warning to adjust staffing, logistics, customer promises, and contingency plans before disruption becomes visible.",
        ],
      },
    ],
    strategicImplications: [
      "Workforce resilience should be part of enterprise risk management, not only HR reporting.",
      "Companies with location-based operations need local risk indicators, not only national averages.",
      "Health intelligence, absence forecasting, and operational continuity planning may become a competitive advantage.",
      "Boards and executives should ask whether critical workflows depend on unrealistic assumptions about staff availability.",
    ],
    whatHappensNext: [
      "More organizations will begin to connect workforce data with external risk signals.",
      "Seasonal infection waves, aging populations, burnout, and future pandemics will make workforce resilience more strategically important.",
      "Enterprise risk platforms may increasingly include health and absenteeism indicators alongside cyber, geopolitical, and supply-chain signals.",
    ],
    relatedDatasets: [
      {
        title: "AI Risk Intelligence",
        href: "/tools/ai/risk-intelligence",
        description:
          "A structured hub for AI risk, operational exposure, governance maturity, and systemic risk.",
      },
      {
        title: "Enterprise AI Adoption Statistics",
        href: "/tools/ai/statistics/enterprise-ai-adoption-statistics",
        description:
          "A structured view of enterprise AI adoption across productivity, operations, research, and security workflows.",
      },
    ],
    relatedArticles: [
      "why-national-preparedness-models-are-stuck-in-the-past",
      "the-next-pandemic-wont-start-in-a-wet-market",
    ],
  },
  {
    slug: "the-next-pandemic-wont-start-in-a-wet-market",
    title: "The Next Pandemic Won't Start in a Wet Market",
    category: "biosecurity",
    description:
      "Why synthetic biology, laboratory risk, dual-use research, and global connectivity may define the next generation of pandemic threats.",
    publishedAt: "2026-06-03",
    readingTime: 9,
    featured: true,
    affiliateCategory: "education",
    executiveSummary:
      "The next pandemic may not follow the public's mental model of a natural spillover event. Synthetic biology, dual-use research, laboratory accidents, distributed biotech capability, and globalized travel create a different risk landscape. Preparedness models must account for both natural and technologically mediated biological risk.",
    keyTakeaways: [
      "Pandemic risk is no longer only a natural spillover problem.",
      "Synthetic biology can increase the number of actors capable of manipulating biological systems.",
      "Preparedness must address lab safety, biosecurity governance, and dual-use knowledge.",
      "The most dangerous scenario is not necessarily the most likely one, but it may deserve disproportionate attention.",
    ],
    mainAnalysis: [
      {
        title: "The old pandemic narrative is too narrow",
        body: [
          "Public debate often imagines pandemics as events that begin with animal-to-human spillover. That remains important, but it is no longer sufficient.",
          "Biotechnology is becoming cheaper, more distributed, more automated, and increasingly assisted by computational tools. That changes the risk landscape.",
        ],
      },
      {
        title: "Synthetic biology changes who can create risk",
        body: [
          "Synthetic biology allows researchers to design, modify, and assemble biological systems with increasing precision. This creates enormous scientific and medical promise, but also raises dual-use concerns.",
          "The problem is not that biotechnology is bad. The problem is that powerful tools can be used accidentally, irresponsibly, or maliciously if governance does not keep pace.",
        ],
      },
      {
        title: "Biosecurity needs an intelligence model",
        body: [
          "Biosecurity cannot rely only on border controls, hospital surveillance, and emergency stockpiles. It needs continuous risk intelligence across research practices, pathogen monitoring, lab safety, synthetic biology capabilities, and geopolitical context.",
          "The central question is not only where the next outbreak starts. It is whether the world will notice early enough and respond coherently.",
        ],
      },
    ],
    strategicImplications: [
      "Biosecurity should be treated as a national-security and enterprise-risk issue.",
      "Synthetic biology governance must balance innovation with misuse prevention.",
      "Preparedness systems should integrate early warning, lab safety, genomic surveillance, and response logistics.",
      "Organizations with global operations should understand biological risk as a continuity risk.",
    ],
    whatHappensNext: [
      "AI-assisted biology will make biosecurity governance more urgent.",
      "The boundary between public health, national security, and technology policy will become less clear.",
      "Private-sector organizations may need biological-risk monitoring as part of operational continuity planning.",
    ],
    relatedDatasets: [
      {
        title: "Most Sensitive AI Capabilities",
        href: "/tools/ai/risk-intelligence/most-sensitive-ai-capabilities",
        description:
          "A structured overview of AI capability areas that create higher operational, cyber, biosecurity, persuasion, and governance risks.",
      },
      {
        title: "Frontier AI Risk Matrix",
        href: "/tools/ai/risk-intelligence/frontier-ai-risk-matrix",
        description:
          "A matrix for comparing frontier AI risk across autonomy, cyber capability, persuasion, biological assistance, and deployment scale.",
      },
    ],
    relatedArticles: [
      "the-silent-risk-every-company-ignores",
      "the-global-antibiotic-crisis-nobody-talks-about",
    ],
  },
  {
    slug: "europes-ai-problem-is-not-technology",
    title: "Europe's AI Problem Is Not Technology",
    category: "ai",
    description:
      "Why Europe has AI talent and research capacity but struggles with commercialization, scale, capital, and platform formation.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: true,
    affiliateCategory: "ai-tools",
    executiveSummary:
      "Europe's AI challenge is not a lack of talent. It is a scaling problem. The continent has strong research institutions, engineers, and industrial companies, but weaker capital markets, fragmented regulation, limited platform companies, and slower commercialization pathways.",
    keyTakeaways: [
      "Europe has significant AI talent but weaker scale-up capacity than the United States and China.",
      "The biggest gap is commercialization, not basic technical competence.",
      "AI leadership requires capital, cloud infrastructure, customers, procurement, and platform ecosystems.",
      "Europe may compete best in applied AI, industrial AI, regulatory technology, robotics, healthcare, and trusted systems.",
    ],
    mainAnalysis: [
      {
        title: "The talent story is incomplete",
        body: [
          "Europe often frames its AI position as a talent problem. That is only partly true. The deeper issue is the conversion of talent into scaled companies, infrastructure, and platform power.",
          "AI advantage depends not only on researchers but also on capital, compute, product velocity, procurement, risk appetite, and access to large markets.",
        ],
      },
      {
        title: "Fragmentation weakens scale",
        body: [
          "European companies often operate across fragmented markets, languages, legal systems, funding environments, and procurement structures. That makes it harder to build AI companies that scale quickly.",
          "The United States benefits from deeper venture capital markets, larger platform companies, faster enterprise adoption, and a more unified commercial environment.",
        ],
      },
      {
        title: "Europe should not copy Silicon Valley exactly",
        body: [
          "Europe's best AI opportunities may be in areas where trust, regulation, industrial depth, healthcare, robotics, and public-sector infrastructure matter.",
          "The strategic question is not whether Europe can produce another OpenAI. It is whether Europe can build defensible AI ecosystems in the sectors where it already has structural advantages.",
        ],
      },
    ],
    strategicImplications: [
      "European AI policy should focus less on statements of ambition and more on scale-up conditions.",
      "Public procurement could become a major lever for AI commercialization.",
      "Europe may need stronger compute access, growth capital, and industrial AI testbeds.",
      "Trustworthy AI can become an advantage only if it is paired with product speed and market access.",
    ],
    whatHappensNext: [
      "European AI companies will likely focus on applied AI, enterprise AI, vertical AI, robotics, healthcare, and regulatory technology.",
      "The gap between AI research and AI commercialization will remain the central policy challenge.",
      "The winners may be companies that combine European domain expertise with global distribution.",
    ],
    relatedDatasets: [
      {
        title: "AI Startup Valuation Rankings",
        href: "/tools/ai/statistics/ai-startup-valuation-rankings",
        description:
          "A structured ranking of high-valuation AI startups across frontier models, infrastructure, coding, robotics, creative AI, and enterprise AI.",
      },
      {
        title: "Most Funded AI Startups",
        href: "/tools/ai/statistics/most-funded-ai-startups",
        description:
          "A structured overview of heavily funded AI startups across frontier models, AI search, infrastructure, coding, robotics, and enterprise AI.",
      },
    ],
    relatedArticles: [
      "the-first-ai-native-company-has-probably-already-been-founded",
      "the-convergence-decade",
    ],
  },
  {
    slug: "the-geography-of-risk",
    title: "The Geography of Risk",
    category: "geopolitics",
    description:
      "How Taiwan, Hormuz, Suez, Panama, and the South China Sea shape global supply chains and systemic risk.",
    publishedAt: "2026-06-03",
    readingTime: 7,
    featured: true,
    affiliateCategory: "education",
    executiveSummary:
      "Globalization created efficiency by concentrating critical flows through narrow chokepoints. Taiwan, Hormuz, Suez, Panama, and the South China Sea are not just locations on a map. They are systemic risk nodes.",
    keyTakeaways: [
      "Modern supply chains depend on a small number of critical geographic chokepoints.",
      "Taiwan is central to semiconductor risk, while Hormuz is central to energy risk.",
      "Suez and Panama show how logistics disruption can spread quickly across sectors.",
      "Geography remains a hard constraint even in a digital economy.",
    ],
    mainAnalysis: [
      {
        title: "Globalization did not eliminate geography",
        body: [
          "The digital economy created the illusion that geography matters less. In reality, physical chokepoints still shape energy, trade, chips, food, and military strategy.",
          "A disruption in one location can ripple across factories, shipping routes, insurance markets, commodity prices, and consumer availability.",
        ],
      },
      {
        title: "Chokepoints are risk multipliers",
        body: [
          "A chokepoint is dangerous not only because it can be blocked. It is dangerous because many systems depend on it simultaneously.",
          "Hormuz affects energy, Taiwan affects semiconductors, Suez affects shipping, Panama affects trade routing, and the South China Sea affects both commerce and strategic competition.",
        ],
      },
      {
        title: "Companies need geographic risk maps",
        body: [
          "Many organizations understand their direct suppliers but not the geographic dependencies beneath them. A supplier may appear diversified while still depending on the same ports, sea lanes, chip fabs, or regional infrastructure.",
          "The next generation of supply-chain intelligence must map geography, not only vendors.",
        ],
      },
    ],
    strategicImplications: [
      "Supply-chain resilience requires geographic dependency mapping.",
      "Companies should identify chokepoints embedded inside second- and third-tier suppliers.",
      "Geopolitical analysis should become part of operational risk planning.",
      "Critical sectors need scenario planning around logistics, energy, and semiconductor disruption.",
    ],
    whatHappensNext: [
      "Supply-chain teams will increasingly incorporate geopolitical intelligence.",
      "Insurance, logistics, and procurement decisions will become more sensitive to chokepoint exposure.",
      "Strategic stockpiles, nearshoring, and dual-sourcing will grow in importance but will not eliminate geographic risk.",
    ],
    relatedDatasets: [
      {
        title: "AI Risk Intelligence",
        href: "/tools/ai/risk-intelligence",
        description:
          "A structured risk-intelligence hub for operational, governance, capability, and systemic AI risks.",
      },
    ],
    relatedArticles: [
      "what-if-china-invades-taiwan-tomorrow",
      "how-a-drought-in-taiwan-can-shut-down-a-factory-in-germany",
    ],
  },
  {
    slug: "the-convergence-decade",
    title: "The Convergence Decade",
    category: "future-risk",
    description:
      "How AI, robotics, synthetic biology, energy systems, and automation may interact over the next decade.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: false,
    affiliateCategory: "education",
    executiveSummary:
      "The next decade will not be defined by AI alone. It will be defined by convergence: AI interacting with robotics, synthetic biology, energy systems, automation, and advanced manufacturing. The strategic risk is that institutions analyze each domain separately while the real disruptions emerge between them.",
    keyTakeaways: [
      "AI is becoming a general-purpose accelerator across multiple technologies.",
      "Robotics, biotech, energy, and automation may compound each other's effects.",
      "Converging technologies create both productivity gains and governance gaps.",
      "The most important risks may emerge at the intersections between fields.",
    ],
    mainAnalysis: [
      {
        title: "AI is not an isolated technology",
        body: [
          "AI is often discussed as a standalone technology. That framing is too narrow. AI increasingly acts as an accelerator for other domains: robotics, drug discovery, synthetic biology, logistics, energy management, software development, and design.",
          "The result is a convergence decade where progress in one field amplifies progress in another.",
        ],
      },
      {
        title: "Institutions are organized in silos",
        body: [
          "Governments, companies, and regulators often analyze technology risks in separate categories. AI policy, biosecurity, energy policy, cyber risk, and labor-market planning are handled by different teams.",
          "But the most important disruptions may occur where these domains intersect.",
        ],
      },
      {
        title: "Convergence changes risk speed",
        body: [
          "When technologies converge, risk can accelerate faster than expected. AI can improve design cycles, automation can scale deployment, and global networks can distribute tools quickly.",
          "This does not mean the future is predetermined. It means strategic planning needs to account for compounding interactions rather than linear forecasts.",
        ],
      },
    ],
    strategicImplications: [
      "Organizations should monitor technological intersections, not only individual sectors.",
      "Scenario planning should include second-order and third-order effects.",
      "Biosecurity, AI governance, cyber risk, and industrial strategy are increasingly connected.",
      "Competitive advantage may come from understanding convergence earlier than competitors.",
    ],
    whatHappensNext: [
      "AI will increasingly become embedded in biotech, robotics, energy, and industrial workflows.",
      "Regulatory systems will struggle to keep pace with cross-domain effects.",
      "Companies will need broader strategic intelligence functions that connect technology, risk, and operations.",
    ],
    relatedDatasets: [
      {
        title: "Frontier AI Risk Matrix",
        href: "/tools/ai/risk-intelligence/frontier-ai-risk-matrix",
        description:
          "A structured matrix for frontier AI risks across autonomy, cyber capability, persuasion, biological assistance, and deployment exposure.",
      },
      {
        title: "Most Sensitive AI Capabilities",
        href: "/tools/ai/risk-intelligence/most-sensitive-ai-capabilities",
        description:
          "A structured overview of AI capabilities that create higher operational, cyber, biosecurity, persuasion, and governance risks.",
      },
    ],
    relatedArticles: [
      "europes-ai-problem-is-not-technology",
      "the-first-ai-native-company-has-probably-already-been-founded",
    ],
  },
  {
    slug: "what-if-china-invades-taiwan-tomorrow",
    title: "What If China Invades Taiwan Tomorrow?",
    category: "geopolitics",
    description:
      "A scenario analysis of how a Taiwan crisis could disrupt semiconductors, shipping, financial markets, and global supply chains.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: false,
    affiliateCategory: "education",
    executiveSummary:
      "A Taiwan invasion scenario would not only be a military crisis. It would be a semiconductor crisis, shipping crisis, insurance crisis, financial-market shock, and political stress test for the global economy.",
    keyTakeaways: [
      "Taiwan is central to advanced semiconductor supply chains.",
      "A crisis would affect electronics, automotive, defense, cloud infrastructure, and industrial automation.",
      "The shock would spread through insurance, shipping, capital markets, and procurement.",
      "Most companies have not mapped their indirect Taiwan exposure.",
    ],
    mainAnalysis: [
      {
        title: "Taiwan is more than a geopolitical flashpoint",
        body: [
          "Taiwan is central to the global semiconductor ecosystem. A crisis would affect not only chipmakers but also firms that depend on advanced electronics, cloud infrastructure, communications equipment, automotive systems, and industrial controls.",
          "The main vulnerability is not simply direct sourcing. It is hidden dependency across multi-tier supplier networks.",
        ],
      },
      {
        title: "The first shock would be uncertainty",
        body: [
          "In the early phase of a Taiwan crisis, markets would price uncertainty before physical shortages fully materialize. Insurance costs, shipping decisions, sanctions risk, and capital-market reactions could move rapidly.",
          "Companies would face difficult decisions before they had complete information.",
        ],
      },
      {
        title: "The semiconductor shock would cascade",
        body: [
          "Even firms that do not buy chips directly may depend on suppliers that do. Automotive, healthcare devices, telecommunications, defense, industrial equipment, and consumer electronics could all face disruption.",
          "The key question is whether firms understand their second-order and third-order exposure.",
        ],
      },
    ],
    strategicImplications: [
      "Companies should map Taiwan exposure beyond direct suppliers.",
      "Scenario planning should include shipping, insurance, sanctions, inventory, and customer-demand effects.",
      "Critical industries need contingency planning for semiconductor scarcity.",
      "Governments and companies should coordinate on strategic stockpiles and alternative capacity.",
    ],
    whatHappensNext: [
      "Taiwan-risk mapping will become more important in board-level supply-chain discussions.",
      "Semiconductor resilience will remain a strategic priority for the United States, Europe, Japan, South Korea, and China.",
      "Companies will increasingly distinguish between apparent supplier diversification and true geographic resilience.",
    ],
    relatedDatasets: [
      {
        title: "AI Startup Valuation Rankings",
        href: "/tools/ai/statistics/ai-startup-valuation-rankings",
        description:
          "A structured ranking of high-valuation AI startups, including infrastructure and compute-adjacent companies.",
      },
    ],
    relatedArticles: [
      "the-geography-of-risk",
      "how-a-drought-in-taiwan-can-shut-down-a-factory-in-germany",
    ],
  },
  {
    slug: "the-global-antibiotic-crisis-nobody-talks-about",
    title: "The Global Antibiotic Crisis Nobody Talks About",
    category: "biosecurity",
    description:
      "Why antimicrobial resistance should be treated as a slow-moving pandemic and long-term systemic risk.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: false,
    affiliateCategory: "education",
    executiveSummary:
      "Antimicrobial resistance is often discussed as a healthcare issue. That is too narrow. It is a slow-moving systemic risk that affects surgery, cancer care, intensive care, food systems, military medicine, and global development.",
    keyTakeaways: [
      "Antimicrobial resistance is a slow-moving pandemic risk.",
      "Modern medicine depends on reliable antibiotics far beyond infection treatment.",
      "The economic incentives for antibiotic development remain weak.",
      "AMR should be treated as a strategic preparedness issue.",
    ],
    mainAnalysis: [
      {
        title: "Antibiotics are infrastructure",
        body: [
          "Antibiotics are often treated as ordinary medicines. They are closer to infrastructure. Surgery, chemotherapy, transplantation, intensive care, neonatal medicine, and trauma care all depend on the ability to prevent or treat bacterial infection.",
          "When antibiotics fail, the risk profile of modern medicine changes.",
        ],
      },
      {
        title: "AMR moves slowly until it does not",
        body: [
          "Antimicrobial resistance grows gradually through selection pressure, transmission, weak stewardship, poor infection control, and global movement of people, animals, and food.",
          "Because the crisis is gradual, it is easy for institutions to underreact until local failures become visible.",
        ],
      },
      {
        title: "The market is structurally broken",
        body: [
          "New antibiotics are difficult to develop, scientifically challenging, and commercially unattractive. The best public-health outcome is often to use new antibiotics sparingly, which undermines the standard revenue model.",
          "This creates a structural gap between societal need and commercial incentives.",
        ],
      },
    ],
    strategicImplications: [
      "AMR should be included in national preparedness planning.",
      "Healthcare systems need stronger infection control, stewardship, diagnostics, and surveillance.",
      "New incentive models are needed for antibiotic development.",
      "Companies in healthcare, food, travel, insurance, and defense should treat AMR as a long-term risk.",
    ],
    whatHappensNext: [
      "AMR will likely become more visible as treatment failures increase.",
      "Rapid diagnostics, phage therapy, new antibiotics, vaccines, and infection prevention will all become more strategically important.",
      "Governments may need subscription-style models or market-entry rewards to sustain antibiotic innovation.",
    ],
    relatedDatasets: [
      {
        title: "Most Sensitive AI Capabilities",
        href: "/tools/ai/risk-intelligence/most-sensitive-ai-capabilities",
        description:
          "A structured overview of sensitive AI capability areas, including biological reasoning assistance.",
      },
    ],
    relatedArticles: [
      "the-next-pandemic-wont-start-in-a-wet-market",
      "why-national-preparedness-models-are-stuck-in-the-past",
    ],
  },
  {
    slug: "how-a-drought-in-taiwan-can-shut-down-a-factory-in-germany",
    title: "How a Drought in Taiwan Can Shut Down a Factory in Germany",
    category: "supply-chain",
    description:
      "A case study in semiconductor water dependency, industrial fragility, and hidden supply-chain exposure.",
    publishedAt: "2026-06-03",
    readingTime: 7,
    featured: false,
    affiliateCategory: "education",
    executiveSummary:
      "Modern supply chains are connected through hidden dependencies. A drought in Taiwan can affect semiconductor production, which can affect automotive suppliers, which can affect factories in Germany. The risk is not only geopolitical. It is environmental, operational, and industrial.",
    keyTakeaways: [
      "Semiconductor manufacturing depends on reliable water supply.",
      "Climate and weather risks can affect advanced industrial production.",
      "Companies often underestimate indirect supply-chain exposure.",
      "Resilience requires mapping environmental dependencies, not only suppliers.",
    ],
    mainAnalysis: [
      {
        title: "Advanced technology still depends on basic inputs",
        body: [
          "Semiconductors are among the most advanced products in the global economy, but their production depends on physical inputs such as water, electricity, chemicals, land, and logistics.",
          "This creates a paradox: the more advanced a supply chain becomes, the more invisible its basic dependencies may appear.",
        ],
      },
      {
        title: "Water can become a semiconductor risk",
        body: [
          "Semiconductor fabrication requires large volumes of ultra-pure water. Drought, water restrictions, infrastructure strain, and competing demand can therefore become industrial risks.",
          "A company far away from Taiwan may still depend on chips produced in facilities exposed to water stress.",
        ],
      },
      {
        title: "The German factory sees the final symptom",
        body: [
          "A factory in Germany may not care about rainfall in Taiwan until suppliers miss deliveries. By the time the disruption reaches production planning, the original environmental signal may have been visible for months.",
          "That is the value of supply-chain intelligence: identifying weak signals before they become operational failures.",
        ],
      },
    ],
    strategicImplications: [
      "Supply-chain mapping should include environmental dependencies.",
      "Industrial resilience requires attention to water, energy, logistics, and regional infrastructure.",
      "Climate risk is increasingly an operational risk, not only a sustainability issue.",
      "Companies should combine supplier mapping with geographic and environmental intelligence.",
    ],
    whatHappensNext: [
      "Water stress will become a more important factor in semiconductor resilience.",
      "Industrial companies will need better visibility into upstream dependencies.",
      "Supply-chain risk tools will increasingly combine climate, geopolitics, and industrial data.",
    ],
    relatedDatasets: [
      {
        title: "AI Risk Intelligence",
        href: "/tools/ai/risk-intelligence",
        description:
          "A structured risk-intelligence hub for operational, governance, capability, and systemic AI risks.",
      },
    ],
    relatedArticles: [
      "the-geography-of-risk",
      "what-if-china-invades-taiwan-tomorrow",
    ],
  },
  {
    slug: "the-first-ai-native-company-has-probably-already-been-founded",
    title: "The First AI-Native Company Has Probably Already Been Founded",
    category: "ai",
    description:
      "How AI may change company structure, staffing, productivity, management, and the economics of small teams.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: false,
    affiliateCategory: "ai-tools",
    executiveSummary:
      "The first AI-native company is not simply a company that uses AI tools. It is a company designed around AI from the start: fewer employees, more automation, faster experimentation, AI-assisted operations, and software-like leverage across functions.",
    keyTakeaways: [
      "AI-native companies may operate with smaller teams and higher output per employee.",
      "The biggest change may be organizational design, not only productivity.",
      "AI tools can compress functions such as research, marketing, support, analysis, and software development.",
      "Management systems may evolve around human-AI workflows rather than traditional departments.",
    ],
    mainAnalysis: [
      {
        title: "Using AI is not the same as being AI-native",
        body: [
          "Many companies use AI tools. That does not make them AI-native. An AI-native company is designed around AI as an operating layer from the beginning.",
          "That means workflows, hiring, product development, customer support, marketing, finance, and strategy can be built with automation and AI assistance as default assumptions.",
        ],
      },
      {
        title: "Small teams may gain large-company leverage",
        body: [
          "AI can allow small teams to perform work that previously required larger departments. Research, copywriting, prototyping, coding, analytics, customer support, and operations can all become more scalable.",
          "This does not eliminate the need for judgment. It changes the ratio between human judgment and execution capacity.",
        ],
      },
      {
        title: "The operating system of the company changes",
        body: [
          "AI-native companies may organize around workflows rather than departments. The key question becomes: which decisions require human judgment, and which execution layers can be delegated to tools, agents, and automated systems?",
          "The companies that understand this early may have structural cost and speed advantages.",
        ],
      },
    ],
    strategicImplications: [
      "AI may create a new class of small but highly leveraged companies.",
      "Traditional headcount may become a weaker measure of organizational capacity.",
      "Founders may design companies around AI workflows from day one.",
      "Incumbents may struggle if they add AI on top of old processes rather than redesigning work.",
    ],
    whatHappensNext: [
      "More startups will market themselves as AI-native, but only some will redesign operations deeply.",
      "Investors may begin tracking revenue per employee and automation depth more closely.",
      "Enterprise software may shift toward AI operating layers rather than isolated productivity tools.",
    ],
    relatedDatasets: [
      {
        title: "AI Coding Market Share",
        href: "/tools/ai/statistics/ai-coding-market-share",
        description:
          "A structured comparison of AI coding tools by adoption tier, developer workflow, and codebase relevance.",
      },
      {
        title: "AI Coding Hub",
        href: "/tools/ai/coding",
        description:
          "A hub for AI coding tools, AI IDEs, coding assistants, and developer workflows.",
      },
    ],
    relatedArticles: [
      "europes-ai-problem-is-not-technology",
      "the-convergence-decade",
    ],
  },
  {
    slug: "why-national-preparedness-models-are-stuck-in-the-past",
    title: "Why National Preparedness Models Are Stuck in the Past",
    category: "operational-intelligence",
    description:
      "Why modern risks require preparedness systems that integrate health, cyber, supply chains, geopolitics, technology, and public trust.",
    publishedAt: "2026-06-03",
    readingTime: 8,
    featured: false,
    affiliateCategory: "education",
    executiveSummary:
      "National preparedness models often assume risks arrive in separate categories: pandemic, cyberattack, war, natural disaster, or supply-chain disruption. Modern risks do not behave that way. They compound across systems.",
    keyTakeaways: [
      "Preparedness models are often organized around legacy risk categories.",
      "Modern crises combine health, cyber, logistics, geopolitics, information systems, and public trust.",
      "Static plans are less useful than adaptive intelligence systems.",
      "Preparedness should focus on resilience, early warning, and cross-system coordination.",
    ],
    mainAnalysis: [
      {
        title: "The risk categories are outdated",
        body: [
          "Traditional preparedness frameworks often divide risk into separate boxes. Public health prepares for outbreaks. Cyber teams prepare for attacks. Defense agencies prepare for conflict. Supply-chain teams prepare for logistics disruption.",
          "Modern crises cut across these categories. A pandemic can become a supply-chain crisis, labor crisis, political crisis, information crisis, and geopolitical crisis at the same time.",
        ],
      },
      {
        title: "Static plans fail against dynamic systems",
        body: [
          "Preparedness plans are often designed for known scenarios. But the most difficult crises evolve in real time and interact with public behavior, media systems, markets, technology, and institutional trust.",
          "This makes adaptive intelligence more important than static checklists.",
        ],
      },
      {
        title: "Preparedness needs an intelligence layer",
        body: [
          "The next generation of preparedness should combine data, forecasting, scenario planning, decision support, and institutional coordination.",
          "The goal is not to predict every crisis. The goal is to shorten detection time, improve decision quality, and preserve operational capacity under uncertainty.",
        ],
      },
    ],
    strategicImplications: [
      "Preparedness should be built around systems thinking rather than isolated threat categories.",
      "Governments need better mechanisms for cross-domain risk intelligence.",
      "Public-private coordination is essential because many critical systems are privately operated.",
      "Trust, communication, and legitimacy are operational assets during crises.",
    ],
    whatHappensNext: [
      "Preparedness will increasingly overlap with AI governance, biosecurity, cyber resilience, and supply-chain intelligence.",
      "Scenario planning and early warning systems will become more important.",
      "Countries that build adaptive risk-intelligence systems may handle compound crises better.",
    ],
    relatedDatasets: [
      {
        title: "AI Risk Intelligence",
        href: "/tools/ai/risk-intelligence",
        description:
          "A structured risk-intelligence hub for operational, governance, capability, and systemic AI risks.",
      },
    ],
    relatedArticles: [
      "the-silent-risk-every-company-ignores",
      "the-next-pandemic-wont-start-in-a-wet-market",
    ],
  },
];

export function getIntelligenceArticle(slug: string) {
  return intelligenceArticles.find((article) => article.slug === slug);
}

export function getIntelligenceArticlesByCategory(
  category: IntelligenceCategory
) {
  return intelligenceArticles.filter((article) => article.category === category);
} 