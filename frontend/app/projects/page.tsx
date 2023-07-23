"use client";
import React from "react";
import { languages, Filter, Project } from "../types";
import ProjectCard from "../components/project-card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState<Filter>({
    language: new Set()
  });

  React.useEffect(() => {}, [filter]);
  const projectsArr: Project[] = [
    {
      displayTitle: "Mini Rover", 
      filterableMetadata: {language: new Set<typeof languages[number]>(["Rust", "Typescript"])},
      href: "/projects/mini-rover",
      description: "A small rover",
    }
  ];

  const [languageVisibility, setLanguageVisibility] = React.useState<boolean>(true); 

  return(
    <div id="project-root" className={'h-screen w-screen flex-col'}>
      <div className='flex h-[30%] w-screen justify-center'>
          <div className='w-screen h-full justify-center relative flex badge-container md:w-[40%] md:h-[50%]'>
            <h1 className="select-none text-7xl text-slate-900 font-black absolute top-20 left-10 cursor-default drop-shadow-md md:relative md:left-40 first-name h-0 z-10">PROJ-</h1>
            <div className={'m-2 w-[65%] h-[50%] rounded-md mt-[4.5rem] shadow-md md:w-[30%] md:h-[99%] bg-lime-400 -z-5 opacity-[85%]'}/>
            <h1 className="select-none absolute text-slate-900 font-black text-7xl right-5 top-[115px] cursor-default drop-shadow-md md:relative md:right-[140px] h-0 -z-10">ECTS</h1>
          </div>
      </div>
      <div className="flex justify-center my-10 gap-10">
        <div className="flex-col">
        <div className="" onClick={() => {
          setLanguageVisibility((state) => !state);
        }}>
          <p className="font-sans text-lg font-semibold py-2 px-4 rounded-2xl cursor-pointer select-none hover:bg-slate-200 w-auto">Filters <FontAwesomeIcon icon={faFilter}/></p>
          {/* <div className="font-sans text-lg font-semibold py-2 px-4 rounded-2xl cursor-pointer select-none hover:bg-slate-200">Filters #p</div> */}
          {/* <div className="text-slate-400 px-2">languages <span className="font-mono font-extralight">&#9660;</span>
          </div> */}
        </div>
        <div className="mt-2 underline select-none cursor-normal" hidden={languageVisibility}>Programming Languages</div>
        <ul>
          {
            languages.map((language) => (
              <div hidden={languageVisibility} key={language}>
              <label
                className="inline-block whitespace-nowrap"
                htmlFor={language}
              >
                <input 
                  type="checkbox"
                  onChange={(e) => {
                  console.log("checkbox changed", e.target.checked);

                  if (e.target.checked) {
                    setFilter((state) => {
                      const newLangs = state.language;
                      newLangs.add(language);
                      return {...state, language: newLangs};
                    })
                  }
                  else {
                    setFilter((state) => {
                      const newLangs = state.language;
                      newLangs.delete(language);
                      return {...state, language: newLangs }
                    })
                  }
                  }} 
                  name={language} 
                  className="align-middle"
                ></input>
                <span 
                className="font-normal p-2 rounded-2xl cursor-pointer select-none justify-end align-middle" >{language}</span>
              </label>
              </div>
            ))
          }
        </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-4xl font-bold">
          {
            projectsArr.map((project) => {
              if( // no filter exists no need to see if we want to display the project or not.
                filter.language.size === 0 || ([...filter.language].filter((lang) => project.filterableMetadata.language.has(lang)).length > 0)
              ) {
                return(
                  <ProjectCard key={project.displayTitle} href={project.href} displayTitle={project.displayTitle} description={project.description}/>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}