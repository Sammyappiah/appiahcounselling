'use client';

import { useMemo, useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

type ServiceKey = 'individual-therapy' | 'couples-therapy';

const SERVICES: Record<ServiceKey, { name: string; price: number; durationMins: number }> = {
  'individual-therapy': { name: 'Individual Therapy', price: 50, durationMins: 60 },
  'couples-therapy': { name: 'Couples Therapy', price: 65, durationMins: 60 },
};

export default function ServiceBookingPage() {
  const params = useParams<{ service: string }>();
  const router = useRouter();
  const qs = useSearchParams();

  const serviceKey = (params.service || '').toLowerCase() as ServiceKey;
  const service = SERVICES[serviceKey];

  // Basic guards
  useEffect(() => {
    if (!service) {
      router.replace('/booking');
    }
  }, [service, router]);

  // State
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [name, setName] = useState<string>(qs.get('name') || '');
  const [email, setEmail] = useState<string>(qs.get('email') || '');
  const [phone, setPhone] = useState<string>(qs.get('phone') || '');
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dateTimeISO = useMemo(() => {
    if (!date || !time) return '';
    try {
      // combine as local time ISO
      const iso = new Date(`${date}T${time}:00`);
      return iso.toISOString();
    } catch {
      return '';
    }
  }, [date, time]);

  function validate() {
    const e: Record<string, string> = {};
    if (!service) e.service = 'Please choose a valid service.';
    if (!date) e.date = 'Please choose a date.';
    if (!time) e.time = 'Please choose a time.';
    if (!name.trim()) e.name = 'Please enter your full name.';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = 'Please enter a valid email.';
    if (!phone.trim()) e.phone = 'Please enter a phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || !service) return;

    const params = new URLSearchParams({
      service: service.name,
      price: String(service.price),
      durationMins: String(service.durationMins),
      date,
      time,
      dateTimeISO: dateTimeISO || '',
      name,
      email,
      phone,
      notes,
    });

    // Hand off to /checkout (Stripe to be implemented there)
    router.push(`/checkout?${params.toString()}`);
  }

  // Today min for <input type="date">
  const today = useMemo(() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }, []);

  if (!service) return null;

  return (
    <main className="bg-[#FDFBF9] text-[#111111] min-h-screen">
      {/* Header */}
      <section className="text-center pt-[150px] pb-[40px] px-6 fade-up">
        <h1 className="text-[38px] md:text-[44px] font-serif font-semibold leading-tight">
          {service.name}
        </h1>
        <div className="w-[70px] h-[4px] bg-[#B85B35] mx-auto rounded-full my-6" />
        <p className="text-[16px] md:text-[18px] font-light max-w-[720px] mx-auto leading-relaxed">
          Please select a date & time, enter your details, and continue to payment.
        </p>
      </section>

      {/* Framed Form + Summary */}
      <section className="px-6 pb-[140px] fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Card */}
          <form
            onSubmit={onSubmit}
            className="rounded-[28px] bg-[#FCF9F5] border border-[#E9DFD4] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 md:p-10"
          >
            {/* Stepper */}
            <ol className="flex items-center justify-center gap-4 text-[13px] font-medium mb-8">
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#B85B35] text-white grid place-items-center text-[12px]">1</span>
                Service
              </li>
              <span className="opacity-40">—</span>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#B85B35] text-white grid place-items-center text-[12px]">2</span>
                Date & Time
              </li>
              <span className="opacity-40">—</span>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#B85B35] text-white grid place-items-center text-[12px]">3</span>
                Details
              </li>
              <span className="opacity-40">—</span>
              <li className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#B85B35] text-white grid place-items-center text-[12px]">4</span>
                Payment
              </li>
            </ol>

            {/* Service (readonly display) */}
            <div className="mb-6">
              <label className="block text-[14px] mb-2 font-medium">Service</label>
              <div className="rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3">
                {service.name} · £{service.price} · {service.durationMins} mins
              </div>
              {errors.service && <p className="text-red-600 text-[13px] mt-2">{errors.service}</p>}
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-[14px] mb-2 font-medium">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#B85B35]/30"
                />
                {errors.date && <p className="text-red-600 text-[13px] mt-2">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="time" className="block text-[14px] mb-2 font-medium">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#B85B35]/30"
                />
                {errors.time && <p className="text-red-600 text-[13px] mt-2">{errors.time}</p>}
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-[14px] mb-2 font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#B85B35]/30"
                />
                {errors.name && <p className="text-red-600 text-[13px] mt-2">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-[14px] mb-2 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#B85B35]/30"
                  />
                  {errors.email && <p className="text-red-600 text-[13px] mt-2">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[14px] mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 ..."
                    className="w-full rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#B85B35]/30"
                  />
                  {errors.phone && <p className="text-red-600 text-[13px] mt-2">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-[14px] mb-2 font-medium">
                  Notes (optional)
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-[#E9DFD4] bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#B85B35]/30 resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <a
                href="/booking"
                className="rounded-full border border-[#B85B35] px-8 py-3 text-[#B85B35] text-[15px] font-semibold hover:bg-[#B85B35] hover:text-white transition-colors"
                aria-label="Back to Booking"
              >
                Back
              </a>
              <button
                type="submit"
                className="rounded-full bg-[#B85B35] px-10 py-3 text-white text-[15px] font-semibold hover:opacity-95 transition-opacity"
              >
                Continue to payment
              </button>
            </div>
          </form>

          {/* Summary Card */}
          <aside className="rounded-[28px] bg-[#FCF9F5] border border-[#E9DFD4] shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 md:p-10 h-fit sticky top-[120px]">
            <h3 className="font-serif text-[22px] md:text-[24px] font-semibold mb-6">Summary</h3>
            <div className="space-y-4 text-[15px]">
              <Row label="Service" value={service.name} />
              <Row label="Duration" value={`${service.durationMins} minutes`} />
              <Row label="Price" value={`£${service.price}`} />
              <Row label="Date" value={date || '—'} />
              <Row label="Time" value={time || '—'} />
              <div className="h-[1px] bg-[#E9DFD4] my-4" />
              <Row label="Name" value={name || '—'} />
              <Row label="Email" value={email || '—'} />
              <Row label="Phone" value={phone || '—'} />
              {notes ? (
                <div>
                  <div className="text-[13px] opacity-70 mb-1">Notes</div>
                  <div className="rounded-xl border border-[#E9DFD4] bg-white/70 p-3 whitespace-pre-wrap">
                    {notes}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Gentle hint */}
            <p className="text-[13px] opacity-70 mt-6">
              You’ll review & pay on the next step. After payment, we can auto-send a Google Meet invite (optional setup).
            </p>
          </aside>
        </div>
      </section>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 0.9s ease-out forwards;
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <span className="text-[13px] opacity-70">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
