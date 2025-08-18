export type ActivityMeta = {
  slug: 'competitive' | 'frontend' | 'other'
  title: string
  summary: string
  icon?: string
  updated?: string
}

export const activitiesIndex: ActivityMeta[] = [
  {
    slug: 'competitive',
    title: '競技プログラミング',
    summary:
      'AtCoder・Codeforces．ICPC 国内予選 2025:12位（bogosort, アジア横浜進出）/ 2024:16位．作問(KCPC, Library Checker)．幾何・データ構造のライブラリ整備．',
    icon: '🏁',
    updated: '2025-07',
  },
  {
    slug: 'frontend',
    title: 'フロントエンド',
    summary:
      '個人用ページの作成．Vite + React + TypeScript．',
    icon: '🧩',
    updated: '2025-08',
  },
  {
    slug: 'other',
    title: 'その他',
    summary:
      '技術ブログ(Zenn)など．',
    icon: '✳️',
  },
]
