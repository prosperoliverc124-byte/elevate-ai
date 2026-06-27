"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{
      backgroundColor: '#06000f',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      color: 'white',
      overflowX: 'hidden'
    }}>
      <div className="mesh-bg" />

      {/* Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="https://i.postimg.cc/15bRJjJw/181324196-1782545815145541.jpg" 
          style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '20px', 
            objectFit: 'cover',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
          alt="Elevate Logo"
        />
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-2px', margin: '20px 0 5px 0' }}>
          ELEVATE<span style={{ color: '#00d2ff' }}>AI</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', maxWidth: '280px', lineHeight: '1.5' }}>
          The most powerful intelligence, designed for those who want more.
        </p>
      </div>

      {/* Login Card */}
      <div className="glass-card" style={{
        padding: '30px',
        width: '100%',
        maxWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>Welcome Back</h2>
        
        <button className="btn-glow" style={{
          width: '100%',
          padding: '16px',
          borderRadius: '16px',
          border: 'none',
          color: 'white',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer'
        }}>
          <img src="https://www.google.com/favicon.ico" style={{ width: '18px', height: '18px' }} alt="google" />
          Continue with Google
        </button>
        
        <p style={{ marginTop: '20px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
          Free forever. No credit card required.
        </p>
      </div>

      {/* Bento Feature Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
        width: '100%',
        maxWidth: '350px',
        marginTop: '20px'
      }}>
        <div className="glass-card" style={{ padding: '20px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ width: '30px', height: '30px', backgroundColor: 'rgba(112,0,255,0.2)', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(112,0,255,0.4)' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>Fast Logic</span>
        </div>
        <div className="glass-card" style={{ padding: '20px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ width: '30px', height: '30px', backgroundColor: 'rgba(0,210,255,0.2)', borderRadius: '8px', marginBottom: '10px', border: '1px solid rgba(0,210,255,0.4)' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>Neural Research</span>
        </div>
      </div>

    </main>
  );
  }
