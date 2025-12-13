import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 h-20 bg-black/40 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

        {/* LOGO */}
        <img
          src="/images/logo nobg.png"
          alt="CeyTech Labs Logo"
          className="h-full max-h-36 w-auto object-contain"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
        <a
            href="#about"
            className="text-white visited:text-white hover:text-orange-500 transition-colors"
        >
            About
        </a>
        <a
            href="#services"
            className="text-white visited:text-white hover:text-orange-500 transition-colors"
        >
            Services
        </a>
        <a
            href="#work"
            className="text-white visited:text-white hover:text-orange-500 transition-colors"
        >
            Work
        </a>
        <a
            href="#contact"
            className="text-white visited:text-white hover:text-orange-500 transition-colors"
        >
            Contact
        </a>
        
        </div>


        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
            <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur border-t border-white/10"
            >
            <div className="flex flex-col px-6 py-6 gap-4 font-medium">
                <a
                onClick={() => setOpen(false)}
                href="#about"
                className="text-white visited:text-white hover:text-orange-500 transition-colors"
                >
                About
                </a>
                <a
                onClick={() => setOpen(false)}
                href="#services"
                className="text-white visited:text-white hover:text-orange-500 transition-colors"
                >
                Services
                </a>
                <a
                onClick={() => setOpen(false)}
                href="#work"
                className="text-white visited:text-white hover:text-orange-500 transition-colors"
                >
                Work
                </a>
                <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="text-white visited:text-white hover:text-orange-500 transition-colors"
                >
                Contact
                </a>
            </div>
            </motion.div>
        )}
        </AnimatePresence>

    </motion.nav>
  );
}
