import type { Metadata } from "next";
import Link from "next/link";
import AiRelatedLinks from "@/components/AiRelatedLinks";
import AiMoneyPicks from "@/components/AiMoneyPicks";
import AffiliateBlock from "@/components/AffiliateBlock";

export const metadata: Metadata = {
  title: "Best AI Tools for E-commerce | T4 Atlas",
  description:
    "Compare the best AI tools for e-commerce, including tools for product descriptions, ads, customer support, email marketing, and conversion optimization.",
  keywords: [
    "best ai tools for ecommerce",
    "ai tools for shopify",
    "ai ecommerce tools",
    "ai for online stores",
    "best ai tools for ecommerce marketing",
  ],
};

export default function BestAiToolsForEcommercePage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/ai" className="hover:text-gray-900">
              AI Tools
            </Link>
            <span>→</span>
            <span>Best AI Tools for E-commerce</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              AI comparison
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Best AI Tools for E-commerce
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            AI tools can improve e-commerce performance by speeding up content
            production, improving ads, automating support, and increasing
            retention. The best stack depends on whether your main bottleneck is
            acquisition, conversion, or customer lifecycle value.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <AiMoneyPicks
            title="Best AI tools for e-commerce workflows"
            intro="These are the strongest options if your store depends on faster content, better ads, stronger retention, and lower support cost."
            picks={[
              {
                name: "ChatGPT",
                bestFor: "Product descriptions and store content",
                idealFor:
                  "Store owners who need flexible AI support across many workflows",
                whyChooseIt:
                  "ChatGPT is strong for product copy, FAQs, email drafts, ad angles, bundles, upsell ideas, and general store operations.",
                watchOutFor:
                  "It works best when paired with a clear brand voice and structured prompts.",
              },
              {
                name: "Jasper",
                bestFor: "Ad copy and campaign content",
                idealFor:
                  "Teams running paid traffic and frequent promotions",
                whyChooseIt:
                  "Jasper is optimized for repeatable marketing production, which makes it valuable for campaigns, promos, and conversion-focused copy.",
                watchOutFor:
                  "It is less compelling if your business does not produce much marketing content.",
              },
              {
                name: "Klaviyo AI",
                bestFor: "Email marketing and retention",
                idealFor:
                  "Stores with repeat purchase potential and email-driven revenue",
                whyChooseIt:
                  "Klaviyo is strong when lifecycle marketing matters, especially for abandoned carts, flows, retention, and segmentation.",
                watchOutFor:
                  "It becomes much more useful once you already have meaningful traffic and customer data.",
              },
              {
                name: "Intercom AI",
                bestFor: "Customer support automation",
                idealFor:
                  "Stores dealing with repeated customer questions and support load",
                whyChooseIt:
                  "Intercom AI can reduce support pressure and improve response times without adding headcount.",
                watchOutFor:
                  "It is narrower than general-purpose AI tools and strongest only when support is a real bottleneck.",
              },
            ]}
          />

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Tool</th>
                    <th className="p-3 text-left">Best for</th>
                    <th className="p-3 text-left">Impact</th>
                    <th className="p-3 text-left">Watch out for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">ChatGPT</td>
                    <td className="p-3">Content and store ops</td>
                    <td className="p-3">Scales copy and workflow support</td>
                    <td className="p-3">Needs structure and review</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Jasper</td>
                    <td className="p-3">Ads and campaigns</td>
                    <td className="p-3">Speeds up marketing output</td>
                    <td className="p-3">Less useful outside marketing</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Klaviyo AI</td>
                    <td className="p-3">Email and retention</td>
                    <td className="p-3">Improves lifecycle revenue</td>
                    <td className="p-3">Needs data to shine</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Intercom AI</td>
                    <td className="p-3">Support automation</td>
                    <td className="p-3">Reduces support cost</td>
                    <td className="p-3">Narrower use case</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <AffiliateBlock
            slug="best-ai-tools-for-ecommerce"
            placement="editorial_bottom"
            title="Recommended e-commerce tools"
          />

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">How to choose</h2>

            <ul className="list-disc space-y-2 pl-5 text-gray-600">
              <li>Focus on the bottleneck closest to revenue: ads, retention, or support.</li>
              <li>Pick tools that plug into your store stack instead of adding complexity.</li>
              <li>Measure ROI by conversion lift, retention, or support cost saved.</li>
            </ul>
          </section>

          <AiRelatedLinks currentSlug="best-ai-tools-for-ecommerce" />

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>
        </div>
      </div>
    </main>
  );
}