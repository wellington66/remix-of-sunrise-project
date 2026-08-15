import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck, ArrowDown, Timer } from "lucide-react";
import { useState, useEffect } from "react";
import cuscuzQueijoAsset from "@/assets/cuscuz_queijo.png.asset.json";
import shakshukaAsset from "@/assets/shakshuka.png.asset.json";
import bananaCrepeAsset from "@/assets/banana_crepe.png.asset.json";
import cuscuzOvoAsset from "@/assets/cuscuz_ovo.png.asset.json";
import bananaCupcakeBowlAsset from "@/assets/banana_cupcake_bowl.png.asset.json";
import crepiocaFrangoAsset from "@/assets/crepioca_frango.png.asset.json";
import guiaMockupAsset from "@/assets/guia_101_receitas_mockup.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-inter)] selection:bg-cta/20 overflow-x-hidden">
      {/* Scarcity Header */}
      <div className="bg-cta text-cta-foreground py-3 text-center text-xs font-black uppercase tracking-[0.2em] px-4 sticky top-0 z-[100] shadow-lg">
        🚨 ATENÇÃO: Oferta especial encerra em <span className="font-mono bg-white/20 px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span>
      </div>

      {/* Hero */}
      <header className="relative pt-20 pb-32">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] border border-primary/20">
              <Star className="w-3 h-3 fill-current" /> Método testado por +12.487 mulheres
            </span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-anton)] uppercase leading-[0.9] tracking-tight">
              CANSADA DE SE SENTIR <br/>
              <span className="text-cta">INCHADA E SEM ENERGIA</span> <br/>
              LOGO PELA MANHÃ?
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-xl">
              Descubra como o "vício do pão" está sabotando seu emagrecimento e recupere sua autoestima com o método de <span className="text-primary font-black underline decoration-primary/30">desinflamação matinal</span> em apenas 7 dias.
            </p>
            <button className="bg-cta text-cta-foreground px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
              Quero meu guia agora
            </button>
          </div>
          <div className="relative">
            <img src={guiaMockupAsset.url} alt="Guia 101 Receitas" className="w-full rounded-[2.5rem] shadow-2xl" />
          </div>
        </div>
      </header>

      {/* Recipes */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] uppercase text-center mb-16">
            A SOLUÇÃO DELICIOSA PARA <br/><span className="text-cta">VOCÊ DESINFLAMAR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: cuscuzQueijoAsset.url, title: "CUSCUZ ANTI-INFLAMATÓRIO" },
              { img: shakshukaAsset.url, title: "SHAKSHUKA QUEIMA-GORDURA" },
              { img: bananaCrepeAsset.url, title: "DOCE SEM CULPA" },
              { img: cuscuzOvoAsset.url, title: "COMBO PROTEICO MATINAL" },
              { img: bananaCupcakeBowlAsset.url, title: "CAFÉ RÁPIDO" },
              { img: crepiocaFrangoAsset.url, title: "CREPIOCA ESTRUTURAL" }
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-[2rem] overflow-hidden shadow-lg border border-border">
                <img src={item.img} className="w-full h-64 object-cover" alt={item.title} />
                <div className="p-8 text-center">
                  <h3 className="text-xl font-[family-name:var(--font-anton)] uppercase tracking-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-background text-foreground text-center border-t border-border">
        <div className="container mx-auto px-6 space-y-6 text-sm opacity-60">
          <p>© 2026 Chef Mônica Maciel. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 text-xs uppercase tracking-widest font-bold">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
