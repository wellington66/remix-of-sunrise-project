# Plano de Reestruturação Profissional e Responsiva

Este plano detalha a reestruturação da landing page "101 Receitas para Trocar o Pão" para um padrão profissional de alta conversão, com foco em responsividade extrema e design de autoridade.

## Objetivos
- **Profissionalismo**: Refinar tipografia, espaçamentos e hierarquia visual.
- **Responsividade**: Garantir que o layout seja impecável em qualquer dispositivo, do mobile ao desktop 4K.
- **Alta Conversão**: Implementar seções estratégicas (Prova Social, Garantia, Benefícios, FAQ) com gatilhos mentais.

## Alterações Técnicas

### 1. Estilização Global (`src/styles.css`)
- Refinar a paleta de cores `oklch` para tons mais suaves e legíveis.
- Adicionar utilitários de tipografia responsiva.

### 2. Estrutura da Página (`src/routes/index.tsx`)
- **Hero Section**: Reorganizar para destacar a promessa principal e o mockup do produto de forma equilibrada.
- **Seção de Prova Social**: Adicionar depoimentos em formato de carrossel ou grid responsivo.
- **Grade de Receitas**: Otimizar a visualização das imagens e descrições.
- **Seção de Benefícios**: Ícones personalizados e textos curtos.
- **Checklist de Bônus**: Visualização clara do valor agregado.
- **Seção de Garantia**: Selo de autoridade e texto de confiança.
- **FAQ**: Melhorar a interatividade e clareza.

### 3. Componentes e Interação
- Implementar animações de entrada suaves com `framer-motion`.
- Otimizar o rodapé fixo mobile para não sobrepor elementos importantes.

## Etapas de Implementação

1. **Refinamento de CSS**: Ajustar variáveis de cor e espaçamento.
2. **Reestruturação do Hero**: Layout split no desktop, empilhado no mobile.
3. **Novas Seções**: Inserir Depoimentos e Garantia.
4. **Otimização Responsiva**: Revisar todos os `paddings` e `gap` em breakpoints médios (md, lg).
5. **Polimento Final**: Hover effects, transições e revisão de texto.
