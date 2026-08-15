# Plano de Ação: Landing Page "80 Cafés da Manhã Saudáveis"

Vou criar uma Landing Page otimizada para conversão, baseada na referência enviada, focada no produto "80 Cafés da Manhã para Substituir o Pão". O design será mobile-first, com carregamento rápido e foco em copywriting persuasivo.

## Alterações Estruturais

- **Configuração de SEO e Metadados**: Atualizar o `src/routes/__root.tsx` com os metadados solicitados (título, descrição, scripts externos de UTM e Pixel).
- **Design System**: Implementar uma paleta de cores baseada em tons naturais/saudáveis (verdes, cremes, laranjas para botões de CTA) usando variáveis do Tailwind v4.
- **Tipografia**: Integrar as fontes Anton, Bebas Neue e Inter.

## Componentes a serem Criados

1. **Hero Section**: Com a oferta principal, imagem do e-book (mockup) e dispositivo móvel, além de um CTA imediato.
2. **Social Proof / Resultados**: Seção destacando o que o usuário vai alcançar (ex: "perda de peso em 30 dias").
3. **Features / O que você vai levar**: Cards detalhando o conteúdo do guia (receitas rápidas, sem glúten, etc).
4. **Galeria de Receitas**: Preview visual das receitas para gerar desejo.
5. **Pricing Section**: Tabela comparativa ou card de oferta única com gatilhos de escassez/urgência.
6. **Depoimentos**: Prova social de alunos/clientes.
7. **FAQ**: Perguntas frequentes com Accordion.
8. **Footer**: Informações legais e links de suporte.

## Detalhes Técnicos

- **Frontend**: React 19 + TanStack Start.
- **Estilização**: Tailwind CSS v4 com tokens semânticos.
- **Imagens**: Utilização de imagens otimizadas para cada seção (substituindo placeholders por imagens de alta qualidade de culinária saudável).
- **Scripts**: Inclusão dos scripts de rastreamento (`utmify` e `pixel.js`) no head.

## Próximos Passos

1. Atualizar metadados globais em `__root.tsx`.
2. Criar a estrutura base da landing page em `src/routes/index.tsx`.
3. Desenvolver os componentes específicos de cada seção.
4. Otimizar para mobile e garantir acessibilidade.
