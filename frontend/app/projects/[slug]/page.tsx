"use client"
import { MarkdownC } from '@/app/lib/components/client-side';
import { usePathname } from 'next/navigation'
import {getRepositoryReadme} from '@/app/lib/util';
interface Props {
    repoName: string,
}

export default function ProjectsPage(props: Props) {

    console.log("loading projects page");
    const pathName = usePathname().split("/").filter(s => s !== "projects").join("");

    const { data: readmeData, error: readmeError, isLoading: readmeIsLoading } = getRepositoryReadme("Dgarc359", pathName);

    if(readmeError && readmeError.status) return (<div> An error occured! {JSON.stringify(readmeError)} </div>);
    if(readmeIsLoading) return (<div> Still loading! </div>);
    if(readmeData !== undefined) {
        return (<MarkdownC payload={readmeData}/>)
           }

}
