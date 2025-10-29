import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay that does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.12),transparent_55%)]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur"
        >
          <Truck className="h-4 w-4 text-cyan-300" />
          <span className="text-white/80">Pharmacy Delivery Logistics</span>
          <span className="text-cyan-300">Reimagined</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-8 text-center text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          Clean, modern logistics for
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent"> pharmacy deliveries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-center text-base text-white/70 md:text-lg"
        >
          Route optimization, verified handoffs, and real‑time tracking designed for regulated medical supply chains. Faster, safer, and fully compliant from pharmacy to doorstep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Live Demo
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900" />
    </section>
  );
};

export default Hero;
