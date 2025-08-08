import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '@/data/projects'

export default function Projects() {
  const [q, setQ] = useState('')
  const [tag, setTag] = useState<'all' | string>('all')

  const tags = useMemo(() => {
    const s = new Set<string>()
    projects.forEach(p => p.tags.forEach(t => s.add(t)))
    return ['all', ...Array.from(s)]
  }, [])

  const filtered = projects.filter(p => {
    const okTag = tag === 'all' || p.tags.includes(tag)
    const text = (p.title + ' ' + p.description + ' ' + p.tech.join(' ')).toLowerCase()
    const okQ = q.trim() === '' || text.includes(q.trim().toLowerCase())
    return okTag && okQ
  })

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">プロジェクト</h2>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tags.map(t => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full border px-3 py-1 text-sm ${t===tag ? 'bg-sky-600 text-white border-sky-600' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            aria-pressed={t===tag}
          >
            {t}
          </button>
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="検索（タイトル/説明/技術）"
          className="ml-auto w-full md:w-64 rounded border px-3 py-1 text-sm bg-transparent"
        />
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="block rounded-xl border p-5 hover:shadow-lg transition"
          >
            <div className="font-semibold">{p.title}</div>
            <div className="text-xs mt-1 text-slate-500">{p.tech.join(' / ')}</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>

  )
}