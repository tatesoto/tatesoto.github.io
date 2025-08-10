import { achievements } from '@/data/achievements'

export default function Achievements() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">実績</h2>
      <div className="mt-6 space-y-4">
        {achievements.map(a => (
          <article key={a.id} className="rounded-xl border p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <span className="text-xs text-slate-500">
                {[a.org, a.date].filter(Boolean).join(' ・ ')}
              </span>
            </div>
            {a.summary && (
              <p className="mt-2 text-slate-700 dark:text-slate-300">{a.summary}</p>
            )}
            {a.details?.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                {a.details.map(d => <li key={d}>{d}</li>)}
              </ul>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {a.tags?.map(t => (
                <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
              ))}
            </div>
            {a.links?.length ? (
              <div className="mt-3 flex flex-wrap gap-3">
                {a.links.map(l => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                     className="inline-flex items-center rounded-lg border px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
