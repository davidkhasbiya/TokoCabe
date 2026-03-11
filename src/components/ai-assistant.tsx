"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Penting untuk drag
import { X, Send, Sparkles, Bot } from "lucide-react";
import { Button } from "./ui/button";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Menggunakan motion.div agar bisa di-drag
    <motion.div 
      className="fixed z-[999]"
      drag 
      dragConstraints={{ left: -300, right: 20, top: -500, bottom: 20 }} // Batasan area geser
      initial={{ x: 0, y: 0 }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      style={{ bottom: 32, right: 32 }} // Posisi awal
    >
      {/* Tombol Chat (Draggable) */}
      {!isOpen && (
        <motion.button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Bot size={28} className="text-white" />
        </motion.button>
      )}

      {/* Panel Chat (Tetap di posisinya atau Anda bisa tambahkan logic agar tetap di pojok) */}
      {isOpen && (
        <div className="w-80 h-[500px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-stone-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header Panel */}
          <div className="p-6 bg-stone-950 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center">
                <Sparkles size={16} className="text-red-500" />
              </div>
              <div>
                <p className="font-bold text-sm">Asisten Cabai AI</p>
                <p className="text-[10px] text-stone-400 font-medium">Aktif • Siap Membantu</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-stone-800 p-1 rounded-full transition-colors"><X size={18} /></button>
          </div>
          
          {/* Isi Chat */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-stone-50/50">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-700 border border-stone-100 leading-relaxed">
              Halo Mitra! 👋 Ada yang ingin ditanyakan tentang stok atau harga cabai hari ini?
            </div>
          </div>

          {/* Input Chat */}
          <div className="p-4 border-t border-stone-100 flex gap-2 bg-white">
            <input 
              placeholder="Tanya harga atau stok..." 
              className="flex-1 bg-stone-100 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <Button className="w-10 h-10 p-0 rounded-xl bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/30">
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}