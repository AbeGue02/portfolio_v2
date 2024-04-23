import NavItem from "./NavItem";

export default function TopBar() {
    return (
        <nav className="topBar">
            <NavItem title={"About Me"}/>
            <NavItem title={"Work"}/>
            <NavItem title={"Documents"}/>
            <NavItem title={"Socials"}/>
            <NavItem title={"Contact Me"}/>
        </nav>
    )
}