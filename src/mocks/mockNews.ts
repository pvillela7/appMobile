// src/mocks/mockNews.ts

export interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  date: string;
}

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'A importância da postura no Pilates',
    subtitle: 'Dica da semana',
    content: 'Manter a postura correta durante os exercícios é essencial para obter bons resultados e evitar lesões.',
    date: '2025-06-15',
  },
  {
    id: '2',
    title: 'Exercícios de respiração no Pilates',
    subtitle: 'Respiração e controle',
    content: 'A respiração consciente ajuda a melhorar a concentração e o desempenho físico.',
    date: '2025-06-14',
  },
  {
    id: '3',
    title: 'Pilates para iniciantes',
    subtitle: 'Primeiros passos',
    content: 'Veja como começar sua jornada no Pilates com segurança e confiança.',
    date: '2025-06-13',
  },
  {
    id: '4',
    title: 'Benefícios do alongamento diário',
    subtitle: 'Dicas de rotina',
    content: 'Incluir alongamentos na rotina diária melhora a flexibilidade e reduz o estresse.',
    date: '2025-06-12',
  },
  {
    id: '5',
    title: 'Pilates no combate à dor lombar',
    subtitle: 'Saúde da coluna',
    content: 'Descubra como o Pilates pode ser um aliado importante no tratamento de dores lombares.',
    date: '2025-06-11',
  },
  {
    id: '6',
    title: 'Pilates para idosos',
    subtitle: 'Bem-estar e autonomia',
    content: 'Conheça os benefícios do Pilates para a terceira idade e como adaptar os exercícios.',
    date: '2025-06-10',
  },
  {
    id: '7',
    title: 'Alimentação e Pilates',
    subtitle: 'Saúde integrada',
    content: 'Dicas de nutrição que ajudam a potencializar os resultados da sua prática.',
    date: '2025-06-09',
  },
];
