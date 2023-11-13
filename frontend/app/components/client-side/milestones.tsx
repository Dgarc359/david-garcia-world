"use client"
import { useGetIssueByMilestone, useGetRepoMilestones  } from "@/app/util";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignHanging} from "@fortawesome/free-solid-svg-icons";
import { Issues } from "./issues";

export function Milestones(props: {
  containerStyle?: string;
  limits?: { prLimit?: number; issueLimit?: number };
}) {

    const {data: milestones, error: getMilestonesError, isLoading: getMilestonesIsLoading} = useGetRepoMilestones("Dgarc359", "david-garcia-world")

  if (!milestones) {
    return <div>No Milestones found!</div>;
  }

  if(getMilestonesIsLoading) return (<div>Loading!</div>);
      if(getMilestonesError) return (<div>Error!</div>);

    for (const milestone of milestones) {
        if(milestone.closed_at) continue;

/*
        const {data, error, isLoading} = useGetIssueByMilestone({
            account: "Dgarc359",
            repo: "david-garcia-world",
            milestoneName: milestone,
            issueLimit: 5
            })
        issues.set(milestone.title, data)
        */
    }

  return (
    <div className="flex-col">
      {milestones.map((milestone: any) => (
        <div key={milestone.title} className={props.containerStyle ?? ""}>

            <div className="flex">
            <FontAwesomeIcon icon={faSignHanging} />
          <div className="px-4" />

          <div className="flex-col text-center">
              <div className="pb-2">
              {milestone.title}
              </div>
              <div>
              {milestone.closed_at ?
                `Completed: ${new Date(milestone.closed_at).toDateString()}`
                : <Issues milestone={milestone.title as string} />
              }
              </div>
          </div>

          </div>
        </div>
      ))}
    </div>
  );
}
