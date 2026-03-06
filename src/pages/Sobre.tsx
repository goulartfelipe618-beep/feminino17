import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Wifi, Sparkles, Coffee, Heart } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Sobre Nós</p>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-md" style={{ fontFamily: 'Spectral, serif', fontWeight: 300 }}>
              Serenidade é o<br />novo luxo executivo
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="serene-card-elevated p-10 md:p-14">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-[1.9] text-sm font-light">
                  A Serene Transfer nasceu da certeza de que, após uma reunião intensa, o que você mais precisa é de um momento de paz. Nosso serviço transforma cada trajeto em uma pausa regeneradora.
                </p>
                <p className="text-muted-foreground leading-[1.9] text-sm font-light">
                  Conectividade de alta velocidade para quem precisa continuar produzindo, e ambiente relaxante para quem precisa descomprimir — tudo no mesmo veículo, adaptado às suas necessidades.
                </p>
                <p className="text-muted-foreground leading-[1.9] text-sm font-light">
                  Reserva em segundos, pontualidade absoluta e um cuidado com cada detalhe que vai da temperatura ideal até a playlist perfeita para o momento.
                </p>
              </div>

              <div className="silver-line my-10" />

              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {[
                  { icon: ShieldCheck, label: "Segurança" },
                  { icon: Clock, label: "Pontual" },
                  { icon: Wifi, label: "Conectado" },
                  { icon: Sparkles, label: "Premium" },
                  { icon: Coffee, label: "Relaxante" },
                  { icon: Heart, label: "Cuidado" },
                ].map((d) => (
                  <div key={d.label} className="text-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <d.icon size={14} className="text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground">{d.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
