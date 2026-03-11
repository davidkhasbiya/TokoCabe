"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/ai-badge";
import { 
  User, MapPin, Building2, ShieldCheck, Save, 
  Bell, Lock, CreditCard, LogOut, Camera, ChevronRight,
  Plus, Trash2, Smartphone, Globe
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Profil");
  const [isSaving, setIsSaving] = useState(false);

  const sidebarMenu = [
    { name: "Profil", icon: <User size={20} /> },
    { name: "Keamanan", icon: <Lock size={20} /> },
    { name: "Alamat Gudang", icon: <MapPin size={20} /> },
    { name: "Pembayaran", icon: <CreditCard size={20} /> },
    { name: "Notifikasi", icon: <Bell size={20} /> },
  ];

  // Fungsi Mockup Simpan
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Perubahan berhasil disimpan ke server!");
    }, 1000);
  };

  // RENDERER KONTEN DINAMIS
  const renderContent = () => {
    switch (activeTab) {
      case "Profil":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <Card className="p-8 border-none rounded-[3rem] bg-white shadow-xl shadow-stone-200/40">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Building2 size={20} className="text-red-600"/> Informasi Bisnis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest ml-1">Nama Bisnis</label>
                  <Input defaultValue="CV. Cabai Jaya" className="rounded-2xl border-stone-100 bg-stone-50/50 h-14" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest ml-1">NIB (Nomor Izin Usaha)</label>
                  <Input defaultValue="912000123456" className="rounded-2xl border-stone-100 bg-stone-50/50 h-14" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase text-stone-400 tracking-widest ml-1">Bio Bisnis</label>
                  <Input defaultValue="Penyedia cabai segar kualitas ekspor sejak 2015." className="rounded-2xl border-stone-100 bg-stone-50/50 h-14" />
                </div>
              </div>
            </Card>
          </motion.div>
        );

      case "Keamanan":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <Card className="p-8 border-none rounded-[3rem] bg-white shadow-xl shadow-stone-200/40">
              <h3 className="text-lg font-bold mb-6">Autentikasi Dua Faktor (2FA)</h3>
              <div className="flex items-center justify-between p-6 bg-green-50 rounded-3xl border border-green-100">
                <div className="flex gap-4">
                  <Smartphone className="text-green-600" />
                  <div>
                    <p className="font-bold text-green-900">SMS Verification Aktif</p>
                    <p className="text-xs text-green-700">+62 812 **** 7890</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-xl border-green-200 text-green-700 font-bold">Ubah</Button>
              </div>
            </Card>
          </motion.div>
        );

      case "Alamat Gudang":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex justify-between items-center px-4">
              <h3 className="text-xl font-bold">Daftar Gudang</h3>
              <Button onClick={() => alert("Fitur Tambah Gudang")} className="rounded-2xl bg-stone-900 gap-2"><Plus size={18}/> Tambah</Button>
            </div>
            <Card className="p-6 border-none rounded-[2.5rem] bg-white shadow-lg flex justify-between items-center group hover:border-red-500 border-2 border-transparent transition-all">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600"><MapPin size={24}/></div>
                <div>
                  <p className="font-bold">Gudang Kramat Jati</p>
                  <p className="text-sm text-stone-400">Jakarta Timur, DKI Jakarta</p>
                </div>
              </div>
              <Badge className="bg-red-600 text-white">Utama</Badge>
            </Card>
          </motion.div>
        );

      case "Pembayaran":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="h-48 rounded-[2rem] bg-gradient-to-br from-stone-800 to-stone-950 p-8 text-white relative overflow-hidden shadow-2xl">
                  <div className="flex justify-between items-start">
                    <CreditCard size={32} />
                    <p className="font-bold italic text-xl">VISA</p>
                  </div>
                  <div className="mt-10">
                    <p className="text-lg tracking-[0.2em] font-mono">**** **** **** 8890</p>
                    <p className="text-xs text-stone-400 mt-2 uppercase">Budi Santoso</p>
                  </div>
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
               </div>
               <button onClick={() => alert("Tambah kartu baru")} className="h-48 rounded-[2rem] border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 hover:bg-stone-50 transition-all">
                  <Plus size={32} className="mb-2" />
                  <p className="font-bold">Tambah Metode</p>
               </button>
            </div>
          </motion.div>
        );

      case "Notifikasi":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            {[
              "Update Harga Harian", "Status Pengiriman", "Promo & Keuntungan", "Keamanan Akun"
            ].map((label, i) => (
              <Card key={i} className="p-6 border-none rounded-3xl bg-white shadow-sm flex items-center justify-between">
                <p className="font-bold text-stone-700">{label}</p>
                <div className="w-12 h-6 bg-red-600 rounded-full relative p-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                </div>
              </Card>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-4 md:p-8 animate-in fade-in duration-700">
      
      {/* SIDEBAR */}
      <aside className="w-full lg:w-80 space-y-6">
        <div className="bg-white p-8 rounded-[3rem] border border-stone-100 shadow-xl shadow-stone-200/40">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-red-600 rounded-[2.5rem] flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-red-200">
                B
              </div>
              <button onClick={() => alert("Ganti Foto")} className="absolute -bottom-1 -right-1 bg-stone-950 text-white p-2.5 rounded-2xl border-4 border-white hover:scale-110 transition-transform">
                <Camera size={16} />
              </button>
            </div>
            <h2 className="font-black text-xl text-stone-900">Budi Santoso</h2>
            <Badge className="bg-green-100 text-green-700 border-none mt-2 px-4 py-1">Premium Partner</Badge>
          </div>

          <nav className="space-y-2">
            {sidebarMenu.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold text-sm transition-all ${
                  activeTab === item.name 
                  ? "bg-stone-950 text-white shadow-xl translate-x-2" 
                  : "text-stone-400 hover:bg-stone-50 hover:text-stone-900"
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>

          <button onClick={() => alert("Log out...")} className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-400 font-bold text-sm mt-8 border-t border-stone-50 hover:bg-red-50 transition-all">
            <LogOut size={20} /> Keluar
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-5xl font-serif font-black text-stone-950 tracking-tight">{activeTab}</h1>
            <p className="text-stone-400 mt-2 font-medium">Pengaturan akun & sistem marketplace Anda.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="ghost" className="font-bold text-stone-400 hover:text-stone-900">Reset</Button>
             <Button 
              disabled={isSaving}
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-700 text-white rounded-[1.5rem] px-10 h-14 font-bold shadow-2xl shadow-red-200 flex gap-2"
             >
               {isSaving ? "Menyimpan..." : <><Save size={20} /> Simpan Perubahan</>}
             </Button>
          </div>
        </div>

        {/* Dynamic Area */}
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
}