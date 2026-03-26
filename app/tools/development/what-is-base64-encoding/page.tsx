import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Base64 Encoding? | T4 Atlas",
  description:
    "Learn what Base64 encoding is, why developers use it, how it differs from hashing and encryption, and when to use Base64 encoding and decoding tools.",
  keywords: [
    "what is base64 encoding",
    "base64 explained",
    "base64 encoding vs encryption",
    "base64 vs hashing",
    "what is base64 used for",
    "base64 decoder online",
  ],
};

export default function WhatIsBase64EncodingPage() {
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
            <span>What Is Base64 Encoding?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Development guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is Base64 Encoding?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            Base64 encoding is a way to represent binary or structured data as
            plain text using a limited character set. Developers use it when
            data needs to move safely through systems that expect text rather
            than raw binary content.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              What Base64 encoding means
            </h2>
            <p className="leading-7 text-gray-600">
              Base64 converts input data into a text-based format built from a
              restricted character set. This makes the output easier to transmit
              through systems such as JSON payloads, APIs, HTML, email, and
              configuration formats that handle text more reliably than raw binary.
            </p>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Why developers use Base64
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Base64 is often used when content must stay text-safe across
                transports or storage layers. Common examples include embedded
                assets, tokens, API payloads, and serialized content.
              </p>

              <p>
                It does not make data secret. It only changes representation.
                That distinction is important because Base64 is frequently mistaken
                for encryption.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Base64 vs hashing vs encryption
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
                    <td className="p-3 font-medium">Base64 Encoding</td>
                    <td className="p-3">Representation and transport</td>
                    <td className="p-3">Yes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Hashing</td>
                    <td className="p-3">Fingerprinting and integrity</td>
                    <td className="p-3">No</td>
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
              Use our Base64 tools
            </h2>

            <p className="mb-4 leading-7 text-gray-600">
              Use the encoder to convert text into Base64, and the decoder to
              inspect Base64 content by converting it back into readable text.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/base64-encoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Open Base64 Encoder
              </Link>

              <Link
                href="/tools/development/base64-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Open Base64 Decoder
              </Link>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Common use cases
            </h2>

            <div className="space-y-4 text-gray-600">
              <ul className="list-disc space-y-2 pl-5">
                <li>embedding binary-like data in text-based formats</li>
                <li>moving structured values through APIs and payloads</li>
                <li>encoding content in debugging and test workflows</li>
                <li>serializing text-safe content across systems</li>
                <li>inspecting encoded values copied from logs or configs</li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Base64 is not security
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                Base64 does not hide or protect data. Anyone who can decode
                Base64 can recover the original content. That is why Base64
                should never be confused with encryption.
              </p>

              <p>
                If you need confidentiality, you need encryption. If you need a
                one-way fingerprint, you need hashing. If you only need a text-safe
                representation, Base64 is often enough.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Next step: encode, decode, and inspect payloads
            </h2>

            <p className="mb-5 max-w-3xl leading-7 text-gray-600">
              Use the related tools below when you need to transform Base64 text,
              inspect encoded payloads, or compare encoding with hashing and JSON workflows.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/base64-encoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Base64 Encoder
              </Link>

              <Link
                href="/tools/development/base64-decoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Base64 Decoder
              </Link>

<Link
  href="/tools/development/json-vs-base64-vs-url-encoding"
  className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
>
  JSON vs Base64 vs URL Encoding
</Link>

              <Link
                href="/tools/development/hash-generator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Hash Generator
              </Link>

              <Link
                href="/tools/development/best-encoding-tools-for-developers"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best Encoding Tools
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
                  Is Base64 encryption?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. Base64 is encoding, not encryption. It is reversible and
                  does not protect confidentiality.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is Base64 hashing?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. Hashing is one-way. Base64 can be decoded back into the
                  original content.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Why would I use Base64?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Use Base64 when data must move through a text-based channel or
                  format that does not safely handle raw binary content.
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
                href="/tools/development/hash-generator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Hash Generator
              </Link>

              <Link
                href="/tools/development/url-encoder"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                URL Encoder
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}