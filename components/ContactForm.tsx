"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to send");

      form.reset();

      // 🔥 Redirect after success
      router.push("/contact/thank-you");
    } catch (err) {
      console.error("Contact error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-slate-300 rounded-md p-3 bg-white"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-slate-300 rounded-md p-3 bg-white"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full border border-slate-300 rounded-md p-3 bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#B7744D] text-white py-3 rounded-md font-medium hover:bg-[#99633f] transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
