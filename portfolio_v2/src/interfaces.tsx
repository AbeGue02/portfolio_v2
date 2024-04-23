export interface ContentWindowInterface {
    isVisible: Boolean,
    title: String
}

export interface ContentWindowContext {
    windowState: ContentWindowInterface
    setWindowState: React.Dispatch<React.SetStateAction<ContentWindowInterface>>
}