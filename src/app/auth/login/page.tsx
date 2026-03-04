"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulasi login berhasil langsung ke dashboard pembeli
        router.push("/dashboard/overview");
    };

    return (
        <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
            {/* Tombol Kembali ke Landing Page */}
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-stone-500 hover:text-red-600 transition-colors">
                <ArrowLeft size={20} />
                <span>Kembali ke Katalog</span>
            </Link>

            <Card className="w-full max-w-md p-8 border-stone-200 shadow-2xl rounded-3xl bg-white">
                <div className="space-y-6">
                    <div className="text-center space-y-2">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                                <ShoppingBag size={32} />
                            </div>
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-stone-950">
                            Portal <span className="text-red-600">Pembeli</span>
                        </h1>
                        <p className="text-stone-500 text-sm">
                            Masuk untuk akses stok eksklusif dan harga grosir harian.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400">ID Mitra / Email</label>
                            <Input
                                type="email"
                                placeholder="pengulak@mitra.com"
                                className="rounded-xl border-stone-200 focus:border-red-600 h-12"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Kata Sandi</label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                className="rounded-xl border-stone-200 focus:border-red-600 h-12"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl shadow-lg shadow-red-600/20 mt-4 transition-all active:scale-95">
                            Masuk ke Panel Pembeli
                        </Button>
                    </form>

                    <div className="text-center pt-4 border-t border-stone-100">
                        <p className="text-sm text-stone-500">
                            Belum terdaftar sebagai mitra pengulak? <br />
                            <Link href="#" className="text-green-700 font-bold hover:underline">Ajukan Kemitraan</Link>
                        </p>
                        {/* Pesan Coming Soon untuk Penjual */}
                        <p className="text-sm text-stone-400">
                            Portal Penjual (Petani) - <Link href="/auth/petani" className="text-red-600 font-bold hover:underline">Segera Hadir</Link>
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}