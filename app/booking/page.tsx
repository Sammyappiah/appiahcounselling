"use client";

import Link from "next/link";

export default function Booking() {
  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center pt-[160px] pb-[100px] px-6 fade-in">
        <h1 className="text-[48px] mb-6 text-[#120C08] font-serif font-semibold">
          Booking
        </h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mb-10 rounded-full" />
        <p className="max-w-[680px] mx-auto text-[20px] leading-[1.8] text-[#181818] mt-4">
          Choose a session type and begin your journey.
        </p>
      </section>

      {/* Room Options */}
      <section className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-[140px] fade-up">
        {[
          {
            name: "Individual Therapy",
            price: "£60 / session",
            img: "/accessible.jpg",
            id: "individual",
          },
          {
            name: "Couples Therapy",
            price: "£90 / session",
            img: "/deluxe.jpg",
            id: "couples",
          },
          {
            name: "Family Therapy",
            price: "£110 / session",
            img: "/family.jpg",
            id: "family",
          },
        ].map((session) => (
          <div
            key={session.id}
            className="bg-[#FCF9F5] border border-[#E6D8CA] rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-500"
          >
            <img
              src={session.img}
              alt={session.name}
              className="w-full h-[240px] object-cover"
            />
            <div className="p-8 text-center">
              <h3 className="text-[22px] font-semibold mb-3 text-[#2B1E10]">
                {session.name}
              </h3>
              <p className="text-[#6A5C4A] mb-6">{session.price}</p>
              <Link
                href={`/booking/${session.id}`}
                className="inline-block bg-[#B85B35] text-white px-6 py-3 rounded-lg text-[16px] font-semibold hover:bg-[#9E4C2B] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Animations */}
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.2s ease-out forwards;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
