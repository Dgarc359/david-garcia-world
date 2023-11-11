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

  return (
    <>
      {data.map((item: any) => (
        <div key={item.title} className={props.containerStyle ?? ""}>
            <FontAwesomeIcon icon={faSignHanging} />
          {item.title}
        </div>
      ))}
    </>
  );
}
