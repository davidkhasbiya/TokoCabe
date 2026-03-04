"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Sprout, ChevronLeft, ArrowRight } from "lucide-react";

export default function PortalSelectionPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-6 lg:p-12 relative overflow-hidden">
      
      {/* Tombol Kembali ke Landing */}
      <Link 
        href="/" 
        className="absolute top-10 left-10 flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors text-sm font-bold"
      >
        <ChevronLeft size={18} /> Kembali ke Katalog
      </Link>

      <div className="text-center mb-12 space-y-3 relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
          Pilih <span className="text-red-600">Portal</span> Akses
        </h1>
        <p className="text-stone-500 text-sm max-w-md mx-auto">
          Silakan masuk sesuai dengan peran mitra Anda dalam ekosistem Grosir Cabai.
        </p>
      </div>

      {/* Container Dua Portal Berdampingan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10">
        
        {/* Portal Pembeli */}
        <Card className="group p-10 rounded-[3rem] bg-white border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-[2rem] flex items-center justify-center shadow-inner group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
              <ShoppingBag size={36} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900">Portal Pembeli</h2>
              <p className="text-xs text-stone-400 leading-relaxed px-4">
                Akses stok eksklusif, pantau harga grosir harian, dan kelola transaksi pesanan Anda.
              </p>
            </div>
            <Link href="/auth/login" className="w-full">
              <Button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold gap-2">
                Masuk sebagai Pembeli <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </Card>

        {/* Portal Petani (Coming Soon) */}
        <Card className="group p-10 rounded-[3rem] bg-white border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          {/* Label Coming Soon */}
          <div className="absolute top-6 right-6 bg-green-100 text-green-700 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Segera Hadir
          </div>

          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center shadow-inner group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
              <Sprout size={36} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900">Portal Petani</h2>
              <p className="text-xs text-stone-400 leading-relaxed px-4">
                Pasarkan hasil panen Anda langsung ke pengulak besar dan pantau tren permintaan pasar.
              </p>
            </div>
            <Link href="/auth/petani" className="w-full">
              <Button variant="outline" className="w-full h-14 border-stone-200 text-stone-500 rounded-2xl font-bold gap-2 hover:bg-stone-50 transition-all">
                Cek Fitur Petani
              </Button>
            </Link>
          </div>
        </Card>

      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-green-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
    </div>
  );
}