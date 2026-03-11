"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/ai-badge";
import { 
  User, Lock, Bell, Globe, Shield, 
  CreditCard, MapPin, Moon, Sun, 
  Smartphone, Mail, Save, ChevronRight, Eye
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profil");
  const [isSaving, setIsSaving] = useState(false);

  // Kategori Menu - Mewakili semua yang bisa diubah di web
  const menuCategories = [
    { id: "Profil", label: "Informasi Pribadi", icon: <User size={20} />, desc: "Nama, foto, dan bio publik" },
    { id: "Keamanan", label: "Login & Keamanan", icon: <Lock size={20} />, desc: "Password dan 2-faktor" },
    { id: "Notifikasi", label: "Pusat Notifikasi", icon: <Bell size={20} />, desc: "Email dan push alert" },
    { id: "Tampilan", label: "Tampilan & Bahasa", icon: <Globe size={20} />, desc: "Mode gelap dan bahasa" },
    { id: "Pembayaran", label: "Metode Pembayaran", icon: <CreditCard size={20} />, desc: "Kartu dan saldo" },
    { id: "Alamat", label: "Alamat & Distribusi", icon: <MapPin size={20} />, desc: "Lokasi gudang utama" },
    { id: "Privasi", label: "Privasi Data", icon: <Shield size={20} />, desc: "Kontrol visibilitas data" },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Pengaturan sistem berhasil diperbarui!");
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-10 animate-in fade-in duration-1000">
      
      {/* SIDEBAR - Navigasi Modular ala Marketplace Dunia */}
      <aside className="w-full lg:w-80 space-y-6">
        <div className="bg-white p-6 rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/40">
          <h2 className="text-xl font-black text-stone-900 px-4 mb-6 tracking-tight">System Settings</h2>
          <nav className="space-y-1">
            {menuCategories.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                  activeTab === item.id 
                  ? "bg-stone-950 text-white shadow-xl shadow-stone-300" 
                  : "text-stone-500 hover:bg-stone-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${activeTab === item.id ? "text-white" : "text-red-600"} transition-colors`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm leading-none">{item.label}</p>
                    <p className={`text-[10px] mt-1 opacity-60 ${activeTab === item.id ? "text-white" : "text-stone-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>

        {/* Support Card */}
        <div className="bg-red-50 p-6 rounded-[2.5rem] border border-red-100">
          <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Butuh Bantuan?</p>
          <p className="text-sm text-stone-600 leading-relaxed mb-4">Hubungi tim teknis kami jika Anda mengalami kesulitan dalam pengaturan akun.</p>
          <Button variant="link" className="p-0 text-red-600 font-bold h-auto">Buka Tiket Support →</Button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-serif font-black text-stone-950 tracking-tight">{activeTab}</h1>
            <p className="text-stone-400 text-sm font-medium mt-1 italic">Konfigurasikan sistem sesuai kebutuhan operasional Anda.</p>
          </div>
          <Button 
            disabled={isSaving}
            onClick={handleSave}
            className="bg-red-600 hover:bg-red-700 text-white rounded-2xl px-8 h-12 font-bold shadow-lg shadow-red-200 flex gap-2"
          >
            {isSaving ? "Menyimpan..." : <><Save size={18} /> Simpan Semua</>}
          </Button>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-8"
          >
            {/* RENDER KONTEN BERDASARKAN TAB */}
            {activeTab === "Profil" && (
              <Card className="p-8 border-none rounded-[3rem] bg-white shadow-xl shadow-stone-200/30">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                  <div className="relative">
                    <div className="w-24 h-24 bg-stone-100 rounded-[2rem] flex items-center justify-center text-stone-400 shadow-inner">
                      <User size={40} />
                    </div>
                    <button className="absolute -bottom-2 -right-2 bg-stone-950 text-white p-2 rounded-xl border-4 border-white"><Smartphone size={14}/></button>
                  </div>
                  <div className="flex-1 space-y-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest ml-1">Nama Lengkap</label>
                        <Input defaultValue="Budi Santoso" className="rounded-xl border-stone-100 bg-stone-50/50 focus:bg-white h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest ml-1">Username</label>
                        <Input defaultValue="@budicabai" className="rounded-xl border-stone-100 bg-stone-50/50 focus:bg-white h-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {activeTab === "Tampilan" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 border-none rounded-[3rem] bg-white shadow-lg cursor-pointer hover:ring-2 ring-red-500 transition-all">
                  <Sun className="text-red-600 mb-4" size={32} />
                  <h3 className="font-bold text-lg">Mode Terang</h3>
                  <p className="text-xs text-stone-400 mt-1">Standar tampilan bersih dan cerah.</p>
                </Card>
                <Card className="p-8 border-none rounded-[3rem] bg-stone-950 text-white shadow-lg cursor-pointer hover:ring-2 ring-red-500 transition-all">
                  <Moon className="text-red-400 mb-4" size={32} />
                  <h3 className="font-bold text-lg">Mode Gelap</h3>
                  <p className="text-xs text-stone-400 mt-1">Nyaman untuk mata di malam hari.</p>
                </Card>
                <Card className="p-8 border-none rounded-[3rem] bg-white shadow-lg md:col-span-2">
                   <h3 className="font-bold mb-4">Bahasa Aplikasi</h3>
                   <select className="w-full h-12 px-4 rounded-xl border border-stone-100 bg-stone-50 outline-none focus:ring-2 ring-red-500/20">
                      <option>Bahasa Indonesia</option>
                      <option>English (US)</option>
                      <option>Mandarin</option>
                   </select>
                </Card>
              </div>
            )}

            {activeTab === "Notifikasi" && (
              <Card className="p-8 border-none rounded-[3rem] bg-white shadow-xl shadow-stone-200/30">
                <div className="space-y-6">
                  {["Email Marketing", "Pesan dari Pembeli", "Update Stok", "Laporan Mingguan"].map((text) => (
                    <div key={text} className="flex items-center justify-between py-4 border-b border-stone-50 last:border-0">
                      <div>
                        <p className="font-bold text-stone-900">{text}</p>
                        <p className="text-xs text-stone-400">Terima pemberitahuan melalui email utama Anda.</p>
                      </div>
                      <div className="w-12 h-6 bg-red-600 rounded-full p-1 flex justify-end cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Tambahkan tab lain sesuai kebutuhan dengan pola yang sama */}
            {["Keamanan", "Pembayaran", "Alamat", "Privasi"].includes(activeTab) && (
              <div className="h-64 border-4 border-dashed border-stone-100 rounded-[3rem] flex flex-col items-center justify-center text-stone-300">
                 <Shield size={48} className="mb-4 opacity-20" />
                 <p className="font-bold italic">Modul ini sedang dikonfigurasi...</p>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}