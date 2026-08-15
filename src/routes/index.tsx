import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ShieldCheck, ArrowRight, Minus, Plus, Zap, Clock, Smartphone, Gift, Heart, UserCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [activePlan, setActivePlan] = useState("premium");

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#2D2D2D] font-[family-name:var(--font-inter)] selection:bg-primary/20">
      {/* Top Banner */}
      <div className="bg-[#1B4332] text-white py-2.5 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest px-4">
        VOCÊ RECEBERÁ 05 BÔNUS EXCLUSIVOS
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-12 pb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase leading-[0.9] tracking-tight">
            80 Cafés da Manhã Saudáveis
            <span className="block text-[#1B4332] mt-2">Para Substituir o Pão</span>
          </h1>
          <div className="inline-block bg-[#D64D3F] text-white px-4 py-1 rounded text-sm md:text-base font-bold uppercase tracking-widest mt-4">
            SEM GLÚTEN E SEM AÇÚCAR
          </div>
        </motion.div>

        <div className="mt-12 relative w-full max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1200&auto=format&fit=crop"
              alt="80 Cafés da Manhã Mockup"
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
            />
            {/* Price Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-xl border border-[#1B4332]/10 z-20">
              <div className="bg-[#1B4332] text-white rounded-full px-8 py-4 flex flex-col items-center justify-center min-w-[200px]">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Receba hoje por apenas</span>
                <span className="text-3xl font-[family-name:var(--font-anton)]">R$ 17,90</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Quick View */}
        <div className="mt-20 grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
          {[
            { label: "100%", sub: "Digital" },
            { label: "05", sub: "Bônus" },
            { label: "7 Dias", sub: "Garantia" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-[family-name:var(--font-anton)] text-[#D64D3F]">{item.label}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#1B4332]/60">{item.sub}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Main Benefits Section */}
      <section className="bg-white py-20 border-y border-[#1B4332]/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-anton)] text-[#1B4332] tracking-tight uppercase leading-none">
              VOCÊ AINDA TEM DÚVIDAS DO QUE O NOSSO E-BOOK PODE FAZER POR VOCÊ?
            </h2>
            <p className="text-sm md:text-base text-[#1B4332]/70 font-medium">
              O pão branco comum causa picos de insulina e inflamação. Nosso guia oferece alternativas nutritivas que mantêm sua saciedade por horas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Clock className="w-6 h-6" />, title: "Preparo rápido", desc: "Receitas de 5 a 10 minutos." },
              { icon: <Heart className="w-6 h-6" />, title: "Saúde em primeiro lugar", desc: "Sem glúten e sem açúcar." },
              { icon: <Zap className="w-6 h-6" />, title: "Mais energia", desc: "Energia estável para o dia todo." },
              { icon: <Gift className="w-6 h-6" />, title: "Bônus exclusivos", desc: "5 Guias extras de presente." },
              { icon: <Smartphone className="w-6 h-6" />, title: "Acesso imediato", desc: "Receba tudo no seu e-mail." },
              { icon: <UserCheck className="w-6 h-6" />, title: "Chef Mônica Maciel", desc: "Receitas testadas e aprovadas." }
            ].map((item, i) => (
              <div key={i} className="bg-[#1B4332]/5 p-6 rounded-2xl flex items-center gap-4">
                <div className="bg-[#1B4332] text-white p-3 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1B4332] text-sm uppercase tracking-wide">{item.title}</h3>
                  <p className="text-xs text-[#1B4332]/60 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <button className="bg-[#1B4332] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#2D5A47] transition-all shadow-xl">
              QUERO MEU GUIA AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        <div className="md:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
            alt="Chef Mônica Maciel"
            className="rounded-[2.5rem] shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase leading-tight">
            VOCÊ ESTÁ A UM PASSO DA SUA MELHOR VERSÃO
          </h2>
          <p className="text-[#1B4332]/70 leading-relaxed font-medium">
            Meu nome é Mônica Maciel, e após anos ajudando milhares de pessoas a transformarem sua alimentação, eu compilei as melhores receitas de café da manhã que substituem o pão sem perder o prazer de comer.
          </p>
          <div className="space-y-4">
            {["80 Receitas exclusivas", "Substitutos perfeitos para o pão", "Ingredientes simples e baratos"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D64D3F]" />
                <span className="font-bold text-[#1B4332] text-sm uppercase">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-[#1B4332] text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg">
            QUERO O MEU GUIA AGORA
          </button>
        </div>
      </section>

      {/* Recipe Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase mb-12">
            VEJA O QUE VOCÊ VAI ENCONTRAR NO E-BOOK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop", name: "Omelete Mediterrâneo" },
              { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop", name: "Panqueca de Banana Fit" },
              { src: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop", name: "Crepioca de Espinafre" },
              { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop", name: "Bowl de Frutas" },
              { src: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=600&auto=format&fit=crop", name: "Pão de Frigideira Low Carb" },
              { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop", name: "Waffle de Aveia" }
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img src={item.src} alt={item.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white font-bold uppercase tracking-wider text-sm">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-16 bg-[#1B4332] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl">
            QUERO TER ACESSO A TUDO ISSO!
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase mb-4">
            ESCOLHA SEU PLANO
          </h2>
          <p className="text-[#1B4332]/60 mb-12 font-bold uppercase tracking-widest text-sm">Aproveite o desconto de lançamento</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Plan 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-[#1B4332]/5 flex flex-col">
              <h3 className="text-2xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase mb-6">GUIA DIGITAL</h3>
              <div className="space-y-4 mb-8 text-left">
                {["80 Receitas em PDF", "Lista de Compras", "Guia de Substituições", "Acesso Vitalício"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1B4332]" />
                    <span className="text-sm font-bold text-[#1B4332]/70 uppercase">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <div className="mb-6">
                  <span className="text-sm text-[#D64D3F] line-through block font-bold">DE R$ 47,00</span>
                  <span className="text-5xl font-[family-name:var(--font-anton)] text-[#1B4332]">R$ 17,90</span>
                </div>
                <button className="w-full py-4 rounded-full bg-[#1B4332] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#2D5A47] transition-all">
                  QUERO O GUIA DIGITAL
                </button>
              </div>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-[#FFF1F0] rounded-[2.5rem] p-10 shadow-2xl border-4 border-[#D64D3F] relative flex flex-col">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#D64D3F] text-white px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                O MAIS COMPLETO
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase mb-6">COMBO PREMIUM</h3>
              <div className="space-y-4 mb-8 text-left">
                {["Guia 80 Receitas", "Bônus: Sucos Detox", "Bônus: Doces Sem Culpa", "Bônus: Marmitas Saudáveis", "Comunidade VIP", "Suporte VIP"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D64D3F]" />
                    <span className="text-sm font-bold text-[#1B4332] uppercase">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <div className="mb-6">
                  <span className="text-sm text-[#D64D3F] line-through block font-bold">DE R$ 97,00</span>
                  <span className="text-6xl font-[family-name:var(--font-anton)] text-[#D64D3F]">R$ 29,90</span>
                </div>
                <button className="w-full py-5 rounded-full bg-[#D64D3F] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#B73C30] transition-all shadow-xl">
                  QUERO O COMBO PREMIUM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-anton)] text-[#1B4332] text-center mb-16 uppercase">
          DÚVIDAS FREQUENTES
        </h2>
        <div className="space-y-4">
          {[
            { q: "O guia é físico ou digital?", a: "O guia é 100% digital em formato PDF de alta qualidade. Você recebe o acesso imediatamente no seu e-mail após a confirmação do pagamento." },
            { q: "Preciso de ingredientes caros?", a: "Não! Priorizamos ingredientes simples, baratos e fáceis de encontrar em qualquer supermercado ou feira local." },
            { q: "As receitas são difíceis?", a: "Pelo contrário. Foram pensadas para quem tem a vida corrida e precisa de praticidade, com passos claros e simplificados." },
            { q: "Posso acessar pelo celular?", a: "Sim! O guia é otimizado para leitura em smartphones, tablets e computadores." }
          ].map((item, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-[#1B4332]/5 shadow-sm overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[#1B4332] uppercase text-sm tracking-wide">
                {item.q}
                <Plus className="w-4 h-4 text-[#D64D3F] group-open:hidden" />
                <Minus className="w-4 h-4 text-[#D64D3F] hidden group-open:block" />
              </summary>
              <div className="p-6 pt-0 text-[#1B4332]/60 text-sm leading-relaxed border-t border-[#1B4332]/5">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[#D64D3F] py-16 text-white text-center px-4">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-6xl font-[family-name:var(--font-anton)] uppercase leading-none">
            GARANTA O SEU COM DESCONTO HOJE MESMO!
          </h2>
          <button className="bg-white text-[#D64D3F] px-12 py-5 rounded-full font-bold uppercase tracking-widest text-lg shadow-2xl hover:bg-gray-100 transition-all">
            SIM! QUERO MEU E-BOOK AGORA
          </button>
          <div className="flex items-center justify-center gap-2 opacity-80">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-widest">Compra 100% Segura e Garantida</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F0E8] py-12 border-t border-[#1B4332]/5 text-center px-4">
        <div className="container mx-auto space-y-8">
          <h4 className="text-xl font-[family-name:var(--font-anton)] text-[#1B4332] uppercase">Chef Mônica Maciel</h4>
          
          <div className="flex justify-center gap-6 text-[10px] font-bold text-[#1B4332]/60 uppercase tracking-widest">
            <a href="#" className="hover:text-[#D64D3F]">Privacidade</a>
            <a href="#" className="hover:text-[#D64D3F]">Termos</a>
            <a href="#" className="hover:text-[#D64D3F]">Suporte</a>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 opacity-30 text-[9px] uppercase font-bold leading-relaxed">
            <p>Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.</p>
            <p>© 2026 Chef Mônica Maciel. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div>
          <span className="text-[10px] text-[#D64D3F] line-through block font-bold">R$ 97,00</span>
          <span className="text-2xl font-[family-name:var(--font-anton)] text-[#1B4332]">R$ 17,90</span>
        </div>
        <button className="bg-[#1B4332] text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg">
          COMPRAR AGORA
        </button>
      </div>
    </div>
  );
}
