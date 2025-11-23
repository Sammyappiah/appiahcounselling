import { Suspense } from "react";
import ConfirmationClient from "./ui";

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-screen flex items-center justify-center">Loading…</main>}>
      <ConfirmationClient />
    </Suspense>
  );
}
