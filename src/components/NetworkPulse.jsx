import React from 'react';
import { motion } from 'framer-motion';

/*
  NetworkPulse renders an animated grid of nodes with pulsing connections,
  evoking a live logistics network. Uses SVG so it stays crisp.
*/
const NetworkPulse = () => {
  const rows = 6;
  const cols = 10;
  const nodes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push({ id: `${r}-${c}`, x: c * 36 + 18, y: r * 28 + 18, delay: (r * cols + c) * 0.02 });
    }
  }

  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">A living network for time‑critical deliveries</h2>
            <p className="mt-4 text-white/70">
              Real-time orchestration across pharmacies, couriers, and patients. Watch routes adapt as
              demand shifts, traffic changes, and priority orders arise.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
                Dynamic batching and SLA-aware routing.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-400" />
                Geo-fencing and cold-chain alerts.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
                Live health status and automatic failover.
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.15),transparent_35%)] blur-2xl" />
            <motion.svg
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              width={cols * 36 + 36}
              height={rows * 28 + 36}
              className="mx-auto block w-full max-w-[640px] rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur"
            >
              {/* Connections */}
              <g stroke="url(#grad)" strokeWidth="1.2" opacity="0.6">
                {nodes.map((n) => {
                  const right = nodes.find((p) => p.id === `${n.id.split('-')[0]}-${Number(n.id.split('-')[1]) + 1}`);
                  const down = nodes.find((p) => p.id === `${Number(n.id.split('-')[0]) + 1}-${n.id.split('-')[1]}`);
                  return (
                    <React.Fragment key={`lines-${n.id}`}>
                      {right && (
                        <motion.line
                          x1={n.x}
                          y1={n.y}
                          x2={right.x}
                          y2={right.y}
                          strokeDasharray="6 10"
                          initial={{ strokeDashoffset: 16 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
                        />
                      )}
                      {down && (
                        <motion.line
                          x1={n.x}
                          y1={n.y}
                          x2={down.x}
                          y2={down.y}
                          strokeDasharray="6 10"
                          initial={{ strokeDashoffset: 16 }}
                          animate={{ strokeDashoffset: 0 }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: n.delay + 0.2 }}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </g>

              {/* Nodes */}
              <g>
                {nodes.map((n) => (
                  <React.Fragment key={`node-${n.id}`}>
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r="4"
                      fill="url(#nodeGrad)"
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: n.delay }}
                    />
                    <motion.circle
                      cx={n.x}
                      cy={n.y}
                      r="10"
                      fill="none"
                      stroke="url(#nodeGrad)"
                      strokeWidth="1"
                      initial={{ opacity: 0.0, scale: 0.6 }}
                      animate={{ opacity: [0.0, 0.5, 0.0], scale: [0.6, 1.1, 0.6] }}
                      transition={{ duration: 2.8, repeat: Infinity, delay: n.delay + 0.3 }}
                    />
                  </React.Fragment>
                ))}
              </g>

              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </radialGradient>
              </defs>
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkPulse;
