"use client";

import { useRepositoryReadme } from "../../util";
import { MarkdownC } from "./markdown";

export function ProjectComponent(props: { projectName: string}) {
  const {
    data: readmeData,
    error: readmeError,
    isLoading: readmeIsLoading,
  } = useRepositoryReadme("Dgarc359", props.projectName);

  if (readmeError && readmeError.status)
    return <div> An error occured! {JSON.stringify(readmeError)} </div>;
  if (readmeIsLoading) return <div> Still loading! </div>;
  if (readmeData === undefined) return <div>Got undefined data!</div>;

  return (
    <div className="flex justify-center">
      <MarkdownC payload={readmeData} customStyles={"w-2/3"} />
    </div>
  );
}
