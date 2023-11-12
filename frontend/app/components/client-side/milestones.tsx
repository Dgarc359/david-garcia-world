"use client"
import { getIssueByMilestone, useGetRepoMilestones  } from "@/app/util";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignHanging} from "@fortawesome/free-solid-svg-icons";

export function Milestones(props: {
  containerStyle?: string;
  limits?: { prLimit?: number; issueLimit?: number };
}) {

    const {data, error, isLoading} = useGetRepoMilestones("Dgarc359", "david-garcia-world")

  if (!data) {
    return <div />;
  }

  if(isLoading) return (<div>Loading!</div>);
      if(error) return (<div>Error!</div>);
      console.log(data)

  return (
    <div className="flex-col">
      {data.map((item: any) => (
        <div key={item.title} className={props.containerStyle ?? ""}>

            <div className="flex">
            <FontAwesomeIcon icon={faSignHanging} />
          <div className="px-4" />

          <div className="flex-col">
          <div>
          {item.title}
          </div>
          <div>
          {item.closed_at ?
            `Completed: ${new Date(item.closed_at).toDateString()}`
            : undefined
          }
          </div>
          </div>

          </div>
        </div>
      ))}
    </div>
  );
}
