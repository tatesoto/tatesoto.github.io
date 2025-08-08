export type Project = {
    slug: string
    title: string
    description: string
    tech: string[]
    tags: string[]
    period?: string
    links?: { label: string; url: string }[]
    highlights?: string[]
}

export const projects: Project[] = [
    {
        slug: "wip",
        title: "Work in Progress",
        description: "A project that is currently being developed.",
        tech: ["TypeScript", "React"],
        tags: ["frontend", "ui"],
        period: "2023",
        links: [
            { label: "GitHub", url: "https://github.com" },
            { label: "Live Demo", url: "https://example.com" }
        ],
        highlights: [
            "Utilizes modern web technologies",
            "Responsive design",
            "Accessible to all users"
        ]
    }
]