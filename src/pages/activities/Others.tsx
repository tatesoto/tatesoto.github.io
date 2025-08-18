import { activities, Activity } from "@/data/otherActivities"

const slugify = (id: string) => {
    const s = id.toLowerCase().replace(/\s+/g, '').replace(/_/g, '')
    const map: Record<string, string> = {
        'typescript': 'typescript',
        'react': 'react',
        'vite': 'vite',
        'tailwind': 'tailwindcss',
        'tailwindcss': 'tailwindcss',
        'eslint': 'eslint',
        'prettier': 'prettier',
        'github-actions': 'githubactions',
        'githubactions': 'githubactions',
        'github': 'github',
        'docker': 'docker',
        'vercel': 'vercel',
    }
    return map[s] || s
}

const labelOf = (slug: string) => ({
    typescript: 'TypeScript',
    react: 'React',
    vite: 'Vite',
    tailwindcss: 'Tailwind CSS',
    eslint: 'ESLint',
    prettier: 'Prettier',
    githubactions: 'GitHub Actions',
    github: 'GitHub',
    docker: 'Docker',
    vercel: 'Vercel',
}[slug] ?? slug)

const labelMap: Record<string, string> = {
    react: 'React',
    typescript: 'TypeScript',
    vite: 'Vite',
    tailwind: 'Tailwind CSS',
    eslint: 'ESLint',
    prettier: 'Prettier',
    'github-actions': 'GitHub Actions',
    docker: 'Docker',
    github: 'GitHub',
    vercel: 'Vercel',
}

function TechPill({ id }: { id: string }) {
    const slug = slugify(id)
    const label = labelOf(slug)
    const needsContrast = new Set(['github', 'vercel'])

    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs bg-slate-50 dark:bg-slate-800/50">
        {/* ライト用（公式色） */}
        <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt=""
            className={`h-4 w-4 ${needsContrast.has(slug) ? 'dark:hidden' : ''}`}
            loading="lazy"
            decoding="async"
        />
        {/* ダーク用（白アイコンの差し替え） */}
        {needsContrast.has(slug) && (
            <img
            src={`https://cdn.simpleicons.org/${slug}/ffffff`}
            alt=""
            className="h-4 w-4 hidden dark:inline-block"
            loading="lazy"
            decoding="async"
            />
        )}
        <span className="uppercase tracking-wide">{label}</span>
        </span>
    )
}

function ProjectBlock({ p }: { p: Activity }) {
    const primaryLink = p.pagelinks || p.githublinks
    const externalLink = primaryLink ? !primaryLink.startsWith('/') : false
    const links = [
        ...(p.pagelinks ? [{ label: '公開ページ', url: p.pagelinks }] : []),
        ...(p.githublinks ? [{ label: 'GitHub', url: p.githublinks }] : []),
    ]
    return (
        <section id={p.slug} className="scroll-mt-24">
            <h3 className="text-2xl md:text-3xl font-bold relative pe-2">
                {primaryLink ? (
                    <a
                        href={primaryLink}
                        target={externalLink ? '_blank' : '_self'}
                        rel={externalLink ? 'noreferrer' : undefined}
                        className="not-prose inline-flex items-baseline gap-1 hover:underline underline-offset-4"
                    >
                        {p.title}
                        {externalLink && (
                            <svg
                                viewBox="0 0 20 20"
                                className="h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                                aria-hidden
                            >
                                <path fill="currentColor" d="M11 3h6v6h-2V6.41l-7.29 7.3-1.42-1.42 7.3-7.29H11V3zM5 5h4v2H7v8h8v-2h2v4H5V5z"/>
                            </svg>
                        )}
                    </a>
                ) : (
                    p.title
                )}
                <span
                ria-hidden
                className="block h-[3px] mt-1 bg-gradient-to-r from-sky-500 to-transparent"
                />
            </h3>
            <p className="mt-3">{p.summary}</p>

            {/* メタ情報（任意） */}
            {(p.period || p.role) && (
                <p className="mt-2 text-sm text-slate-500">
                {[p.period, p.role].filter(Boolean).join(' / ')}
                </p>
            )}

            {/* スタック（アイコン） */}
            <div className="not-prose mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <TechPill key={s} id={s} />)}
            </div>

            {/* ハイライト */}
            {p.highlights?.length ? (
                <ul className="mt-4 list-disc pl-6 space-y-1">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
            ) : null}

            {/* githubリンク */}
            {p.githublinks && (
                <p className="mt-4">
                    <a
                        href={p.githublinks}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-600 dark:text-sky-400 hover:underline"
                    >
                        GitHub リポジトリを見る
                    </a>
                </p>
            )

            }
            
            {/* スクショ（任意） */}
            {p.screenshots?.length ? (
                <div className="not-prose mt-4 grid sm:grid-cols-2 gap-3">
                {p.screenshots.map((src) => (
                    <img key={src} src={src} alt={`${p.title} screenshot`} className="rounded-lg border" loading="lazy" />
                ))}
                </div>
            ) : null}
        </section>
    )
}

export default function Frontend() {
    const toc = activities.map((p) => ({ href: `#${p.slug}`, label: p.title }))
    return (
        <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 lg:grid-cols-[minmax(0,1fr),280px]">
            {/* 本文（prose） */}
            <article
                className="
                prose prose-slate dark:prose-invert max-w-none
                prose-headings:scroll-mt-24
                prose-h1:text-4xl prose-h1:font-extrabold
                prose-h2:text-3xl prose-h2:font-bold
                prose-h3:text-2xl
                "
            >
            <h1>その他</h1>
            <p>
            プロジェクトごとに概要・技術スタック・ハイライトをまとめています．
            </p>

            <h2 id="projects">Projects</h2>
            <div className="space-y-12">
            {activities.map((p) => <ProjectBlock key={p.slug} p={p} />)}
            </div>
            </article> 

        {/* 右サイド TOC */}
        <aside className="hidden lg:block">
            <nav className="sticky top-24 rounded-xl border p-4 text-sm">
            <div className="font-semibold mb-2">目次</div>
            <ul className="space-y-1">
                {toc.map((t) => (
                <li key={t.href}>
                    <a href={t.href} className="underline hover:no-underline">{t.label}</a>
                </li>
                ))}
            </ul>
            </nav>
        </aside>
        </section>
    )
}
