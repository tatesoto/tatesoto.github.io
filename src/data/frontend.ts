export type FEProject = {
  slug: string
  title: string
  summary: string
  pagelinks?: string
  githublinks?: string
  stack: string[]                 // 例: ['react','typescript','vite','tailwind','docker','github-actions','github-pages']
  highlights?: string[]           // 箇条書き3つ程度
  period?: string                 // 期間（任意）
  role?: string                   // 役割（任意）
  screenshots?: string[]          // 画像URL（任意）
}

export const feProjects: FEProject[] = [
  {
    slug: 'portfolio',
    title: 'About Me | tatesoto',
    summary:
      'Vite + React + TypeScript で構築した個人ポートフォリオサイト',
    pagelinks: "https://tatesoto.github.io",
    githublinks: "https://github.com/tatesoto/tatesoto.github.io",
    stack: ['react','typescript','vite','tailwind','eslint','prettier','github-actions','docker','github'],
    highlights: [
      '生成AIを活用したコンテンツ制作',
      'Github/Dockerを活用した開発の第一歩として構築',
    ],
    period: '2025-',
    role: '個人開発',
  },
  {
    slug: 'geometry-visualizer',
    title: 'CP Geometry Visualizer',
    summary:
      '競技プログラミングの入力形式・サイズに対応した，幾何要素可視化ツール．',
    pagelinks: "https://tatesoto.github.io/cp-geo-visualizer/",
    githublinks: "https://github.com/tatesoto/cp-geo-visualizer",
    stack: ['react','typescript','vite','tailwind','github-actions','docker','github'],
    highlights: [
      'Google AI Studio を活用したコンテンツ制作．',
      '要件定義・設計に注力し，ペルソナの課題解決を追求．',
    ],
    period: '2025-',
    role: '個人開発',
  },
]
