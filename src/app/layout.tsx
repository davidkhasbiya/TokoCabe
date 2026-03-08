import AIAssistant from "@/components/ai-assitant";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <AIAssistant /> {/* Chatbot akan muncul di semua page */}
      </body>
    </html>
  );
}