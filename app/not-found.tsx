export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-700">404</h1>
        <p className="mt-4 text-lg text-slate-700">
          The page you’re looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-emerald-700 px-8 py-3 text-white shadow hover:bg-emerald-800"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
