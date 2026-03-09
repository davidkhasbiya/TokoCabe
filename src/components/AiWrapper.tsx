"use client";
import { usePathname } from "next/navigation";
import AiAssistant from "@/components/ai-assistant"; // Pastikan import tanpa kurung kurawal jika pakai export default

export default function AiWrapper() {
  const pathname = usePathname();

  // Logika baru: 
  // JANGAN tampilkan jika di halaman utama ('/') 
  // ATAU halaman yang dimulai dengan '/auth'
  const isLandingPage = pathname === "/";
  const isAuthPage = pathname.startsWith("/auth");

  const showAssistant = !isLandingPage && !isAuthPage;

  return (
    <>
      {showAssistant && <AiAssistant />}
    </>
  );
}