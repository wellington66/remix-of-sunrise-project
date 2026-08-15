import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-inter)]">
      <header className="py-6 text-center">
        <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-anton)] text-primary uppercase tracking-wider">
          80 Cafés da Manhã Saudáveis
        </h1>
        <p className="text-xl md:text-2xl mt-2 font-[family-name:var(--font-bebas)] text-foreground/80 tracking-wide">
          Para substituir o pão - Simples e Rápido
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
              alt="Café da manhã saudável"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)] leading-tight">
              Transforme seu café da manhã em minutos e perca peso com saúde.
            </h2>
            <p className="text-lg text-muted-foreground">
              Chega de depender do pão branco todos os dias. Descubra 80 receitas deliciosas, nutritivas e ultra-rápidas para você começar seu dia com energia total.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-cta text-cta-foreground py-4 rounded-xl font-bold text-xl uppercase tracking-widest shadow-lg hover:bg-cta/90 transition"
            >
              Quero emagrecer agora
            </motion.button>
          </div>
        </section>
        <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="w-8 h-8 text-primary" />, title: "Rápido", desc: "Receitas prontas em até 5 minutos." },
            { icon: <CheckCircle2 className="w-8 h-8 text-primary" />, title: "Saudável", desc: "100% natural, sem conservantes." },
            { icon: <Zap className="w-8 h-8 text-primary" />, title: "Energia", desc: "Combustível real para o seu dia." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-sm text-center space-y-4"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="py-16 space-y-8">
          <h2 className="text-4xl text-center font-[family-name:var(--font-bebas)] tracking-wider">
            Veja o que você vai encontrar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop"
            ].map((src, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.05 }}
                src={src}
                alt="Receita"
                className="rounded-xl shadow-md w-full aspect-square object-cover"
              />
            ))}
          </div>
          <div className="flex justify-center">
             <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-widest text-sm"
            >
              Ver todas as 80 receitas
            </motion.button>
          </div>
        </section>

        <section className="py-16 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-[family-name:var(--font-bebas)] tracking-widest text-cta">
              Oferta Especial de Lançamento
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl line-through text-muted-foreground">R$ 97,00</span>
              <span className="text-6xl font-[family-name:var(--font-anton)] text-primary">R$ 17,90</span>
            </div>
            <p className="text-lg">
              Acesso vitalício + 3 Bônus Exclusivos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-cta text-cta-foreground py-6 rounded-2xl font-bold text-2xl uppercase tracking-widest shadow-xl"
            >
              Comprar Agora
            </motion.button>
            <p className="text-sm text-muted-foreground italic">
              *Garantia incondicional de 7 dias. Seu risco é zero.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-primary/5 py-12 text-center text-sm text-muted-foreground border-t border-border">
        <div className="container mx-auto px-4 space-y-4">
          <p>© 2026 Chef Mônica Maciel - Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-primary underline">Políticas de Privacidade</a>
            <a href="#" className="hover:text-primary underline">Termos de Uso</a>
          </div>
          <p className="max-w-xl mx-auto opacity-60">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
          </p>
        </div>
      </footer>
    </div>
  );
}
