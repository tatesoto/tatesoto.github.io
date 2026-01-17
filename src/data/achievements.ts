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
        id: 'icpc-2025-yokohama',
        title: 'ICPC 2025 Yokohama Regional Contest 5位 Asia Pacific Championship 進出決定',
        org: 'ICPC 2025 横浜大会 実行委員会',
        date: '2025-12-06,07',
        summary: 'チーム「bogosort」として出場し，ライブラリ整備や幾何・パズル系問題を担当．',
        details: [
            'チームメンバーと過去問題の本番演習をかなり強化して行った．',
            '持ち込み用ライブラリの整備を担当．高度データ構造の実装を行った．',
            '2026年3月に開催されるAsia Pacific Championshipへの進出が決定した．',
        ],
        tags: ['ICPC', '競技プログラミング'],
        links: [
            {
                label: 'The 2025 ICPC Asia Yokohama Regional Contest',
                url: 'https://icpc.jp/2025/regional/'
            }
        ]
    },
    {
        id: 'JPHACKS',
        title: 'JPHACKS 2025 AwardDay進出＆innovator認定',
        org: 'JPHACKS 実行委員会',
        date: '2025-10-18, 19, 11-09',
        summary: 'OS_2504(million遍)として出場．飲食店探しアプリ「Mogufinder」を開発し，AwardDay進出，innovator認定を獲得．',
        details: [
            'ログイン不要・リンクの共有のみで，複数人の飲食店の合意形成を支援するWebアプリ．',
            '最寄りの各飲食店候補について，好み度を4択で決定していくだけで，簡単に店選びができる．',
            'ユーザ負荷の軽減を追求．',
            'TypeScript + React を用いてフロントエンドを開発．バックエンドは Google Cloud を利用．',
        ],
        tags: ['チーム開発', 'TypeScript', 'React', 'Google Cloud'],
        links: [
            {
                label: '公式イベントレポート',
                url: 'https://jphacks.com/information/result-report2025/'
            },
        ]
    },
    {
        id: 'EGH-3',
        title: '第3回 Engineer Guild Hackathon 決勝進出',
        org: 'Engineer Guild',
        date: '2025-09-06~20',
        summary: 'チーム3(devNeko)として出場．AIを活用した学習支援アプリSPARを開発し，決勝進出．',
        details: [
            '従来の学習支援アプリとは異なり，AIを生徒役におき，ユーザが先生となって教える中で理解を深めるアプリ．',
            '通知がランダムに届くことで，学習のトリガーを増やす仕組みを導入．',
            'TypeScript + React, インフラは Azure を用いてフロントエンドを開発．',
            'React Nativeを用いたモバイルアプリ開発にも挑戦．'
        ],
        tags: ['チーム開発', 'TypeScript', 'React', 'Azure', 'React Native'],
        links: [
            {
                label: 'GitHub',
                url: 'https://github.com/Engineer-Guild-Hackathon/team-3-app'
            }
        ]
    },
    {
        id: 'icpc-2025-domestic',
        title: 'ICPC 2025 国内予選 12位 アジア地区横浜大会進出',
        org: 'ICPC 2025 横浜大会 実行委員会',
        date: '2025-07-04',
        summary: 'チーム「bogosort」として出場し，計算幾何等のライブラリ整備や序盤問題を担当した．',
        details: [
            'チームメンバーと過去問題の本番演習を何回も行った．',
            '得意ジャンルをもとに問題を分担し，私は計算幾何やデータ構造のライブラリを整備した．',
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