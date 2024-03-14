import { Project, languages } from "@/app/lib/types"
import Link from "next/link";
import LanguageBar from "./language-bar/language-bar";

const determineLanguagePercents = (githubPayload: {
  [K in typeof languages[number]]?: number;
}) => {
    // todo: get new total after slicing array for top 4 langs
  const total = Object.values(githubPayload).reduce((acc, curr) => acc + curr, 0);
  const percents = Object.entries(githubPayload)
    .map(([language, bytes]) => {
      return {
        type: language as typeof languages[number],
        percentage: bytes ? bytes / total * 100 : 0
      }
    })
    .sort((a, b) => b.percentage - a.percentage)
    .filter(language => language.percentage > 3)
    .slice(0, 4);

  return percents;
}

export function ProjectCard(props: Omit<Project, "filterableMetadata" | "account"> & {githubPayload: {[K in typeof languages[number]]?: number}}) {
  const languagePercents = determineLanguagePercents(props.githubPayload);

  return(
    <Link href={props.href}>
    <div className="flex flex-col justify-between border-gray-300 hover:shadow-lg m-2 p-2 border rounded-md w-auto sm:min-w-[340px] sm:max-w-[340px] h-auto sm:min-h-[300px]">
        
      <div id="title"
        className="flex justify-center p-2 font-bold text-center">
        <div>
        {props.displayTitle}
        </div>
      </div>
      <div className="flex justify-center px-2 font-light text-base text-center">
        <div>
        {props.description}
        </div>
      </div>
      <LanguageBar className={"self-stretch"} languages={languagePercents}/>
    </div>
    </Link>
  )
}
