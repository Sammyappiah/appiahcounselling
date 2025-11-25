export default function Footer() {
  return (
    <footer className="bg-[#FCFAF7] border-t border-slate-200 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-700">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-slate-900">Appiah Counselling</p>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* RIGHT SIDE – BLOG REMOVED */}
        <nav className="flex gap-6 text-sm">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/services" className="hover:text-slate-900">Services</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </nav>

      </div>
    </footer>
  );
}
