import { useI18n } from '@/i18n'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Yuya Yokouchi</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{t('hero_title')}</p>
      <p className="text-slate-600 dark:text-slate-300">{t('hero_sub')}</p>

      <div className="mt-6 flex gap-3">
        <a
          className="inline-flex items-center rounded-lg border border-sky-500 px-4 py-2 text-sky-600 hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-800"
          href="https://example.com/resume.pdf"
          target="_blank" rel="noreferrer"
        >
          履歴書（PDF）
        </a>
        <a
          className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2"
          href="https://github.com/tatesoto"
          target="_blank" rel="noreferrer"
        >
          GitHub
        </a>
        <Link
          to="/projects"
          className="inline-flex items-center rounded-lg border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          プロジェクトを見る
        </Link>
      </div>
    </section>
  )
}