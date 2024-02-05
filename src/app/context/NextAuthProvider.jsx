"use client";
import { SessionProvider } from "next-auth/react";
export default function NextAuthProvider({ chidlren }) {
  return <SessionProvider>{chidlren}</SessionProvider>;
}
