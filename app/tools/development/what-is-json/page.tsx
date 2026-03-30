import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is JSON? | T4 Atlas",
  description:
    "Learn what JSON is, how JSON works, why developers use it, and how JSON relates to APIs, configuration files, JWTs, and debugging workflows.",
  keywords: [
    "what is json",
    "json explained",
    "what is a json file",
    "json format explained",
    "json vs javascript object",
    "what is json used for",
  ],
};

export default function WhatIsJsonPage() {
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
            <span>What Is JSON?</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Development guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            What Is JSON?
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            JSON, or JavaScript Object Notation, is a lightweight text format
            used to represent structured data. Developers use JSON in APIs,
            configuration files, frontend state, logs, authentication payloads,
            and many other workflows where readable structured data matters.
          </p>
        </div>

        <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
          Ad slot (top)
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">What JSON looks like</h2>

            <p className="mb-4 leading-7 text-gray-600">
              JSON represents data using objects, arrays, strings, numbers,
              booleans, and null values. A simple JSON object might look like this:
            </p>

            <div className="rounded-2xl bg-gray-50 p-4 font-mono text-sm text-gray-800 whitespace-pre-wrap">
{`{
  "name": "T4 Atlas",
  "type": "tool",
  "active": true,
  "items": [1, 2, 3]
}`}
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">Why developers use JSON</h2>

            <div className="space-y-4 text-gray-600">
              <p>
                JSON is popular because it is simple, portable, readable, and
                widely supported across languages and frameworks. It works well
                for sending structured data between clients and servers.
              </p>

              <p>
                In practice, developers encounter JSON constantly in API
                responses, request payloads, configuration files, logs, and
                authentication systems such as JWT payloads.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              JSON vs JavaScript objects
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                JSON looks similar to a JavaScript object, but it is not exactly
                the same thing. JSON is a text format with strict syntax rules.
                JavaScript objects are in-memory language objects with more flexibility.
              </p>

              <p>
                For example, JSON requires double-quoted keys and does not allow
                trailing commas, comments, or functions.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Common JSON problems
            </h2>

            <div className="space-y-4 text-gray-600">
              <ul className="list-disc space-y-2 pl-5">
                <li>missing commas</li>
                <li>unquoted keys</li>
                <li>trailing commas</li>
                <li>mismatched braces or brackets</li>
                <li>invalid nesting</li>
              </ul>

              <p>
                These are exactly the kinds of issues that make JSON validators
                and formatters useful during debugging.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Use our JSON tools
            </h2>

            <p className="mb-4 leading-7 text-gray-600">
              Use the related tools to validate syntax, format raw payloads, or
              minify JSON for compact transport and storage.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/json-formatter"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON Formatter
              </Link>

              <Link
                href="/tools/development/json-validator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON Validator
              </Link>

              <Link
                href="/tools/development/json-minifier"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON Minifier
              </Link>
            </div>
          </section>

          <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
            Ad slot (middle)
          </div>

          <section className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              JSON in APIs, JWTs, and debugging
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                JSON is one of the most important debugging formats because so
                many other developer workflows depend on it. JWT payloads often
                contain JSON claims. API responses are commonly returned as JSON.
                Encoded payloads often decode into JSON.
              </p>

              <p>
                That makes JSON a foundational concept across the rest of your
                developer tool stack.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm md:p-8">
            <h2 className="mb-3 text-2xl font-semibold">
              Next step: inspect, validate, and compare JSON workflows
            </h2>

            <p className="mb-5 max-w-3xl leading-7 text-gray-600">
              Use the related tools and guides below to work with JSON in APIs,
              JWTs, encoding pipelines, and general debugging workflows.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/json-formatter"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON Formatter
              </Link>

              <Link
                href="/tools/development/best-json-tools-for-developers"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                Best JSON Tools
              </Link>

              <Link
                href="/tools/development/json-vs-base64-vs-url-encoding"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                JSON vs Base64 vs URL Encoding
              </Link>

              <Link
                href="/tools/development/what-is-a-jwt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                What Is a JWT?
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
                  Is JSON a programming language?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. JSON is a data format, not a programming language.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Is JSON the same as a JavaScript object?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  No. They look similar, but JSON is a strict text format with
                  syntax rules that differ from normal JavaScript objects.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <h3 className="mb-2 font-medium text-gray-900">
                  Why is JSON so common in APIs?
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Because it is lightweight, readable, and widely supported by
                  backend and frontend systems.
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
                href="/tools/development/json-formatter"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                JSON Formatter
              </Link>

              <Link
                href="/tools/development/json-validator"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                JSON Validator
              </Link>

              <Link
                href="/tools/development/json-minifier"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                JSON Minifier
              </Link>

              <Link
                href="/tools/development/what-is-a-jwt"
                className="inline-flex rounded-2xl border px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                What Is a JWT?
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}