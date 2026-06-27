"use client";
import './globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    // This is a "Backdoor" way to get smooth scrolling without a heavy library
    const scroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
    scroll();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Elevate AI | Intelligence Evolved</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
    }
