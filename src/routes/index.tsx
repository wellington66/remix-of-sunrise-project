import { createFileRoute } from "@tanstack/react-router";
// oferta com as fotos
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck, ArrowRight, Minus, Plus, Zap, Clock, Smartphone, Gift, Heart, UserCheck, Play, ArrowDown, Timer } from "lucide-react";
import { useState, useEffect } from "react";
const cuscuzQueijoUrl = "/assets/cuscuz_queijo.png";
const shakshukaUrl = "/assets/shakshuka.png";
const bananaCrepeUrl = "/assets/banana_crepe.png";
const cuscuzOvoUrl = "/assets/cuscuz_ovo.png";
const bananaCupcakeBowlUrl = "/assets/banana_cupcake_bowl.png";
const crepiocaFrangoUrl = "/assets/crepioca_frango.png";
const guiaMockupUrl = "/assets/hero_mockup.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FDF9F2] text-[#1B4332] font-[family-name:var(--font-inter)] selection:bg-[#D64D3F]/20 overflow-x-hidden w-full relative">
      {/* Top Banner */}
      <div className="bg-[#1B4332] text-white py-2 text-center text-[10px] font-bold uppercase tracking-widest">
        101 CAFÉS DA MANHÃ SAUDÁVEIS PARA SUBSTITUIR O PÃO
      </div>

      {/* Dynamic Scarcity Header */}
      <div className="bg-[#D64D3F] text-white py-2 text-center text-[clamp(0.6rem,2vw,0.75rem)] font-black uppercase tracking-[0.2em] px-4 sticky top-0 z-[100] shadow-xl w-full">
        🚨 ATENÇÃO: Desconto expira em <span className="font-mono bg-white/20 px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span>
      </div>

      {/* Hero Section */}
      <header className="relative pt-8 pb-12 bg-[#FDF9F2] w-full">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-black text-[#1B4332] leading-tight mb-8 uppercase">
            101 CAFÉS DA MANHÃ SAUDÁVEIS <br/>
            <span className="text-[#1B4332]/60">PARA SUBSTITUIR O PÃO</span>
          </h1>
          
          <div className="relative max-w-4xl mx-auto mb-8">
            <img 
              src={guiaMockupUrl}
              alt="Guia Mockup"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="text-[#1B4332] font-black">
              <span className="text-sm">POR APENAS</span>
              <div className="text-4xl font-[family-name:var(--font-anton)]">R$ 17,90</div>
            </div>
            <button className="bg-[#2D6A4F] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:scale-105 transition-transform cursor-pointer">
              QUERO AS RECEITAS AGORA
            </button>
            <div className="flex gap-4 text-[10px] font-bold text-[#1B4332]/60">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> ACESSO IMEDIATO</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3"/> COMPRA SEGURA</span>
              <span className="flex items-center gap-1"><Gift className="w-3 h-3"/> 7 DIAS DE GARANTIA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <div className="bg-[#1B4332] text-white py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em]">
              <Star className="w-4 h-4 fill-[#D64D3F] text-[#D64D3F]" />
              RECEITAS PRÁTICAS
              <Star className="w-4 h-4 fill-[#D64D3F] text-[#D64D3F]" />
              SEM GLÚTEN
              <Star className="w-4 h-4 fill-[#D64D3F] text-[#D64D3F]" />
              EMAGRECIMENTO REAL
            </div>
          ))}
        </div>
      </div>

      {/* AIDA: Interest */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,10vw,4rem)] items-center max-w-7xl mx-auto">
            <div className="space-y-6 px-2 text-center lg:text-left">
              <h2 className="text-[clamp(1.8rem,6vw,3.5rem)] font-[family-name:var(--font-anton)] uppercase leading-[1.1]">
                VOCÊ AINDA COME SEMPRE PÃO<br/>
                <span className="text-[#D64D3F]">NO CAFÈ DA MANHÃ?</span>
              </h2>
              <div className="w-20 h-2 bg-[#D64D3F] rounded-full mx-auto lg:mx-0" />
              <p className="text-lg text-[#1B4332]/80 leading-relaxed font-medium">
                O pão é rápido, prático e faz parte da rotina, mas muita gente acaba comendo sempre a mesma coisa por falta de ideias simples e saudáveis. Isso acontece com você?
              </p>
              <ul className="space-y-4 text-left inline-block">
                {["Fim da sonolência pós-café", "Intestino funcionando como um relógio", "Redução visível de medidas na primeira semana"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                    <CheckCircle2 className="w-5 h-5 text-[#D64D3F]" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <button className="bg-[#D64D3F] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-lg hover:scale-105 transition-transform cursor-pointer w-full lg:w-auto">
                  QUERO SAIR DA ROTINA DO PÃO
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1B4332]/5 rounded-full blur-3xl" />
              <img 
                src={shakshukaUrl} 
                className="relative rounded-[clamp(1.5rem,5vw,3rem)] shadow-2xl border-8 border-[#FDF9F2] z-10 w-full h-auto object-cover aspect-square" 
                alt="Transformação Saudável" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Gallery */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] uppercase leading-none text-[#1B4332]">
            VEJA O QUE VOCÊ VAI <br/>
            <span className="text-[#D64D3F]">ENCONTRAR NO GUIA</span>
          </h2>
          <p className="text-[#1B4332]/60 font-bold uppercase tracking-widest text-xs">Transforme sua saúde com cada refeição</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { img: cuscuzQueijoUrl, calories: "185 kcal" },
            { img: shakshukaUrl, calories: "210 kcal" },
            { img: bananaCrepeUrl, calories: "195 kcal" },
            { img: cuscuzOvoUrl, calories: "220 kcal" },
            { img: bananaCupcakeBowlUrl, calories: "175 kcal" },
            { img: crepiocaFrangoUrl, calories: "245 kcal" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[#1B4332]/5 group relative w-full"
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Receita ${i + 1}`} loading="lazy" />
                <div className="absolute top-4 right-4 bg-[#D64D3F] text-white px-4 py-2 rounded-full text-xs font-black shadow-lg">
                  {item.calories}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#1B4332] text-white text-center px-4 relative overflow-hidden w-full">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-[family-name:var(--font-anton)] leading-[0.9] uppercase">
              ESCOLHA SEU PLANO
            </h2>
            <p className="text-[#D64D3F] font-bold uppercase tracking-widest text-sm">Acesso imediato após a confirmação</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-12">
            {/* Essential */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md flex flex-col items-center justify-between hover:bg-white/10 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl font-black uppercase tracking-widest mb-2">Plano Essencial</h3>
                <p className="text-xs opacity-60 uppercase font-bold">Guia Digital em PDF</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-sm line-through opacity-40 block font-bold">DE R$ 47,00</span>
                <span className="text-5xl font-[family-name:var(--font-anton)] text-white">R$ 17,90</span>
              </div>
              <ul className="text-left w-full space-y-4 mb-8 text-sm opacity-80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Guia com 101 Receitas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Acesso Vitalício</li>
                <li className="flex items-center gap-2 opacity-30 line-through"><Minus className="w-4 h-4" /> Bônus Exclusivos</li>
              </ul>
              <button className="w-full bg-white/20 text-white py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/30 transition-all">
                QUERO O GUIA
              </button>
            </div>

            {/* Complete */}
            <div className="bg-white border-2 border-[#D64D3F] p-12 rounded-[3rem] flex flex-col items-center justify-between relative shadow-2xl scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D64D3F] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                Recomendado ✨
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-black uppercase tracking-widest mb-2 text-[#1B4332]">Plano Completo</h3>
                <p className="text-xs text-[#D64D3F] uppercase font-bold">Guia + Todos os Bônus</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-sm line-through text-[#1B4332]/40 block font-bold">DE R$ 97,00</span>
                <span className="text-5xl font-[family-name:var(--font-anton)] text-[#1B4332]">R$ 27,90</span>
              </div>
              <ul className="text-left w-full space-y-4 mb-8 text-sm text-[#1B4332]">
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Guia com 101 Receitas</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Todos os 5 Bônus Inclusos</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Guia de Sucos Detox</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Suporte Prioritário</li>
              </ul>
              <button className="w-full bg-[#D64D3F] text-white py-6 rounded-full font-black uppercase tracking-widest text-lg shadow-xl hover:scale-105 transition-all">
                QUERO O COMBO COMPLETO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-[family-name:var(--font-anton)] text-center mb-16 uppercase text-[#1B4332]">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="space-y-4">
          {[
            { q: "Vou receber o livro em casa?", a: "Não, o guia é 100% digital em PDF. Você recebe o acesso no seu e-mail imediatamente." },
            { q: "As receitas são rápidas?", a: "Sim, todas as receitas levam entre 5 e 10 minutos para serem preparadas." },
            { q: "Tem garantia?", a: "Sim, você tem 7 dias de garantia incondicional." }
          ].map((item, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-[#1B4332]/5 shadow-sm overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-black text-[#1B4332] uppercase text-xs tracking-widest group-open:bg-[#FDF9F2]/50 outline-none">
                {item.q}
                <ArrowDown className="w-4 h-4 text-[#D64D3F] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="p-6 pt-0 text-sm opacity-70 leading-relaxed font-medium border-t border-[#1B4332]/5">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#1B4332] text-white text-center px-4">
        <div className="container mx-auto space-y-12">
          <div className="space-y-6">
            <h4 className="text-2xl font-[family-name:var(--font-anton)] uppercase">101 CAFÉS DA MANHÃ</h4>
            <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
              <a href="#" className="hover:text-[#D64D3F] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#D64D3F] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#D64D3F] transition-colors">Suporte</a>
            </div>
          </div>
          <p className="text-[10px] opacity-20 uppercase tracking-widest max-w-4xl mx-auto">
            © 2026 Todos os direitos reservados. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#1B4332]/10 p-4 z-[100] flex items-center justify-between shadow-2xl safe-area-inset-bottom">
        <div className="flex flex-col">
          <span className="text-[0.65rem] text-[#D64D3F] line-through font-black leading-none">R$ 97,00</span>
          <span className="text-2xl font-[family-name:var(--font-anton)] text-[#1B4332] leading-none">R$ 17,90</span>
        </div>
        <button className="bg-[#D64D3F] text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[0.7rem] shadow-xl animate-pulse cursor-pointer">
          COMPRAR AGORA
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
