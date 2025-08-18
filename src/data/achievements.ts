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
    },
    {
        id: 'icpc-2024-domestic',
        title: 'ICPC 2024 国内予選 16位',
        org: 'ICPC 2024 横浜大会 実行委員会',
        date: '2024-07-05',
        summary: 'チーム「bogosort」として出場し，序盤問題のACやデバッグ支援を担当した．',
        details: [
            '初出場ということで予選突破を目標にしていたが，学内4位であと一歩のところで予選敗退．',
            '練習時間が思うようにとれず，演習不足が原因と考えられる．'
        ],
        tags: ['ICPC', '競技プログラミング'],
        links: [
            {
                label: 'ICPC 2024 国内予選',
                url: 'https://icpc.jp/2024/domestic/'
            }
        ]
    },
    {
        id: 'EGH',
        title: '第1回 Engineer Guild Hackathon 第3位',
        org: 'Engineer Guild',
        date: '2024-11-09, 16',
        summary: 'チーム15として出場．観光に来る外国人向けのサービスを開発し，3位を受賞．',
        details: [
            '慣れない日本硬貨の仕様によるレジでの手間を解決するため，自動両替する財布を提案．',
            'PythonとAruduinoを用いて，ハードとソフトの両方を開発する部分を担当した．',
        ],
        tags: ['チーム開発', 'Python', 'Arduino'],
        links: [
            {
                label: 'イベントレポート',
                url: 'https://gaishishukatsu.com/archives/057edcf35209458483e8e62a9484988e'
            },
            {
                label: 'GitHub',
                url: 'https://github.com/tatesoto/Hackathon'
            }
        ]
    },
    {
        id: 'aihack',
        title: '第6回アイフルハッカソン aihack 特別賞',
        org: 'アイフル株式会社',
        date: '2023-03-20,21',
        summary: '金融データを用いたデータサイエンスコンペにチームで出場し，特別賞を受賞．',
        details: [
            '金融データを用いて，2日間でモデルを構築し，その予測精度を競った．',
            'Pythonを用いて，データの可視化，前処理，特徴量エンジニアリング，パラメータチューニングなどを行い，予測精度を高めた．',
        ],
        tags: ['機械学習', 'Python'],
        links: [
            {
                label: '開催記',
                url: 'https://80and.co/news/aihack2023'
            }
        ]
    },
    {
        id: 'zennhack',
        title: '第1回 Zenn Hackathon 出場',
        org: 'Zenn',
        date: '2025-02',
        summary: 'チームで，旅行者向けの旅行計画アプリを開発．',
        details: [
            'チャット・マップ・生成AIを一体化し，トークしながら旅行先の計画を練ることができる．',
            'Flutter+Firebaseを用いて開発をしていたが，学習コストが高く，工数との兼ね合いでPythonでの実装に移行した．',
            'Flutter+Firebaseの学習・実装を担当した．最終プロダクトには反映されなかったが，この経験を今後の開発の活かすことができると考えている．',
        ],
        tags: ['チーム開発', 'Python', 'Flutter', 'Firebase'],
        links: [
            {
                label: '紹介記事',
                url: 'https://zenn.dev/water3/articles/5b627d7424d7be',
            },
            {
                label: 'GitHub(最終プロダクト)',
                url: 'https://github.com/Yutak6116/travel-hub-test'
            },
            {
                label: 'GitHub(Flutter+Firebaseの実装，途中まで)',
                url: 'https://github.com/tatesoto/ZennHackathon1'
            }
        ]
    },
    
]