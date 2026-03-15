export type ActivityMeta = {
  slug: 'competitive' | 'frontend' | 'others'
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
      'AtCoder・Codeforces．ICPC Asia Pacific Championship 2026 5位 WF進出(team: bogosort)．作問(KCPC, Library Checker)．ライブラリ整備．',
    icon: '🏁',
    updated: '2025-07',
  },
  {
    slug: 'frontend',
    title: 'フロントエンド',
    summary:
      '主に，TypeScript + React を用いた開発．個人ポートフォリオサイトや競技プログラミング幾何可視化ツールを開発．',
    icon: '🧩',
    updated: '2026-01',
  },
  {
    slug: 'others',
    title: 'その他',
    summary:
      '技術ブログ(Zenn)など．',
    icon: '✳️',
  },
]
