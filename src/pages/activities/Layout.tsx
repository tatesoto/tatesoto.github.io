import { NavLink, Outlet } from 'react-router-dom'
import clsx from 'clsx'

export default function ActivitiesLayout() {
  const tabs = [
    { to: '/activities', label: '要約' },
    { to: '/activities/competitive', label: '競技プログラミング' },
    { to: '/activities/frontend', label: 'フロントエンド' },
    { to: '/activities/others', label: 'その他' },
  ]
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">活動</h1>
      <nav className="mt-4 flex flex-wrap gap-2 text-sm">
        {tabs.map(t => (
          <NavLink key={t.to} to={t.to}
            className={({isActive}) => clsx(
              'rounded-full border px-3 py-1',
              isActive ? 'bg-sky-600 text-white border-sky-600' : 'hover:bg-slate-50 dark:hover:bg-slate-800'
            )}>
            {t.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-6"><Outlet /></div>
    </section>
  )
}
