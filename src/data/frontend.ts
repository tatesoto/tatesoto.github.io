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
      'Vite + React + TypeScript。/activities に要約、/activities/(hoge) に自由記述。i18n・ダークモード・手動/タグ公開の運用。',
    pagelinks: "https://tatesoto.github.io",
    githublinks: "https://github.com/tatesoto/tatesoto.github.io",
    stack: ['react','typescript','vite','tailwind','eslint','prettier','github-actions','docker','github'],
    highlights: [
      'TypeScript + React + Vite + Tailwind CSS でモダンなフロントエンド',
      'GitHub Pages: タグ/手動のみ本番リリース',
    ],
    period: '2025-',
    role: '個人開発',
  },
]
