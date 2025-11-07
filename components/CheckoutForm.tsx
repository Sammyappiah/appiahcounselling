"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutForm({ amount, service, name, email, date, time }: any) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!stripe || !elements) return;

    // Fake checkout (simulate success)
    setTimeout(() => {
      setLoading(false);
      router.push(
        `/confirmation?service=${encodeURIComponent(service)}&date=${encodeURIComponent(
          date
        )}&time=${encodeURIComponent(time)}`
      );
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border border-[#D9CFC2] rounded-lg bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#111111",
                "::placeholder": { color: "#999" },
              },
              invalid: { color: "#B85B35" },
            },
          }}
        />
      </div>

      {error && <p className="text-[#B85B35] text-[14px]">{error}</p>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full rounded-full px-10 py-3 text-[15px] font-semibold text-white transition-colors ${
          loading
            ? "bg-[#B85B35]/60 cursor-not-allowed"
            : "bg-[#B85B35] hover:bg-[#9e4129]"
        }`}
      >
        {loading ? "Processing..." : "Confirm Payment"}
      </button>
    </form>
  );
}
