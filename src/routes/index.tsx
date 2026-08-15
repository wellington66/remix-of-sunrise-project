import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck, ArrowRight, Minus, Plus, Zap, Clock, Smartphone, Gift, Heart, UserCheck, Play } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activePlan, setActivePlan] = useState("premium");

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#2D2D2D] font-[family-name:var(--font-inter)] selection:bg-[#D64D3F]/20">
      {/* High Conversion Header */}
      <div className="bg-[#1B4332] text-white py-3 text-center text-xs font-black uppercase tracking-[0.2em] px-4 shadow-lg">
        🔥 Edição Limitada: 80 Receitas exclusivas para substituir o pão
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-16 pb-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#D64D3F] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg shadow-[#D64D3F]/20 animate-pulse">
            +5.000 pessoas transformaram suas manhãs
          </div>
          <h1 className="text-5xl md:text-8xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase leading-[0.85] tracking-tight mb-8">
            Emagreça comendo <br/>
            <span className="text-[#D64D3F]">Cafés da Manhã</span> irresistíveis
          </h1>
          <p className="text-xl md:text-2xl text-[#1B4332]/80 font-medium mb-12 max-w-2xl mx-auto">
            Esqueça o pão branco! Descubra 80 receitas ultra-rápidas, sem glúten e que mantêm sua saciedade por horas.
          </p>
          
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <button className="bg-[#D64D3F] text-white px-10 py-6 rounded-2xl font-black uppercase tracking-[0.1em] text-lg hover:bg-[#B73C30] transition-all shadow-[0_20px_50px_rgba(214,77,63,0.3)] hover:scale-105">
              Quero emagrecer agora
            </button>
            <div className="flex items-center gap-2 text-[#1B4332] font-bold">
              <Play className="w-8 h-8 bg-[#1B4332] text-white rounded-full p-2" />
              <span>Assista ao vídeo</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative max-w-5xl mx-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1200&auto=format&fit=crop"
            alt="E-book Mockup"
            className="w-full rounded-[2rem] shadow-2xl border-8 border-white"
          />
        </motion.div>
      </header>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase mb-16">O que você ganha?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Energia Pura", desc: "Nada de cansaço após o café." },
              { icon: Clock, title: "Praticidade Total", desc: "Receitas de 5 minutos." },
              { icon: Heart, title: "Saúde Real", desc: "Ingredientes que nutrem." },
              { icon: Star, title: "Sabor Incrível", desc: "Parece comida proibida." }
            ].map((f, i) => (
              <div key={i} className="p-8 border border-[#1B4332]/10 rounded-3xl hover:shadow-2xl transition-all">
                <f.icon className="w-12 h-12 text-[#D64D3F] mx-auto mb-6" />
                <h3 className="text-xl font-bold uppercase mb-2">{f.title}</h3>
                <p className="text-sm text-[#1B4332]/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (High Conv) */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-[#1B4332] text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <h2 className="text-4xl md:text-7xl font-[family-name:var(--font-anton)] uppercase mb-8">OFERTA ESPECIAL</h2>
            <p className="text-xl mb-12">Por tempo limitado, leve tudo por:</p>
            <div className="text-8xl font-[family-name:var(--font-anton)] mb-12">R$ 17,90</div>
            <button className="bg-[#D64D3F] text-white px-12 py-8 rounded-full font-black uppercase tracking-widest text-2xl hover:scale-105 transition-transform shadow-2xl">
              QUERO MEU GUIA AGORA
            </button>
            <p className="mt-8 text-white/50 text-sm">Garantia incondicional de 7 dias.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-[family-name:var(--font-anton)] text-[#1B4332] text-center mb-12 uppercase">Dúvidas?</h2>
        {[
          { q: "O guia é físico ou digital?", a: "100% digital, acesso imediato após a compra." },
          { q: "Funciona se eu não souber cozinhar?", a: "Sim, receitas extremamente simples." }
        ].map((item, i) => (
          <details key={i} className="bg-white p-6 rounded-2xl mb-4 border border-[#1B4332]/10">
            <summary className="font-bold cursor-pointer">{item.q}</summary>
            <p className="mt-4 text-[#1B4332]/70">{item.a}</p>
          </details>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-[#1B4332]/40 text-xs uppercase font-bold tracking-widest">
        © 2026 Chef Mônica Maciel. Todos os direitos reservados.
      </footer>
    </div>
  );
}
