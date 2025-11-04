import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Rocket } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black via-[#07060a] to-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-rose-500">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Parliamo del tuo prossimo progetto</h3>
            </div>
            <p className="mt-4 text-white/75 max-w-prose">
              Raccontami le tue idee: video, brand identity, grafiche per social o un progetto speciale.
              Rispondo in 24h.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:hello@creator.studio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90"
              >
                <Mail className="w-4 h-4" />
                hello@creator.studio
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/10"
              >
                <Youtube className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </motion.div>

          <motion.form
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const name = data.get("name");
              const project = data.get("project");
              window.location.href = `mailto:hello@creator.studio?subject=Nuovo progetto da ${encodeURIComponent(
                String(name || "")
              )}&body=${encodeURIComponent(String(project || ""))}`;
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-white/70">Nome</label>
                <input
                  name="name"
                  required
                  className="mt-1 rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-violet-500/60"
                  placeholder="Il tuo nome"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white/70">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-violet-500/60"
                  placeholder="tu@esempio.com"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col">
                <label className="text-sm text-white/70">Il tuo progetto</label>
                <textarea
                  name="project"
                  rows={5}
                  className="mt-1 rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-violet-500/60"
                  placeholder="Parlami di obiettivi, tempistiche e stile..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-shadow"
            >
              Invia richiesta
            </button>
          </motion.form>
        </div>

        <div className="mt-14 flex items-center justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white/60 flex-wrap">
          <span>© {new Date().getFullYear()} Creator Studio — Tutti i diritti riservati</span>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Torna su</a>
            <a href="#work" className="hover:text-white">Progetti</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
