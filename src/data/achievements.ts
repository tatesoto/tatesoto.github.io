export type Achievemet = {
    id: string
    title: string
    org?: string
    date?: string
    summary?: string
    details?: string[]
    tags?: string[]
    links?: {
        label: string
        url: string
    }[]
}

export const achievements: Achievemet[] = [
    {
        id: 'icpc-2025-domestic',
        title: 'ICPC 2025 国内予選 12位 アジア地区横浜大会進出',
        org: 'ICPC 2025 横浜大会 実行委員会',
        date: '2025-07-04',
        summary: 'チーム「bogosort」として出場し，計算幾何等のライブラリ整備や序盤問題を担当した．',
        details: [
            'チームメンバーと過去問題の本番演習を何回も行った．',
            '得意ジャンルをもとに問題を分担し，私は計算幾何やデータ構造のライブラリを整備した．',
            '2025/12/6-7 に行われるアジア地区横浜大会に出場予定．'
        ],
        tags: ['ICPC', '競技プログラミング'],
        links: [
            {
                label: 'ICPC 2025 国内予選',
                url: 'https://icpc.jp/2025/domestic/'
            }
        ]
    }
]