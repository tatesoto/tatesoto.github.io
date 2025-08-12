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
      'AtCoder 最高 1451 / Codeforces 最高 1581。ICPC 国内予選 2025:12位（bogosort, アジア横浜進出）/ 2024:16位。作問(KUPC, KCPC)。幾何・データ構造のライブラリ整備。',
    icon: '🏁',
    updated: '2025-07',
  },
  {
    slug: 'frontend',
    title: 'フロントエンド',
    summary:
      'Vite + React + TypeScript。i18n/ダークモード/Router。GitHub Pages はタグ/手動のみ本番公開の運用。',
    icon: '🧩',
    updated: '2025-08',
  },
  {
    slug: 'other',
    title: 'その他',
    summary:
      'データサイエンス（LightGBM）、DevContainer、CI/CD、勉強会など。',
    icon: '✳️',
  },
]
