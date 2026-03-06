import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Início" },
    { to: "/grupos", label: "Frota" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Desktop — floating centered bar with glow hover */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-lg px-10 py-3.5 items-center gap-10 rounded-full border border-border shadow-[0_2px_24px_hsla(255,30%,65%,0.08)]">
        <Link
          to="/"
          className="text-foreground tracking-[0.2em] uppercase"
          style={{ fontFamily: 'Spectral, serif', fontWeight: 500, fontSize: '0.95rem' }}
        >
          Serene
        </Link>
        <div className="w-px h-4 bg-border" />
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav-glow text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
              location.pathname === l.to
                ? "text-foreground active"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-foreground tracking-[0.2em] uppercase" style={{ fontFamily: 'Spectral, serif', fontWeight: 500, fontSize: '0.9rem' }}>
            Serene
          </Link>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[57px] left-0 right-0 z-40 overflow-hidden bg-white/98 backdrop-blur-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xs tracking-[0.15em] uppercase py-2 ${
                    location.pathname === l.to ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Lavender orb anchor button */}
      <a
        href="#cotacao"
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-primary flex items-center justify-center orb-pulse hover:scale-105 transition-transform duration-300"
        aria-label="Cotação"
      >
        <ArrowDown size={14} className="text-primary-foreground" />
      </a>
    </>
  );
};
