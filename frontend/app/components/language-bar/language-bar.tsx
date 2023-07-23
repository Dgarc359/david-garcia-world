import { languages } from "../../types";
import LanguageBarBlock from "./language-bar-block";

function determineLanguageColor(language: typeof languages[number]) {
  switch(language) {
    case "Rust":
      return {bg: "bg-red-600", text: "text-red-600"};
    case "Typescript":
      return {bg: "bg-blue-400", text: "text-blue-400"};
    case "Python":
      return {bg: "bg-blue-600", text: "text-blue-600"};
    case "Javascript":
      return {bg: "bg-yellow-600", text: "text-yellow-600"};
    default:
      return {bg: "bg-gray-600", text: "text-gray-600"}
  }
}

export default function LanguageBar(props: {languages: {
  type: typeof languages[number];
  percentage: number;
}[]}) {
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
    // return(
    //   <LanguageBarBlock 
    //     key={`${language.type}-${language.percentage}`} 
    //     language={language.type}
    //     percentage={language.percentage}
    //     styles={
    //       "h-full " 
    //       + `${languageColor} ${i === 0 ? "rounded-l-md" : ""} ${i === props.languages.length - 1 ? "rounded-r-md" : ""}`
    //     }
    //   />
    // )
  })


  return(
    <div className="">
      {/* {
        props.languages.map((language, i) => {
          const languageColor = determineLanguageColor(language.type);

          return(
            <LanguageBarBlock 
              key={`${language.type}-${language.percentage}`} 
              language={language.type}
              percentage={language.percentage}
              styles={
                "h-full " 
                + `${languageColor} ${i === 0 ? "rounded-l-md" : ""} ${i === props.languages.length - 1 ? "rounded-r-md" : ""}`
              }
            />
          )
        })
      } */}
      <div className="p-2 m-1 flex gap-1 h-6 w-full">
      { languageBarArr.map((languageBar) => languageBar) }
      </div>
      <div className="flex gap-4 justify-center">
      { languageLegendArr.map((languageLegend) => languageLegend) }
      </div>
    </div>
  )
}