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
    <div className="min-h-screen bg-[#F5F0E8] text-[#1B4332] font-[family-name:var(--font-inter)] selection:bg-[#D64D3F]/20 overflow-x-hidden w-full relative">
      {/* Dynamic Scarcity Header */}
      <div className="bg-[#D64D3F] text-white py-2 text-center text-[clamp(0.6rem,2vw,0.75rem)] font-black uppercase tracking-[0.2em] px-4 sticky top-0 z-[100] shadow-xl w-full">
        🚨 ATENÇÃO: Desconto expira em <span className="font-mono bg-white/20 px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span>
      </div>

      {/* Hero Section - Super Conversion Focused */}
      <header className="relative pt-[clamp(3rem,8vw,5rem)] pb-[clamp(6rem,12vw,10rem)] overflow-hidden bg-white w-full">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B4332 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="container mx-auto px-[clamp(1rem,5vw,2.5rem)] relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-[min(90vw,1200px)] mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-[#1B4332]/5 text-[#1B4332] px-4 py-2 rounded-full text-[clamp(0.6rem,1.5vw,0.75rem)] font-bold uppercase tracking-[0.15em] mb-8 border border-[#1B4332]/10">
              <Star className="w-3 h-3 fill-current" /> Método testado por +12.487 mulheres
            </span>
            
            <h1 className="text-[clamp(2.2rem,10vw,6.5rem)] font-[family-name:var(--font-anton)] uppercase leading-[0.9] tracking-tighter mb-8 break-words">
              TRANSFORME SEU <br className="hidden md:block"/>
              <span className="text-[#D64D3F] drop-shadow-sm">CAFÉ DA MANHÃ</span> <br className="hidden md:block"/>
              EM UM ALIADO DO CORPO
            </h1>
            
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-[#1B4332]/70 font-medium mb-12 max-w-[800px] mx-auto leading-tight px-2">
              Abandone o pão e descubra como <span className="text-[#1B4332] font-black underline decoration-[#D64D3F]/40 underline-offset-4">desinflamar seu corpo</span> naturalmente com receitas práticas, saborosas e que aceleram sua queima de gordura logo nas primeiras horas do dia.
            </p>

            <div className="mt-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D64D3F]/5 blur-3xl opacity-30 pointer-events-none" />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={guiaMockupUrl}
                  alt="Guia das 101 Receitas Mockup"
                  className="relative w-full h-auto max-h-[90vh] object-contain z-10 mx-auto"
                />
                {/* Floating Badge */}
                <div className="absolute top-[10%] right-[5%] md:right-[15%] bg-[#D64D3F] text-white w-[clamp(5rem,15vw,7rem)] h-[clamp(5rem,15vw,7rem)] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white animate-bounce-slow z-20">
                  <span className="text-[clamp(0.5rem,1.5vw,0.65rem)] font-bold uppercase">Apenas</span>
                  <span className="text-[clamp(1.2rem,3vw,1.5rem)] font-[family-name:var(--font-anton)]">R$ 17,90</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center mt-12">
              <div className="text-center space-y-8 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    "101 Opções práticas de 5 a 10 minutos",
                    "Sem glúten, sem lactose e sem açúcar",
                    "Ingredientes baratos de supermercado",
                    "Acabe com o inchaço matinal",
                    "5 Bônus exclusivos (Lista de compras + Detox)"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#F5F0E8]/50 p-4 rounded-2xl border border-[#1B4332]/5 hover:border-[#1B4332]/20 transition-all min-h-[44px]">
                      <CheckCircle2 className="w-6 h-6 text-[#1B4332] shrink-0" />
                      <span className="text-[clamp(0.75rem,2vw,0.875rem)] font-bold uppercase tracking-tight text-left">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 pt-4 max-w-xl mx-auto">
                  <button className="w-full bg-[#1B4332] text-white py-[clamp(1.2rem,4vw,1.75rem)] rounded-[2rem] font-black uppercase tracking-[0.2em] text-[clamp(1rem,3vw,1.5rem)] shadow-[0_20px_60px_rgba(27,67,50,0.3)] hover:scale-[1.02] hover:shadow-[0_25px_70px_rgba(27,67,50,0.4)] active:scale-95 transition-all relative overflow-hidden group min-h-[44px] cursor-pointer touch-manipulation">
                    <span className="relative z-10">SIM! QUERO MEU E-BOOK</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-[#D64D3F] text-white text-[8px] flex items-center justify-center border-2 border-white font-bold">+12k</div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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

      {/* AIDA: Interest - Why this is for them */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,10vw,4rem)] items-center max-w-7xl mx-auto">
            <div className="space-y-6 px-2">
              <h2 className="text-[clamp(1.8rem,6vw,3.5rem)] font-[family-name:var(--font-anton)] uppercase leading-[1.1]">
                O SEGREDO DE UM <br/>
                <span className="text-[#D64D3F]">CORPO LEVE</span> <br/>
                COMEÇA PELA MANHÃ
              </h2>
              <div className="w-20 h-2 bg-[#D64D3F] rounded-full" />
              <p className="text-lg text-[#1B4332]/80 leading-relaxed font-medium">
                O pão francês e os cereais "fit" do supermercado estão repletos de glúten e conservantes que geram uma cascata inflamatória no seu intestino. Isso bloqueia a queima de gordura e te deixa exausta antes mesmo das 10h da manhã.
              </p>
              <ul className="space-y-4">
                {["Fim da sonolência pós-café", "Intestino funcionando como um relógio", "Redução visível de medidas na primeira semana"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                    <CheckCircle2 className="w-5 h-5 text-[#D64D3F]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1B4332]/5 rounded-full blur-3xl" />
              <img 
                src={shakshukaUrl} 
                className="relative rounded-[clamp(1.5rem,5vw,3rem)] shadow-2xl border-8 border-[#F5F0E8] z-10 w-full h-auto object-cover aspect-[4/3] md:aspect-square" 
                alt="Transformação Saudável" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* AIDA: Desire - The Solution (Recipes) */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] uppercase leading-none">
            A SOLUÇÃO DELICIOSA PARA <br/>
            <span className="text-[#D64D3F]">VOCÊ DESINFLAMAR</span>
          </h2>
          <p className="text-[#1B4332]/60 font-bold uppercase tracking-widest text-xs">Transforme seu corpo começando pelo prato</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,4vw,2rem)] max-w-7xl mx-auto">
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
              className="bg-white rounded-[clamp(1rem,3vw,2rem)] overflow-hidden shadow-xl border border-[#1B4332]/5 group relative w-full"
            >
              <div className="aspect-[4/3] md:aspect-square overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Receita ${i + 1}`} loading="lazy" />
                <div className="absolute top-4 right-4 bg-[#D64D3F] text-white px-4 py-2 rounded-full text-xs font-black shadow-lg">
                  {item.calories}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Main CTA (Urgency) */}
      <section className="py-[clamp(4rem,10vw,8rem)] bg-[#1B4332] text-white text-center px-4 relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D64D3F] to-transparent" />
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 px-2">
            <h2 className="text-[clamp(2.5rem,8vw,6.5rem)] font-[family-name:var(--font-anton)] leading-[0.9] uppercase break-words">
              DEIXE O PÃO <br className="hidden md:block"/>
              NO PASSADO!
            </h2>
            <p className="text-[clamp(1rem,3vw,1.8rem)] font-[family-name:var(--font-anton)] text-[#D64D3F] uppercase tracking-wider px-2">
              GARANTA SEU ACESSO COM O MELHOR DESCONTO DO ANO
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Oferta 1: Somente o Guia */}
            <div className="bg-white/5 border border-white/10 p-[clamp(1.5rem,5vw,2.5rem)] rounded-[clamp(1.5rem,3vw,3rem)] backdrop-blur-md flex flex-col items-center justify-between hover:bg-white/10 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl font-black uppercase tracking-widest mb-2">Plano Essencial</h3>
                <p className="text-xs opacity-60 uppercase font-bold">Somente o Guia Digital</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-sm line-through opacity-40 block font-bold">DE R$ 47,00</span>
                <span className="text-[clamp(3rem,8vw,5rem)] font-[family-name:var(--font-anton)] text-white leading-none">R$ 17,90</span>
              </div>
              <ul className="text-left w-full space-y-3 mb-8 text-sm opacity-80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Guia com 101 Receitas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Acesso Vitalício</li>
                <li className="flex items-center gap-2 opacity-30 line-through"><Minus className="w-4 h-4" /> Bônus Exclusivos</li>
              </ul>
              <button className="w-full bg-white/20 text-white py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/30 transition-all cursor-pointer touch-manipulation">
                COMPRAR APENAS GUIA
              </button>
            </div>

            {/* Oferta 2: Guia + Bônus */}
            <div className="bg-white border-2 border-[#D64D3F] p-[clamp(1.5rem,5vw,2.5rem)] rounded-[clamp(1.5rem,3vw,3rem)] flex flex-col items-center justify-between relative shadow-[0_20px_60px_rgba(214,77,63,0.3)] scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D64D3F] text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                Mais Vendido ✨
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-black uppercase tracking-widest mb-2 text-[#1B4332]">Plano Completo</h3>
                <p className="text-xs text-[#D64D3F] uppercase font-bold">Guia + Todos os Bônus</p>
              </div>
              <div className="text-center mb-8">
                <span className="text-sm line-through text-[#1B4332]/40 block font-bold">DE R$ 97,00</span>
                <span className="text-[clamp(3rem,8vw,5rem)] font-[family-name:var(--font-anton)] text-[#1B4332] leading-none">R$ 27,90</span>
              </div>
              <ul className="text-left w-full space-y-3 mb-8 text-sm text-[#1B4332]">
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Guia com 101 Receitas</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Todos os 5 Bônus Inclusos</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Lista de Compras Inteligente</li>
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-4 h-4 text-[#D64D3F]" /> Suporte Prioritário</li>
              </ul>
              <button className="w-full bg-[#D64D3F] text-white py-5 rounded-full font-black uppercase tracking-widest text-lg shadow-[0_15px_40px_rgba(214,77,63,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer touch-manipulation">
                QUERO O COMBO COMPLETO
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60 max-w-3xl mx-auto px-2">
            {["Acesso Imediato", "Garantia 7 Dias", "Compra Segura", "PDF Digital"].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-[clamp(1.2rem,3vw,1.5rem)] h-[clamp(1.2rem,3vw,1.5rem)]" />
                <span className="text-[clamp(0.5rem,1.5vw,0.65rem)] font-bold uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 container mx-auto px-4 max-w-3xl">
        <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-[family-name:var(--font-anton)] text-center mb-[clamp(2rem,6vw,4rem)] uppercase px-2">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="space-y-4 px-2">
          {[
            { q: "Vou receber o livro na minha casa?", a: "Não, o E-book é 100% digital (PDF). O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento." },
            { q: "As receitas são difíceis?", a: "Pelo contrário. Foram pensadas para a vida corrida, com preparos que levam de 5 a 10 minutos no máximo." },
            { q: "Preciso de ingredientes caros?", a: "Não. Utilizamos ingredientes simples que você já tem em casa ou encontra em qualquer mercado de bairro." },
            { q: "Tem garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." }
          ].map((item, i) => (
            <details key={i} className="group bg-white rounded-[clamp(1rem,2vw,1.5rem)] border border-[#1B4332]/5 shadow-sm overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between p-[clamp(1rem,3vw,1.5rem)] cursor-pointer list-none font-black text-[#1B4332] uppercase text-[clamp(0.65rem,1.8vw,0.85rem)] tracking-widest group-open:bg-[#F5F0E8]/50 outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332]/20">
                {item.q}
                <ArrowDown className="w-4 h-4 text-[#D64D3F] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="p-[clamp(1rem,3vw,1.5rem)] pt-0 text-[clamp(0.875rem,2vw,1rem)] opacity-70 leading-relaxed font-medium border-t border-[#1B4332]/5">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-[clamp(3rem,8vw,5rem)] bg-[#F5F0E8] border-t border-[#1B4332]/5 text-center px-4 w-full mb-[80px] md:mb-0">
        <div className="container mx-auto space-y-12">
          <div className="space-y-6">
            <h4 className="text-[clamp(1.2rem,3vw,1.5rem)] font-[family-name:var(--font-anton)] uppercase text-[#1B4332]">Chef Mônica Maciel</h4>
            <div className="flex flex-wrap justify-center gap-[clamp(1rem,4vw,2rem)] text-[clamp(0.5rem,1.5vw,0.65rem)] font-black uppercase tracking-[0.2em] text-[#1B4332]/40">
              <a href="#" className="hover:text-[#D64D3F] transition-colors p-2">Privacidade</a>
              <a href="#" className="hover:text-[#D64D3F] transition-colors p-2">Termos</a>
              <a href="#" className="hover:text-[#D64D3F] transition-colors p-2">Suporte</a>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 opacity-20 text-[clamp(0.5rem,1.2vw,0.6rem)] font-black uppercase tracking-[0.1em] leading-relaxed px-4">
            <p>Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
            <p>© 2026 Todos os direitos reservados. Resultados variam de pessoa para pessoa.</p>
          </div>
        </div>
      </footer>

      {/* High-Conv Sticky Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#1B4332]/10 p-4 z-[100] flex items-center justify-between shadow-[0_-15px_40px_rgba(0,0,0,0.1)] safe-area-inset-bottom">
        <div className="flex flex-col">
          <span className="text-[0.65rem] text-[#D64D3F] line-through font-black leading-none">R$ 97,00</span>
          <span className="text-[1.8rem] font-[family-name:var(--font-anton)] text-[#1B4332] leading-none">R$ 17,90</span>
        </div>
        <button className="bg-[#D64D3F] text-white px-6 py-3 rounded-full font-black uppercase tracking-widest text-[0.7rem] shadow-xl animate-pulse-slow min-h-[44px] cursor-pointer touch-manipulation">
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
          will-change: transform;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(12deg); }
          50% { transform: translate3d(0, -10px, 0) rotate(12deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale3d(1, 1, 1); }
          50% { transform: scale3d(1.05, 1.05, 1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
