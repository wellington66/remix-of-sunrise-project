import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck, Zap, ArrowDown, Timer, Calendar, Coffee, Utensils, Smartphone, Gift, Minus } from "lucide-react";
import { useState, useEffect } from "react";

// Caminhos estáticos robustos para a pasta public/assets
const heroBookUrl = "/assets/hero-book.png";
const kitBundleUrl = "/assets/kit-bundle.png";
const lifestyleHeroUrl = "/assets/lifestyle-hero.jpg";
const bonusDesincharUrl = "/assets/bonus-desinchar.png";
const bonusListaUrl = "/assets/bonus-lista.png";
const bonusPlanejamentoUrl = "/assets/bonus-planejamento.png";
const bonusLanchesUrl = "/assets/bonus-lanches.png";
const bonusSobremesasUrl = "/assets/bonus-sobremesas.png";

const cuscuzQueijoUrl = "/assets/cuscuz_queijo.png";
const shakshukaUrl = "/assets/shakshuka.png";
const bananaCrepeUrl = "/assets/banana_crepe.png";
const cuscuzOvoUrl = "/assets/cuscuz_ovo.png";
const bananaCupcakeBowlUrl = "/assets/banana_cupcake_bowl.png";
const crepiocaFrangoUrl = "/assets/crepioca_frango.png";
const omeleteEspecialUrl = "/__l5e/assets-v1/1ee31db0-2d66-4a51-9203-96a3a7656cb6/omelete_misto.png";

/** Links de checkout (Cakto) */
const CHECKOUT_ESSENCIAL = "https://pay.cakto.com.br/yxpuem5"; // R$ 17,90
const CHECKOUT_COMBO = "https://pay.cakto.com.br/3ck4gyx_1043502"; // R$ 27,90
const CHECKOUT_DESCONTO = "https://pay.cakto.com.br/7isvqqv"; // R$ 23,90 (downsell)


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "101 Receitas de Café da Manhã para Substituir o Pão" },
      { name: "description", content: "Descubra 101 receitas deliciosas e saudáveis para transformar seu café da manhã, emagrecer com saúde e eliminar o inchaço matinal." },
      { property: "og:title", content: "101 Receitas de Café da Manhã - Substitua o Pão" },
      { property: "og:description", content: "Receitas práticas, deliciosas e nutritivas para começar o dia com energia." },
      { name: "twitter:card", content: "summary_large_image" }
    ],
  }),
});

/** Estrutura tipada dos depoimentos: `stars` é opcional (default 5). */
interface Testimonial {
  name: string;
  date: string;
  text: string;
  likes: number;
  avatar: string;
  stars?: number;
}

function Index() {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos em segundos
  const [showDownsell, setShowDownsell] = useState(false);
  const [downsellShown, setDownsellShown] = useState(false);

  const openDownsell = () => {
    setDownsellShown(true);
    setShowDownsell(true);
  };

  // Exit intent: exibe a oferta com desconto uma única vez ao sair da página (desktop).
  useEffect(() => {
    if (downsellShown) return;
    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget) {
        setDownsellShown(true);
        setShowDownsell(true);
      }
    };
    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [downsellShown]);



  useEffect(() => {
    // Causa raiz do bug anterior: o intervalo continuava executando (e re-renderizando)
    // indefinidamente mesmo após o contador chegar a zero. Agora ele se auto-encerra.
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const safeSeconds = Math.max(0, seconds);
    const mins = Math.floor(safeSeconds / 60);
    const secs = safeSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };


  return (
    <div className="min-h-screen bg-white text-[#1B4332] font-[family-name:var(--font-inter)] selection:bg-[#D64D3F]/20 overflow-x-hidden w-full relative pb-24 md:pb-0">
      {/* Top Banner */}
      <div className="bg-[#1B4332]/5 text-[#1B4332] py-2 text-center text-[10px] font-bold uppercase tracking-widest border-b border-[#1B4332]/10">
        101 CAFÉS DA MANHÃ SAUDÁVEIS PARA SUBSTITUIR O PÃO
      </div>

      {/* Dynamic Scarcity Header */}
      <div className="bg-brand-red text-white py-2.5 text-center text-[clamp(0.65rem,2.2vw,0.85rem)] font-black uppercase tracking-[0.25em] px-4 sticky top-0 z-[100] shadow-2xl w-full border-b border-white/10">
        🚨 ATENÇÃO: Desconto expira em <span className="font-mono bg-white/30 px-2 py-0.5 rounded ml-1 tabular-nums">{formatTime(timeLeft)}</span>
      </div>

      {/* Hero Section */}
      <header className="relative pt-8 pb-12 bg-white w-full">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[clamp(1.5rem,5vw,2.5rem)] font-black text-[#1B4332] leading-tight mb-8 uppercase">
            101 CAFÉS DA MANHÃ SAUDÁVEIS <br/>
            <span className="text-[#1B4332]/60">PARA SUBSTITUIR O PÃO</span>
          </h1>
          
          <div className="relative max-w-5xl mx-auto mb-12 bg-transparent group">
            <div className="absolute inset-0 bg-brand-red/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <img 
              src={lifestyleHeroUrl}
              alt="Guia Mockup Premium"
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)] group-hover:scale-[1.02] transition-transform duration-700 relative z-10"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="text-[#1B4332] font-black">
              <span className="text-sm">POR APENAS</span>
              <div className="text-4xl font-[family-name:var(--font-anton)]">R$ 17,90</div>
            </div>
            <a href={CHECKOUT_ESSENCIAL} className="inline-block text-center bg-transparent border-2 border-[#2D6A4F] text-[#2D6A4F] px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-sm hover:bg-[#2D6A4F]/5 hover:scale-105 transition-all cursor-pointer">
              QUERO AS RECEITAS AGORA
            </a>

            <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold text-[#1B4332]/60">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3"/> ACESSO IMEDIATO</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3"/> COMPRA SEGURA</span>
              <span className="flex items-center gap-1 bg-brand-red/10 text-brand-red px-2 py-1 rounded-full"><Gift className="w-3 h-3"/> 15 DIAS DE GARANTIA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <div className="bg-[#1B4332]/5 text-[#1B4332] py-6 overflow-hidden border-y border-[#1B4332]/10">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em]">
              <Star className="w-4 h-4 fill-brand-red text-brand-red" />
              RECEITAS PRÁTICAS
              <Star className="w-4 h-4 fill-brand-red text-brand-red" />
              SEM GLÚTEN
              <Star className="w-4 h-4 fill-brand-red text-brand-red" />
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
                <span className="text-brand-red">NO CAFÉ DA MANHÃ?</span>
              </h2>
              <div className="w-20 h-2 bg-brand-red rounded-full mx-auto lg:mx-0" />
              <p className="text-lg text-[#1B4332]/80 leading-relaxed font-medium">
                O pão é rápido, prático e faz parte da rotina, mas muita gente acaba comendo sempre a mesma coisa por falta de ideias simples e saudáveis. Isso acontece com você?
              </p>
              <ul className="space-y-4 text-left inline-block">
                {["Fim da sonolência pós-café", "Intestino funcionando como um relógio", "Redução visível de medidas na primeira semana"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                    <CheckCircle2 className="w-5 h-5 text-brand-red" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <a href={CHECKOUT_COMBO} className="inline-block text-center bg-brand-red text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform cursor-pointer w-full lg:w-auto ring-4 ring-brand-red/20">
                  QUERO SAIR DA ROTINA DO PÃO
                </a>

              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1B4332]/5 rounded-full blur-3xl opacity-50" />
              <div className="relative group overflow-hidden rounded-[clamp(1.5rem,5vw,3rem)] shadow-[0_20px_60px_rgba(27,67,50,0.15)]">
                <img 
                  src={omeleteEspecialUrl} 
                  className="w-full h-auto object-cover aspect-square border-8 border-white transition-transform duration-700 group-hover:scale-105" 
                  alt="Transformação Saudável - Omelete Especial" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Banner Section (Moved) */}
      <div className="py-12 flex flex-col items-center justify-center text-center px-4">
        <div className="w-px h-12 bg-brand-red/30 mb-6" />
        <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] mb-8">
          EXISTE UMA FORMA MELHOR
        </span>
        <div className="w-px h-12 bg-brand-red/30 mb-12" />
        
        <div className="w-full max-w-3xl bg-gradient-to-br from-brand-red to-brand-red/90 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 transition-transform group-hover:scale-110">
            <Timer className="w-32 h-32" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <Timer className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl md:text-4xl font-[family-name:var(--font-anton)] uppercase leading-tight">
              ATENÇÃO! ESSA OFERTA ENCERRA HOJE!
            </h3>
            <p className="text-sm md:text-base font-medium opacity-90 max-w-xl mx-auto">
              Após o encerramento, o preço volta ao normal. <span className="font-black underline decoration-2 underline-offset-4">Garanta agora com 76% de desconto.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Recipe Gallery */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] uppercase leading-none text-[#1B4332]">
            VEJA O QUE VOCÊ VAI <br/>
            <span className="text-brand-red">ENCONTRAR NO GUIA</span>
          </h2>
          <p className="text-[#1B4332]/60 font-bold uppercase tracking-widest text-xs">Transforme sua saúde com cada refeição</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { img: cuscuzQueijoUrl, title: "Cuscuz de Milho com Queijo Coalho", calories: "185 kcal", time: "10 min", level: "Fácil" },
            { img: omeleteEspecialUrl, title: "Omelete Premium Low Carb", calories: "210 kcal", time: "08 min", level: "Mestre" },
            { img: bananaCrepeUrl, title: "Crepe Fit de Banana e Canela", calories: "195 kcal", time: "12 min", level: "Médio" },
            { img: cuscuzOvoUrl, title: "Cuscuz Nordestino com Ovo", calories: "220 kcal", time: "10 min", level: "Fácil" },
            { img: bananaCupcakeBowlUrl, title: "Muffin de Banana em 5 Minutos", calories: "175 kcal", time: "05 min", level: "Rápido" },
            { img: crepiocaFrangoUrl, title: "Crepioca de Frango Desfiado", calories: "245 kcal", time: "15 min", level: "Completo" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#1B4332]/5 group relative w-full flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1B4332] px-3 py-1.5 rounded-full text-[9px] font-black shadow-sm z-10 border border-[#1B4332]/5">
                  {item.level}
                </div>
                <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1.5 rounded-full text-[9px] font-black shadow-lg z-10">
                  {item.calories}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-sm font-black text-[#1B4332] uppercase tracking-tight leading-tight group-hover:text-brand-red transition-colors">{item.title}</h3>
                <div className="flex items-center gap-4 text-[9px] font-bold text-[#1B4332]/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Timer className="w-3 h-3" /> {item.time}</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3" /> Saudável</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
              Oferta Limitada 🎁
            </span>
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] uppercase leading-none text-[#1B4332]">
              GANHE 5 BÔNUS <br/>
              <span className="text-brand-red">EXCLUSIVOS HOJE</span>
            </h2>
            <p className="text-[#1B4332]/60 font-bold uppercase tracking-widest text-xs">Aumente seus resultados com materiais complementares</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
            {[
              { 
                title: "Café da Manhã para Desinchar", 
                desc: "Receitas anti-inflamatórias.",
                value: "R$ 47,00",
                icon: <Zap className="w-4 h-4 md:w-8 md:h-8 text-brand-red" />,
                img: bonusDesincharUrl
              },
              { 
                title: "Lista de Compras Econômica", 
                desc: "Saiba exatamente o que comprar.",
                value: "R$ 29,00",
                icon: <Smartphone className="w-4 h-4 md:w-8 md:h-8 text-brand-red" />,
                img: bonusListaUrl
              },
              { 
                title: "Planejamento Semanal Pronto", 
                desc: "Organização para toda a semana.",
                value: "R$ 37,00",
                icon: <Calendar className="w-4 h-4 md:w-8 md:h-8 text-brand-red" />,
                img: bonusPlanejamentoUrl
              },
              { 
                title: "Guia de Lanches Saudáveis", 
                desc: "Ideias práticas e leves.",
                value: "R$ 39,00",
                icon: <Coffee className="w-4 h-4 md:w-8 md:h-8 text-brand-red" />,
                img: bonusLanchesUrl
              },
              { 
                title: "+50 Sobremesas Zero Açúcar", 
                desc: "Doces práticos e sem culpa.",
                value: "R$ 57,00",
                icon: <Utensils className="w-4 h-4 md:w-8 md:h-8 text-brand-red" />,
                img: bonusSobremesasUrl
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-[#1B4332]/5 flex flex-col items-center text-center group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all overflow-hidden shadow-sm">
                <div className="w-full aspect-[4/5] overflow-hidden relative bg-gradient-to-b from-white to-[#FDF9F2]/20 flex items-center justify-center p-4 md:p-8">
                  <img 
                    src={bonus.img} 
                    alt={bonus.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                  />
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl shadow-sm border border-[#1B4332]/5">
                    {bonus.icon}
                  </div>
                </div>
                <div className="p-3 md:p-8 flex flex-col items-center flex-grow">
                  <h3 className="text-[10px] md:text-xl font-black text-[#1B4332] uppercase mb-1 md:mb-2 leading-tight">{bonus.title}</h3>
                  <p className="hidden md:block text-sm opacity-60 font-medium mb-6 leading-relaxed">{bonus.desc}</p>
                  <div className="mt-auto">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-brand-red line-through block opacity-50">DE {bonus.value}</span>
                    <span className="text-[9px] md:text-sm font-black uppercase tracking-widest text-[#1B4332]">POR R$ 0,00</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Total Value Summary */}
            <div className="col-span-2 md:col-span-1 bg-[#1B4332]/5 border-2 border-[#1B4332]/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center justify-center text-center text-[#1B4332] relative overflow-hidden group min-h-[200px] md:min-h-[400px]">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Gift className="w-16 h-16 md:w-32 md:h-32" />
              </div>
              <h3 className="text-lg md:text-2xl font-[family-name:var(--font-anton)] uppercase mb-2 md:mb-4 relative z-10">VALOR TOTAL DOS BÔNUS</h3>
              <div className="text-3xl md:text-4xl font-[family-name:var(--font-anton)] text-brand-red mb-1 md:mb-2 relative z-10">R$ 209,00</div>
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60 relative z-10">Tudo incluso no Plano Completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white text-[#1B4332] text-center px-4 relative overflow-hidden w-full">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-[family-name:var(--font-anton)] leading-[0.9] uppercase">
              ESCOLHA SEU PLANO
            </h2>
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm">Acesso imediato após a confirmação</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-12">
            {/* Essential */}
            <div className="bg-white border border-[#1B4332]/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all text-[#1B4332] group relative">
              {/* Pointer content moved below the CTA */}

              <div className="w-full aspect-square mb-8 overflow-hidden flex items-center justify-center p-8 bg-white rounded-[2.5rem] border border-[#1B4332]/5 shadow-inner">
                <img 
                  src={heroBookUrl} 
                  alt="Plano Essencial"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-black uppercase tracking-widest mb-2">Plano Essencial</h3>
                <p className="text-xs opacity-60 uppercase font-bold">Guia Digital em PDF</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-sm line-through opacity-40 block font-bold">DE R$ 47,00</span>
                <span className="text-5xl font-[family-name:var(--font-anton)] text-[#1B4332]">R$ 17,90</span>
              </div>
              <ul className="text-left w-full space-y-4 mb-8 text-sm opacity-80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Guia com 101 Receitas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red" /> Acesso Vitalício</li>
                <li className="flex items-center gap-2 opacity-30 line-through"><Minus className="w-4 h-4" /> Bônus Exclusivos</li>
              </ul>
              <button type="button" onClick={openDownsell} className="w-full mt-auto bg-transparent border-2 border-[#1B4332] text-[#1B4332] py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#1B4332]/5 hover:scale-105 transition-all cursor-pointer">
                QUERO O GUIA
              </button>

              
              {/* Pointer to the better offer - Positioned below the first CTA */}
              <div className="mt-8 flex flex-col items-center w-full group/pointer">
                <div className="bg-brand-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl animate-pulse whitespace-nowrap border-2 border-white/20">
                  ⚠️ 98% DAS PESSOAS ESCOLHEM O PLANO COMPLETO
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 text-brand-red font-black text-[10px] uppercase tracking-tighter">
                  <span>VEJA POR QUE</span>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="hidden md:block"
                  >
                    <ArrowDown className="w-5 h-5 -rotate-90" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="md:hidden"
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </div>


            {/* Complete */}
            <div className="bg-white border-4 border-brand-red p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col items-center relative shadow-[0_50px_100px_rgba(186,28,28,0.2)] md:scale-110 z-10 group ring-8 ring-brand-red/5">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-red text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap shadow-2xl animate-bounce">
                OFERTA MAIS POPULAR ✨
              </div>
              <div className="w-full aspect-square mb-8 overflow-hidden flex items-center justify-center p-8 bg-white rounded-[2.5rem] border border-brand-red/10 shadow-[inset_0_0_20px_rgba(186,28,28,0.02)]">
                <img 
                  src={kitBundleUrl} 
                  alt="Plano Completo"
                  className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(186,28,28,0.2)] transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-2 text-[#1B4332]">Plano Completo</h3>
                <p className="text-sm text-brand-red uppercase font-black tracking-widest">Guia + Todos os 5 Bônus</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-sm line-through text-[#1B4332]/40 block font-bold">DE R$ 97,00</span>
                <span className="text-6xl md:text-7xl font-[family-name:var(--font-anton)] text-[#1B4332] drop-shadow-sm">R$ 27,90</span>
              </div>
              <ul className="text-left w-full space-y-4 mb-8 text-sm text-[#1B4332]">
                <li className="flex items-center gap-3 font-black text-base"><CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" /> Guia com 101 Receitas</li>
                <li className="flex items-center gap-3 font-black text-base text-brand-red"><CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" /> +5 BÔNUS EXCLUSIVOS</li>
                <li className="flex items-center gap-3 font-black text-base"><CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" /> Guia de Sucos Detox</li>
                <li className="flex items-center gap-3 font-black text-base"><CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" /> Suporte Prioritário VIP</li>
              </ul>
              <a href={CHECKOUT_COMBO} className="block text-center w-full mt-auto bg-brand-red text-white py-8 rounded-full font-black uppercase tracking-[0.2em] text-xl shadow-[0_20px_40px_rgba(186,28,28,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer ring-4 ring-white/20 animate-pulse-ring">
                EU QUERO O COMBO COMPLETO!
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* Urgency Divider 2 */}
      <div className="py-12 flex flex-col items-center justify-center text-center px-4">
        <div className="w-px h-12 bg-brand-red/30 mb-6" />
        <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] mb-8">
          TIRE SUAS DÚVIDAS
        </span>
        <div className="w-px h-12 bg-brand-red/30 mb-12" />
        
        <div className="w-full max-w-3xl bg-[#1B4332]/5 border-2 border-[#1B4332]/10 rounded-[2rem] p-8 md:p-12 text-[#1B4332] shadow-sm relative overflow-hidden group">
          <div className="absolute -bottom-10 -left-10 p-8 opacity-10 rotate-12 transition-transform group-hover:scale-110">
            <ShieldCheck className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-[family-name:var(--font-anton)] uppercase leading-tight mb-4">
              VOCÊ ESTÁ 100% SEGURA
            </h3>
            <p className="text-sm opacity-80 max-w-xl mx-auto mb-6">
              Sua satisfação é nossa prioridade. Se em <span className="font-black text-brand-red underline decoration-2 underline-offset-4">15 dias</span> você não amar as receitas, devolvemos cada centavo.
            </p>
            <div className="flex justify-center gap-4">
              <ShieldCheck className="w-8 h-8 text-brand-red" />
              <CheckCircle2 className="w-8 h-8 text-brand-red" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#FDF9F2]/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[clamp(2rem,6vw,4rem)] font-[family-name:var(--font-anton)] uppercase leading-[0.9] text-[#1B4332]">
              2.425 PESSOAS JÁ <br/>
              <span className="text-brand-red">TRANSFORMARAM A COZINHA</span>
            </h2>
            <p className="text-sm font-medium opacity-60">Resultados reais de quem aplicou as receitas na prática</p>
          </div>

          {/* Rating Summary Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#1B4332]/5 mb-16 flex flex-col md:flex-row items-center gap-12">
            <div className="text-center md:border-r md:border-[#1B4332]/10 md:pr-12">
              <div className="text-6xl md:text-8xl font-[family-name:var(--font-anton)] text-brand-red leading-none mb-4">4.9</div>
              <div className="flex justify-center gap-1 mb-2">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40">2.087 avaliações</div>
            </div>
            
            <div className="flex-grow w-full space-y-3">
              {[
                { star: 5, width: "92%" },
                { star: 4, width: "7%" },
                { star: 3, width: "1%" },
                { star: 2, width: "0%" },
                { star: 1, width: "0%" }
              ].map((row) => (
                <div key={row.star} className="flex items-center gap-4">
                  <span className="text-xs font-bold opacity-40 w-4">{row.star}</span>
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <div className="flex-grow h-2 bg-[#1B4332]/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: row.width }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-yellow-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {([

              {
                name: "Patrícia Almeida",
                date: "18 de fevereiro de 2026",
                text: "Fiz a crepioca de frango e minha família pediu pra repetir no dia seguinte!",
                likes: 103,
                avatar: "https://i.pravatar.cc/150?u=patricia"
              },
              {
                name: "Roberta Mendes",
                date: "27 de fevereiro de 2026",
                text: "MARAVILHOSO, muita variedade, tá me ajudando bastante na cozinha. Nem acredito que ele é esse valor.",
                likes: 98,
                avatar: "https://i.pravatar.cc/150?u=roberta"
              },
              {
                name: "Rafael Cardoso",
                date: "10 de janeiro de 2026",
                text: "Gostei muito porque não parece aquelas receitas difíceis de dieta. São ideias práticas mesmo, com ingredientes que eu já tenho em casa.",
                likes: 87,
                stars: 4,
                avatar: "https://i.pravatar.cc/150?u=rafael"
              },
              {
                name: "Juliana Ribeiro",
                date: "5 de fevereiro de 2026",
                text: "Nunca imaginei que dava pra fazer tanta coisa no café da manhã! Já testei 4 receitas e todas ficaram uma delícia!",
                likes: 142,
                avatar: "https://i.pravatar.cc/150?u=juliana"
              },
              {
                name: "Bruno Martins",
                date: "23 de janeiro de 2026",
                text: "Eu queria diminuir o pão, mas não sabia o que comer no lugar. O material me ajudou demais, principalmente pelas receitas rápidas.",
                likes: 76,
                avatar: "https://i.pravatar.cc/150?u=bruno"
              },
              {
                name: "Camila Nogueira",
                date: "12 de março de 2026",
                text: "Comprei e já fiz a Vitamina de Morango com Banana... ficou incrível! Recomendo pra quem quer economizar e comer bem logo de manhã.",
                likes: 119,
                stars: 4,
                avatar: "https://i.pravatar.cc/150?u=camila"
              }
            ] satisfies Testimonial[]).map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#1B4332]/5 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} className="w-10 h-10 rounded-full border border-[#1B4332]/10" alt={t.name} />
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#1B4332]">{t.name}</span>
                      <span className="text-[10px] opacity-40 font-bold uppercase">{t.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array(5).fill(null).map((_, idx) => (
                      <Star key={idx} className={`w-3 h-3 ${idx < (t.stars || 5) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed text-[#1B4332]/80 mb-6 flex-grow italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#1B4332]/5 text-[10px] font-black uppercase tracking-widest opacity-40">
                  <span className="flex items-center gap-1.5 text-brand-red opacity-100">❤️ {t.likes}</span>
                  <button type="button" className="hover:text-[#1B4332] transition-colors">Curtir</button>
                  <button type="button" className="hover:text-[#1B4332] transition-colors">Comentar</button>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-[family-name:var(--font-anton)] mb-12 uppercase text-[#1B4332]">
              DÚVIDAS <br/>
              <span className="text-brand-red">FREQUENTES</span>
            </h2>
            <div className="space-y-4">
              {[
                { q: "Vou receber o livro em casa?", a: "Não, o guia é 100% digital em PDF. Você recebe o acesso no seu e-mail imediatamente." },
                { q: "As receitas são rápidas?", a: "Sim, todas as receitas levam entre 5 e 10 minutos para serem preparadas." },
                { q: "Tem garantia?", a: "Sim, você tem 15 dias de garantia incondicional." }
              ].map((item, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-[#1B4332]/5 shadow-sm overflow-hidden transition-all duration-300">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-black text-[#1B4332] uppercase text-[10px] tracking-widest group-open:bg-[#FDF9F2]/50 outline-none">
                    {item.q}
                    <ArrowDown className="w-4 h-4 text-brand-red transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="p-6 pt-0 text-sm opacity-70 leading-relaxed font-medium border-t border-[#1B4332]/5">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="bg-brand-red/5 p-8 rounded-[2.5rem] border border-brand-red/10 w-full">
              <h3 className="text-xl font-black text-[#1B4332] uppercase mb-4">Ainda tem alguma dúvida?</h3>
              <p className="text-sm font-medium opacity-60 mb-6">Nossa equipe de suporte está pronta para te ajudar a qualquer momento.</p>
              <button type="button" className="w-full bg-[#1B4332] text-white py-4 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center justify-center gap-3">

                <Smartphone className="w-4 h-4" /> Falar com Suporte
              </button>
            </div>
            <div className="group flex items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">

              <ShieldCheck className="w-10 h-10" />
              <Star className="w-10 h-10" />
              <Zap className="w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white text-[#1B4332] border-t border-[#1B4332]/5 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-3xl font-[family-name:var(--font-anton)] uppercase tracking-tight">
                101 CAFÉS <br/>
                <span className="text-brand-red">DA MANHÃ</span>
              </h4>
              <p className="text-sm font-medium opacity-60 leading-relaxed max-w-xs mx-auto md:mx-0">
                Ajudamos você a transformar a sua saúde através de um café da manhã nutritivo, prático e sem glúten.
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1B4332]/5 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#1B4332]/5 flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#1B4332]/5 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#1B4332]" />
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Segurança & Qualidade
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end justify-center space-y-6">
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red">Privacidade</a>
                <a href="#" className="hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red">Termos</a>
                <a href="#" className="hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red">Suporte</a>
              </div>
              <div className="flex items-center gap-3 bg-[#1B4332]/5 px-4 py-2 rounded-full border border-[#1B4332]/5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Servidor Online</span>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-[#1B4332]/5 text-center space-y-4">
            <p className="text-[9px] opacity-30 uppercase tracking-[0.25em] max-w-3xl mx-auto leading-loose">
              © 2026 101 CAFÉS DA MANHÃ. TODOS OS DIREITOS RESERVADOS. <br/>
              ESTE SITE NÃO FAZ PARTE DO GOOGLE OU FACEBOOK. OS RESULTADOS VARIAM DE PESSOA PARA PESSOA.
            </p>
          </div>
        </div>
        
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B4332]/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#1B4332]/10 p-4 z-[100] flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.08)] safe-area-inset-bottom">
        <div className="flex flex-col">
          <span className="text-[0.6rem] text-brand-red line-through font-black leading-none opacity-50">R$ 47,00</span>
          <div className="flex items-baseline gap-1">
            <span className="text-[0.7rem] font-bold text-[#1B4332]/60">R$</span>
            <span className="text-2xl font-[family-name:var(--font-anton)] text-[#1B4332] leading-none">17,90</span>
          </div>
        </div>
        <button type="button" onClick={openDownsell} className="bg-brand-red text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[0.7rem] shadow-xl animate-pulse active:scale-95 transition-transform cursor-pointer">
          COMPRAR AGORA
        </button>
      </div>

      {/* Pop-up de desconto (saída + clique na oferta essencial) */}
      {showDownsell && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Oferta com desconto"
        >
          <div className="relative bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl border-4 border-brand-red">
            <button
              type="button"
              onClick={() => setShowDownsell(false)}
              aria-label="Fechar"
              className="absolute top-3 right-4 text-[#1B4332]/40 hover:text-[#1B4332] text-2xl font-black"
            >
              ×
            </button>
            <span className="inline-block bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Espere! Desconto exclusivo
            </span>
            <h3 className="text-2xl font-black uppercase text-[#1B4332] mb-3 leading-tight">
              Leve o guia completo com desconto
            </h3>
            <p className="text-sm text-[#1B4332]/70 mb-5">
              Só por agora: destrave o guia com <strong>tudo incluso</strong> por um preço menor.
            </p>
            <div className="mb-6">
              <span className="block text-sm line-through opacity-40 font-bold">DE R$ 27,90</span>
              <span className="text-5xl font-[family-name:var(--font-anton)] text-brand-red">R$ 23,90</span>
            </div>
            <a
              href={CHECKOUT_DESCONTO}
              className="block w-full bg-brand-red text-white py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform"
            >
              Quero com desconto
            </a>
            <button
              type="button"
              onClick={() => setShowDownsell(false)}
              className="mt-4 text-[11px] font-bold uppercase tracking-widest text-[#1B4332]/40 hover:text-[#1B4332]"
            >
              Não, prefiro pagar mais caro
            </button>
          </div>
        </div>
      )}


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
