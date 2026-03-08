"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/ai-badge";
import { Button } from "@/components/ui/button";
import { 
  Package, Truck, CheckCircle2, 
  Clock, ChevronRight, FileText, Search 
} from "lucide-react";

export default function RiwayatPesananPage() {
  const [activeTab, setActiveTab] = useState("Semua");

  const orders = [
    {
      id: "TRX-99012",
      tgl: "08 Mar 2026",
      produk: "Rawit Merah Presto",
      total: "Rp 50.400.000",
      status: "Dikirim",
      kurir: "Mitra Logistik - AG 1234 XX",
      estimasi: "Tiba dalam 4 jam",
      color: "bg-blue-500"
    },
    {
      id: "TRX-98955",
      tgl: "05 Mar 2026",
      produk: "Cabai Hijau Besar",
      total: "Rp 12.000.000",
      status: "Selesai",
      kurir: "Self Pickup",
      estimasi: "Diterima oleh Budi",
      color: "bg-green-600"
    },
    {
      id: "TRX-98821",
      tgl: "01 Mar 2026",
      produk: "Cabai Keriting",
      total: "Rp 25.500.000",
      status: "Diproses",
      kurir: "Menunggu Penjemputan",
      estimasi: "-",
      color: "bg-orange-500"
    }
  ];

  const tabs = ["Semua", "Diproses", "Dikirim", "Selesai", "Dibatalkan"];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-serif font-bold text-stone-950">Riwayat Pesanan</h1>
        <p className="text-stone-500 text-sm mt-1">Pantau status distribusi komoditas kamu secara real-time.</p>
      </div>

      {/* Tabs Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === tab 
              ? "bg-stone-950 text-white shadow-lg" 
              : "bg-white text-stone-400 hover:bg-stone-50 border border-stone-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Order List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <Card key={order.id} className="p-0 overflow-hidden border-none rounded-[2.5rem] bg-white shadow-xl shadow-stone-200/40">
            <div className="p-8">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${order.color} flex items-center justify-center text-white`}>
                    {order.status === "Dikirim" ? <Truck size={24} /> : order.status === "Selesai" ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest leading-none mb-1">{order.id}</p>
                    <h3 className="font-bold text-lg text-stone-900">{order.produk}</h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-stone-400 mb-1">{order.tgl}</p>
                  <Badge className={`${order.status === "Selesai" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"} border-none rounded-lg px-3`}>
                    {order.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-y border-stone-50">
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Total Transaksi</p>
                  <p className="font-bold text-xl text-stone-950">{order.total}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Logistik</p>
                  <p className="text-sm font-bold text-stone-700">{order.kurir}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Status Terakhir</p>
                  <p className="text-sm font-bold text-red-600">{order.estimasi}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Button variant="ghost" className="gap-2 text-stone-500 hover:text-stone-950 font-bold p-0">
                  <FileText size={18} /> Lihat Invoice
                </Button>
                <Button className="rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-950 px-6 font-bold gap-2">
                  Detail Pelacakan <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}