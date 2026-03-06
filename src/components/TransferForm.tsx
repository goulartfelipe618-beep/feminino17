import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Reserva recebida", description: "Entraremos em contato em instantes." });
    setStep(1);
  };

  const labelClass = "text-[10px] text-muted-foreground mb-1.5 block uppercase tracking-[0.15em]";

  return (
    <div className="serene-card-elevated p-8 md:p-12">
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Reserva Rápida</p>
      <h3 className="text-2xl text-foreground mb-8" style={{ fontFamily: 'Spectral, serif', fontWeight: 400 }}>
        Solicitar Transfer
      </h3>

      <div className="flex gap-1 mb-8">
        {([["ida", "Ida"], ["ida-volta", "Ida e Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-3 text-[10px] tracking-[0.12em] uppercase rounded-md transition-all duration-400 ${
                tripType === val
                  ? "bg-primary text-primary-foreground shadow-[0_2px_12px_hsla(255,30%,65%,0.25)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-3 gap-4">
              <div><label className={labelClass}>Passageiros</label><input type="number" min={1} placeholder="Nº" required className="serene-input" /></div>
              <div><label className={labelClass}>Data</label><input type="date" required className="serene-input" /></div>
              <div><label className={labelClass}>Hora</label><input type="time" required className="serene-input" /></div>
            </div>
            {tripType === "hora" && (
              <div><label className={labelClass}>Horas</label><input type="number" min={1} placeholder="Quantidade" required className="serene-input" /></div>
            )}
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço de origem" required className="serene-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço de destino" required className="serene-input" /></div>
            {tripType === "ida-volta" && (
              <div className="grid grid-cols-2 gap-4">
                <div><label className={labelClass}>Data Retorno</label><input type="date" className="serene-input" /></div>
                <div><label className={labelClass}>Hora Retorno</label><input type="time" className="serene-input" /></div>
              </div>
            )}
            <div><label className={labelClass}>Preferências a Bordo</label><textarea placeholder="Wi-Fi, carregador, temperatura, música..." rows={2} className="serene-input resize-none" /></div>
            <div className="pt-2"><button type="button" onClick={() => setStep(2)} className="serene-btn w-full">Continuar</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome completo" required className="serene-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="seu@email.com" required className="serene-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="serene-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="serene-input" /></div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="serene-btn-outline flex-1">Voltar</button>
              <button type="submit" className="serene-btn flex-1">Confirmar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
