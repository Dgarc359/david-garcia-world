import { languages } from "@/app/lib/types";
import LanguageBarBlock from "./language-bar-block";

function determineLanguageColor(language: typeof languages[number]) {
  switch(language) {
    case "Rust":
      return {bg: "bg-red-600", text: "text-red-600"};
    case "TypeScript":
      return {bg: "bg-blue-400", text: "text-blue-400"};
    case "Python":
      return {bg: "bg-blue-600", text: "text-blue-600"};
    case "JavaScript":
      return {bg: "bg-yellow-600", text: "text-yellow-600"};
    case "Go":
      return {bg: "bg-blue-200", text: "text-blue-200"};
    case "HTML":
      return {bg: "bg-orange-400", text: "text-orange-400"};
    case "Makefile":
      return {bg: "bg-orange-600", text: "text-orange-600"};
    case "CSS":
      return {bg: "bg-red-200", text: "text-red-200"};
    case "Shell":
      return {bg: "bg-teal-800", text: "text-teal-800"};
    case "Dockerfile":
      return {bg: "bg-cyan-400", text: "text-cyan-400"};
    default:
      return {bg: "bg-gray-600", text: "text-gray-600"}
  }
}

export default function LanguageBar(props: {
  languages: {
    type: typeof languages[number];
    percentage: number;
  }[],
  className?: string
  }) {
  const languageBarArr: React.JSX.Element[] = [];
  const languageLegendArr: React.JSX.Element[] = [];
  props.languages.forEach((language, i) => {

    const languageColor = determineLanguageColor(language.type);

    languageBarArr.push(<LanguageBarBlock
      key={`${language.type}-${language.percentage}`}
      language={language.type}
      percentage={language.percentage}
      styles={
        "h-full "
        + `${languageColor.bg} ${i === 0 ? "rounded-l-md" : ""} ${i === props.languages.length - 1 ? "rounded-r-md" : ""}`
      }
    />)

    languageLegendArr.push(
    <div key={language.type}className={
      `text-sm text-black font-normal`
    }>
      <div className={
        `inline-block w-2 h-2 rounded-full ${languageColor.bg} mr-2`
      }>
      </div>
      {language.type}
    </div>
    )
  })


  return(
    <div className={props.className}>
      <div className="flex gap-1 m-1 p-2 w-full h-6">
      { languageBarArr.map((languageBar) => languageBar) }
      </div>

      <div
        className="px-4"
      >
      <div className="flex flex-wrap justify-center gap-4">
      { languageLegendArr.map((languageLegend) => languageLegend) }

      </div>
      </div>
    </div>
  )
}
