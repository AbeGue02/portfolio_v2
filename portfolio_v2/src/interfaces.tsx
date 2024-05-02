export interface ContentWindowInterface {
    isVisible: Boolean
    title: String | string
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
    pictures?: string[]
    skills?: Skill[]
    icon?: string
    githubLink: string
    backendLink?: string
    deployedLink?: string
    expoSnackLink?: string
}

export interface PictureModalInterface {
    isShowing: boolean
    pictureURL: string
}