export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-4 text-slate-700 leading-relaxed">
          These Terms of Service outline the conditions under which Appiah Counselling provides counselling and wellbeing services.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Services
        </h2>
        <p className="mt-4 text-slate-700">
          Counselling sessions are confidential, professional, and conducted in accordance with BACP ethical guidelines.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Responsibilities
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• You agree to attend sessions on time</li>
          <li>• You agree to give at least 24 hours’ notice for cancellations</li>
          <li>• I agree to provide therapy with professionalism and care</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Payments
        </h2>
        <p className="mt-4 text-slate-700">
          Fees are communicated clearly and may be updated with reasonable notice.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Contact
        </h2>
        <p className="mt-4 text-slate-700">
          If you have any questions about these terms, please get in touch.
        </p>
      </section>
    </div>
  );
}
