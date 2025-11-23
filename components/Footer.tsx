// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#FAF6F2]">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        {/* Accreditation + practice details */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center justify-center">
            <Image
              src="/mncps-acc-logo.jpeg"
              alt="NCPS Accredited Registrant (MNCPS Acc.) and PSA Accredited Register"
              width={320}
              height={100}
              className="h-auto w-full max-w-xs md:max-w-sm"
              priority
            />
          </div>

          <div className="text-center text-sm text-slate-700 md:text-right">
            <p className="text-base font-semibold text-slate-900">
              Appiah Counselling
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sammy@appiahcounselling.com"
                className="underline underline-offset-2 decoration-slate-400 hover:text-slate-900"
              >
                sammy@appiahcounselling.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200" />

        {/* Sitemap + copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 md:flex-row">
          <p>© {year} Appiah Counselling. All rights reserved.</p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="/services" className="hover:text-slate-900">
              Services
            </Link>
            <Link href="/blog" className="hover:text-slate-900">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
