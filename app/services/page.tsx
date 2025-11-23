import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Counselling Services | Appiah Counselling",
  description:
    "Online individual and couples counselling with Samuel Appiah. Calm, grounded support for adults and couples.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF7] pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        
        {/* PAGE TITLE */}
        <section className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Counselling Services
          </h1>
        </section>

        {/* SERVICE CARDS */}
        <section aria-label="Counselling services">
          <div className="grid gap-8 md:grid-cols-2">

            {/* INDIVIDUAL */}
            <Link
              href="https://calendly.com/samuels12/couple-s-counselling?month=2025-11"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl bg-white shadow-sm ring-1 ring-[#E6DFD3] hover:ring-[#D5C8B4] hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <article className="flex flex-col h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/Solo.jpg"
                    alt="Individual counselling"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col gap-3">
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                    Individual counselling
                  </h2>

                  <p className="text-sm text-slate-500">One-to-one online sessions</p>

                  <p className="text-lg md:text-xl font-semibold text-slate-900">
                    £50 per session
                  </p>

                  <p className="text-sm md:text-base text-slate-600 mt-2">
                    Space to explore anxiety, stress, identity, family dynamics, or anything
                    that feels heavy at the moment.
                  </p>

                  <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-600">
                    <li>· 50 minute session</li>
                    <li>· Online video call</li>
                  </ul>

                  <p className="mt-5 text-sm font-medium text-brand-orange group-hover:underline">
                    Book individual session →
                  </p>
                </div>
              </article>
            </Link>

            {/* COUPLES */}
            <Link
              href="https://calendly.com/samuels12/counselling?month=2025-11"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl bg-white shadow-sm ring-1 ring-[#E6DFD3] hover:ring-[#D5C8B4] hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <article className="flex flex-col h-full">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/couple.jpg"
                    alt="Couples counselling"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col gap-3">
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                    Couples counselling
                  </h2>

                  <p className="text-sm text-slate-500">For you and your partner</p>

                  <p className="text-lg md:text-xl font-semibold text-slate-900">
                    £65 per session
                  </p>

                  <p className="text-sm md:text-base text-slate-600 mt-2">
                    Support to improve communication, understand patterns, and reduce conflict.
                  </p>

                  <ul className="mt-3 space-y-1 text-sm md:text-base text-slate-600">
                    <li>· 50 minute session</li>
                    <li>· Online video call</li>
                  </ul>

                  <p className="mt-5 text-sm font-medium text-brand-orange group-hover:underline">
                    Book couples session →
                  </p>
                </div>
              </article>
            </Link>

          </div>
        </section>
      </div>
    </main>
  );
}
