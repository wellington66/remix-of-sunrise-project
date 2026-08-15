# Plano de Replicação de Landing Page

Vou replicar a landing page do e-book "80 Cafés da Manhã Saudáveis" com fidelidade visual total ao screenshot fornecido (`user-uploads://screencapture_1786798098854-3.png`), ajustando a estrutura, cores, tipografia e imagens.

## Alterações Visuais e Estruturais

- **Paleta de Cores**: Ajustar o tom de creme do fundo para `#FDF9F2` e o verde para `#1B4332`.
- **Cabeçalho/Aviso**: Implementar a barra superior verde com o texto "VOCÊ RECEBERÁ 05 BÔNUS EXCLUSIVOS".
- **Seção Hero**:
    - Centralizar o título com as fontes Anton e Bebas Neue.
    - Usar imagem de mockup do e-book ao lado do celular (mockup combinado).
    - Adicionar o badge de "Receba hoje por apenas R$ 17,90".
- **Seção de Benefícios**:
    - Criar o grid de 6 ícones/benefícios com fundo verde claro.
    - Adicionar a imagem da Chef Mônica Maciel com o e-book.
- **Galeria de Receitas**:
    - Layout vertical de cards com imagens reais de receitas (omelete, panquecas, bowls).
    - Botão "Quero ter acesso a tudo isso!".
- **Planos de Preço**:
    - Dois cards distintos: "E-book Digital" e "Combo Premium".
    - Destaque visual no Combo Premium com cor coral/laranja.
- **Prova Social/Depoimentos**:
    - Seção com estrelas e textos de depoimentos de alunos.
- **FAQ**:
    - Acordeão limpo com bordas arredondadas.
- **Footer**:
    - Banner final laranja com CTA.
    - Rodapé institucional completo.

## Detalhes Técnicos

- **Componentes**: `framer-motion` para animações suaves de entrada.
- **Responsividade**: Mobile-first, garantindo que o layout de "venda" seja impecável em smartphones.
- **SEO**: Manter metadados já configurados no `__root.tsx`.

A implementação será feita diretamente no `src/routes/index.tsx`.
