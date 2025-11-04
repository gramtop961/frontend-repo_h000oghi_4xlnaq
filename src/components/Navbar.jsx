import { motion } from "framer-motion";
import { Rocket, Mail, Instagram, Youtube } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/60 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-white"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-rose-500">
            <Rocket className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Creator Studio</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * idx + 0.2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.div
          className="flex items-center gap-3"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="mailto:hello@creator.studio"
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-sm text-white/90 hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white/80" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-white/80" />
          </a>
        </motion.div>
      </div>
    </header>
  );
}
