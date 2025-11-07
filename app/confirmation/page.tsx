"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="text-center py-24 text-[#B85B35] text-xl">Loading confirmation…</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}

function ConfirmationContent() {
  const params = useSearchParams();
  const status = params.get("status") || "success";
  const sessionId = params.get("session_id") || "";
  const room = params.get("room") || "";

  const title =
    status === "success" ? "Payment Confirmed" :
    status === "canceled" ? "Payment Canceled" :
    "Payment Status";

  const subtitle =
    status === "success"
      ? "Thank you — your booking is confirmed."
      : status === "canceled"
      ? "Your payment was canceled. You can try again anytime."
      : "We’re processing your payment details.";

  return (
    <main
      className="min-h-screen bg-[#FDFBF9] text-[#111111] flex flex-col items-center justify-center px-6 py-24 relative"
      style={{ backgroundImage: "linear-gradient(180deg, #FCFAF7 0%, #F7F3EE 100%)" }}
    >
      {/* soft radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-[35%] h-[600px] w-[900px] max-w-[90vw] rounded-[999px] blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(246,241,235,0.55) 45%, rgba(246,241,235,0) 70%)",
        }}
      />

      <div className="relative z-[1] bg-[#FCF9F5] border border-[#E8E1D9] shadow-[0_12px_32px_rgba(17,17,17,0.08)] rounded-[24px] p-10 md:p-12 w-full max-w-[720px] text-center">
        <h1 className="font-serif text-[34px] md:text-[40px] mb-3">{title}</h1>
        <p className="text-[18px] md:text-[20px] text-[#333] opacity-90 mb-8">
          {subtitle} {room ? <span className="font-medium">(Room: {room})</span> : null}
        </p>

        {/* slim terracotta divider */}
        <div className="h-[5px] w-[160px] rounded-full bg-gradient-to-r from-[#E3C9B0] via-[#B85B35] to-[#E3C9B0] mx-auto mb-8" />

        {sessionId ? (
          <p className="text-[14px] text-[#6b6b6b] mb-8">
            Reference: <span className="font-mono">{sessionId}</span>
          </p>
        ) : null}

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/booking"
            className="px-5 py-3 rounded-xl border border-[#E3C9B0] hover:border-[#B85B35] transition-colors"
          >
            Book another session
          </Link>
          <Link
            href="/"
            className="px-5 py-3 rounded-xl bg-[#B85B35] text-white hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
