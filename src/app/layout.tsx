import type { Metadata } from "next";
import "./globals.css"; // <--- INI WAJIB ADA!
import AiWrapper from "@/components/AiWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
        <AiWrapper/>
      </body>
    </html>
  );
}