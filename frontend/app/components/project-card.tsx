import { Project, languages } from "../types"
import Link from "next/link";
import LanguageBar from "./language-bar/language-bar";

const determineLanguagePercents = (githubPayload: {
  [K in typeof languages[number]]?: number;
}) => {
  const total = Object.values(githubPayload).reduce((acc, curr) => acc + curr, 0);
  const percents = Object.entries(githubPayload)
    .map(([language, bytes]) => {
      return {
        type: language as typeof languages[number],
        percentage: bytes ? bytes / total * 100 : 0
      }
    })
    .sort((a, b) => b.percentage - a.percentage)
    .filter(language => language.percentage > 3);

  return percents;
}

export default function ProjectCard(props: Omit<Project, "filterableMetadata" | "account"> & {githubPayload: {[K in typeof languages[number]]?: number}}) {
  const languagePercents = determineLanguagePercents(props.githubPayload);

  return(
    <Link href={props.href}>
    <div className="m-2 p-2 w-auto h-auto sm:min-w-[340px] sm:min-h-[300px] sm:max-w-[340px] border border-gray-300 rounded-md hover:shadow-lg flex flex-col justify-between">
        
      <div className="p-2 flex justify-center text-center">
        <div>
        {props.displayTitle}
        </div>
      </div>
      <div className="px-2 font-light text-base justify-center flex">
        <div>
        {props.description}
        </div>
      </div>
      <LanguageBar className={"self-stretch"} languages={languagePercents}/>
    </div>
    </Link>
  )
}