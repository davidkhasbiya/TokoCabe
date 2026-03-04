"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/ai-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, TrendingUp, Sparkles, AlertCircle } from "lucide-react";

export default function PantauStokPage() {
  return (
    <div className="space-y-8">
      {/* Header Halaman */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-950">Pantau <span className="text-red-600">Stok & Harga</span></h1>
          <p className="text-stone-500 text-sm">Analisis AI untuk membantu Anda belanja lebih hemat.</p>
        </div>
        <Badge className="bg-red-50 text-red-600 border-red-100 px-4 py-2 rounded-full flex gap-2">
          <Sparkles size={14} /> AI Analysis Active
        </Badge>
      </div>

      {/* Bar Pencarian Sourcing */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          <Input placeholder="Cari jenis cabai (ex: Rawit Merah)..." className="pl-12 h-14 rounded-2xl border-stone-200 shadow-sm" />
        </div>
        <Button className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white rounded-2xl">
          Cari Stok Terbaik
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri: AI Sourcing Assistant (Rekomendasi Lokasi) */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-bold text-stone-800 flex items-center gap-2">
            <MapPin size={18} className="text-red-600" /> Rekomendasi Sourcing Hari Ini
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { lokasi: "Kediri, Jatim", produk: "Rawit Merah", harga: "42.000", grade: "A", stok: "5 Ton" },
              { lokasi: "Cianjur, Jabar", produk: "Keriting Merah", harga: "31.500", grade: "A-", stok: "3 Ton" }
            ].map((item, i) => (
              <Card key={i} className="p-5 border-stone-200 rounded-3xl hover:border-red-300 transition-all cursor-pointer group">
                <div className="flex justify-between mb-4">
                  <Badge className="bg-stone-100 text-stone-600">Grade {item.grade}</Badge>
                  <span className="text-xs font-bold text-green-700 uppercase">Tersedia: {item.stok}</span>
                </div>
                <h4 className="text-xl font-bold text-stone-900 group-hover:text-red-600 transition-colors">{item.produk}</h4>
                <p className="text-stone-500 text-sm flex items-center gap-1 mt-1">
                  <MapPin size={14} /> {item.lokasi}
                </p>
                <div className="mt-6 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase font-bold">Harga Grosir</p>
                    <p className="text-2xl font-bold text-stone-950">Rp {item.harga}<span className="text-sm font-normal text-stone-500">/kg</span></p>
                  </div>
                  <Button variant="outline" className="rounded-xl border-red-100 text-red-600 hover:bg-red-50">Detail</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: AI Price Predictor (Ramalan Harga) */}
        <div className="space-y-6">
          <h3 className="font-bold text-stone-800 flex items-center gap-2">
            <TrendingUp size={18} className="text-red-600" /> Prediksi Harga Mingguan
          </h3>
          
          <Card className="p-6 bg-stone-900 text-white border-none rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600 rounded-lg">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-red-400 uppercase font-bold tracking-widest">Tren Rawit Merah</p>
                  <p className="text-lg font-bold">Akan Naik +12%</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Sekarang</span>
                  <span>Minggu Depan (Est.)</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[70%]" />
                </div>
                <p className="text-[11px] text-stone-400 italic leading-relaxed">
                  "AI memprediksi lonjakan harga karena curah hujan tinggi di sentra produksi Jawa Timur."
                </p>
              </div>

              <Button className="w-full bg-white text-stone-900 hover:bg-stone-200 rounded-xl font-bold">
                Borong Sekarang
              </Button>
            </div>
          </Card>

          <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex gap-3">
            <AlertCircle className="text-red-600 shrink-0" size={20} />
            <p className="text-[11px] text-red-800 leading-tight">
              <strong>Sourcing Tip:</strong> Stok di Cianjur diprediksi habis dalam 48 jam. Segera amankan kuota Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}