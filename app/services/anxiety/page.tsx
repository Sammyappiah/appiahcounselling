"use client";

export default function AnxietyCounsellingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">

      {/* ⭐ Schema.org WebPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Anxiety Counselling | Appiah Counselling",
            description:
              "Professional support for anxiety, worry, panic and stress. Safe, calm counselling to help you find clarity and regain control.",
            url: "https://appiahcounselling.co.uk/services/anxiety",
          }),
        }}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Anxiety Counselling
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          If anxiety is affecting your daily life, relationships, sleep or confidence,
          counselling can help you understand what’s happening and find practical ways
          to feel calmer and more in control.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          Common Signs of Anxiety
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed">
          <li>• Constant worrying or racing thoughts</li>
          <li>• Feeling overwhelmed or unable to relax</li>
          <li>• Panic attacks or physical tension</li>
          <li>• Difficulty sleeping</li>
          <li>• Fear of certain situations or social anxiety</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">How Counselling Helps</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Together, we explore what’s driving your anxiety — whether it's stress,
          past experiences, pressure, overthinking or fears that feel out of control.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          You’ll learn grounding techniques, emotional coping skills, and ways to
          calm your body’s anxiety responses.
        </p>
      </section>

      <section className="bg-emerald-700 py-16 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Feel Calmer?</h2>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-white px-8 py-3 text-emerald-800 shadow hover:bg-slate-100"
        >
          Book a Session
        </a>
      </section>
    </div>
  );
}
