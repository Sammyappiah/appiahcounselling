"use client";

export default function RelationshipCounsellingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">

      {/* ⭐ Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Relationship & Couples Counselling | Appiah Counselling",
            description:
              "Support for couples and individuals facing relationship challenges, communication issues and emotional disconnection.",
            url: "https://appiahcounselling.co.uk/services/relationships",
          }),
        }}
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Relationship & Couples Counselling
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Relationships can be deeply meaningful yet challenging. Counselling
          supports healthier communication, deeper understanding and stronger
          emotional connection.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          Common Challenges
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Frequent conflict or arguments</li>
          <li>• Poor communication</li>
          <li>• Emotional distance or disconnection</li>
          <li>• Trust issues or past hurts</li>
          <li>• Feeling misunderstood</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900">
          How Counselling Helps
        </h2>
        <p className="mt-4 text-slate-700">
          We explore patterns, needs and emotions in a safe, respectful
          environment. Couples learn new ways to communicate, reconnect and
          understand each other.
        </p>
      </section>

      <section className="bg-emerald-700 py-16 text-white text-center">
        <h2 className="text-3xl font-semibold">Strengthen Your Connection</h2>
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
