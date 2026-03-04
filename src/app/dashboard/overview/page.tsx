"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Package, TrendingUp } from "lucide-react";

// Komponen Counter yang lebih stabil
const Counter = ({ target, duration = 1500 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration]);

  // Mencegah error hydration dengan memastikan konten hanya muncul di client
  if (!mounted) return <span>0</span>;

  return <span>{count.toLocaleString()}</span>;
};

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-serif font-bold text-stone-950 text-red-600">Dashboard Pengulak</h1>
        <p className="text-stone-500 text-sm italic">Selamat datang kembali, Mitra Grosir Cabai.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card className="p-8 border-stone-200 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Total Pesanan</p>
              <h2 className="text-5xl font-bold text-stone-900 mt-2">
                <Counter target={12} />
              </h2>
            </div>
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl group-hover:scale-110 transition-transform">
              <ShoppingCart size={24} />
            </div>
          </div>
          <p className="text-xs text-stone-400">Bulan ini</p>
        </Card>

        {/* Card 2 */}
        <Card className="p-8 border-stone-200 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Stok Dipantau</p>
              <h2 className="text-5xl font-bold text-stone-900 mt-2">
                <Counter target={5} /><span className="text-2xl ml-1 font-medium">Ton</span>
              </h2>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
              <Package size={24} />
            </div>
          </div>
          <p className="text-xs text-stone-400">Dari 3 Daerah</p>
        </Card>

        {/* Card 3 */}
        <Card className="p-8 border-stone-200 rounded-[2.5rem] bg-white shadow-sm hover:shadow-xl transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Pengeluaran</p>
              <h2 className="text-4xl font-bold text-stone-900 mt-2 leading-tight">
                Rp <Counter target={120} /> <span className="text-xl">jt</span>
              </h2>
            </div>
            <div className="p-3 bg-stone-100 text-stone-600 rounded-2xl group-hover:scale-110 transition-transform">
              <TrendingUp size={24} />
            </div>
          </div>
          <p className="text-xs text-stone-400">Estimasi bulanan</p>
        </Card>
      </div>
      
      {/* Jangan lupa tambahkan tabel di sini agar tidak kosong di bawahnya */}
      {/* Tabel Pesanan Terbaru */}
      <Card className="p-8 border-stone-200 rounded-[2.5rem] bg-white shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-xl text-stone-900">Pesanan Terbaru</h3>
          <button className="text-xs font-bold text-stone-400 hover:text-red-600 border border-stone-200 px-4 py-2 rounded-xl transition-all">
            Lihat Semua
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-stone-400 border-b border-stone-50">
                <th className="pb-4 font-bold">ID Pesanan</th>
                <th className="pb-4 font-bold">Produk</th>
                <th className="pb-4 font-bold">Tonase</th>
                <th className="pb-4 font-bold">Asal</th>
                <th className="pb-4 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: "ORD-001", produk: "Rawit Merah", tonase: "500kg", asal: "Kediri", status: "Dikirim" },
                { id: "ORD-002", produk: "Keriting Merah", tonase: "1 Ton", asal: "Cianjur", status: "Proses" },
                { id: "ORD-003", produk: "Hijau Besar", tonase: "300kg", asal: "Malang", status: "Selesai" },
              ].map((order, i) => (
                <tr key={i} className="group hover:bg-stone-50/50 transition-colors">
                  <td className="py-5 font-bold text-red-600">{order.id}</td>
                  <td className="py-5 text-stone-900 font-medium">{order.produk}</td>
                  <td className="py-5 text-stone-600">{order.tonase}</td>
                  <td className="py-5 text-stone-500 flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-stone-300" /> {order.asal}
                  </td>
                  <td className="py-5 text-right">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === 'Dikirim' ? 'bg-green-100 text-green-700' : 
                      order.status === 'Proses' ? 'bg-amber-100 text-amber-700' : 
                      'bg-stone-100 text-stone-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}