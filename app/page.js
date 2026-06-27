"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Cpu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden">
      {/* Visual Foundations */}
      <div className="aurora-bg" />
      <div className="noise" />

      {/* 1. ULTRA-MINIMAL NAV */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl flex justify-between items-center py-8"
      >
        <div className="flex items-center gap-2">
          <img src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" className="w-8 h-8 rounded-lg" alt="Logo" />
          <span className="font-bold tracking-tighter text-lg uppercase">Elevate</span>
        </div>
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-white/50">
          Beta v1.0
        </div>
      </motion.nav>

      {/* 2. CINEMATIC HERO */}
      <section className="flex flex-col items-center pt-12 pb-20 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img 
            src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" 
            className="w-32 h-32 rounded-[40px] shadow-[0_0_50px_rgba(50,0,168,0.3)] border border-white/20"
            alt="Hero Logo"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[14vw] md:text-8xl font-black tracking-tighter leading-[0.85] hero-gradient mb-6"
        >
          INTELLIGENCE <br /> EVOLVED.
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/40 text-lg md:text-xl max-w-md font-light leading-relaxed mb-10"
        >
          Experience the world's most sophisticated AI, wrapped in a high-performance interface.
        </motion.p>

        {/* 3. PREMIUM ACTION AREA */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-md p-2 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-3xl"
        >
          <button className="w-full group relative flex items-center justify-between bg-white text-black h-16 px-8 rounded-[24px] font-bold transition-transform active:scale-95">
            <span>START ELEVATING</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* 4. THE BENTO GRID (REFINED) */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
        
        <div className="premium-card p-8 col-span-1 md:col-span-2 flex flex-col justify-between min-h-[240px]">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Cpu className="text-indigo-400" />
            </div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Active</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">Neural Engine L4</h3>
            <p className="text-white/40 text-sm">Processing 4.2 trillion parameters per second with zero-shot logic.</p>
          </div>
        </div>

        <div className="premium-card p-8 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            <Zap className="text-cyan-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">12ms</h3>
            <p className="text-white/40 text-sm">Real-time response latency.</p>
          </div>
        </div>

      </section>

      {/* Floating Ambient Label */}
      <div className="fixed bottom-10 left-10 hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
          <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-bold">Encrypted Connection</span>
        </div>
      </div>
    </main>
  );
              }
