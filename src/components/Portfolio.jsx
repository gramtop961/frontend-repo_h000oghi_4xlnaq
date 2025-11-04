import { motion } from "framer-motion";

const projects = [
  { title: "Launch Teaser", tag: "Video", color: "from-fuchsia-500 to-pink-500" },
  { title: "Brand Refresh", tag: "Design", color: "from-violet-500 to-indigo-500" },
  { title: "Behind The Scenes", tag: "Reel", color: "from-emerald-500 to-teal-500" },
  { title: "Creator Toolkit", tag: "Product", color: "from-amber-500 to-orange-500" },
  { title: "Event Recap", tag: "Video", color: "from-sky-500 to-cyan-500" },
  { title: "Poster Series", tag: "Art", color: "from-rose-500 to-red-500" },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Progetti in evidenza</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Una selezione di lavori che uniscono storytelling, motion e design contemporaneo.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-white/15 text-white/90 hover:bg-white/10 transition-colors"
          >
            Collabora con me
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <span className="inline-flex text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/80">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight group-hover:text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">Hover per scoprire di più</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 flex items-center justify-center">
                <button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium">Apri progetto</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
