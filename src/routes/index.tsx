import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Zap, Star, ShieldCheck, ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activePlan, setActivePlan] = useState("premium");

  return (
    <div className="min-h-screen bg-[#FCFBF8] text-[#2D2D2D] font-[family-name:var(--font-inter)] selection:bg-primary/20">
      {/* Top Banner */}
      <div className="bg-[#1A4D2E] text-white py-2 text-center text-xs font-bold uppercase tracking-wider">
        Oferta exclusiva disponível por tempo limitado
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-anton)] text-[#1A4D2E] uppercase leading-none tracking-tight">
            80 Cafés da Manhã Saudáveis
            <span className="block text-[#E67E22] mt-2">Para Substituir o Pão</span>
          </h1>
          <p className="text-xl md:text-2xl font-[family-name:var(--font-bebas)] text-[#4A4A4A] tracking-wide">
            Sem glúten, sem açúcar e sem complicação
          </p>
        </motion.div>

        <div className="mt-12 relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 w-full md:w-1/2 max-w-[450px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
              alt="E-book Mockup"
              className="rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(26,77,46,0.25)] border-8 border-white transform -rotate-2"
            />
            <div className="absolute -top-6 -right-6 bg-[#E67E22] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-lg transform rotate-12 border-4 border-white">
              <span className="text-xs uppercase">Apenas</span>
              <span className="text-xl">R$ 17</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="md:w-1/2 text-left space-y-8"
          >
            <div className="space-y-4">
              {[
                "80 Receitas exclusivas testadas e aprovadas",
                "Opções doces e salgadas sem glúten",
                "Preparos rápidos de até 5 a 10 minutos",
                "Ingredientes simples que você tem em casa",
                "Ideal para quem quer emagrecer comendo bem"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-[#1A4D2E]/10 rounded-full p-1 group-hover:bg-[#1A4D2E] transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#1A4D2E] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#E67E22] text-white py-6 rounded-2xl font-bold text-2xl uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(230,126,34,0.4)] hover:bg-[#D35400] transition-all"
              >
                Quero meu guia agora
              </motion.button>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Compra Segura</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> 4.9/5 (2.5k+ Alunos)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="bg-white py-24 border-y border-[#1A4D2E]/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-bebas)] text-[#1A4D2E] tracking-wider uppercase">
              Por que substituir o pão pelo nosso guia?
            </h2>
            <p className="text-lg text-muted-foreground">
              O pão branco comum causa picos de insulina e inflamação. Nosso guia oferece alternativas nutritivas que mantêm sua saciedade por horas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-10 h-10" />, title: "Tempo é Vida", desc: "Receitas ultra-rápidas para quem não tem tempo a perder de manhã." },
              { icon: <Zap className="w-10 h-10" />, title: "Energia Constante", desc: "Ingredientes de baixo índice glicêmico que evitam o cansaço pós-refeição." },
              { icon: <Star className="w-10 h-10" />, title: "Sabor Irresistível", desc: "Você não vai sentir falta do pão. Panquecas, crepiocas e bowls deliciosos." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#FCFBF8] p-10 rounded-[2.5rem] border border-[#1A4D2E]/10 text-center space-y-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="inline-flex p-5 bg-[#1A4D2E]/5 rounded-3xl text-[#1A4D2E]">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide text-[#1A4D2E]">{item.title}</h3>
                <p className="text-[#5A5A5A] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Recipes */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 text-left max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] text-[#1A4D2E] uppercase leading-none">
              Dê uma espiada no que te espera
            </h2>
            <p className="text-xl text-muted-foreground font-medium">80 combinações exclusivas que vão transformar suas manhãs.</p>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[#E67E22] font-bold uppercase tracking-widest group"
          >
            Ver catálogo completo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="flex gap-6 px-4 md:px-0 container mx-auto overflow-x-auto pb-8 snap-x no-scrollbar">
          {[
            { src: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=600&auto=format&fit=crop", title: "Panqueca de Banana Fit", time: "8 min" },
            { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop", title: "Omelete Mediterrâneo", time: "5 min" },
            { src: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop", title: "Crepioca de Espinafre", time: "6 min" },
            { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop", title: "Bowl de Frutas Tropicais", time: "4 min" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className="flex-shrink-0 w-[300px] md:w-[400px] group cursor-pointer snap-start"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-lg">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full mb-3">{item.time}</span>
                  <h4 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#1A4D2E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
            {/* Plan 1 */}
            <motion.div 
              onClick={() => setActivePlan("basic")}
              className={`flex-1 rounded-[3rem] p-10 border-2 transition-all cursor-pointer flex flex-col justify-between ${activePlan === "basic" ? "bg-white text-[#1A4D2E] border-white scale-105 z-10" : "bg-white/5 border-white/10 hover:border-white/30"}`}
            >
              <div>
                <h3 className="text-3xl font-[family-name:var(--font-bebas)] uppercase tracking-widest mb-2">Guia Digital</h3>
                <p className={`text-sm mb-8 ${activePlan === "basic" ? "text-muted-foreground" : "text-white/60"}`}>Ideal para começar</p>
                <div className="space-y-4 mb-8">
                  {["80 Receitas em PDF", "Lista de Compras", "Guia de Substituições"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${activePlan === "basic" ? "text-[#1A4D2E]" : "text-white/40"}`} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <span className="text-lg line-through opacity-50 block">R$ 47,00</span>
                  <span className="text-5xl font-[family-name:var(--font-anton)]">R$ 17,90</span>
                </div>
                <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${activePlan === "basic" ? "bg-[#1A4D2E] text-white" : "bg-white text-[#1A4D2E] hover:bg-white/90"}`}>
                  Selecionar
                </button>
              </div>
            </motion.div>

            {/* Plan 2 - Featured */}
            <motion.div 
              onClick={() => setActivePlan("premium")}
              className={`flex-1 rounded-[3rem] p-10 border-2 relative overflow-hidden transition-all cursor-pointer flex flex-col justify-between ${activePlan === "premium" ? "bg-white text-[#1A4D2E] border-white scale-105 z-10" : "bg-white/5 border-white/10 hover:border-white/30"}`}
            >
              <div className="absolute top-0 right-0 bg-[#E67E22] text-white px-6 py-2 rounded-bl-3xl text-xs font-bold uppercase tracking-widest">
                Mais Vendido
              </div>
              <div>
                <h3 className="text-3xl font-[family-name:var(--font-bebas)] uppercase tracking-widest mb-2">Combo Premium</h3>
                <p className={`text-sm mb-8 ${activePlan === "premium" ? "text-muted-foreground" : "text-white/60"}`}>Transformação completa</p>
                <div className="space-y-4 mb-8">
                  {["Guia 80 Receitas", "Bônus: Sucos Detox", "Bônus: Doces Sem Culpa", "Comunidade VIP", "Suporte no WhatsApp"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 ${activePlan === "premium" ? "text-[#E67E22]" : "text-[#E67E22]"}`} />
                      <span className="font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <span className="text-lg line-through opacity-50 block">R$ 97,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-[family-name:var(--font-anton)]">R$ 29,90</span>
                    <span className="text-sm font-bold opacity-70">Pagamento único</span>
                  </div>
                </div>
                <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl ${activePlan === "premium" ? "bg-[#E67E22] text-white hover:bg-[#D35400]" : "bg-white text-[#1A4D2E]"}`}>
                  Quero o Combo Completo
                </button>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-white/60 text-sm font-medium">
              <ShieldCheck className="w-5 h-5" /> Garantia de satisfação de 7 dias ou seu dinheiro de volta.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-bebas)] text-[#1A4D2E] text-center mb-16 uppercase tracking-wider">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {[
            { q: "O guia é físico ou digital?", a: "O guia é 100% digital em formato PDF de alta qualidade. Você recebe o acesso imediatamente no seu e-mail após a confirmação do pagamento." },
            { q: "Preciso de ingredientes caros?", a: "Não! Priorizamos ingredientes simples, baratos e fáceis de encontrar em qualquer supermercado ou feira local." },
            { q: "As receitas são difíceis?", a: "Pelo contrário. Foram pensadas para quem tem a vida corrida e precisa de praticidade, com passos claros e simplificados." },
            { q: "Posso acessar pelo celular?", a: "Sim! O guia é otimizado para leitura em smartphones, tablets e computadores." }
          ].map((item, i) => (
            <details key={i} className="group bg-white rounded-3xl border border-[#1A4D2E]/5 shadow-sm overflow-hidden transition-all">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-lg text-[#1A4D2E] group-open:bg-[#1A4D2E]/5 transition-colors">
                {item.q}
                <Plus className="w-5 h-5 text-[#E67E22] group-open:hidden" />
                <Minus className="w-5 h-5 text-[#E67E22] hidden group-open:block" />
              </summary>
              <div className="p-8 text-[#5A5A5A] leading-relaxed border-t border-[#1A4D2E]/5">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div>
          <span className="text-xs text-muted-foreground line-through block leading-none">R$ 97,00</span>
          <span className="text-2xl font-[family-name:var(--font-anton)] text-[#1A4D2E]">R$ 17,90</span>
        </div>
        <button className="bg-[#E67E22] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg">
          Comprar Agora
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#FCFBF8] pt-24 pb-32 md:pb-24 border-t border-[#1A4D2E]/5">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h4 className="text-2xl font-[family-name:var(--font-anton)] text-[#1A4D2E] uppercase tracking-tighter">Chef Mônica Maciel</h4>
            <p className="text-muted-foreground max-w-md mx-auto italic">"Minha missão é mostrar que alimentação saudável pode ser deliciosa e acessível para todos."</p>
          </div>
          
          <div className="flex justify-center gap-8 text-sm font-bold text-[#1A4D2E] uppercase tracking-widest">
            <a href="#" className="hover:text-[#E67E22] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#E67E22] transition-colors">Termos</a>
            <a href="#" className="hover:text-[#E67E22] transition-colors">Suporte</a>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 opacity-40 text-[10px] md:text-xs leading-relaxed uppercase font-medium">
            <p>Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.</p>
            <p>© 2026 Todos os direitos reservados. Resultados podem variar de pessoa para pessoa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
