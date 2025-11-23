import type { Metadata } from "next";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About | Appiah Counselling",
  description:
    "Learn more about Samuel Appiah and the calm, grounded counselling support offered for adults and couples.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      {/* TOP SECTION – IMAGE + INTRO */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-24 pb-16">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* Photo – zoomed in more */}
          <div className="relative w-full max-w-md md:max-w-lg aspect-[3/4] overflow-hidden rounded-3xl shadow-lg bg-[#E8D1B5]">
            <Image
              src="/Therapist1.jpg"
              alt="Samuel Appiah, counsellor"
              fill
              priority
              className="object-cover object-center scale-[1.15]"
            />
          </div>

          {/* Text */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              About me
            </h1>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-xl">
              I am Samuel Appiah, a counsellor who offers a calm and grounded
              space for people feeling overwhelmed or stuck. We talk through
              what is happening, find clarity and work toward steadier days,
              always at your pace.
            </p>
          </div>
        </div>
      </section>

      {/* PEOPLE OFTEN COME FOR */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center mb-6">
            People often come for
          </h2>
          <p className="text-center text-slate-700 max-w-2xl mx-auto mb-10">
            Many people arrive feeling like they should be coping better. You do
            not have to keep carrying everything on your own.
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-center">
            <div className="rounded-2xl bg-[#FCFAF7] px-6 py-6 shadow-sm">
              <p className="font-medium text-slate-900 mb-2">
                Anxiety or constant worry
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCFAF7] px-6 py-6 shadow-sm">
              <p className="font-medium text-slate-900 mb-2">
                Feeling low or disconnected
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCFAF7] px-6 py-6 shadow-sm">
              <p className="font-medium text-slate-900 mb-2">
                Stress and burnout
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCFAF7] px-6 py-6 shadow-sm">
              <p className="font-medium text-slate-900 mb-2">
                Relationship tension or distance
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCFAF7] px-6 py-6 shadow-sm">
              <p className="font-medium text-slate-900 mb-2">
                Communication struggles
              </p>
            </div>
            <div className="rounded-2xl bg-[#FCFAF7] px-6 py-6 shadow-sm">
              <p className="font-medium text-slate-900 mb-2">
                Past experiences affecting the present
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F5EDE2] py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
