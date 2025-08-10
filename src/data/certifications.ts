export type Certification = {
    id: string
    title: string
    issuer: string
    issued: string
    expires?: string
    credentialId?: string
    verifyUrl?: string
    tags?: string[]
    notes?: string
}

export const certifications: Certification[] = [
  { id:'riss', title:'情報処理安全確保支援士試験', issuer:'IPA', issued:'2025-07-03', tags:['Security','IPA'] },
  { id:'dbsp', title:'データベーススペシャリスト試験', issuer:'IPA', issued:'2024-12-26', tags:['DB','IPA'] },
  { id:'stat1', title:'統計検定1級', issuer:'統計検定', issued:'2023-12-18',
    notes:'統計応用は理工学、統計数理で優秀成績賞。', tags:['Statistics','ML'] },
  { id:'ap', title:'応用情報技術者試験', issuer:'IPA', issued:'2024-07-04', tags:['General','IPA'] },
  { id:'toeic', title:'TOEIC L&R 770', issuer:'IIBC', issued:'2025-05-18', tags:['English'] },
]
