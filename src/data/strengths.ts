export type Strength = {
  key: string
  icon: string
  title: string
  oneLiner: string
  bullets: string[]
  links?: { label: string; to?: string; url?: string }[]
  tags?: string[]
}

export const strengths: Strength[] = [
  {
    key: 'algorithms',
    icon: '⚙️',
    title: 'アルゴリズム / 競技プログラミング',
    oneLiner: '高度なアルゴリズムを駆使した問題解決力。',
    bullets: [
      'AtCoder Highest 1451.',
      'WIP',
    ],
    links: [
      { label: '実績', to: '/achievements' },
    ],
    tags: ['ICPC','Competitive Programming','C++']
  },
  {
    key: 'frontend',
    icon: '🧩',
    title: 'フロントエンド（TypeScript / React）',
    oneLiner: '拡張容易な設計とアクセシビリティを両立。',
    bullets: [
      'Vite + React + Tailwind 構成でポートフォリオサイトを作成．',
      'WIP',
    ],
    links: [
      { label: 'このサイト', to: '/' },
    ],
    tags: ['TypeScript','Vite','Actions']
  },
  {
    key: 'ml',
    icon: '📈',
    title: '機械学習，データ分析',
    oneLiner: 'Pythonを用いたデータ分析とモデル構築。',
    bullets: [
      'Pandas + NumPy で **データ前処理を効率化**',
      'LightGBM で **高精度なモデルを構築**',
    ],
    links: [
      { label: '実績（ML）', to: '/achievements' },
    ],
    tags: ['LightGBM','Validation']
  },
]
