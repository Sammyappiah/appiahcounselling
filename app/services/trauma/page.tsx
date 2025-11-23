"use client";

export default function TraumaCounsellingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">

      {/* ⭐ Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Trauma Counselling | Appiah Counselling",
            description:
              "Specialist trauma-informed counselling for PTSD, difficult past experiences, emotional wounds and recovery.",
            url: "https://appiahcounselling.co.uk/services/trauma",
          }),
        }}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Trauma Counselling
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Trauma can leave lasting emotional and physical effects. Counselling
          offers a safe environment to process past events and rebuild
          stability, trust and emotional safety.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">Signs of Trauma</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Flashbacks or intrusive memories</li>
          <li>• Hypervigilance or feeling “on edge”</li>
          <li>• Emotional numbness</li>
          <li>• Trouble trusting others</li>
          <li>• Difficulty regulating emotions</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">How Therapy Helps</h2>
        <p className="mt-4 text-slate-700">
          We work at a pace that feels safe, helping you understand your trauma
          responses, rebuild emotional stability, and regain a sense of control.
        </p>
      </section>

      <section className="bg-emerald-700 py-16 text-white text-center">
        <h2 className="text-3xl font-semibold">You Deserve Healing</h2>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-white px-8 py-3 text-emerald-800 shadow hover:bg-slate-100"
        >
          Book a Session
        </a>
      </section>
    </div>
  );
}
