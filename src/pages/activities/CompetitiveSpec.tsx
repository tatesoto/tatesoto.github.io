import { Link } from 'react-router-dom'

export default function CompetitiveSpec() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">競技プログラミング — スペックシート</h1>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        KCPC（京都大学プログラミングサークル）所属。幾何・グラフ・数論を中心に、
        テンプレ整備と乱択検証で安定実装を重視。作問も行っています。
      </p>

      {/* Ratings */}
      <h2 className="mt-8 text-xl font-semibold">レーティング / プロフィール</h2>
      <dl className="mt-3 grid sm:grid-cols-3 gap-x-6 gap-y-2 text-sm">
        <div>
          <dt className="text-slate-500">AtCoder</dt>
          <dd className="mt-0.5">
            Highest <span className="font-mono">1451</span>（水色）／
            <a className="underline ml-1" href="https://atcoder.jp/users/tatesoto" target="_blank" rel="noreferrer">
              @tatesoto
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Codeforces</dt>
          <dd className="mt-0.5">
            Highest <span className="font-mono">1581</span>（Specialist）／
            <a className="underline ml-1" href="https://codeforces.com/profile/tatesoto" target="_blank" rel="noreferrer">
              @tatesoto
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Paiza</dt>
          <dd className="mt-0.5">Highest <span className="font-mono">2319</span>（Sランク）</dd>
        </div>
      </dl>

      {/* ICPC */}
      <h2 className="mt-10 text-xl font-semibold">ICPC（結果・役割）</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead className="text-slate-500">
            <tr>
              <th className="text-left">年</th>
              <th className="text-left">チーム</th>
              <th className="text-left">結果</th>
              <th className="text-left">役割</th>
              <th className="text-left">リンク</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top">
              <td>2025</td>
              <td>bogosort</td>
              <td>国内予選 12位／アジア地区 横浜大会 進出</td>
              <td>幾何ライブラリ整備。序盤AC、問題文/サンプル図示、テスト作成、デバッグ支援。</td>
              <td>
                <a className="underline" href="https://icpc.jp/2025/domestic/results/" target="_blank" rel="noreferrer">
                  結果
                </a>
              </td>
            </tr>
            <tr className="align-top">
              <td>2024</td>
              <td>bogosort</td>
              <td>国内予選 16位</td>
              <td>序盤AC、デバッグ支援。</td>
              <td>
                <a className="underline" href="https://icpc.jp/2024/domestic/results/" target="_blank" rel="noreferrer">
                  結果
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Problemsetting */}
      <h2 className="mt-10 text-xl font-semibold">作問（Problemsetting）</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead className="text-slate-500">
            <tr>
              <th className="text-left">大会</th>
              <th className="text-left">問題</th>
              <th className="text-left">役割</th>
              <th className="text-left">リンク</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-top">
              <td>KUPC 2024</td>
              <td>F - Find x</td>
              <td>原案</td>
              <td>
                <a className="underline" href="https://atcoder.jp/contests/kupc2024/tasks/kupc2024_f" target="_blank" rel="noreferrer">
                  問題
                </a>
              </td>
            </tr>
            <tr className="align-top">
              <td>KCPC新歓杯 - Happy Birthday physics0523 -</td>
              <td>B - Count That Day&apos;s N</td>
              <td>原案 &amp; Writer</td>
              <td>
                <a className="underline" href="https://yukicoder.me/problems/no/3156" target="_blank" rel="noreferrer">
                  yukicoder #3156
                </a>
              </td>
            </tr>
            <tr className="align-top">
              <td>KCPC新歓杯（競プロ体験会の部）</td>
              <td>2 - Physics Birthday</td>
              <td>原案 &amp; Writer</td>
              <td>
                <a className="underline" href="https://mojacoder.app/users/tatesoto/problems/PhysicsBirthday" target="_blank" rel="noreferrer">
                  mojacoder
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Libraries */}
      <h2 className="mt-10 text-xl font-semibold">ライブラリ</h2>
      <dl className="mt-3 space-y-5 text-sm">
        <div>
          <dt className="font-medium">計算幾何学ライブラリ</dt>
          <dd className="mt-1 text-slate-700 dark:text-slate-300">
            有理数サポート。点・直線・線分・円・多角形・凸多角形のクラスと高度アルゴリズムを実装。
            AOJ・Library Checker で verify。チーム向けの使いやすいインターフェースとドキュメントを整備。
            <br />
            <span className="text-slate-500">※ アジア地区大会を控えているため、現在は非公開（チーム内運用）。</span>
          </dd>
        </div>
        <div>
          <dt className="font-medium">平衡二分探索木</dt>
          <dd className="mt-1 text-slate-700 dark:text-slate-300">
            Explicit Treap / Implicit Treap を実装。Library Checker で verify。
            用途に応じたテンプレ化（split/merge、遅延伝播など）。
            <br />
            <span className="text-slate-500">※ 大会終了後に公開予定。</span>
          </dd>
        </div>
      </dl>

      {/* CTA */}
      <h2 className="mt-10 text-xl font-semibold">作問・コラボの募集</h2>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        作問／ライブラリ整備／検証／勉強会登壇のご相談を受け付けています。
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link to="/contact" className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2">
          連絡フォームへ
        </Link>
        <a href="mailto:example@example.com" className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">
          メールで相談
        </a>
      </div>
    </section>
  )
}
