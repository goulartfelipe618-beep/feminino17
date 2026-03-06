import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Solicitação registrada", description: "Nossa equipe entrará em contato." });
    setStep(1);
  };

  const labelClass = "text-[10px] text-muted-foreground mb-1.5 block uppercase tracking-[0.15em]";

  return (
    <div className="serene-card-elevated p-8 md:p-12">
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Frota</p>
      <h3 className="text-2xl text-foreground mb-8" style={{ fontFamily: 'Spectral, serif', fontWeight: 400 }}>
        Solicitar Frota
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelClass}>Veículo</label>
                <select className="serene-input">
                  <option value="">Selecione</option>
                  <option value="sedan">Sedan Executivo</option>
                  <option value="suv">SUV Premium</option>
                  <option value="van">Van Executiva</option>
                  <option value="micro">Micro-ônibus</option>
                </select>
              </div>
              <div><label className={labelClass}>Passageiros</label><input type="number" min={1} placeholder="Nº" required className="serene-input" /></div>
            </div>
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço" required className="serene-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço" required className="serene-input" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelClass}>Data/Hora Ida</label><input type="datetime-local" required className="serene-input" /></div>
              <div><label className={labelClass}>Data/Hora Retorno</label><input type="datetime-local" className="serene-input" /></div>
            </div>
            <div><label className={labelClass}>Conectividade / Preferências</label><textarea placeholder="Wi-Fi, tablets, carregadores, som ambiente..." rows={3} className="serene-input resize-none" /></div>
            <div className="pt-2"><button type="button" onClick={() => setStep(2)} className="serene-btn w-full">Continuar</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome" required className="serene-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="email" required className="serene-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="serene-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="serene-input" /></div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="serene-btn-outline flex-1">Voltar</button>
              <button type="submit" className="serene-btn flex-1">Solicitar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
