import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is a JWT? | T4 Atlas",
  description:
    "Learn what a JWT is, how JSON Web Tokens work, what the header, payload, and signature mean, and how developers use JWTs in authentication and APIs.",
  keywords: [
    "what is a jwt",
    "json web token explained",
    "jwt explained",
    "jwt header payload signature",
    "what is a json web token",
    "jwt decoder",
  ],
};

export default function WhatIsAJwtPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link href="/tools/development" className="hover:text-gray-900">
              Development Tools
            </Link>
            <span>→</span>
            <span>What Is a JWT?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Development guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is a JWT?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            A JWT, or JSON Web Token, is a compact token format commonly used in
            authentication and API workflows. Developers use JWTs to carry claims
            such as user identity, roles, and metadata between systems in a
            structured, signed format.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">What a JWT looks like</h2>
            <p className="mb-4 leading-7 text-gray-600">
              A JWT usually contains three parts separated by dots:
            </p>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800">
              header.payload.signature
            </div>

            <p className="mt-4 leading-7 text-gray-600">
              The header and payload are usually Base64URL-encoded JSON. The
              signature is used to help verify integrity and authenticity.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Header, payload, and signature
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Header</strong> describes metadata about the token, such
                as the algorithm and token type.
              </p>

              <p>
                <strong>Payload</strong> contains claims. These can include user
                identifiers, roles, expiry information, and other application data.
              </p>

              <p>
                <strong>Signature</strong> helps confirm that the token was issued
                by a trusted source and was not modified after signing.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Why developers use JWTs
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                JWTs are popular because they are compact, portable, and easy to
                pass between services. They are especially common in web apps,
                APIs, OAuth flows, and distributed systems.
              </p>

              <p>
                In practice, developers often encounter JWTs when debugging login
                flows, authorization issues, expired sessions, or API access problems.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              JWT vs plain JSON vs Base64
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Concept</th>
                    <th className="p-3 text-left">What it does</th>
                    <th className="p-3 text-left">Typical role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">JSON</td>
                    <td className="p-3">Stores structured data</td>
                    <td className="p-3">Header and payload contents</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Base64URL</td>
                    <td className="p-3">Encodes text safely</td>
                    <td className="p-3">Representation of header and payload</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">JWT</td>
                    <td className="p-3">Wraps claims and signature</td>
                    <td className="p-3">Authentication and authorization token</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Use our JWT Decoder
            </h2>

            <p className="mb-4 leading-7 text-gray-600">
              Use the decoder to inspect the header and payload of a JWT directly
              in the browser. This is useful for debugging auth flows and
              understanding what claims a token contains.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/jwt-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Open JWT Decoder
              </Link>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Common JWT debugging questions
            </h2>

            <div className="space-y-4 text-gray-600">
              <ul className="list-disc space-y-2 pl-5">
                <li>What claims are inside this token?</li>
                <li>Has the token expired?</li>
                <li>Which algorithm is being used?</li>
                <li>Is the payload what I expected from the auth server?</li>
                <li>Why is this API rejecting the token?</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Important limitation
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Decoding a JWT is not the same as verifying it. A decoder can
                show the header and payload, but it does not prove that the token
                is valid, trusted, or correctly signed.
              </p>

              <p>
                That distinction matters a lot in security work. Decoding helps
                inspection. Verification helps trust.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Next step: decode and inspect auth tokens
            </h2>

            <p className="mb-5 max-w-3xl leading-7 text-gray-600">
              JWTs sit at the intersection of JSON, Base64-style encoding, and
              auth debugging. Use the related tools below to inspect token
              structure and supporting formats more quickly.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/jwt-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JWT Decoder
              </Link>

              <Link
                href="/tools/development/base64-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Base64 Decoder
              </Link>

              <Link
                href="/tools/development/json-formatter"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON Formatter
              </Link>

<Link
  href="/tools/development/jwt-vs-sessions"
  className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
>
  JWT vs Sessions
</Link>

              <Link
                href="/tools/development/best-debugging-tools-for-developers"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Debugging Tools
              </Link>
            </div>

            <div className="mt-5 rounded-2xl border border-dashed p-4 text-sm text-gray-500">
              Future lead capture block: get developer workflow guides, auth debugging checklists, or new tool updates by email.
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is a JWT encrypted?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Not usually. Standard JWTs are often only encoded and signed,
                  not encrypted.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Can I trust a decoded JWT?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Not by decoding alone. You can inspect the contents, but trust
                  requires proper signature verification.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Why do JWTs look like gibberish?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Because the header and payload are Base64URL-encoded, which makes
                  them look opaque until decoded.
                </p>
              </div>
            </div>
          </section>

          <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (bottom)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Related development tools
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/jwt-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                JWT Decoder
              </Link>

              <Link
                href="/tools/development/base64-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Base64 Decoder
              </Link>

              <Link
                href="/tools/development/json-formatter"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                JSON Formatter
              </Link>

              <Link
                href="/tools/development/what-is-base64-encoding"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                What Is Base64 Encoding?
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}