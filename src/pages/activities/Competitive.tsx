import { Link } from 'react-router-dom'

export default function Competitive() {
  const toc = [
    { href: '#about', label: 'About Me' },
    { href: '#icpc', label: 'ICPC' },
    { href: '#problemsetting', label: '作問' },
    { href: '#libraries', label: 'ライブラリ' },
    { href: '#cta', label: '相談・募集' },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 lg:grid-cols-[minmax(0,1fr),280px]">
      {/* 本文（prose 適用） */}
      <article
        className="
          prose prose-slate dark:prose-invert max-w-none
          prose-headings:scroll-mt-24
          prose-h1:text-4xl prose-h1:font-extrabold
          prose-h2:text-3xl prose-h2:font-bold
          prose-h3:text-2xl
        "
      >
        <h1>競技プログラミング</h1>
        <p>
          AtCoder や Codeforces をはじめとするプログラミングコンテストで，アルゴリズムを用いた問題解決力を鍛えています．作問も行っています．
        </p>

        <h2 id="about">About Me</h2>
        {/* レートの“タグ”表示（縦に並べる） */}
        <ul className="not-prose mt-4 space-y-3 list-none">
          {/* AtCoder */}
          <li className="flex items-center gap-3">
            <span className="shrink-0 text-slate-400">»»</span>
            <a href="https://atcoder.jp/users/tatesoto" target="_blank" rel="noreferrer" className="font-medium hover:underline">
              AtCoder
            </a>
            <img
              src="https://cp-logo.vercel.app/atcoder/tatesoto?logo=true"
              alt="AtCoder rating badge for tatesoto"
              className="h-5"
              loading="lazy"
            />
          </li>

          {/* Codeforces */}
          <li className="flex items-center gap-3">
            <span className="shrink-0 text-slate-400">»»</span>
            <a href="https://codeforces.com/profile/tatesoto" target="_blank" rel="noreferrer" className="font-medium hover:underline">
              Codeforces
            </a>
            <img
              src="https://cp-logo.vercel.app/codeforces/tatesoto?logo=true"
              alt="Codeforces rating badge for tatesoto"
              className="h-5"
              loading="lazy"
            />
          </li>

          {/* 所属（KCPC） */}
          <li className="flex items-center gap-3">
            <span className="shrink-0 text-slate-400">»»</span>
            <span className="font-medium">所属</span>
            <a href="https://kcpc.github.io/" target="_blank" rel="noreferrer"
                className="rounded-md border px-2 py-0.5 text-xs hover:bg-slate-50 dark:hover:bg-slate-800">
              京都大学プログラミングサークル（KCPC）
            </a>
          </li>
        </ul>

        <section id="icpc" className="scroll-mt-24 mt-14">
          <h2 className="text-2xl md:text-3xl font-bold">ICPC</h2>
          <ol className="relative not-prose list-none border-l border-slate-300 dark:border-slate-700 pl-6 space-y-6 text-[0.95rem]">
            <li className="relative">
              <span className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-sky-600" />
              <div className="font-semibold">2025 国内予選 — bogosort</div>
              <div>
                結果：12位．アジア地区横浜大会進出（
                <a className="underline" href="https://icpc.jp/2025/domestic/results/" target="_blank" rel="noreferrer">
                  順位表
                </a>
                ）
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                役割：幾何ライブラリ整備，序盤AC，問題文/サンプル図示，テスト作成，デバッグ支援
              </div>
            </li>
            <li className="relative">
              <span className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-sky-600" />
              <div className="font-semibold">2024 国内予選 — bogosort</div>
              <div>
                結果：16位（
                <a className="underline" href="https://icpc.jp/2024/domestic/results/" target="_blank" rel="noreferrer">
                  順位表
                </a>
                ）
              </div>
              <div className="text-slate-600 dark:text-slate-300">役割：序盤AC，デバッグ支援</div>
            </li>
          </ol>
        </section>


        <h2 id="problemsetting">作問（Problemsetting）</h2>
        <div className="not-prose mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-slate-500 border-b">
              <tr>
                <th className="text-left py-2 pr-4">大会</th>
                <th className="text-left py-2 pr-4">問題</th>
                <th className="text-left py-2 pr-4">役割</th>
                <th className="text-left py-2">リンク</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="align-top">
                <td className="py-2 pr-4">KUPC 2024</td>
                <td className="py-2 pr-4">F - Find x</td>
                <td className="py-2 pr-4">原案</td>
                <td className="py-2">
                  <a className="underline" href="https://atcoder.jp/contests/kupc2024/tasks/kupc2024_f" target="_blank" rel="noreferrer">
                    問題
                  </a>
                </td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4">KCPC新歓杯 - Happy Birthday physics0523 -</td>
                <td className="py-2 pr-4">B - Count That Day&apos;s N</td>
                <td className="py-2 pr-4">原案 &amp; Writer</td>
                <td className="py-2">
                  <a className="underline" href="https://yukicoder.me/problems/no/3156" target="_blank" rel="noreferrer">
                    yukicoder #3156
                  </a>
                </td>
              </tr>
              <tr className="align-top">
                <td className="py-2 pr-4">KCPC新歓杯（競プロ体験会の部）</td>
                <td className="py-2 pr-4">2 - Physics Birthday</td>
                <td className="py-2 pr-4">原案 &amp; Writer</td>
                <td className="py-2">
                  <a className="underline" href="https://mojacoder.app/users/kencho/contests/kcpc_welcome_2025/tasks/2" target="_blank" rel="noreferrer">
                    mojacoder
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="libraries">ライブラリ</h2>
        <h3>計算幾何学ライブラリ</h3>
        <p>
          有理数をサポート。点・直線・線分・円・多角形・凸多角形の各クラスと高度アルゴリズムを実装。
          AOJ・Library Checker で verify。チーム向けの使いやすいインターフェースとドキュメントを整備。
          <br />
          <span className="text-slate-500">※ アジア地区大会を控えているため，現在は非公開（チーム内運用）。</span>
        </p>
        <h3>平衡二分探索木</h3>
        <p>
          Explicit Treap / Implicit Treap を実装。Library Checker で verify。
          用途に応じたテンプレ化（split/merge，遅延伝播など）。
          <br />
          <span className="text-slate-500">※ 大会終了後に公開予定。</span>
        </p>

        <h2 id="cta">作問・コラボの募集</h2>
        <p>
          競技プログラミングの作問作業(WriterやTester)などのご相談を受け付けています。
        </p>
        <div className="not-prose mt-4 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2">
            連絡フォームへ
          </Link>
          <a href="mailto:example@example.com" className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
            メールで相談
          </a>
        </div>
      </article>

      <aside className="hidden lg:block">
        <nav className="sticky top-24 rounded-xl border p-4 text-sm">
          <div className="font-semibold mb-2">目次</div>
          <ul className="space-y-1">
            {toc.map((t) => (
              <li key={t.href}>
                <a href={t.href} className="underline hover:no-underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </section>
  )
}
