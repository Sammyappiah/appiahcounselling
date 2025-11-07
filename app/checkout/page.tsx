"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CheckoutForm from "@/components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-center py-24 text-[#B85B35] text-xl">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}

function CheckoutContent() {
  const params = useSearchParams();
  const room = params.get("room");

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#111111] flex flex-col items-center justify-center px-6 py-24">
      <div className="bg-[#FCF9F5] border border-[#E8E1D9] shadow-[0_12px_32px_rgba(17,17,17,0.08)] rounded-[20px] p-10 w-full max-w-[560px] text-center">
        <h1 className="font-serif text-[32px] mb-4">Checkout</h1>
        <p className="text-[18px] text-[#333] mb-8 opacity-80">
          Completing payment for <span className="font-semibold">{room || "your selected session"}</span>
        </p>
        <CheckoutForm />
      </div>
    </main>
  );
}
