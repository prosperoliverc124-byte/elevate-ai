"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Globe, Command } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-10 pb-24 bg-[#03000a] overflow-hidden text-white font-sans">
      
      {/* 1. TOP STATUS BAR (Elite Detail) */}
      <nav className="w-full max-w-sm flex justify-between items-center mb-12 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] tracking-widest uppercase opacity-50">Systems Online</span>
        </div>
        <span className="text-[10px] tracking-widest uppercase opacity-50 font-bold">v1.0.4</span>
      </nav>

      {/* 2. THE HERO (Cinematic) */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 scale-150 animate-pulse" />
          <img src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" className="relative w-24 h-24 rounded-[28px] border border-white/20 shadow-2xl" alt="Elevate" />
        </div>
        <h1 className="text-6xl font-black tracking-tighter mb-4 leading-none">ELEVATE<span className="text-cyan-400">AI</span></h1>
        <p className="text-white/40 text-sm max-w-[280px] mx-auto leading-relaxed italic">"Beyond intelligence. Toward evolution."</p>
      </motion.div>

      {/* 3. LOGIN SECTION */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="w-full max-w-sm p-8 bg-white/5 border border-white/10 rounded-[35px] backdrop-blur-2xl mb-8 relative group overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <h2 className="text-center text-[10px] uppercase tracking-[0.4em] mb-8 text-white/30">Gateway Access</h2>
        <button className="w-full h-16 bg-white text-black rounded-[20px] font-black text-sm flex items-center justify-center gap-4 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="google" />
          SIGN IN WITH GOOGLE
        </button>
      </motion.div>

      {/* 4. THE "DETAIL" BENTO GRID (The Engine & Latency) */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        
        {/* Engine Box */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-[28px] flex flex-col gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shadow-[inset_0_0_10px_rgba(168,85,247,0.2)]">
            <Cpu size={18} className="text-purple-400" />
          </div>
          <div>
            <p className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Neural Engine</p>
            <p className="text-sm font-bold tracking-tight">Quantum L4</p>
          </div>
        </div>

        {/* Speed Box */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-[28px] flex flex-col gap-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[inset_0_0_10px_rgba(6,182,212,0.2)]">
            <Zap size={18} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Response</p>
            <p className="text-sm font-bold tracking-tight">12ms Core</p>
          </div>
        </div>

        {/* Security Box (Full Width) */}
        <div className="col-span-2 p-6 bg-white/5 border border-white/10 rounded-[28px] flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Shield size={22} className="text-white/80" />
          </div>
          <div>
            <p className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Encryption</p>
            <p className="text-sm font-bold tracking-tight text-white/80">Military-Grade AES 256</p>
          </div>
        </div>
      </div>

    </main>
  );
  }
