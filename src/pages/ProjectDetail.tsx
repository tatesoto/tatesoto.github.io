import { useParams, Link } from 'react-router-dom'
import { projects } from '@/data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find(x => x.slug === slug)

  if (!p) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold">見つかりませんでした</h2>
        <p className="mt-2">指定のプロジェクトは存在しません。</p>
        <Link to="/projects" className="mt-4 inline-block underline">← 一覧へ戻る</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <Link to="/projects" className="text-sm underline">← プロジェクト一覧</Link>
      <h1 className="mt-2 text-3xl font-bold">{p.title}</h1>
      {p.period && <div className="text-sm text-slate-500 mt-1">{p.period}</div>}

      <p className="mt-4 text-slate-700 dark:text-slate-300">{p.description}</p>

      <div className="mt-4">
        <div className="text-sm font-semibold">技術</div>
        <div className="mt-1 text-sm">{p.tech.join(' / ')}</div>
      </div>

      {p.highlights?.length ? (
        <div className="mt-6">
          <div className="text-sm font-semibold">ハイライト</div>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            {p.highlights.map(h => <li key={h}>{h}</li>)}
          </ul>
        </div>
      ) : null}

      {p.links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {p.links.map(l => (
            <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
               className="inline-flex items-center rounded-lg border px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  )
}
