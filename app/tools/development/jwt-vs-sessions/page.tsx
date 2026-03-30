import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JWT vs Sessions | T4 Atlas",
  description:
    "Compare JWT vs session-based authentication. Learn the differences, trade-offs, and when to use each approach in modern applications.",
  keywords: [
    "jwt vs sessions",
    "jwt vs session authentication",
    "session vs token auth",
    "jwt vs cookies session",
    "authentication methods comparison",
  ],
};

export default function JwtVsSessionsPage() {
  return (
    <main className="py-10 px-4 md:px-6">
      <div className="mx-auto max-w-5xl">
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
            <span>JWT vs Sessions</span>
          </div>

          <div className="mb-3">
            <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              Development guide
            </span>
          </div>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            JWT vs Sessions
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
            JWT and session-based authentication are two of the most common ways
            to manage user identity in applications. They solve the same problem
            but use fundamentally different architectures with different trade-offs.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Quick comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full rounded-2xl border text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Aspect</th>
                    <th className="p-3 text-left">JWT</th>
                    <th className="p-3 text-left">Sessions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-medium">State</td>
                    <td className="p-3">Stateless</td>
                    <td className="p-3">Stateful</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Storage</td>
                    <td className="p-3">Client-side</td>
                    <td className="p-3">Server-side</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Scalability</td>
                    <td className="p-3">High</td>
                    <td className="p-3">Requires session store</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Revocation</td>
                    <td className="p-3">Harder</td>
                    <td className="p-3">Easy</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-medium">Security control</td>
                    <td className="p-3">Token-based</td>
                    <td className="p-3">Server-controlled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">JWT (token-based)</h2>
            <p className="text-gray-600 mb-4">
              JWT authentication stores user data inside a signed token that is
              sent with each request. The server does not need to keep session
              state.
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Scales well across services</li>
              <li>No central session store required</li>
              <li>Good for APIs and microservices</li>
              <li>Harder to revoke tokens early</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">Sessions (stateful)</h2>
            <p className="text-gray-600 mb-4">
              Session-based authentication stores user state on the server and
              uses a session ID (often in a cookie) to identify the user.
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Central control over sessions</li>
              <li>Easy to revoke access</li>
              <li>Simpler security model</li>
              <li>Requires session storage</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use JWT?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Distributed systems or microservices</li>
              <li>API-first architectures</li>
              <li>Stateless backends</li>
              <li>Third-party integrations</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-gray-50 p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              When should you use sessions?
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Traditional web applications</li>
              <li>High need for control and revocation</li>
              <li>Simpler architectures</li>
              <li>Centralized backend systems</li>
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Common misconception
            </h2>

            <p className="text-gray-600">
              JWT is not automatically more secure than sessions. Security depends
              on implementation details such as storage, transport, expiry,
              and validation — not just the authentication model.
            </p>
          </section>

          <section className="rounded-3xl border bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
            <h2 className="mb-3 text-2xl font-semibold">
              Explore JWT tools and debugging
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/development/jwt-decoder"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                JWT Decoder
              </Link>

              <Link
                href="/tools/development/what-is-a-jwt"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                What Is a JWT?
              </Link>

              <Link
                href="/tools/development/best-jwt-tools-for-developers"
                className="border rounded-2xl px-4 py-2.5 text-sm hover:bg-gray-50"
              >
                Best JWT Tools
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}