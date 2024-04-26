import DocumentItem from "../components/DocumentItem";

export default function ProjectList() {
    return (
        <>
         <DocumentItem 
            title={"Test"}
            onClick={() => console.log("hi")}
            icon={"https://i.imgur.com/rnLPbUQ.png"}/>
        </>
    )
}