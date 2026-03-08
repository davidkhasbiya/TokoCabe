"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, CreditCard, ChevronLeft, Wallet, Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const [showSuccess, setShowSuccess] = useState(false); // 2. State notifikasi

  const handleBayar = () => {
    // Di sini kamu bisa memanggil API pembayaran
    setShowSuccess(true); // 3. Set jadi true setelah "bayar"
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <Link href=" /dashboard/riset/" className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-all font-bold text-xs uppercase tracking-widest">
        <ChevronLeft size={16} /> Kembali Belanja
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm italic">1</span>
              Alamat Pengiriman
            </h2>
            <Card className="p-8 border-none rounded-[2.5rem] bg-stone-50/50 shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <MapPin className="text-red-600 shrink-0" size={20} />
                  <div>
                    <p className="font-bold">Gudang Utama - Budi Santoso</p>
                    <p className="text-sm text-stone-500 leading-relaxed">Jl. Industri No. 45, Kawasan Pergudangan Jaya, Jakarta Pusat, 10110</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-xl text-xs font-bold border-stone-200">Ubah Alamat</Button>
              </div>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif font-bold flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm italic">2</span>
              Metode Pembayaran
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border-2 border-red-600 rounded-[2rem] bg-red-50/50 flex flex-col items-center gap-3 text-center cursor-pointer">
                <Landmark size={24} className="text-red-600" />
                <p className="text-sm font-bold">Transfer Bank (VA)</p>
              </div>
              <div className="p-6 border border-stone-100 rounded-[2rem] hover:border-red-200 flex flex-col items-center gap-3 text-center cursor-pointer transition-all">
                <Wallet size={24} className="text-stone-400" />
                <p className="text-sm font-bold text-stone-600">E-Wallet / QRIS</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <Card className="p-8 border-none rounded-[3rem] bg-stone-950 text-white shadow-2xl sticky top-8">
            <h3 className="text-xl font-serif font-bold mb-6">Ringkasan Pesanan</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm text-stone-400"><span>2 Produk (1.5 Ton)</span><span>Rp 50jt</span></div>
              <div className="flex justify-between text-sm text-stone-400"><span>Ongkos Kirim</span><span>Rp 400rb</span></div>
              <div className="pt-4 border-t border-stone-800 flex justify-between font-bold text-xl">
                <span>Total</span><span className="text-red-500">Rp 50.4jt</span>
              </div>
            </div>

            {/* 4. Tampilkan Notifikasi Overlay (Opsional) */}
            {showSuccess && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="bg-white p-8 rounded-[2rem] text-center shadow-2xl">
                  <h2 className="text-2xl font-bold text-red-600">Checkout Berhasil!</h2>
                  <p className="text-stone-600 mt-2">Terima kasih telah berbelanja.</p>
                  <Button onClick={() => setShowSuccess(false)} className="mt-6 w-full rounded-xl">
                    Tutup
                  </Button>
                </div>
              </div>
            )}
            <Button
              onClick={handleBayar} // 5. Pasang fungsi di sini
              className="w-full h-16 bg-red-600 hover:bg-red-700 text-white rounded-[1.5rem] font-bold text-lg ..."
            >
              Bayar Pesanan
            </Button>
            <p className="text-[10px] text-center text-stone-500 mt-6 uppercase tracking-widest font-bold">
              Transaksi Aman & Terenkripsi
            </p>
          </Card>
        </aside>
      </div>
    </div>
  );
}