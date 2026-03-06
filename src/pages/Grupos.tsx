import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import sereneFleet from "@/assets/serene-fleet.jpg";
import sereneSedan from "@/assets/serene-sedan.jpg";
import sereneInterior from "@/assets/serene-interior.jpg";

const grid = [
  { img: sereneSedan, title: "Sedan Executivo", pax: "1–3 passageiros" },
  { img: sereneInterior, title: "SUV Premium", pax: "1–5 passageiros" },
  { img: sereneFleet, title: "Van Executiva", pax: "6–14 passageiros" },
];

const Grupos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Frota</p>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-md" style={{ fontFamily: 'Spectral, serif', fontWeight: 300 }}>
              Para cada trajeto,<br />a serenidade ideal
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
            {grid.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="serene-card overflow-hidden p-0"
              >
                <img src={v.img} alt={v.title} className="w-full aspect-[4/3] object-cover" />
                <div className="p-6">
                  <h3 className="text-base text-foreground mb-1" style={{ fontFamily: 'Spectral, serif', fontWeight: 500 }}>{v.title}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users size={12} />
                    <span className="text-xs font-light">{v.pax}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cotacao" className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
