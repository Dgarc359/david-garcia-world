"use client";
import React from "react";
import { languages, Filter, Project } from "../types";
import ProjectCard from "../components/project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { getRepoLanguages } from "../util";
import { Hero } from "../components/hero";

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState<Filter>({
    language: new Set(),
  });

  const [projectsMap, setProjectsMap] = React.useState<Map<string, Project>>(
    new Map([
      [
        "mini-rover",
        {
          account: "Dgarc359",
          displayTitle: "Mini Rover",
          description: "a small rover",
          filterableMetadata: {
            language: new Set(),
          },
          href: "/projects/mini-rover",
          githubPayload: {},
        },
      ],
      /*
    ["eddington", {
      account: "null-channel",
      displayTitle: "Eddington",
      description: "open source cloud docker lifecycle manager",
      filterableMetadata: {
        language: new Set(),
      },
      href: "/projects/eddington",
      githubPayload: {}
    }],
    */
    ["mastodon-post-feed", {
      account: "Dgarc359",
      displayTitle: "Mastodon Post Feed",
      description: "A feed which displays all the replies to a given mastodon post (check mini rover page for a live demo!)",
      filterableMetadata: {
        language: new Set(),
      },
      //href: "/projects/mastodon-post-feed",
      href: "http://blog.nameofthemist.com/mastodon-post-feed",
      githubPayload: {}
    }],
["todowheel", {
      account: "Dgarc359",
      displayTitle: "Todowheel",
      description: "Get a random todo based on different parameters",
      filterableMetadata: {
        language: new Set(),
      },
      //href: "/projects/mastodon-post-feed",
      href: "http://blog.nameofthemist.com/todowheel",
      githubPayload: {}
    }]

  ]))


  React.useEffect(() => {
    [...projectsMap.entries()].forEach(async ([repo, project]) => {
      const res = await getRepoLanguages(project.account, repo);
      console.log(JSON.stringify(res));
      const langSet = project.filterableMetadata.language;
      Object.keys(res).forEach((key: any) => {
        console.log("key", key);
        langSet.add(key);
      });

      setProjectsMap((state) => {
        const newState = new Map(state.entries());
        if (!newState.get(repo)) return state;
        const repoFromMap = newState.get(repo);
        repoFromMap!.filterableMetadata.language = langSet;
        repoFromMap!.githubPayload = res;
        return newState;
      });
    });
  }, []);

  const [languageVisibility, setLanguageVisibility] =
    React.useState<boolean>(false);

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
