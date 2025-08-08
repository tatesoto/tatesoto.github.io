import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Lang = 'ja' | 'en'

type Dict = Record<string, string>
type Dictionaries = Record<Lang, Dict>

const dictionaries: Dictionaries = {
  ja: {
    nav_home: 'ホーム',
    nav_projects: 'プロジェクト',
    nav_skills: 'スキル',
    nav_experience: '経歴',
    nav_contact: '連絡',
    hero_title: 'WIP',
    hero_sub: 'WIP'
  },
  en: {
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    hero_title: 'WIP',
    hero_sub: 'WIP'
  }
}

type I18nContextType = {
  lang: Lang
  t: (key: string) => string
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ja')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'ja' || stored === 'en') setLang(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: string) => dictionaries[lang]?.[key] ?? key
  const value = useMemo(() => ({ lang, setLang, t }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}