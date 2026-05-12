import {
  defaultMonetizationConfig,
  monetizationConfig,
} from "@/data/monetization";

type IntelligencePageLayoutProps = {
  children: React.ReactNode;
  hub?: string;
  showTopAd?: boolean;
  showMiddleAd?: boolean;
  showBottomAd?: boolean;
  sidebar?: React.ReactNode;
};

function IntelligenceAdSlot({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700/40 bg-slate-900/40 p-4 text-center text-xs text-slate-400">
      {label}
    </div>
  );
}

export default function IntelligencePageLayout({
  children,
  hub = "ai",
  showTopAd = true,
  showMiddleAd = false,
  showBottomAd = true,
  sidebar,
}: IntelligencePageLayoutProps) {
  const monetization =
    monetizationConfig[hub] ?? defaultMonetizationConfig;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100 md:px-6">
      <div className="mx-auto max-w-6xl">
        {showTopAd && monetization.ads.top ? (
          <div className="mb-6">
            <IntelligenceAdSlot label="Ad slot (top)" />
          </div>
        ) : null}

        {sidebar ? (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr),320px]">
            <div className="grid gap-6">
              {children}

              {showMiddleAd && monetization.ads.middle ? (
                <IntelligenceAdSlot label="Ad slot (middle)" />
              ) : null}
            </div>

            <aside className="space-y-6">
              {sidebar}

              {monetization.ads.sidebar ? (
                <IntelligenceAdSlot label="Sidebar ad slot" />
              ) : null}
            </aside>
          </div>
        ) : (
          <div className="grid gap-6">
            {children}

            {showMiddleAd && monetization.ads.middle ? (
              <IntelligenceAdSlot label="Ad slot (middle)" />
            ) : null}
          </div>
        )}

        {showBottomAd && monetization.ads.bottom ? (
          <div className="mt-8">
            <IntelligenceAdSlot label="Ad slot (bottom)" />
          </div>
        ) : null}
      </div>
    </main>
  );
}