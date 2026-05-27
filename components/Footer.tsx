import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1d1d1d]">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-6">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <p className="text-[#7f786f] text-sm whitespace-nowrap">
            © 2026 Appiah Counselling
          </p>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 md:gap-8">

            <Link
              href="/"
              className="text-[#d6d0c7] uppercase tracking-[0.14em] text-[0.68rem] hover:text-white transition whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#d6d0c7] uppercase tracking-[0.14em] text-[0.68rem] hover:text-white transition whitespace-nowrap"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-[#d6d0c7] uppercase tracking-[0.14em] text-[0.68rem] hover:text-white transition whitespace-nowrap"
            >
              Services
            </Link>

            <Link
              href="/podcasts"
              className="text-[#d6d0c7] uppercase tracking-[0.14em] text-[0.68rem] hover:text-white transition whitespace-nowrap"
            >
              Podcast
            </Link>

            <Link
              href="/contact"
              className="text-[#d6d0c7] uppercase tracking-[0.14em] text-[0.68rem] hover:text-white transition whitespace-nowrap"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
