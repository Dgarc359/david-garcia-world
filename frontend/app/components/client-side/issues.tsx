import { useGetIssueByMilestone } from "@/app/util"
import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export function Issues(props: { milestone: string }) {
    const { data: issues, error, isLoading } = useGetIssueByMilestone({
            account: "Dgarc359",
            repo: "david-garcia-world",
            milestoneName: props.milestone,
            issueLimit: 3
        })
    if(error) return (<div>Error fetching issues..</div>)
    if(isLoading) return (<div>Loading issues..</div>)
    console.log(issues)
    return (<div>
        {issues.items.map((iss: any) =>
            <a href={iss.html_url} key={iss.title}>
            <div >
                <FontAwesomeIcon icon={faBullseye} className="pr-2" />
                {iss.title}
            </div>
            </a>
        )}
    </div>)
}
