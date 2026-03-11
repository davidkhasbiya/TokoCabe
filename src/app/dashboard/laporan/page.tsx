"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TrendingDown, TrendingUp, Calendar, Search, ArrowUpRight, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

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

  const filteredData = dataHarga.filter((item) => 
    item.produk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.wilayah.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header & Market Pulse */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Rata-rata Harga", val: "Rp 32.500", sub: "Stabil (+0.2%)" },
          { title: "Komoditas Top", val: "Rawit Merah", sub: "Naik 4.8% hari ini" },
          { title: "Volume Stok", val: "1.250 Ton", sub: "Tersedia di 12 titik" }
        ].map((item, i) => (
          <Card key={i} className="p-6 rounded-[2rem] border-none shadow-xl shadow-stone-100 bg-stone-950 text-white">
            <p className="text-stone-400 text-[10px] uppercase font-bold tracking-widest mb-2">{item.title}</p>
            <h3 className="text-2xl font-bold">{item.val}</h3>
            <p className="text-emerald-400 text-xs mt-2 flex items-center gap-1 font-bold"><ArrowUpRight size={14} />{item.sub}</p>
          </Card>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-3xl border border-stone-100 shadow-sm flex items-center gap-4">
        <Search className="text-stone-400 ml-2" size={20} />
        <Input 
          placeholder="Cari komoditas atau daerah (Contoh: Rawit, Cianjur)..." 
          className="h-12 border-none text-lg focus-visible:ring-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dynamic Data Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredData.length > 0 ? (
            filteredData.map((item, i) => (
              <motion.div 
                key={item.produk}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all flex items-center justify-between group"
              >
                <div className="flex gap-4 items-center">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-colors", 
                    item.tren === 'naik' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700')}>
                    {item.tren === 'naik' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 group-hover:text-red-600 transition-colors">{item.produk}</p>
                    <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{item.wilayah}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-lg text-stone-950">Rp {item.harga}</p>
                  <p className={cn("text-xs font-bold", item.tren === 'naik' ? 'text-red-600' : 'text-green-600')}>{item.selisih}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div className="col-span-full py-20 flex flex-col items-center justify-center text-stone-400">
              <Inbox size={48} className="mb-4 opacity-50" />
              <p className="italic">Data tidak ditemukan untuk "{searchTerm}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}