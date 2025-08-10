import { certifications } from '@/data/certifications'

function Expired({ expires }: { expires?: string }) {
  if (!expires) return null
  const expired = new Date(expires) < new Date()
  return (
    <span className={`ml-2 text-xs ${expired ? 'text-rose-600' : 'text-slate-500'}`}>
      {expired ? `Expired: ${expires}` : `Valid until: ${expires}`}
    </span>
  )
}

export default function Certifications() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">資格・スコア</h2>
      <div className="mt-6 space-y-4">
        {certifications.map(c => (
          <article key={c.id} className="rounded-xl border p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <span className="text-xs text-slate-500">{c.issuer}</span>
              <span className="text-xs text-slate-500">Issued: {c.issued}</span>
              <Expired expires={c.expires} />
            </div>
            {c.notes && <p className="mt-2 text-sm">{c.notes}</p>}
            <div className="mt-3 flex flex-wrap gap-2">
              {c.tags?.map(t => (
                <span key={t} className="text-xs rounded-full border px-2 py-0.5">{t}</span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {c.credentialId && <span className="text-slate-500">ID: {c.credentialId}</span>}
              {c.verifyUrl && (
                <a href={c.verifyUrl} target="_blank" rel="noreferrer"
                   className="inline-flex items-center rounded border px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-800">
                  Verify
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
