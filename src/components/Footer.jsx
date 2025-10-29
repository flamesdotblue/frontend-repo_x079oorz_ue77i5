import React from 'react';
import { Truck, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-inset ring-white/10">
            <Truck className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="font-medium text-white">PulseRx Logistics</p>
            <p className="text-xs text-white/60">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/70">
          <a href="#" className="transition hover:text-white">Privacy</a>
          <a href="#" className="transition hover:text-white">Terms</a>
          <span className="mx-2 hidden h-4 w-px bg-white/10 md:inline-block" />
          <a href="#" aria-label="GitHub" className="transition hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
