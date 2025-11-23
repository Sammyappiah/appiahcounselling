export default function ThankYouPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen py-20 px-6 md:px-10">
      <div className="max-w-xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Message sent
        </h1>

        <p className="text-slate-700 mb-10">
          Thanks for getting in touch. I’ll reply as soon as I can.
        </p>

        <a
          href="/"
          className="inline-block bg-[#B87333] hover:bg-[#a6632c] text-white px-8 py-3 rounded-md transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
