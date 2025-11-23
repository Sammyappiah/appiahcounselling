export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-semibold text-slate-900">
          Accessibility Statement
        </h1>

        <p className="mt-4 text-slate-700 leading-relaxed">
          Appiah Counselling is committed to ensuring our website is accessible to all users, including those with disabilities.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Accessibility Features
        </h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Keyboard-friendly navigation</li>
          <li>• Clear colour contrast</li>
          <li>• Alt text on images</li>
          <li>• Responsive design</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-slate-900">
          Reporting Issues
        </h2>
        <p className="mt-4 text-slate-700">
          If you encounter accessibility barriers, please contact me through the contact page.
        </p>
      </section>
    </div>
  );
}
