"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Halo Mitra Pengulak! Ada yang bisa saya bantu cek mengenai stok atau harga cabai hari ini?" }
  ]);

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col space-y-4">
      <div>
        <h1 className="text-3xl font-serif font-bold text-stone-950 text-red-600">Asisten AI Grosir</h1>
        <p className="text-stone-500 text-sm">Tanyakan apa saja seputar stok, harga, dan transaksi Anda.</p>
      </div>

      <Card className="flex-1 p-6 border-stone-200 rounded-3xl bg-white shadow-sm flex flex-col overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                msg.role === "ai" ? "bg-stone-100 text-stone-800" : "bg-red-600 text-white"
              }`}>
                {msg.role === "ai" && <Bot size={20} className="shrink-0 text-red-600" />}
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 p-2 bg-stone-50 rounded-2xl border border-stone-100">
          <Input 
            placeholder="Tulis pesan Anda..." 
            className="bg-transparent border-none focus-visible:ring-0"
          />
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6">
            <Send size={18} />
          </Button>
        </div>
      </Card>
    </div>
  );
}