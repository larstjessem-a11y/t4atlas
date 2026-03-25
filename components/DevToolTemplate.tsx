"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

type Tool = {
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  type: "converter" | "finance" | "dev";
  description?: string;
  seoIntro?: string;
  seoTitle?: string;
  seoDescription?: string;
  devToolType?:
    | "json-formatter"
    | "json-minifier"
    | "json-validator"
    | "base64-encoder"
    | "base64-decoder"
    | "url-encoder"
    | "url-decoder"
    | "unix-timestamp-converter"
    | "uuid-generator";
};

export default function DevToolTemplate({ tool }: { tool?: Tool }) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  if (!tool) {
    return <main className="p-10">Tool not found.</main>;
  }

  const result = useMemo(() => {
    if (tool.devToolType === "uuid-generator") {
      const uuid =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : "";

      return {
        output: uuid,
        status: uuid ? ("success" as const) : ("error" as const),
        message: uuid
          ? "Generated UUID successfully."
          : "UUID generation is not available in this browser.",
      };
    }

    if (!input.trim()) {
      return {
        output: "",
        status: "idle" as const,
        message: "Enter input to get started.",
      };
    }

    try {
      if (
        tool.devToolType === "json-formatter" ||
        tool.devToolType === "json-minifier" ||
        tool.devToolType === "json-validator"
      ) {
        const parsed = JSON.parse(input);

        if (tool.devToolType === "json-minifier") {
          return {
            output: JSON.stringify(parsed),
            status: "success" as const,
            message: "Valid JSON. Minified output generated.",
          };
        }

        return {
          output: JSON.stringify(parsed, null, 2),
          status: "success" as const,
          message: "Valid JSON.",
        };
      }

      if (tool.devToolType === "base64-encoder") {
        return {
          output: btoa(input),
          status: "success" as const,
          message: "Encoded to Base64.",
        };
      }

      if (tool.devToolType === "base64-decoder") {
        return {
          output: atob(input),
          status: "success" as const,
          message: "Decoded from Base64.",
        };
      }

      if (tool.devToolType === "url-encoder") {
        return {
          output: encodeURIComponent(input),
          status: "success" as const,
          message: "URL encoded.",
        };
      }

      if (tool.devToolType === "url-decoder") {
        return {
          output: decodeURIComponent(input),
          status: "success" as const,
          message: "URL decoded.",
        };
      }

      if (tool.devToolType === "unix-timestamp-converter") {
        const trimmed = input.trim();

        if (/^\d+$/.test(trimmed)) {
          const rawTimestamp = Number(trimmed);
          const milliseconds =
            trimmed.length <= 10 ? rawTimestamp * 1000 : rawTimestamp;

          const date = new Date(milliseconds);

          if (Number.isNaN(date.getTime())) {
            throw new Error("Invalid Unix timestamp.");
          }

          return {
            output: [
              "Timestamp → Date",
              "----------------",
              `ISO: ${date.toISOString()}`,
              `UTC: ${date.toUTCString()}`,
              `Local: ${date.toString()}`,
            ].join("\n"),
            status: "success" as const,
            message: "Converted Unix timestamp to readable date.",
          };
        }

        const parsedDate = new Date(trimmed);

        if (Number.isNaN(parsedDate.getTime())) {
          throw new Error(
            "Enter a valid Unix timestamp or a valid date string."
          );
        }

        return {
          output: [
            "Date → Timestamp",
            "----------------",
            `Unix (seconds): ${Math.floor(parsedDate.getTime() / 1000)}`,
            `Unix (milliseconds): ${parsedDate.getTime()}`,
            "",
            `ISO: ${parsedDate.toISOString()}`,
            `UTC: ${parsedDate.toUTCString()}`,
          ].join("\n"),
          status: "success" as const,
          message: "Converted date to Unix timestamp.",
        };
      }

      return {
        output: input,
        status: "idle" as const,
        message: "No transformation applied.",
      };
    } catch (error) {
      return {
        output: "",
        status: "error" as const,
        message: error instanceof Error ? error.message : "Invalid input.",
      };
    }
  }, [input, tool.devToolType]);

  const categoryLabel =
    tool.category === "development"
      ? "Development Tools"
      : tool.category.replace(/-/g, " ");

  const subcategoryLabel =
    tool.subcategory === "json-tools"
      ? "JSON Tools"
      : tool.subcategory === "encoding-tools"
      ? "Encoding Tools"
      : tool.subcategory === "time-tools"
      ? "Time Tools"
      : tool.subcategory === "id-tools"
      ? "ID Tools"
      : tool.subcategory.replace(/-/g, " ");

  const relatedTools = tools
    .filter(
      (t) =>
        t.category === tool.category &&
        t.subcategory === tool.subcategory &&
        t.slug !== tool.slug
    )
    .slice(0, 6);

  async function handleCopy() {
    if (!result.output) return;

    try {
      await navigator.clipboard.writeText(result.output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/tools" className="hover:text-gray-900">
              Tools
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}`}
              className="hover:text-gray-900 capitalize"
            >
              {categoryLabel}
            </Link>
            <span>→</span>
            <Link
              href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
              className="hover:text-gray-900 capitalize"
            >
              {subcategoryLabel}
            </Link>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              {subcategoryLabel} · {categoryLabel}
            </span>
          </div>

          <h1 className="text-4xl font-semibold text-gray-900">{tool.name}</h1>

          <p className="mt-3 max-w-3xl text-gray-600">
            {tool.description || "Developer utility tool."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),360px]">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (top)
            </div>

            {tool.devToolType === "uuid-generator" ? (
              <div>
                <div className="mb-4">
                  <button
                    onClick={handleCopy}
                    className="rounded border px-3 py-1 text-xs"
                  >
                    {copied ? "Copied" : "Copy UUID"}
                  </button>
                </div>

                <textarea
                  value={result.output}
                  readOnly
                  className="min-h-[140px] w-full rounded-2xl border p-4 font-mono text-sm"
                />
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    tool.devToolType === "unix-timestamp-converter"
                      ? "Enter a Unix timestamp or date string, for example:\n1742899200\nor\n2026-03-25T12:00:00Z"
                      : "Enter input..."
                  }
                  className="min-h-[300px] w-full rounded-2xl border p-4 font-mono text-sm"
                />

                <div>
                  <button
                    onClick={handleCopy}
                    className="mb-2 rounded border px-3 py-1 text-xs"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>

                  <textarea
                    value={result.output}
                    readOnly
                    className="min-h-[300px] w-full rounded-2xl border p-4 font-mono text-sm"
                  />
                </div>
              </div>
            )}

            <div className="mt-4 text-sm">
              {result.status === "error" ? (
                <span className="text-red-600">{result.message}</span>
              ) : result.status === "idle" ? (
                <span className="text-gray-600">{result.message}</span>
              ) : (
                <span className="text-green-700">{result.message}</span>
              )}
            </div>

            <div className="my-6 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (middle)
            </div>

            <div className="grid gap-6">
              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">How to use</h2>
                <p className="text-gray-600">
                  {tool.devToolType === "json-formatter"
                    ? "Paste raw JSON into the input box to format it into readable structured output."
                    : tool.devToolType === "json-minifier"
                    ? "Paste formatted or raw JSON into the input box to remove unnecessary whitespace and compress the output."
                    : tool.devToolType === "json-validator"
                    ? "Paste your JSON into the input box to validate the syntax and inspect a formatted preview."
                    : tool.devToolType === "base64-encoder"
                    ? "Paste plain text into the input box to convert it into Base64."
                    : tool.devToolType === "base64-decoder"
                    ? "Paste Base64 text into the input box to decode it into readable plain text."
                    : tool.devToolType === "url-encoder"
                    ? "Paste text or a query component into the input box to encode it for safe URL usage."
                    : tool.devToolType === "url-decoder"
                    ? "Paste URL-encoded text into the input box to decode it back into readable text."
                    : tool.devToolType === "unix-timestamp-converter"
                    ? "Paste either a Unix timestamp or a readable date string to convert between timestamp and human-readable formats."
                    : tool.devToolType === "uuid-generator"
                    ? "Use this tool to generate a random UUID instantly in the browser."
                    : "Paste your content into the input box and review the transformed output."}
                </p>
              </section>

              <section className="rounded-2xl border p-5">
                <h2 className="mb-2 text-xl font-semibold">What this tool does</h2>
                <p className="text-gray-600">
                  {tool.devToolType === "json-formatter"
                    ? "This tool parses valid JSON input and reformats it with indentation, making nested objects and arrays easier to inspect."
                    : tool.devToolType === "json-minifier"
                    ? "This tool parses valid JSON input and outputs the same data in compact minified form."
                    : tool.devToolType === "json-validator"
                    ? "This tool checks whether your JSON syntax is valid and helps identify malformed input."
                    : tool.devToolType === "base64-encoder"
                    ? "This tool converts plain text into Base64 format directly in the browser."
                    : tool.devToolType === "base64-decoder"
                    ? "This tool decodes Base64 strings back into readable text."
                    : tool.devToolType === "url-encoder"
                    ? "This tool converts text into URL-safe encoded format for links, query strings, and APIs."
                    : tool.devToolType === "url-decoder"
                    ? "This tool decodes URL-encoded text back into readable characters."
                    : tool.devToolType === "unix-timestamp-converter"
                    ? "This tool converts Unix timestamps into readable date formats and converts readable dates back into Unix timestamps."
                    : tool.devToolType === "uuid-generator"
                    ? "This tool generates a random UUID that can be used for identifiers, debugging, and development workflows."
                    : "This tool helps developers transform structured text quickly in the browser."}
                </p>
              </section>
            </div>

            <div className="my-8 rounded-2xl border border-dashed p-4 text-center text-xs text-gray-400">
              Ad slot (bottom)
            </div>
          </section>

          <aside className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="mb-3 font-semibold">Related tools</h3>

            <div className="mb-6 flex flex-col gap-2 text-sm">
              {relatedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.category}/${t.slug}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {t.name}
                </Link>
              ))}
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <h4 className="mb-3 text-sm font-semibold text-gray-900">
                Quick links
              </h4>

              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href={`/tools/${tool.category}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  All {categoryLabel}
                </Link>

                <Link
                  href={`/tools/${tool.category}/subcategory/${tool.subcategory}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {subcategoryLabel}
                </Link>

<Link
  href="/tools/development/what-is-a-unix-timestamp"
  className="text-gray-600 hover:text-gray-900"
>
  What Is a Unix Timestamp?
</Link>

<Link
  href="/tools/development/best-json-tools-for-developers"
  className="text-gray-600 hover:text-gray-900"
>
  Best JSON Tools for Developers
</Link>

                {tool.slug !== "json-formatter" && (
                  <Link
                    href="/tools/development/json-formatter"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    JSON Formatter
                  </Link>
                )}

                {tool.slug !== "json-minifier" && (
                  <Link
                    href="/tools/development/json-minifier"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    JSON Minifier
                  </Link>
                )}

                {tool.slug !== "json-validator" && (
                  <Link
                    href="/tools/development/json-validator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    JSON Validator
                  </Link>
                )}

                {tool.slug !== "base64-encoder" && (
                  <Link
                    href="/tools/development/base64-encoder"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Base64 Encoder
                  </Link>
                )}

                {tool.slug !== "base64-decoder" && (
                  <Link
                    href="/tools/development/base64-decoder"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Base64 Decoder
                  </Link>
                )}

                {tool.slug !== "url-encoder" && (
                  <Link
                    href="/tools/development/url-encoder"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    URL Encoder
                  </Link>
                )}

                {tool.slug !== "url-decoder" && (
                  <Link
                    href="/tools/development/url-decoder"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    URL Decoder
                  </Link>
                )}

                {tool.slug !== "unix-timestamp-converter" && (
                  <Link
                    href="/tools/development/unix-timestamp-converter"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Unix Timestamp Converter
                  </Link>
                )}

                {tool.slug !== "uuid-generator" && (
                  <Link
                    href="/tools/development/uuid-generator"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    UUID Generator
                  </Link>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}