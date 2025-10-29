import React from 'react';
import { Shield, Clock, Route, Fingerprint, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Route,
    title: 'Smart Route Optimization',
    desc: 'Reduce miles and meet SLAs with AI-powered batching, heatmaps, and time-window planning.',
  },
  {
    icon: Shield,
    title: 'Compliance Built-In',
    desc: 'Chain-of-custody, temperature flags, and audit logs aligned with pharmacy regulations.',
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    desc: 'Live courier ETAs, delivery windows, and instant proof-of-delivery for patients and pharmacies.',
  },
  {
    icon: Fingerprint,
    title: 'Secure Handoffs',
    desc: 'ID validation, signature, and OTP handoff workflows to ensure verified deliveries.',
  },
  {
    icon: Globe,
    title: 'Scale with Confidence',
    desc: 'Operate across regions with multi-tenant controls and enterprise-grade performance.',
  },
  {
    icon: CheckCircle2,
    title: 'Reliability & Uptime',
    desc: 'Redundant infrastructure with alerts and health checks to keep your network moving.',
  },
];

const Features = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Built for pharmacy logistics at scale
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-inset ring-white/10">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>

              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
