import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contato = () => {
  const info = [
    { icon: Mail, label: "E-mail", value: "concierge@serenetransfer.com.br", href: "mailto:concierge@serenetransfer.com.br" },
    { icon: Phone, label: "Telefone", value: "+55 11 99999-9999", href: "tel:+5511999999999" },
    { icon: MessageCircle, label: "WhatsApp", value: "+55 11 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Fale Conosco</p>
            <h1 className="text-4xl md:text-5xl text-foreground" style={{ fontFamily: 'Spectral, serif', fontWeight: 300 }}>
              Contato
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-md">
          <div className="serene-card-elevated p-10 md:p-14">
            <div className="space-y-1">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={14} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">{item.label}</p>
                    <p className="text-foreground text-sm font-light">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="silver-line my-8" />

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="serene-btn block text-center w-full"
            >
              WhatsApp Direto
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
