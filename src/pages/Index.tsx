import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Wifi, Clock, ShieldCheck, ArrowRight, Sparkles, Coffee } from "lucide-react";
import sereneSedan from "@/assets/serene-sedan.jpg";
import sereneInterior from "@/assets/serene-interior.jpg";
import sereneFleet from "@/assets/serene-fleet.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={sereneSedan} alt="Sedan executivo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative container mx-auto px-6"
        >
          <div className="max-w-lg">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Serenidade Executiva</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-foreground" style={{ fontFamily: 'Spectral, serif', fontWeight: 300 }}>
              Seu momento<br />
              de serenidade<br />
              começa aqui
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm text-sm font-light">
              Reserva fácil, conectividade total a bordo e um ambiente relaxante que transforma cada trajeto em recuperação.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cotacao" className="serene-btn inline-flex items-center gap-3">Reservar <ArrowRight size={12} /></a>
              <a href="#frota" className="serene-btn-outline inline-block">Conhecer</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
            {[
              { icon: Clock, title: "Reserva Fácil", desc: "Em poucos cliques, seu transfer está confirmado. Sem ligações, sem espera." },
              { icon: Wifi, title: "Conectividade", desc: "Wi-Fi de alta velocidade, carregadores e tablets disponíveis em todos os veículos." },
              { icon: Coffee, title: "Relaxamento", desc: "Ambiente pensado para descompressão pós-reunião. Iluminação suave e silêncio." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="serene-card p-8"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-foreground mb-3" style={{ fontFamily: 'Spectral, serif', fontWeight: 400 }}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="frota" className="py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Frota</p>
          <h2 className="text-4xl text-foreground mb-14" style={{ fontFamily: 'Spectral, serif', fontWeight: 300 }}>
            Serenidade sobre rodas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
            {[
              { img: sereneSedan, title: "Sedan Executivo", desc: "Conforto premium e conectividade total para seus compromissos." },
              { img: sereneInterior, title: "Interior Relaxante", desc: "Iluminação ambiente, climatização perfeita e silêncio absoluto." },
              { img: sereneFleet, title: "Frota Coordenada", desc: "Logística impecável para eventos e comitivas corporativas." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="serene-card overflow-hidden p-0"
              >
                <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="text-base text-foreground mb-1" style={{ fontFamily: 'Spectral, serif', fontWeight: 500 }}>{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: ShieldCheck, label: "Segurança Total" },
              { icon: Wifi, label: "Wi-Fi 5G" },
              { icon: Sparkles, label: "Ambiente Premium" },
              { icon: Clock, label: "Pontualidade" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 text-muted-foreground">
                <f.icon size={16} strokeWidth={1.5} className="text-primary" />
                <span className="text-xs tracking-[0.1em] uppercase font-light">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
