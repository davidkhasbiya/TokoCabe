"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/ai-badge";
import { Button } from "@/components/ui/button";
import {
  Truck, CheckCircle2, Clock, ChevronRight,
  FileText, X, MapPin
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Definisi tipe data untuk TypeScript (Opsional tapi disarankan)
interface Order {
  id: string;
  tgl: string;
  produk: string;
  total: string;
  status: string;
  kurir: string;
  estimasi: string;
  color: string;
}

export default function RiwayatPesananPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  // PERBAIKAN 1: Gunakan useState untuk menyimpan pesanan yang dipilih
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const orders: Order[] = [
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

  // PERBAIKAN 2: Logika filter agar Tabs berfungsi
  const filteredOrders = orders.filter(order =>
    activeTab === "Semua" ? true : order.status === activeTab
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
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
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab
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
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
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

                <div className="mt-6 flex flex-wrap justify-between items-center pt-6 border-t border-stone-100 gap-4">
                  <div className="flex gap-2">
                    <Button variant="ghost" className="text-stone-500 font-bold hover:text-red-600 p-0 pr-4">
                      <FileText size={18} className="mr-2" /> Invoice
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    {/* TOMBOL DINAMIS: Hanya muncul jika status Dikirim */}
                    {order.status === "Dikirim" && (
                      <Button
                        onClick={() => {
                          if (confirm("Pastikan barang sudah diterima dengan baik. Konfirmasi pesanan selesai?")) {
                            alert("Terima kasih! Pesanan " + order.id + " berhasil diselesaikan.");
                            // Di sini Anda bisa memanggil API untuk update status ke database
                          }
                        }}
                        className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 font-bold shadow-lg shadow-emerald-200"
                      >
                        Konfirmasi Selesai
                      </Button>
                    )}

                    <Button
                      onClick={() => setSelectedOrder(order)}
                      className="rounded-2xl bg-stone-950 text-white px-6 font-bold hover:bg-stone-800"
                    >
                      Detail Pelacakan <ChevronRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="py-20 text-center text-stone-400 italic">Tidak ada pesanan dengan status ini.</div>
        )}
      </div>

      {/* PERBAIKAN 3: Modal menggunakan selectedOrder (state), bukan fungsi */}
      <AnimatePresence>
        {selectedOrder && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[3rem] w-full max-w-2xl p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedOrder(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-2 text-red-600">Pelacakan Pesanan</h2>
              <p className="text-stone-400 text-sm mb-6 uppercase font-bold tracking-widest">{selectedOrder.id}</p>

              {/* Mockup GPS */}
              <div className="w-full h-64 bg-stone-100 rounded-3xl mb-8 relative overflow-hidden border border-stone-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-red-600 p-3 rounded-full text-white shadow-xl shadow-red-500/40 animate-bounce">
                    <Truck size={24} />
                  </div>
                  <div className="bg-stone-950 text-white text-[10px] px-3 py-1.5 rounded-full mt-3 font-bold uppercase tracking-widest shadow-lg">Kurir dalam Perjalanan</div>
                </div>
                {/* Garis Rute Simpel */}
                <div className="absolute bottom-10 left-10 right-10 h-1 bg-stone-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    className="h-full bg-red-600"
                  />
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-6 ml-2">
                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-red-600 mt-1.5 shadow-lg shadow-red-500/50" />
                  <div>
                    <p className="font-bold text-stone-900">Pesanan Sedang Dikirim</p>
                    <p className="text-xs text-stone-500">{selectedOrder.tgl} - 10:45 WIB</p>
                  </div>
                </div>
                <div className="h-10 border-l-2 border-dashed border-stone-200 ml-1.5" />
                <div className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-stone-200 mt-1.5" />
                  <div>
                    <p className="font-bold text-stone-300 italic">Pesanan Diserahkan ke Kurir</p>
                    <p className="text-xs text-stone-300">Gudang Utama Kediri</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}