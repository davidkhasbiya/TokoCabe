"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sprout, ChevronLeft, Lock } from "lucide-react";

export default function PortalPetaniPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Tombol Kembali */}
      <Link 
        href="/auth/login" 
        className="absolute top-10 left-10 flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors text-sm font-medium"
      >
        <ChevronLeft size={18} /> Kembali ke Portal Pembeli
      </Link>

      {/* Dekorasi Latar Belakang */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-stone-200 rounded-full blur-3xl opacity-50" />

      {/* Kartu Login Dummy */}
      <div className="w-full max-w-[450px] bg-white rounded-[3rem] shadow-2xl shadow-stone-200/50 p-12 border border-stone-100 relative z-10">
        
        {/* Badge Coming Soon */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-amber-200 shadow-sm">
          Coming Soon
        </div>

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
            <Sprout size={32} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-serif font-bold text-stone-900">Portal <span className="text-green-600">Petani</span></h1>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kelola hasil panen dan hubungkan langsung dengan pengulak besar di seluruh Indonesia.
            </p>
          </div>

          {/* Form Dummy (Disabled) */}
          <div className="w-full space-y-4 pt-4 opacity-50 pointer-events-none">
            <div className="text-left space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">ID Kelompok Tani</label>
              <Input placeholder="TANI-XXXX" className="h-12 rounded-2xl border-stone-200 bg-stone-50" readOnly />
            </div>
            <div className="text-left space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Kata Sandi</label>
              <Input type="password" placeholder="••••••••" className="h-12 rounded-2xl border-stone-200 bg-stone-50" readOnly />
            </div>
          </div>

          {/* Tombol Locked */}
          <Button className="w-full h-14 bg-stone-200 text-stone-500 rounded-2xl font-bold gap-3 cursor-not-allowed">
            <Lock size={18} /> Akses Belum Dibuka
          </Button>

          <p className="text-[11px] text-stone-400 font-medium">
            Ingin menjadi mitra perintis? <span className="text-green-600 underline cursor-pointer">Daftar Antrean</span>
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-stone-400 text-[10px] uppercase tracking-[0.3em] font-bold">
        Grosir<span className="text-green-600">Cabai</span> Ecosystem &copy; 2026
      </p>
    </div>
  );
}