"use client";

export default function DepressionCounsellingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">

      {/* ⭐ Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Depression Counselling | Appiah Counselling",
            description:
              "Safe, supportive counselling for low mood, sadness, loss of motivation and emotional overwhelm.",
            url: "https://appiahcounselling.co.uk/services/depression",
          }),
        }}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Depression Counselling
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Depression can leave you feeling stuck, exhausted or disconnected. You
          don’t have to go through it alone — counselling provides space to talk,
          understand and rebuild.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          What You May Be Feeling
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Low mood or sadness</li>
          <li>• Loss of energy or motivation</li>
          <li>• Withdrawal from friends or activities</li>
          <li>• Difficulty concentrating</li>
          <li>• Feeling hopeless or overwhelmed</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">How Counselling Helps</h2>
        <p className="mt-4 text-slate-700">
          We explore the emotional, relational and situational factors affecting you.
        </p>
        <p className="mt-4 text-slate-700">
          Therapy can help you reconnect with meaning, build resilience, and develop
          new ways of understanding your feelings.
        </p>
      </section>

      <section className="bg-emerald-700 py-16 text-white text-center">
        <h2 className="text-3xl font-semibold">You Don’t Need To Struggle Alone</h2>
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
