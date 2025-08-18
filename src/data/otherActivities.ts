export type Activity = {
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

export const activities: Activity[] = [
  {
    slug: 'zenn',
    title: '技術ブログ(Zenn)の執筆',
    summary:
      'トラブルシューティングや技術的な学び，自分の体験をZennで共有しています．',
    pagelinks: "https://zenn.dev/tatesoto",
    stack: ['Zenn'],
    highlights: [
      '「実務未経験が約１週間で情報処理安全確保支援士試験に合格しました #情報処理安全確保支援士」は，20,000回以上閲覧，36いいね，16ブックマークを獲得(2025/08/18時点)．',
    ],
    period: '2025-',
  },
]
