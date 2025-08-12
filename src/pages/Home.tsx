import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n'
import { achievements } from '@/data/achievements'
import { certifications } from '@/data/certifications'
import { strengths } from '@/data/strengths'
import { activitiesIndex } from '@/data/activitiesIndex'

export default function Home() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h1 className="mt-1 text-3xl md:text-5xl font-bold tracking-tight">
          tatesoto's Page
        </h1>
        <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
          {t('hero_title')}
        </p>
        <p className="mt-1 text-slate-700 dark:text-slate-300">
          {t('hero_sub')}
        </p>

        {/* Quick chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {['Algorithms', 'TypeScript/React', 'Machine Learning', 'GitHub Actions', 'Docker'].map((s) => (
            <span key={s} className="text-xs rounded-full border px-2.5 py-1">
              {s}
            </span>
          ))}
        </div>



        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/activities"
            className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2"
          >
            活動を見る
          </Link>
          <a
            className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800"
            href="https://github.com/tatesoto"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="inline-flex items-center rounded-lg border border-sky-500 px-4 py-2 text-sky-600 hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-800"
            href="https://example.com/resume.pdf" // ← 履歴書の実URLに差し替え
            target="_blank"
            rel="noreferrer"
          >
            履歴書（PDF）
          </a>
        </div>
      </section>

      {/* Activities */}
      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">活動ダイジェスト</h2>
          <a href="/activities" className="text-sm underline">すべて見る →</a>
        </div>
        <div className="mt-5 grid md:grid-cols-3 gap-6">
          {activitiesIndex.slice(0,3).map((a) => (
            <a key={a.slug} href={`/activities/${a.slug}`} className="block rounded-xl border p-5 hover:shadow-lg transition">
              <div className="font-semibold">{a.icon} {a.title}</div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 line-clamp-3">{a.summary}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">実績ハイライト</h2>
          <Link to="/achievements" className="text-sm underline">すべて見る →</Link>
        </div>
        <div className="mt-5 grid md:grid-cols-3 gap-6">
          {achievements.slice(0, 3).map(a => (
            <div key={a.id} className="rounded-xl border p-5">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs mt-1 text-slate-500">
                {[a.org, a.date].filter(Boolean).join(' ・ ')}
              </div>
              {a.summary && (
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {a.summary}
                </p>
              )}
              {a.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.tags.map(t => (
                    <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-5xl px-4 pb-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">資格・スコア</h2>
          <Link to="/certifications" className="text-sm underline">すべて見る →</Link>
        </div>
        <div className="mt-5 grid md:grid-cols-3 gap-6">
          {certifications.slice(0,3).map(c => (
            <div key={c.id} className="rounded-xl border p-5">
              <div className="font-semibold">{c.title}</div>
              <div className="text-xs mt-1 text-slate-500">
                {c.issuer} ・ {c.issued}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills / Strengths */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">得意領域</h2>
          <Link to="/skills" className="text-sm underline">スキル詳細 →</Link>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {strengths.map(s => (
            <article key={s.key} className="rounded-2xl border p-6">
              <div className="flex items-center gap-3">
                <div className="text-2xl" aria-hidden>{s.icon}</div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">{s.oneLiner}</div>
                </div>
              </div>
              <ul className="mt-4 list-disc pl-5 text-sm space-y-1">
                {s.bullets.map(b => <li key={b} dangerouslySetInnerHTML={{ __html: b }} />)}
              </ul>
              {s.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.links.map(l =>
                    l.to ? (
                      <Link key={l.label} to={l.to}
                        className="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">
                        {l.label}
                      </Link>
                    ) : (
                      <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                        className="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">
                        {l.label}
                      </a>
                    )
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border p-6 md:p-8">
          <h3 className="text-xl font-semibold">お仕事・ご相談の連絡</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            学業・開発状況に応じて、開発・実装・検証など対応可能です。
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2"
            >
              連絡する
            </Link>
            <a
              href="mailto:example@example.com"
              className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              メールで相談
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD (SEO, Person) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'tatesoto',
            url: 'https://tatesoto.github.io/',
            hasCredential: certifications.map(c => ({
              '@type': 'EducationalOccupationalCredential',
              name: c.title,
              issuer: c.issuer,
              validFor: c.expires ? undefined : undefined,
              url: c.verifyUrl
            }))
          })
        }}
      />

    </div>
  )
}
