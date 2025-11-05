"use client";

export default function Contact() {
  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen font-sans">
      <section className="text-center pt-[160px] pb-[120px] px-6 fade-in">
        <h1 className="text-[48px] mb-6 text-[#120C08] font-serif font-semibold">
          Contact
        </h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mb-10 rounded-full" />
        <p className="max-w-[700px] mx-auto text-[20px] leading-[1.8] text-[#181818]">
          Get in touch to book a session or ask a question.
        </p>
      </section>

      <section className="flex justify-center pb-[140px] fade-up">
        <form className="w-full max-w-[600px] bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-[#E2D3C2] rounded-lg px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#B85B35]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-[#E2D3C2] rounded-lg px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#B85B35]"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-[#E2D3C2] rounded-lg px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#B85B35]"
          />
          <button
            type="submit"
            className="w-full bg-[#B85B35] text-white font-semibold py-3 rounded-lg hover:bg-[#9E4C2B] transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
