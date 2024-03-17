"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { getRepoLanguages, getGenerallyAvailableRepositories } from "@/app/lib/util";
import { Hero, ProjectCard } from "@/app/lib/components";
import { languages, Filter, Project } from "@/app/lib/types";

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState<Filter>({
    language: new Set(),
  });
 const [languageVisibility, setLanguageVisibility] =
    React.useState<boolean>(false);


  const {data: projectsMap, error, isLoading } = getGenerallyAvailableRepositories("Dgarc359");
  console.log("returned from hook", projectsMap);
  if(isLoading || !projectsMap) { return <div> loading </div> }
  if(error) { return <div> an error occured! </div> }


  return (
    <div
      id="project-root"
      className={"h-screen w-screen flex-col"}
      onKeyDown={(e) => {
        console.log(e.code);
        if (e.code === "Escape") {
          console.log("pressed escape");
          setLanguageVisibility(false);
        }
      }}
    >
      <Hero topLayerText="PROJ-" bottomLayerText="ECTS" color="bg-lime-400" />
      <div id="filters-section">
        <div>
          <div className="flex justify-center">
            <p
              className="hover:bg-slate-200 px-4 py-2 rounded-2xl w-auto font-sans font-semibold text-lg cursor-pointer select-none"
              onClick={() => {
                setLanguageVisibility((state) => !state);
              }}
            >
              Filters <FontAwesomeIcon icon={faFilter} />
            </p>
          </div>
        </div>
        {languageVisibility && (
          <div className={`flex justify-center my-4 gap-10`}>
            <div className="flex-col">
              <div className="mt-2 underline cursor-normal select-none">
                Languages
              </div>
              <ul
                className="justify-center grid"
                style={{
                  gridTemplateColumns: "repeat(2, 1fr)",
                }}
              >
                {languages.map((language) => (
                  <div key={language}>
                    <label
                      className="inline-block whitespace-nowrap"
                      htmlFor={language}
                    >
                      <input
                        checked={filter.language.has(language)}
                        type="checkbox"
                        onChange={(e) => {
                          console.log("checkbox changed", e.target.checked);

                          if (e.target.checked) {
                            setFilter((state) => {
                              const newLangs = state.language;
                              newLangs.add(language);
                              return { ...state, language: newLangs };
                            });
                          } else {
                            setFilter((state) => {
                              const newLangs = state.language;
                              newLangs.delete(language);
                              return { ...state, language: newLangs };
                            });
                          }
                        }}
                        name={language}
                        className="align-middle"
                      ></input>
                      <span className="justify-end p-2 rounded-2xl font-normal cursor-pointer select-none align-middle">
                        {language}
                      </span>
                    </label>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div id="projects" className="">
        <div className="flex justify-center gap-4 mt-2 font-bold text-4xl">
          {[...projectsMap.entries()].map(([repo, project]) => {
            if (
              // no filter exists no need to see if we want to display the project or not.
              filter.language.size === 0 ||
              [...filter.language].filter((lang) =>
                project.filterableMetadata.language.has(lang),
              ).length > 0
            ) {
              return (
                <ProjectCard
                  key={project.displayTitle + project.githubPayload}
                  href={project.href}
                  displayTitle={project.displayTitle}
                  description={project.description}
                  language={Array.from(project.filterableMetadata.language.values())[0] as any}
                  githubPayload={project.githubPayload}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
