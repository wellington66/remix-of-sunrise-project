import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

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
      </main>
    </div>
  );
}
