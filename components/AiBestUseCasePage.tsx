import Link from "next/link";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AffiliateBlock from "@/components/AffiliateBlock";

type AiBestUseCasePick = {
  name: string;
  bestFor: string;
  idealFor: string;
  whyChooseIt: string;
  watchOutFor: string;
};

type AiBestUseCasePageProps = {
  slug: string;
  title: string;
  intro: string;
  affiliateTitle: string;
  picksTitle: string;
  picksIntro: string;
  picks: AiBestUseCasePick[];
  comparisonTable?: {
    headers: [string, string, string, string];
    rows: [string, string, string, string][];
  };
  howToChoose?: string[];
};

export default function AiBestUseCasePage({
  slug,
  title,
  intro,
  affiliateTitle,
  picksTitle,
  picksIntro,
  picks,
  comparisonTable,
  howToChoose,
}: AiBestUseCasePageProps) {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-[2rem] border bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>{title}</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            {intro}
          </p>
        </div>

        <div className="grid gap-6">
          <AiMoneyPicks
            title={picksTitle}
            intro={picksIntro}
            picks={picks}
          />

          {comparisonTable ? (
            <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

              <div className="overflow-x-auto">
                <table className="w-full overflow-hidden rounded-2xl border text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      {comparisonTable.headers.map((header) => (
                        <th key={header} className="p-3 text-left">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, index) => (
                      <tr key={`${row[0]}-${index}`} className="border-t">
                        <td className="p-3 font-medium">{row[0]}</td>
                        <td className="p-3">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                        <td className="p-3">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          <AffiliateBlock
            slug={slug}
            placement="editorial_bottom"
            title={affiliateTitle}
          />

          {howToChoose && howToChoose.length > 0 ? (
            <section className="rounded-[1.75rem] border bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-3 text-2xl font-semibold">How to choose</h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-600">
                {howToChoose.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <AiRelatedLinks currentSlug={slug} />
        </div>
      </div>
    </main>
  );
}