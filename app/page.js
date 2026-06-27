"use client";
import { motion } from "framer-motion";
import { supabase } from "../utils/supabase";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  
  const handleLogin = async () => {
    // This triggers the Google Login
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) console.log("Error logging in:", error.message);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#020008] text-white px-6 overflow-hidden">
      
      {/* ELITE GLOW SYSTEM (Fixes the "Black Paper" feel) */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#3200a8] opacity-20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00d2ff] opacity-10 blur-[100px] rounded-full" />
      
      {/* LOGO SECTION */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mb-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-[40px] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" 
            className="relative w-28 h-28 rounded-[38px] border border-white/10"
            alt="Elevate Logo"
          />
        </div>
      </motion.div>

      {/* TEXT SECTION */}
      <div className="text-center mb-10">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-4 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent"
        >
          ELEVATE<br/>THE FUTURE.
        </motion.h1>
        <p className="text-white/30 text-sm tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-cyan-400" /> Powered by Quantum L4
        </p>
      </div>

      {/* LOGIN BOX */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-sm p-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[32px]"
      >
        <div className="bg-[#050012]/80 backdrop-blur-3xl p-8 rounded-[31px] flex flex-col items-center">
          <button 
            onClick={handleLogin}
            className="w-full h-16 bg-white text-black rounded-2xl font-black flex items-center justify-between px-8 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
          >
            <span className="flex items-center gap-3 text-sm">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
              GOOGLE ACCESS
            </span>
            <ArrowRight size={20} />
          </button>
          
          <p className="mt-6 text-[10px] text-white/20 tracking-[0.3em] font-medium">END-TO-END ENCRYPTED</p>
        </div>
      </motion.div>

      {/* FOOTER DETAIL */}
      <div className="absolute bottom-10 flex gap-8 opacity-20 grayscale">
        <div className="text-[10px] font-bold tracking-widest uppercase">AES-256</div>
        <div className="text-[10px] font-bold tracking-widest uppercase">SSL Ready</div>
        <div className="text-[10px] font-bold tracking-widest uppercase">ISO 27001</div>
      </div>

    </main>
  );
}
