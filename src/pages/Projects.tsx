export default function Projects() {
  const items = [
    
  ]

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">プロジェクト</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
            className="block rounded-xl border p-5 hover:shadow-lg transition">
            <div className="font-semibold">{p.title}</div>
            <div className="text-xs mt-1 text-slate-500">{p.tech.join(' / ')}</div>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}