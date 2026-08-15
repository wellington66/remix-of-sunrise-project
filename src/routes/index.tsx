import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck, ArrowRight, Minus, Plus, Zap, Clock, Smartphone, Gift, Heart, UserCheck, Play, ArrowDown, Timer } from "lucide-react";
import { useState, useEffect } from "react";
import pancakeBananaAsset from "@/assets/pancake_banana.webp.asset.json";
import paoQueijoFitAsset from "@/assets/pão_queijo_fit.webp.asset.json";
import omeleteAsset from "@/assets/omelete_mediterraneo.png.asset.json";
import panquecaPremiumAsset from "@/assets/panqueca_banana_premium.png.asset.json";
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
    <div className="min-h-screen bg-[#F5F0E8] text-[#1B4332] font-[family-name:var(--font-inter)] selection:bg-[#D64D3F]/20 overflow-x-hidden">
      {/* Dynamic Scarcity Header */}
      <div className="bg-[#D64D3F] text-white py-2 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-4 sticky top-0 z-[100] shadow-xl">
        🚨 ATENÇÃO: Desconto expira em <span className="font-mono bg-white/20 px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span>
      </div>

      {/* Hero Section - Super Conversion Focused */}
      <header className="relative pt-12 md:pt-20 pb-32 overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B4332 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-[#1B4332]/5 text-[#1B4332] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-8 border border-[#1B4332]/10">
              <Star className="w-3 h-3 fill-current" /> Método testado por +12.487 mulheres
            </span>
            
            <h1 className="text-[2.8rem] md:text-[6.5rem] font-[family-name:var(--font-anton)] uppercase leading-[0.85] tracking-tight mb-8">
              MISTURE EMAGRECIMENTO COM <br/>
              <span className="text-[#D64D3F] drop-shadow-sm">RECEITAS SABOROSAS</span> <br/>
              DE CAFÉ DA MANHÃ
            </h1>
            
            <p className="text-lg md:text-2xl text-[#1B4332]/70 font-medium mb-12 max-w-3xl mx-auto leading-tight">
              Aprenda 80 receitas de cafés da manhã <span className="text-[#1B4332] font-black underline decoration-[#D64D3F]/40 underline-offset-4">sem glúten e sem açúcar</span> que desinflamam o corpo e dão energia o dia todo.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#D64D3F]/10 rounded-[3rem] blur-2xl group-hover:bg-[#D64D3F]/20 transition-all duration-500" />
                <img 
                  src={guiaMockupAsset.url}
                  alt="Guia das 101 Receitas Mockup"
                  className="relative w-full rounded-[2.5rem] shadow-2xl border-[12px] border-white transform -rotate-1 hover:rotate-0 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 md:top-10 md:-right-10 bg-[#D64D3F] text-white w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white animate-bounce-slow">
                  <span className="text-[10px] font-bold uppercase">Apenas</span>
                  <span className="text-2xl font-[family-name:var(--font-anton)]">R$ 17,90</span>
                </div>
              </div>

              <div className="text-left space-y-8 lg:pl-8">
                <div className="space-y-5">
                  {[
                    "80 Opções práticas de 5 a 10 minutos",
                    "Sem glúten, sem lactose e sem açúcar",
                    "Ingredientes baratos de supermercado",
                    "Acabe com o inchaço matinal",
                    "5 Bônus exclusivos (Lista de compras + Detox)"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#F5F0E8]/50 p-4 rounded-2xl border border-[#1B4332]/5 hover:border-[#1B4332]/20 transition-all">
                      <CheckCircle2 className="w-6 h-6 text-[#1B4332] shrink-0" />
                      <span className="text-sm md:text-base font-bold uppercase tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4">
                  <button className="w-full bg-[#1B4332] text-white py-7 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xl md:text-2xl shadow-[0_20px_60px_rgba(27,67,50,0.3)] hover:scale-[1.02] hover:shadow-[0_25px_70px_rgba(27,67,50,0.4)] active:scale-95 transition-all relative overflow-hidden group">
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

      {/* Results Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] uppercase leading-none">
            RESULTADOS QUE VOCÊ VAI SENTIR NA PELE
          </h2>
          <div className="w-24 h-2 bg-[#D64D3F] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { img: cuscuzQueijoAsset.url, title: "CUSCUZ COM QUEIJO DERRETIDO", desc: "A versão fitness do clássico nordestino, rica em fibras e sabor." },
            { img: shakshukaAsset.url, title: "SHAKSHUKA TERMOGÊNICA", desc: "Ovos pochê em molho de tomate temperado para acelerar o metabolismo." },
            { img: bananaCrepeAsset.url, title: "CREPE DE BANANA E CANELA", desc: "Um doce saudável que sacia a vontade de sobremesa logo cedo." },
            { img: cuscuzOvoAsset.url, title: "CUSCUZ RECHEADO COM OVOS", desc: "Máxima saciedade e proteína para quem treina pela manhã." },
            { img: bananaCupcakeBowlAsset.url, title: "BOWL DE BANANA E ESPECIARIAS", desc: "Praticidade absoluta: misture tudo e tenha um café da manhã de hotel." },
            { img: crepiocaFrangoAsset.url, title: "CREPIOCA DE FRANGO CREMOSO", desc: "Opção salgada de alta performance para um dia produtivo." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[#1B4332]/5 group"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              </div>
              <div className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-anton)] uppercase tracking-tight leading-tight">{item.title}</h3>
                <p className="text-sm opacity-70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Main CTA (Urgency) */}
      <section className="py-24 bg-[#1B4332] text-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D64D3F] to-transparent" />
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-[6.5rem] font-[family-name:var(--font-anton)] leading-[0.85] uppercase">
              DEIXE O PÃO <br/>
              NO PASSADO!
            </h2>
            <p className="text-xl md:text-3xl font-[family-name:var(--font-anton)] text-[#D64D3F] uppercase tracking-wider">
              GARANTA SEU ACESSO COM 80% DE DESCONTO
            </p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-left">
                <span className="text-lg line-through opacity-40 block font-bold">DE R$ 97,00</span>
                <span className="text-8xl font-[family-name:var(--font-anton)] text-white">R$ 17,90</span>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/20" />
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2 text-[#D64D3F] font-black uppercase text-xs tracking-widest">
                  <Timer className="w-4 h-4" /> Oferta por tempo limitado
                </div>
                <p className="text-sm opacity-60">Pagamento único. <br/>Acesso vitalício ao guia.</p>
              </div>
            </div>
            
            <button className="w-full max-w-md bg-[#D64D3F] text-white py-8 rounded-full font-black uppercase tracking-[0.2em] text-2xl shadow-[0_20px_60px_rgba(214,77,63,0.4)] hover:scale-105 active:scale-95 transition-all">
              QUERO MEU E-BOOK AGORA
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60 max-w-3xl mx-auto">
            {["Acesso Imediato", "Garantia 7 Dias", "Compra Segura", "PDF Digital"].map((text, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-anton)] text-center mb-16 uppercase">
          PERGUNTAS FREQUENTES
        </h2>
        <div className="space-y-4">
          {[
            { q: "Vou receber o livro na minha casa?", a: "Não, o E-book é 100% digital (PDF). O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento." },
            { q: "As receitas são difíceis?", a: "Pelo contrário. Foram pensadas para a vida corrida, com preparos que levam de 5 a 10 minutos no máximo." },
            { q: "Preciso de ingredientes caros?", a: "Não. Utilizamos ingredientes simples que você já tem em casa ou encontra em qualquer mercado de bairro." },
            { q: "Tem garantia?", a: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." }
          ].map((item, i) => (
            <details key={i} className="group bg-white rounded-3xl border border-[#1B4332]/5 shadow-sm overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-black text-[#1B4332] uppercase text-xs md:text-sm tracking-widest group-open:bg-[#F5F0E8]/50">
                {item.q}
                <ArrowDown className="w-4 h-4 text-[#D64D3F] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="p-8 pt-0 text-sm md:text-base opacity-70 leading-relaxed font-medium border-t border-[#1B4332]/5">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#F5F0E8] border-t border-[#1B4332]/5 text-center px-4">
        <div className="container mx-auto space-y-12">
          <div className="space-y-6">
            <h4 className="text-2xl font-[family-name:var(--font-anton)] uppercase text-[#1B4332]">Chef Mônica Maciel</h4>
            <div className="flex justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#1B4332]/40">
              <a href="#" className="hover:text-[#D64D3F] transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#D64D3F] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#D64D3F] transition-colors">Suporte</a>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 opacity-20 text-[9px] font-black uppercase tracking-[0.1em] leading-relaxed">
            <p>Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
            <p>© 2026 Todos os direitos reservados. Resultados variam de pessoa para pessoa.</p>
          </div>
        </div>
      </footer>

      {/* High-Conv Sticky Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#1B4332]/10 p-5 z-[100] flex items-center justify-between shadow-[0_-15px_40px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-[10px] text-[#D64D3F] line-through font-black leading-none">R$ 97,00</span>
          <span className="text-3xl font-[family-name:var(--font-anton)] text-[#1B4332] leading-none">R$ 17,90</span>
        </div>
        <button className="bg-[#D64D3F] text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-xl animate-pulse-slow">
          COMPRAR AGORA
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
