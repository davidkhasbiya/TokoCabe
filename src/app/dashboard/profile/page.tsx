"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/ai-badge";
import { User, MapPin, Building2, ShieldCheck, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    // Gunakan mx-auto untuk memastikan container berada di tengah layar
    <div className="max-w-5xl mx-auto space-y-10">
      
      {/* Header Profil - Dibuat Flex Center agar Seimbang */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[2.5rem] border border-stone-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-24 h-24 bg-red-50 rounded-[2rem] flex items-center justify-center text-red-600 shadow-inner">
            <User size={48} />
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold text-stone-950">Profil Mitra</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <Badge className="bg-green-100 text-green-700 border-none px-3">Terverifikasi</Badge>
              <span className="text-stone-400 text-xs font-bold tracking-widest">ID: MTR-99281</span>
            </div>
          </div>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-2xl gap-2 px-8 h-12 shadow-lg shadow-red-200">
          <Save size={18} /> Simpan Perubahan
        </Button>
      </div>

      {/* Grid Konten - Menggunakan gap yang konsisten */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Data Perusahaan */}
        <Card className="p-8 border-stone-200 rounded-[2.5rem] bg-white shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-bold text-stone-800 border-b border-stone-50 pb-4">
              <div className="p-2 bg-stone-100 rounded-lg text-red-600"><Building2 size={20} /></div>
              <h3>Data Perusahaan / Pengulak</h3>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Nama Bisnis</label>
                <Input defaultValue="CV. Cabai Jaya" className="rounded-xl border-stone-100 bg-stone-50/50 focus:bg-white h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Penanggung Jawab</label>
                <Input defaultValue="Budi Santoso" className="rounded-xl border-stone-100 bg-stone-50/50 focus:bg-white h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Email</label>
                <Input defaultValue="budi@cabaijaya.com" className="rounded-xl border-stone-100 bg-stone-50/50 focus:bg-white h-12" />
              </div>
            </div>
          </div>
        </Card>

        {/* Lokasi Gudang */}
        <Card className="p-8 border-stone-200 rounded-[2.5rem] bg-white shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-bold text-stone-800 border-b border-stone-50 pb-4">
              <div className="p-2 bg-stone-100 rounded-lg text-red-600"><MapPin size={20} /></div>
              <h3>Lokasi Gudang Utama</h3>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Provinsi</label>
                <Input defaultValue="DKI Jakarta" className="rounded-xl border-stone-100 bg-stone-50/50 focus:bg-white h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest">Alamat Lengkap</label>
                <textarea 
                  className="w-full min-h-[125px] p-4 rounded-xl border border-stone-100 bg-stone-50/50 focus:bg-white text-sm transition-all focus:ring-2 focus:ring-red-500/10 outline-none"
                  defaultValue="Jl. Pasar Induk Kramat Jati No. 12, Blok C, Jakarta Timur."
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Status Premium - Centered Footer Card */}
        <Card className="lg:col-span-2 p-8 bg-stone-950 text-white rounded-[2.5rem] border-none shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="p-4 bg-white/10 rounded-2xl text-green-400">
                <ShieldCheck size={32} />
              </div>
              <div>
                <p className="text-xl font-bold">Keanggotaan Premium</p>
                <p className="text-sm text-stone-400 max-w-md">Nikmati prioritas stok dari petani terpilih dan potongan harga khusus setiap transaksi.</p>
              </div>
            </div>
            <Button className="bg-white text-stone-900 hover:bg-stone-200 rounded-xl font-bold px-8 h-12">
              Lihat Keuntungan
            </Button>
          </div>
          {/* Aksen Dekoratif */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        </Card>
      </div>
    </div>
  );
}