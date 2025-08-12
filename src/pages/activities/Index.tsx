import { Link } from 'react-router-dom'
import { activitiesIndex } from '@/data/activitiesIndex'

export default function ActivitiesIndex() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {activitiesIndex.map((a) => (
        <Link
          key={a.slug}
          to={`/activities/${a.slug}`}
          className="block rounded-2xl border p-6 hover:shadow-lg transition"
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl" aria-hidden>{a.icon}</div>
            <div className="font-semibold">{a.title}</div>
          </div>
          <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm">{a.summary}</p>
          {a.updated && (
            <div className="mt-3 text-xs text-slate-500">最終更新: {a.updated}</div>
          )}
          <div className="mt-3 inline-flex items-center text-sm underline">詳しく見る →</div>
        </Link>
      ))}
    </div>
  )
}
