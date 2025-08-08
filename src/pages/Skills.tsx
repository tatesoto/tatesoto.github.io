export default function Skills() {
  const skills = {
    Languages: ['WIP'],
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">スキル</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([k, v]) => (
          <div key={k} className="rounded-xl border p-5">
            <div className="font-semibold">{k}</div>
            <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">{v.join(' / ')}</div>
          </div>
        ))}
      </div>
    </section>
  )
}