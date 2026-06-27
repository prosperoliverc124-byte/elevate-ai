"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center px-6 pt-20">
      <div className="mesh-bg" />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <img 
          src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" 
          className="w-20 h-20 rounded-[22px] shadow-2xl mb-6 border border-white/20"
          alt="Elevate Logo"
        />
        <h1 className="text-6xl font-black tracking-tighter text-white mb-2">
          ELEVATE<span className="text-secondary">AI</span>
        </h1>
        <p className="text-lg text-white/50 max-w-sm font-light leading-relaxed">
          The most powerful intelligence, designed for those who want more.
        </p>
      </motion.div>

      {/* Login Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-card p-10 w-full max-w-md flex flex-col items-center border border-white/10"
      >
        <h2 className="text-xl font-semibold mb-6">Welcome Back</h2>
        <button className="btn-glow w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-3">
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5 brightness-200" alt="google" />
          Get Started with Google
        </button>
        <p className="mt-6 text-xs text-white/30">Free forever. No credit card required.</p>
      </motion.div>

      {/* The Bento Grid (Feature Previews) */}
      <div className="grid grid-cols-2 gap-4 mt-12 w-full max-w-md pb-20">
        <div className="glass-card p-6 h-32 flex flex-col justify-end">
          <div className="w-8 h-8 bg-primary/20 rounded-lg mb-2 border border-primary/40" />
          <p className="text-xs font-bold">Fast Logic</p>
        </div>
        <div className="glass-card p-6 h-32 flex flex-col justify-end">
          <div className="w-8 h-8 bg-secondary/20 rounded-lg mb-2 border border-secondary/40" />
          <p className="text-xs font-bold">Deep Research</p>
        </div>
      </div>

      {/* Mobile Install Hint */}
      <div className="fixed bottom-8">
        <button className="text-[10px] tracking-[0.2em] uppercase text-white/40 border-b border-white/10 pb-1">
          Install Elevate App (PWA)
        </button>
      </div>
    </main>
  );
            }
