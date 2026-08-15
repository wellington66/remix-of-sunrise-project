# Plano de Reestruturação Profissional e de Alta Conversão

Reestruturar a landing page para o "Guia das 101 Receitas para Trocar o Pão", adicionando seções de bônus, ofertas em duas camadas, rodapé completo e gatilhos mentais avançados (AIDA) para maximizar as conversões.

## Alterações Funcionais e de Design

### 1. Estrutura de Vendas (AIDA)
- **Atenção (Attention):** Refinar o Hero com headline de dor extrema e mockup 3D.
- **Interesse (Interest):** Seção detalhando por que o pão e glúten são vilões do emagrecimento (inflamação).
- **Desejo (Desire):**
    - Galeria de receitas premium com descrições curtas e benefícios.
    - Seção de Bônus Exclusivos (3-4 bônus de alto valor percebido).
- **Ação (Action):** Duas opções de oferta (Ancoragem de Preço).

### 2. Seções de Bônus (Novo)
- **Bônus 1:** Guia de Sucos Detox (Desinflamação).
- **Bônus 2:** Planilha de Acompanhamento de Medidas.
- **Bônus 3:** Comunidade VIP de Suporte.
- **Bônus 4:** Guia de Compras Saudáveis no Supermercado.

### 3. Ofertas de Venda (Tiered Pricing)
- **Opção 1 (Básico):** Apenas o Guia Digital das 101 Receitas.
- **Opção 2 (VIP/Completo):** Guia + Todos os Bônus + Acesso Vitalício (Destaque visual).

### 4. Rodapé e Rodapés Extras
- Garantia de 7 dias (Authority Badge).
- FAQ detalhado (Objection Killer).
- Rodapé institucional com CNPJ, Termos de Uso e Políticas.

### 5. SEO e Metadata
- Atualizar `src/routes/__root.tsx` para refletir "101 Receitas" e a nova descrição focada em desinflamação.

## Detalhes Técnicos
- **Frontend:** React + Tailwind CSS v4.
- **Animações:** Framer Motion para entradas suaves e pulsos nos CTAs.
- **Ícones:** Lucide-React.
- **Tokens Semânticos:** Uso rigoroso de `bg-background`, `text-foreground`, `bg-cta` conforme definido em `src/styles.css`.
- **Responsividade:** Layout mobile-first com transições fluidas para desktop.

## Próximos Passos
- Implementar as novas seções em `src/routes/index.tsx`.
- Criar componentes de cartões de bônus e planos de preços.
- Corrigir os metadados no arquivo root.
