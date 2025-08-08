export default function Experience() {
  const items = [
    
  ]
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">経歴</h2>
      <div className="mt-6 space-y-4">
        {items.map((e) => (
          <div key={e.org} className="rounded-xl border p-5">
            <div className="font-semibold">{e.role} — {e.org}</div>
            <div className="text-xs text-slate-500">{e.period}</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{e.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}