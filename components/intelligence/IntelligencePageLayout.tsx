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
    <div className="rounded-2xl border border-dashed border-slate-700/40 bg-slate-900/40 p-3 text-center text-xs text-slate-400 md:p-4">
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
  const monetization = monetizationConfig[hub] ?? defaultMonetizationConfig;

  return (
    <main className="min-h-screen max-w-full overflow-x-hidden bg-slate-950 px-3 py-6 text-slate-100 sm:px-4 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-6xl">
        {showTopAd && monetization.ads.top ? (
          <div className="mb-5 md:mb-6">
            <IntelligenceAdSlot label="Ad slot (top)" />
          </div>
        ) : null}

        {sidebar ? (
          <div className="grid min-w-0 gap-5 md:gap-6 lg:grid-cols-[minmax(0,1fr),320px]">
            <div className="grid min-w-0 gap-5 md:gap-6">
              {children}

              {showMiddleAd && monetization.ads.middle ? (
                <IntelligenceAdSlot label="Ad slot (middle)" />
              ) : null}
            </div>

            <aside className="min-w-0 space-y-5 md:space-y-6">
              {sidebar}

              {monetization.ads.sidebar ? (
                <IntelligenceAdSlot label="Sidebar ad slot" />
              ) : null}
            </aside>
          </div>
        ) : (
          <div className="grid min-w-0 gap-5 md:gap-6">
            {children}

            {showMiddleAd && monetization.ads.middle ? (
              <IntelligenceAdSlot label="Ad slot (middle)" />
            ) : null}
          </div>
        )}

        {showBottomAd && monetization.ads.bottom ? (
          <div className="mt-6 md:mt-8">
            <IntelligenceAdSlot label="Ad slot (bottom)" />
          </div>
        ) : null}
      </div>
    </main>
  );
}