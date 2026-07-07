"use client";

import { AuthModal } from "@/components/auth/auth-modal";
import { useAuthModalStore } from "@/store/auth-modal.store";

export default function Home() {
  const open = useAuthModalStore((s) => s.open);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => open("sign-up")}>Register</button>
      <AuthModal />
    </div>
  );
}
