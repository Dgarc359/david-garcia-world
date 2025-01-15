"use client";
import { MarkdownC } from "@/app/lib/components/client-side";
import { usePathname } from "next/navigation";
import { useRepositoryReadme } from "@/app/lib/util";

export default function ProjectsPage() {
  console.log("loading projects page");
  const pathName = usePathname()
    .split("/")
    .filter((s) => s !== "projects")
    .join("");

  const {
    data: readmeData,
    error: readmeError,
    isLoading: readmeIsLoading,
  } = useRepositoryReadme("Dgarc359", pathName);

  if (readmeError && readmeError.status)
    return <div> An error occured! {JSON.stringify(readmeError)} </div>;
  if (readmeIsLoading) return <div> Still loading! </div>;
  if (readmeData !== undefined) {
    return (
      <div className="flex justify-center">
      <MarkdownC payload={readmeData} customStyles={"w-2/3"}/>
      </div>
    );
  }
}
