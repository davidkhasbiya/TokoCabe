"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/ai-badge";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  BarChart2,
  Globe
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-stone-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">
            <Globe size={18} />
          </div>
          <span className="font-bold text-xl uppercase tracking-tighter">
            Grosir<span className="text-red-600">Cabai</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/auth/selection">
            <Button className="bg-red-600 ...">Gabung Mitra</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-24 max-w-7xl mx-auto text-center space-y-8">
        <Badge className="bg-red-50 text-red-600 border-none px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
          Eksosistem Cabai Terbesar di Indonesia
        </Badge>
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-stone-950 leading-[1.1]">
          Amankan Stok <span className="text-red-600 underline decoration-stone-200 underline-offset-8">Cabai Segar</span> <br />
          Langsung Dari Petani.
        </h1>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Platform B2B khusus pengulak dan distributor besar. Pantau harga harian nasional dan dapatkan kuota stok harian dengan harga grosir terbaik.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/auth/login">
            <Button className="h-16 px-10 bg-stone-950 text-white rounded-[2rem] text-lg font-bold gap-3 hover:bg-red-600 transition-all shadow-2xl shadow-red-200">
              Mulai Sourcing <ArrowRight size={20} />
            </Button>
          </Link>
          <Link href="/auth/petani">
            <Button variant="outline" className="h-16 px-10 rounded-[2rem] border-stone-200 text-stone-600 font-bold hover:bg-stone-50">
              Portal Petani (Coming Soon)
            </Button>
          </Link>
        </div>
      </section>

      {/* Live Market Snapshot (Dummy Data) */}
      <section className="px-10 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-stone-50 rounded-[3rem] border border-stone-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-widest">
              <TrendingUp size={16} /> Market Price
            </div>
            <h3 className="text-3xl font-bold text-stone-900">Rp 42.500 <span className="text-sm font-normal text-stone-400">/kg</span></h3>
            <p className="text-xs text-stone-400">Rata-rata nasional Rawit Merah hari ini.</p>
          </div>
          <div className="space-y-2 border-x border-stone-200 px-8">
            <div className="flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest">
              <BarChart2 size={16} /> Available Stock
            </div>
            <h3 className="text-3xl font-bold text-stone-900">450.2 Ton</h3>
            <p className="text-xs text-stone-400">Total stok siap angkut di 12 titik pengepul.</p>
          </div>
          <div className="space-y-2 pl-4">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
              <ShieldCheck size={16} /> Verified Farmers
            </div>
            <h3 className="text-3xl font-bold text-stone-900">1.280+</h3>
            <p className="text-xs text-stone-400">Petani aktif yang sudah terverifikasi sistem.</p>
          </div>
        </div>
      </section>
    </div>
  );
}