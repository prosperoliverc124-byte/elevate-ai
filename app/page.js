"use client";
import { motion } from "framer-motion";

// Animation Variants for staggered effect
const containerVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-16 pb-24">
      {/* Background Blobs */}
      <div className="glow-blob" style={{ top: '-10%', left: '-10%' }} />
      <div className="glow-blob" style={{ bottom: '0%', right: '-10%', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%)' }} />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg flex flex-col items-center"
      >
        {/* Logo Section */}
        <motion.div variants={itemVars} className="relative mb-8">
          <div className="absolute inset-0 bg-electric blur-2xl opacity-20 animate-pulse" />
          <img 
            src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" 
            className="relative w-24 h-24 rounded-[28px] border border-white/20 shadow-2xl"
            alt="Elevate Logo"
          />
        </motion.div>

        {/* Title Section */}
        <motion.div variants={itemVars} className="text-center mb-12">
          <h1 className="text-5xl font-extrabold tracking-tighter text-white mb-4">
            ELEVATE<span className="text-[#00d2ff]">AI</span>
          </h1>
          <p className="text-white/40 text-lg font-light max-w-[280px] mx-auto leading-relaxed">
            The intelligent layer for your digital life.
          </p>
        </motion.div>

        {/* Premium Action Card */}
        <motion.div variants={itemVars} className="glass-panel w-full p-8 flex flex-col items-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/30 mb-8 font-semibold">Authentication</h2>
          
          <button className="group relative w-full overflow-hidden rounded-2xl bg-white p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98]">
            <div className="relative flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white text-black font-bold">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="google" />
              Continue with Google
            </div>
          </button>

          <p className="mt-6 text-[10px] text-white/20 tracking-wider">SECURE ENCRYPTED ACCESS</p>
        </motion.div>

        {/* Bento Dashboard Preview */}
        <motion.div variants={itemVars} className="grid grid-cols-2 gap-4 mt-8 w-full">
          <div className="glass-panel p-6 flex flex-col gap-4">
            <div className="fintech-icon">
              <div className="w-4 h-4 rounded-sm bg-[#7000ff] shadow-[0_0_10px_#7000ff]" />
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Engine</p>
              <p className="text-xs font-semibold">Quantum L4</p>
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col gap-4">
            <div className="fintech-icon">
              <div className="w-4 h-4 rounded-sm bg-[#00d2ff] shadow-[0_0_10px_#00d2ff]" />
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Latency</p>
              <p className="text-xs font-semibold">24ms Response</p>
            </div>
          </div>
        </motion.div>

        {/* PWA Install Button */}
        <motion.button 
          variants={itemVars}
          whileTap={{ scale: 0.95 }}
          className="mt-16 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] tracking-[0.2em] text-white/40 uppercase hover:bg-white/10 transition-colors"
        >
          Add to Home Screen
        </motion.button>

      </motion.div>
    </main>
  );
          }
