import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Appiah Counselling",
  description:
    "Get in touch with Samuel Appiah to ask a question about counselling, availability or working together.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      <div className="mx-auto max-w-4xl px-6 md:px-10 py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Get in touch
        </h1>
        <p className="text-slate-700 mb-8 max-w-2xl">
          If you have a question about counselling, availability or how I work,
          you can use the form below. I&apos;ll respond as soon as I can.
        </p>

        <ContactForm />
      </div>
    </main>
  );
}
