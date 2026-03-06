import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export const InvitePopup = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/10 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="serene-card-elevated p-12 md:p-16 max-w-sm mx-6 relative text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles size={20} className="text-primary" />
          </div>
          <div className="silver-line w-10 mx-auto my-5" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-6">Bem-vindo</p>
          <h3 className="text-3xl text-foreground mb-3" style={{ fontFamily: 'Spectral, serif', fontWeight: 400 }}>
            Serene Transfer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10 font-light">
            Facilidade de reserva, conectividade a bordo e um ambiente relaxante para cada trajeto.
          </p>
          <button onClick={() => setVisible(false)} className="serene-btn w-full">
            Entrar
          </button>
          <button onClick={() => setVisible(false)} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors">
            <X size={14} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
