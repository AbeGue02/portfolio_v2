export interface ContentWindowInterface {
    isVisible: Boolean
    title: String
}

export interface ContentWindowContext {
    windowState: ContentWindowInterface
    setWindowState: React.Dispatch<React.SetStateAction<ContentWindowInterface>>
}

export interface Skill {
    name: string
    icon?: string
}

export interface Project {
    id: Number
    title: string
    category: string
    description: string
    skills?: Skill[]
    icon?: string
    githubLink: string
    backendLink?: string
}