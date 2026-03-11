"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Clock, Package, HelpCircle, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIChatPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Halo Mitra Pengulak! 👋 Ada yang bisa saya bantu cek mengenai stok atau status pesanan cabai Anda hari ini?" }
  ]);

  const quickActions = [
    { label: "Status Pesanan", icon: <Package size={14} /> },
    { label: "Harga Hari Ini", icon: <Clock size={14} /> },
    { label: "Bantuan Admin", icon: <HelpCircle size={14} /> }
  ];

  return (
    <div className="h-[85vh] flex flex-col max-w-2xl mx-auto w-full">
      {/* Chat Header - Mirip Marketplace */}
      <div className="flex items-center gap-4 pb-6 border-b border-stone-100 mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
          <Bot size={24} />
        </div>
        <div>
          <h1 className="font-bold text-stone-950">Asisten AI Grosir</h1>
          <p className="text-xs text-emerald-500 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Online
          </p>
        </div>
      </div>

      <Card className="flex-1 p-4 border-none shadow-xl shadow-stone-200/50 rounded-[2rem] flex flex-col overflow-hidden bg-stone-50">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-2 mb-4 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex gap-3", msg.role === "user" ? "justify-end" : "justify-start")}>
              {msg.role === "ai" && <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center mt-1"><Bot size={16} /></div>}
              <div className={cn(
                "max-w-[75%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed",
                msg.role === "ai" ? "bg-white text-stone-800 rounded-bl-none" : "bg-red-600 text-white rounded-br-none"
              )}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies - Ciri khas Marketplace */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
          {quickActions.map((action) => (
            <Button key={action.label} variant="outline" className="rounded-full h-9 text-xs gap-2 bg-white border-stone-200 hover:border-red-300">
              {action.icon} {action.label}
            </Button>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex gap-2 p-2 bg-white rounded-full border border-stone-200 shadow-sm">
          <Input 
            placeholder="Ketik pesan Anda..." 
            className="bg-transparent border-none focus-visible:ring-0 px-4"
          />
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 p-0">
            <Send size={18} />
          </Button>
        </div>
      </Card>
    </div>
  );
}