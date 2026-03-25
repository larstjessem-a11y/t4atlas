import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Hashing? | T4 Atlas",
  description:
    "Learn what hashing is, how hash functions work, why developers use SHA-1 and SHA-256, and how hashing differs from encoding and encryption.",
  keywords: [
    "what is hashing",
    "what is a hash function",
    "sha-256 explained",
    "sha-1 vs sha-256",
    "hashing vs encoding",
    "hashing vs encryption",
  ],
};

export default function WhatIsHashingPage() {
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
            <span>What Is Hashing?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Development guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is Hashing?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Hashing is the process of turning input data into a fixed-length
            output using a hash function. Developers use hashes for integrity
            checks, signatures, indexing, password workflows, caching, and other
            technical tasks where consistent one-way transformation matters.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">What hashing means</h2>
            <p className="leading-7 text-gray-600">
              A hash function takes input such as text, JSON, or file data and
              produces a fixed-length result. Even a tiny change in the original
              input usually produces a completely different hash output.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Why developers use hashing
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Hashing is useful when you need a consistent fingerprint of data.
                Developers use it to verify integrity, compare content, detect
                changes, and support security-related workflows.
              </p>

              <p>
                Common examples include password storage workflows, checksum
                verification, caching keys, deduplication, digital signatures,
                and content comparison in pipelines or APIs.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Hashing vs encoding vs encryption
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full overflow-hidden rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Concept</th>
                    <th className="p-3 text-left">Purpose</th>
                    <th className="p-3 text-left">Reversible?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Hashing</td>
                    <td className="p-3">Integrity and fingerprinting</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Encoding</td>
                    <td className="p-3">Data representation and transport</td>
                    <td className="p-3">Yes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Encryption</td>
                    <td className="p-3">Confidentiality</td>
                    <td className="p-3">Yes, with a key</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              SHA-1 vs SHA-256
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                SHA-1 is older and no longer recommended for modern security use
                because collision attacks are known. SHA-256 is much stronger and
                is the better default choice in current development workflows.
              </p>

              <p>
                That said, SHA-1 can still appear in legacy systems and older
                tooling, which is why developers may still need to inspect or
                generate it during migration or debugging.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Use our Hash Generator
            </h2>

            <p className="mb-4 leading-7 text-gray-600">
              Use the tool to generate SHA-1 and SHA-256 hashes from text
              directly in the browser.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/hash-generator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Open Hash Generator
              </Link>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Common use cases</h2>

            <div className="space-y-4 text-gray-600">
              <ul className="list-disc space-y-2 pl-5">
                <li>checking whether content changed</li>
                <li>verifying integrity after transport or download</li>
                <li>building deterministic identifiers or cache keys</li>
                <li>security and signature-related workflows</li>
                <li>debugging pipelines that compare content fingerprints</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Next step: compare hashes, encoding, and debug tools
            </h2>

            <p className="mb-5 max-w-3xl leading-7 text-gray-600">
              Hashing often appears alongside encoding, JSON inspection, and API
              debugging workflows. Use the related tools below to move faster
              when diagnosing payloads and transformations.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/hash-generator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Hash Generator
              </Link>

              <Link
                href="/tools/development/base64-encoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Base64 Encoder
              </Link>

              <Link
                href="/tools/development/json-formatter"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON Formatter
              </Link>
            </div>

            <div className="mt-5 rounded-2xl border border-dashed p-4 text-sm text-gray-500">
              Future lead capture block: get developer workflow guides, debugging checklists, or new tool updates by email.
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">FAQ</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is hashing the same as encryption?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. Hashing is one-way. Encryption is reversible with the
                  correct key.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is Base64 a hash?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. Base64 is encoding, not hashing. It can be decoded back to
                  the original input.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Why is SHA-256 preferred over SHA-1?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  SHA-256 is more resistant to known attacks and is the stronger
                  default choice for modern use.
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
                href="/tools/development/hash-generator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Hash Generator
              </Link>

              <Link
                href="/tools/development/base64-encoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Base64 Encoder
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
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}