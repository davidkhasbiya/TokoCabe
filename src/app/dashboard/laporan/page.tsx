"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/ai-badge";
import { Input } from "@/components/ui/input";
import { 
  TrendingDown, TrendingUp, Minus, 
  Calendar, MapPin, Search, Filter 
} from "lucide-react";

export default function LaporanHargaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const dataHarga = [
    { produk: "Rawit Merah", harga: "42.000", tren: "turun", selisih: "-2.000", wilayah: "Kediri, Jatim" },
    { produk: "Merah Keriting", harga: "31.500", tren: "naik", selisih: "+1.500", wilayah: "Cianjur, Jabar" },
    { produk: "Hijau Besar", harga: "22.000", tren: "stabil", selisih: "0", wilayah: "Brebes, Jateng" },
    { produk: "Rawit Hijau", harga: "28.000", tren: "naik", selisih: "+500", wilayah: "Magelang, Jateng" },
    { produk: "Cabai Keriting", harga: "33.000", tren: "turun", selisih: "-1.000", wilayah: "Medan, Sumut" },
    { produk: "Cabai Gendot", harga: "45.000", tren: "naik", selisih: "+2.000", wilayah: "Bandung, Jabar" },
  ];

  // Fungsi filter sederhana untuk Frontend
  const filteredData = dataHarga.filter(item => 
    item.wilayah.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.produk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-950 text-red-600">Laporan Harga Harian</h1>
          <p className="text-stone-500 text-sm flex items-center gap-2 mt-1">
            <Calendar size={14} /> Update terakhir: 4 Maret 2026, 06:00 WIB
          </p>
        </div>

        <div className="flex flex-1 max-w-2xl gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <Input 
              placeholder="Cari wilayah atau jenis cabai..." 
              className="pl-12 h-12 rounded-2xl border-stone-200 bg-white shadow-sm focus:ring-red-600/20"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="h-12 px-5 bg-stone-900 text-white rounded-2xl flex items-center gap-2 hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
            <Filter size={18} />
            <span className="text-sm font-bold hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* Grid Harga Cabai */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <Card key={i} className="p-6 border-stone-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${
                  item.tren === 'naik' ? 'bg-red-50 text-red-600' : 
                  item.tren === 'turun' ? 'bg-green-50 text-green-700' : 
                  'bg-stone-50 text-stone-400'
                }`}>
                  {item.tren === 'naik' ? <TrendingUp size={20} /> : 
                   item.tren === 'turun' ? <TrendingDown size={20} /> : 
                   <Minus size={20} />}
                </div>
                <Badge className={`border-none text-[10px] font-bold ${
                  item.tren === 'naik' ? 'bg-red-100 text-red-700' : 
                  item.tren === 'turun' ? 'bg-green-100 text-green-700' : 
                  'bg-stone-100 text-stone-500'
                }`}>
                  {item.selisih}
                </Badge>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-stone-900 group-hover:text-red-600 transition-colors">{item.produk}</h4>
                <p className="text-[10px] text-stone-400 flex items-center gap-1 uppercase tracking-widest font-bold">
                  <MapPin size={10} className="text-red-600" /> {item.wilayah}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-50">
                <p className="text-2xl font-bold text-stone-950">
                  Rp {item.harga}
                  <span className="text-xs font-normal text-stone-400 ml-1">/kg</span>
                </p>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-stone-400 italic">Data wilayah tidak ditemukan...</p>
          </div>
        )}
      </div>
    </div>
  );
}