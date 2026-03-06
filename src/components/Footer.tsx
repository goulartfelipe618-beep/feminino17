import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="py-20">
    <div className="container mx-auto px-6">
      <div className="silver-line mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-foreground text-lg tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Spectral, serif', fontWeight: 500 }}>
            Serene
          </p>
          <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
            Serenidade executiva,<br />conectividade e conforto.
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-5">Navegação</p>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Início" },
              { to: "/grupos", label: "Frota" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wide">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-5">Contato</p>
          <div className="flex flex-col gap-3 text-xs text-muted-foreground tracking-wide">
            <span>concierge@serenetransfer.com.br</span>
            <span>+55 11 99999-9999</span>
          </div>
        </div>
      </div>

      <div className="silver-line mt-16 mb-8" />
      <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
        © {new Date().getFullYear()} Serene Transfer
      </p>
    </div>
  </footer>
);
