"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function BookingPage() {
  const { roomId } = useParams();
  const router = useRouter();

  const sessions = {
    individual: {
      name: "Individual Therapy",
      price: 60,
      img: "/accessible.jpg",
      desc: "One-to-one session for personal reflection and emotional growth.",
    },
    couples: {
      name: "Couples Therapy",
      price: 90,
      img: "/deluxe.jpg",
      desc: "Therapeutic space for couples to strengthen communication and trust.",
    },
    family: {
      name: "Family Therapy",
      price: 110,
      img: "/family.jpg",
      desc: "Supportive environment for families to reconnect and resolve challenges.",
    },
  };

  const session = sessions[roomId as keyof typeof sessions];

  const [guests, setGuests] = useState(1);
  const [sessionsCount, setSessionsCount] = useState(1);
  const [total, setTotal] = useState(session?.price || 0);

  useEffect(() => {
    if (session) setTotal(session.price * sessionsCount);
  }, [sessionsCount, session]);

  if (!session) {
    return (
      <main className="text-center pt-[160px] pb-[120px]">
        <h1 className="text-[36px] font-serif">Session not found</h1>
        <p className="text-[18px] mt-4">Please return to the booking page.</p>
      </main>
    );
  }

  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen font-sans fade-in">
      {/* Header Section */}
      <section className="text-center pt-[140px] pb-[60px] px-6">
        <h1 className="text-[42px] md:text-[48px] mb-6 text-[#120C08] font-serif font-semibold">
          {session.name}
        </h1>
        <div className="w-[80px] h-[4px] bg-[#B85B35] mx-auto mb-8 rounded-full" />
        <p className="max-w-[680px] mx-auto text-[18px] md:text-[20px] text-[#181818] leading-[1.8]">
          {session.desc}
        </p>
      </section>

      {/* Booking Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-12 px-6 pb-[140px] fade-up">
        {/* Image */}
        <div className="w-full lg:w-1/2 max-w-[600px] rounded-3xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-sm">
          <img
            src={session.img}
            alt={session.name}
            className="w-full h-[380px] object-cover object-top rounded-3xl"
          />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 max-w-[600px] bg-white/70 backdrop-blur-md shadow-lg rounded-3xl p-10 space-y-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/checkout");
            }}
          >
            <label className="block text-[16px] font-semibold mb-1">
              Number of Sessions
            </label>
            <input
              type="number"
              min="1"
              value={sessionsCount}
              onChange={(e) => setSessionsCount(Number(e.target.value))}
              className="w-full border border-[#E2D3C2] rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#B85B35]"
            />

            <label className="block text-[16px] font-semibold mb-1">
              Guests (if applicable)
            </label>
            <input
              type="number"
              min="1"
              max="5"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full border border-[#E2D3C2] rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#B85B35]"
            />

            <p className="text-[18px] font-medium text-[#2B1E10] mb-6">
              Total: <span className="font-semibold">£{total.toFixed(2)}</span>
            </p>

            <button
              type="submit"
              className="w-full bg-[#B85B35] text-white font-semibold py-3 rounded-lg hover:bg-[#9E4C2B] transition-colors"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
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
