import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b0114] to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_20%_10%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(40%_30%_at_80%_20%,rgba(236,72,153,0.25),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Creatività che prende vita
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400"> tra design, video e storie</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-white/80 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Portfolio moderno con esperienze 3D interattive, animazioni fluide e un focus
            sulla qualità visiva. Scorri per scoprire i progetti e collabora al prossimo!
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
            >
              Guarda i progetti
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10 transition-colors"
            >
              Parliamo del tuo
            </a>
          </motion.div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
