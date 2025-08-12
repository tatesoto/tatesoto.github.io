import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { useI18n } from '@/i18n'
import { useTheme } from '@/theme'
import Home from './Home'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import clsx  from 'clsx'
import Achievements from './Achievements'
import Certifications from './Certifications'
import ActivitiesLayout from './activities/Layout'
import ActivitiesIndex from './activities/Index'
import Competitive from './activities/Competitive'
import Frontend from './activities/FrontEnd'

function Nav() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-700/50 backdrop-blur bg-white/80 dark:bg-slate-900/70">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
        <Link to="/" className="font-bold text-sky-600 dark:text-sky-400">tatesoto's Page</Link>
        <nav className="ml-auto flex items-center gap-4 text-sm">
          {[
            ['/', t('nav_home')],
            ['/activities', t('nav_activities')],
            ['/skills', t('nav_skills')],
            ['/experience', t('nav_experience')],
            ['/achievements', t('nav_achievements')],
            ['/certifications', t('nav_certifications')],
            ['/contact', t('nav_contact')],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                clsx('px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800', isActive && 'bg-slate-100 dark:bg-slate-800')
              }
              end
            >
              {label}
            </NavLink>
          ))}
          <button onClick={toggle} className="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800" title={`Theme: ${theme}`}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <select
            className="px-2 py-1 rounded bg-transparent border border-slate-300 dark:border-slate-700"
            value={lang}
            onChange={(e) => setLang(e.target.value as 'ja' | 'en')}
            title="Language"
          >
            <option value="ja">JA</option>
            <option value="en">EN</option>
          </select>
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<ActivitiesLayout />}>
            <Route index element={<ActivitiesIndex />} />
            <Route path="competitive" element={<Competitive />} />
            <Route path="frontend" element={<Frontend />} />
          </Route>
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} tatesoto
        </div>
      </footer>
    </div>
  )
}