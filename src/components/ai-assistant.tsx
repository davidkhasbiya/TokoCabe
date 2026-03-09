"use client";
import { useState } from "react";
import { MessageCircle, X, Send, Sparkles, Bot } from "lucide-react";
import { Button } from "./ui/button";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {/* Tombol Chat */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl flex items-center justify-center animate-bounce-slow"
        >
          <Bot size={28} className="text-white" />
        </Button>
      )}

      {/* Panel Chat */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-[2rem] shadow-2xl border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10">
          <div className="p-6 bg-stone-950 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-red-500" />
              <span className="font-bold">Asisten Cabai AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-stone-50/50">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100">
              Halo! Saya asisten pintar kamu. Ada yang ingin ditanyakan tentang stok cabai hari ini?
            </div>
          </div>

          <div className="p-4 border-t border-stone-100 flex gap-2">
            <input 
              placeholder="Tanya harga atau stok..." 
              className="flex-1 bg-stone-100 rounded-xl px-4 text-sm focus:outline-none"
            />
            <Button className="w-10 h-10 p-0 rounded-xl bg-red-600"><Send size={16} /></Button>
          </div>
        </div>
      )}
    </div>
  );
}