"use client";
import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Bell, Search, UserCircle } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="flex min-h-screen bg-stone-50">
      <Sidebar isMinimized={isMinimized} setIsMinimized={setIsMinimized} /> 
      
      {/* Konten Utama dengan Margin Dinamis */}
      <div className={`flex-1 transition-all duration-300 ${isMinimized ? 'ml-20' : 'ml-64'}`}>
        
        {/* Header Dashboard Baru */}
        <header className="h-20 bg-white border-b border-stone-200 px-10 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          {/* Pencarian Global */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <Input 
              placeholder="Cari transaksi atau stok..." 
              className="pl-10 rounded-xl border-stone-100 bg-stone-50 focus:bg-white transition-all h-11"
            />
          </div>

          {/* User & Notifikasi */}
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-stone-500 hover:text-red-600 transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-6 border-l border-stone-200">
              <div className="text-right">
                <p className="text-sm font-bold text-stone-900">Mitra Pengulak</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">Premium Member</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <UserCircle size={28} />
              </div>
            </div>
          </div>
        </header>

        {/* Isi Halaman */}
        <main className="p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}