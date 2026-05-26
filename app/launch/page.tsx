"use client";

import { useEffect, useState } from "react";

export default function LaunchPage() {
  const launchDate = new Date("2026-05-27T10:00:00Z").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-[760px] w-full">

        <img
          src="/logo.png"
          alt="Appiah Counselling"
          className="w-[240px] mx-auto mb-16"
        />

        <p className="text-[#d4a24c] tracking-[0.32em] uppercase text-[0.72rem] mb-8">
          Appiah Counselling
        </p>

        <h1 className="font-serif text-white text-[2.4rem] md:text-[4.8rem] leading-[0.96] tracking-[-0.05em] mb-10">
          A calmer,
          <br />
          more thoughtful
          <br />
          counselling experience
          <br />
          is arriving.
        </h1>

        <p className="text-[#9f978d] text-[1rem] md:text-[1.08rem] leading-[1.9] mb-14">
          Website launch:
          <br />
          27 May — 10:00 AM GMT
        </p>

        <div className="flex justify-center gap-4 md:gap-8">

          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-[#2a2a2a] rounded-[24px] px-5 py-6 min-w-[82px] md:min-w-[120px]"
            >
              <div className="font-serif text-white text-[2rem] md:text-[3.4rem] leading-none">
                {item.value}
              </div>

              <div className="text-[#8e877f] uppercase tracking-[0.24em] text-[0.62rem] mt-3">
                {item.label}
              </div>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}
