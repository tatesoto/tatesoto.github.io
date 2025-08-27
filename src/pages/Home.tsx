import { Link } from 'react-router-dom'
import { achievements } from '@/data/achievements'
import { certifications } from '@/data/certifications'
import { activitiesIndex } from '@/data/activitiesIndex'

import profile from '@/assets/home/profile.jpg'

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" className="ml-1 h-3.5 w-3.5 opacity-60" aria-hidden>
      <path
        fill="currentColor"
        d="M11 3h6v6h-2V6.41l-7.29 7.3-1.42-1.42 7.3-7.29H11V3zM5 5h4v2H7v8h8v-2h2v4H5V5z"
      />
    </svg>
  )
}

function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-[180px] mx-auto md:mx-0">
      <div className="aspect-square overflow-hidden rounded-2xl border bg-slate-100 dark:bg-slate-900">
        <img src={profile} alt="tatesoto" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10" />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[640px_320px] md:justify-center items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">tatesoto</h1>

            <p className="mt-3 text-lg text-slate-800 dark:text-slate-200">
              tatesotoの自己紹介ページ．主に情報系に関する部分についてまとめています．
            </p>

            {/* for mobile */}
            <div className="mt-4 md:hidden">
              <ProfilePhoto />
            </div>

            <div className="mt-4 space-y-1 text-slate-700 dark:text-slate-300">
              <ul className="list-disc list-inside space-y-1">
                <li>所属：京都大学工学部情報学科計算機科学コース．2026年春卒業，同大学大学院へ進学予定．</li>
                <li>研究：マルチエージェント経路計画(MAPF)</li>
                <li>情報系コミュニティ：京都大学競技プログラミングサークル(KCPC)</li>
                <li>得意領域：アルゴリズム，統計学・機械学習</li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://atcoder.jp/users/tatesoto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <img
                  src="https://cp-logo.vercel.app/atcoder/tatesoto?logo=true"
                  alt="AtCoder rating badge for tatesoto"
                  className="h-5"
                  loading="lazy"
                />
                AtCoder
                <ExternalIcon />
              </a>
              <a
                href="https://codeforces.com/profile/tatesoto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <img
                  src="https://cp-logo.vercel.app/codeforces/tatesoto?logo=true"
                  alt="Codeforces rating badge for tatesoto"
                  className="h-5"
                  loading="lazy"
                />
                Codeforces
                <ExternalIcon />
              </a>
              <a
                href="https://github.com/tatesoto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <img src="https://cdn.simpleicons.org/github" alt="" className="h-4 w-4 dark:hidden" />
                <img src="https://cdn.simpleicons.org/github/ffffff" alt="" className="h-4 w-4 hidden dark:inline-block" />
                GitHub
                <ExternalIcon />
              </a>
              <a
                href="https://zenn.dev/tatesoto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <img src="https://cdn.simpleicons.org/zenn" alt="" className="h-4 w-4" />
                Zenn
                <ExternalIcon />
              </a>
              <a
                href="https://x.com/coder_tatesoto"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <img src="https://cdn.simpleicons.org/x" alt="" className="h-4 w-4" />
                X（Twitter）
                <ExternalIcon />
              </a>
            </div>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2"
              >
                お問い合わせ
              </Link>
            </div>
          </div>


          <div className="hidden md:block md:justify-self-center">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">活動ダイジェスト</h2>
          <a href="/activities" className="text-sm underline">
            すべて見る →
          </a>
        </div>

        <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
          {activitiesIndex.slice(0, 3).map((a) => (
            <li key={a.slug} className="py-4">
              <a
                href={`/activities/${a.slug}`}
                className="group block"
              >
                <div className="flex items-baseline gap-2">
                  <span className="opacity-80">{a.icon}</span>
                  <span className="font-semibold group-hover:underline underline-offset-4">{a.title}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 line-clamp-2">{a.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">実績ハイライト</h2>
          <Link to="/achievements" className="text-sm underline">
            すべて見る →
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
          {achievements.slice(0, 3).map((a) => (
            <li key={a.id} className="py-4">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs mt-1 text-slate-500">
                {[a.org, a.date].filter(Boolean).join(' ・ ')}
              </div>
              {a.summary ? (
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 line-clamp-2">{a.summary}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">資格・スコア</h2>
          <Link to="/certifications" className="text-sm underline">
            すべて見る →
          </Link>
        </div>

        <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
          {certifications.slice(0, 3).map((c) => (
            <li key={c.id} className="py-4">
              <div className="font-semibold">{c.title}</div>
              <div className="text-xs mt-1 text-slate-500">
                {c.issuer} ・ {c.issued}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border p-6 md:p-8">
          <h3 className="text-xl font-semibold">お仕事・ご相談の連絡</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            学業・開発状況に応じて、開発・実装・作問など対応可能です。
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2"
            >
              連絡する
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'tatesoto',
            url: 'https://tatesoto.github.io/',
            sameAs: [
              'https://github.com/tatesoto',
              'https://zenn.dev/tatesoto',
              'https://atcoder.jp/users/tatesoto',
              'https://codeforces.com/profile/tatesoto',
              'https://x.com/coder_tatesoto',
            ],
            affiliation: 'KCPC',
            hasCredential: certifications.map((c) => ({
              '@type': 'EducationalOccupationalCredential',
              name: c.title,
              issuer: c.issuer,
              url: c.verifyUrl,
            })),
          }),
        }}
      />
    </div>
  )
}
