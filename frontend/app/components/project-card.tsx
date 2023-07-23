import { Project, languages } from "../types"
import Link from "next/link";
import LanguageBar from "./language-bar/language-bar";

const determineLanguagePercents = (githubPayload: {
  [K in typeof languages[number]]?: number;
}) => {
  const total = Object.values(githubPayload).reduce((acc, curr) => acc + curr, 0);
  const percents = Object.entries(githubPayload).map(([language, bytes]) => {
    return {
      type: language as typeof languages[number],
      percentage: bytes ? bytes / total * 100 : 0
    }
  });
  return percents;
}

export default function ProjectCard(props: Omit<Project, "filterableMetadata">) {
  // TODO: get github data
  const githubPayload = {"Rust":3422, "Typescript": 1234}
  const languagePercents = determineLanguagePercents(githubPayload);

  return(
    <Link href={props.href}>
    <div className="m-2 p-2 w-auto h-auto flex-col justify-center gap-8 border border-gray-300 rounded-md hover:shadow-lg">
      <div className="my-2 p-2">
        {props.displayTitle}
      </div>
      <div className="my-3 px-2 font-light text-base justify-center flex">
        {props.description}
      </div>
      <LanguageBar languages={languagePercents}/>
    </div>
    </Link>
  )
}