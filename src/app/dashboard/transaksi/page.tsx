"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/ai-badge";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle2, Clock } from "lucide-react";

export default function RiwayatPesananPage() {
  const transaksi = [
    { id: "ORD-7721", tgl: "03 Mar 2026", produk: "Rawit Merah", total: "250kg", status: "Dikirim", ikon: <Truck size={18} /> },
    { id: "ORD-7719", tgl: "01 Mar 2026", produk: "Keriting Merah", total: "500kg", status: "Selesai", ikon: <CheckCircle2 size={18} /> },
    { id: "ORD-7715", tgl: "28 Feb 2026", produk: "Rawit Hijau", total: "100kg", status: "Pending", ikon: <Clock size={18} /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-stone-950">Riwayat <span className="text-red-600">Pesanan</span></h1>
        <p className="text-stone-500 text-sm">Pantau status pengiriman stok cabai Anda.</p>
      </div>

      <div className="space-y-4">
        {transaksi.map((item, i) => (
          <Card key={i} className="p-6 border-stone-200 rounded-[2rem] bg-white overflow-hidden relative">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-stone-100 rounded-2xl text-stone-600">
                  <Package size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{item.produk} - {item.total}</h4>
                  <p className="text-xs text-stone-400">ID Pesanan: {item.id} • {item.tgl}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge className={`flex gap-2 py-1.5 px-4 rounded-full border-none ${
                  item.status === 'Selesai' ? 'bg-green-100 text-green-700' : 
                  item.status === 'Dikirim' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {item.ikon} {item.status}
                </Badge>
                <Button variant="outline" className="rounded-xl border-stone-200">Detail Nota</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}